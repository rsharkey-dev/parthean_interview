import { GetSharpeRatioInput, calculateSharpeRatio, GetSharpeRatioOutput, StockData } from "../models/sharpe"
import { Request, Response, NextFunction } from "express"


export async function get_sharpe_ratio(req: Request, res: Response) {
    var sharpeRatioInput = new GetSharpeRatioInput();
    var portfolio: StockData[] = []
    var totalShares = 0;


    Object.entries(req.query).forEach(([key, value]: [string, any]) => {
        // add check if valid stock ticker
        if (key == "years") {
            sharpeRatioInput.years = parseInt(value);
        }
        else {

            totalShares += parseInt(value);
            var portfolioData = new StockData(key, parseInt(value));
            portfolio.push(portfolioData)
        }
    });


    sharpeRatioInput.portfolio = portfolio;
    sharpeRatioInput.totalShares = totalShares;

    var output = await calculateSharpeRatio(sharpeRatioInput)

    res.send(output);

}



