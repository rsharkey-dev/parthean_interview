import yahooFinance from "yahoo-finance2"
import fetch from 'node-fetch';

export class GetSharpeRatioInput {
    portfolio: StockData[];
    years: number = 5;
    totalShares: number;
}

export class GetSharpeRatioOutput {
    sharpeRatio: number;

    constructor(data: any) {
        this.sharpeRatio = data.sharpeRatio;
    }
}

interface StockInfo {
    date: string;
    high: number;
    volume: number;
    open: number;
    low: number;
    close: number;
    adjclose: number;
}

export class StockData {
    ticker: string;
    shares: number;
    priceHistory: StockInfo[];
    portfolioWeight: number;
    annualReturns: number[];

    constructor(ticker: string, shares: number) {
        this.ticker = ticker;
        this.shares = shares;
    }

}

type QueryOptions = {
    period1: Date | string | number;
    period2?: Date | string | number;
    useYfid?: boolean;
    interval?: "1m" | "2m" | "5m" | "15m" | "30m" | "60m" | "90m" | "1h" | "1d" | "5d" | "1wk" | "1mo" | "3mo";
    includePrePost?: boolean;
    events?: string;
    lang?: string;
    return?: "array" | "object";
};





export async function calculateSharpeRatio(input: GetSharpeRatioInput): Promise<GetSharpeRatioOutput> {

    await retrieveStockHistory(input.portfolio, input.years)
    const portfolioAvgReturn = calculatePortfolioAvgReturn(input.portfolio, input.totalShares, input.years)
    const standardDevOfPortfolio = calculateStandardDevOfPortfolio(input.portfolio, input.years, portfolioAvgReturn)
    const riskFreeReturn = await getRiskFreeRateFromYahoo(input.years)
    const sharpeRatio = (portfolioAvgReturn - riskFreeReturn) / standardDevOfPortfolio

    var sharpeRatioOutput = new GetSharpeRatioOutput({ sharpeRatio: sharpeRatio });

    return sharpeRatioOutput

}


function calculateAverageAnnualReturn(stockData: StockData, years: number): number {
    const stockHistory = stockData.priceHistory
    stockData.annualReturns = []
    if (stockHistory.length < 2) {
        throw new Error('Not enough data points to calculate returns.');
    }

    let i: number = stockHistory.length - 1

    while (i >= 251) {
        var annualReturn = ((stockHistory[i].adjclose - stockHistory[i - 251].adjclose) / stockHistory[i - 251].adjclose) * 100;
        stockData.annualReturns.push(annualReturn)
        i -= 251;
    }

    const startPrice = stockHistory[0].adjclose;
    const endPrice = stockHistory[stockHistory.length - 1].adjclose;


    const totalReturn = ((endPrice - startPrice) / startPrice) * 100;

    return totalReturn / years;
}

async function retrieveStockHistory(portfolio: StockData[], years: number) {
    const endDate = new Date();
    const startDate = new Date(endDate);

    startDate.setFullYear(endDate.getFullYear() - years);

    const queryOptions: QueryOptions = {
        period1: startDate,
        interval: "1d",
    };


    const promises = portfolio.map(async function (value) {
        const query = value.ticker;

        const result = await yahooFinance._chart(query, queryOptions);
        value.priceHistory = result.quotes;


    });

    await Promise.all(promises);

}


async function getRiskFreeRateFromYahoo(years: number): Promise<number> {
    var url = 'https://query1.finance.yahoo.com/v8/finance/chart/%5EFVX'
    if (years > 7) {
        url = 'https://query1.finance.yahoo.com/v8/finance/chart/%5ETNX'
    }
    const response = await fetch(url);

    const data = await response.json();

    return data.chart.result[0].meta.regularMarketPrice;
}

function calculatePortfolioAvgReturn(portfolio: StockData[], totalShares: number, years: number): number {
    var weightedAvgReturn = 0;
    portfolio.forEach((stockData: StockData) => {
        var avgReturn = calculateAverageAnnualReturn(stockData, years)
        stockData.portfolioWeight = stockData.shares / totalShares
        weightedAvgReturn += (avgReturn * stockData.portfolioWeight)
    });

    return weightedAvgReturn

}

function calculateStandardDevOfPortfolio(portfolio: StockData[], years: number, avgReturn: number) {
    let i = 0;
    var sumOfReturns = 0;
    while (i < years - 1) {
        var weightedActualReturn = 0;
        portfolio.forEach((stockData: StockData) => {
            weightedActualReturn += stockData.annualReturns[i] * stockData.portfolioWeight
        });
        sumOfReturns += Math.pow(weightedActualReturn - avgReturn, 2)
        i += 1;
    }

    return Math.sqrt(sumOfReturns / years)
}