import { GetSharpeRatioInput, calculateSharpeRatio, GetSharpeRatioOutput, StockData } from "../models/sharpe"
import { Request, Response, } from "express"
import * as tickerData from "../consts/validStock.json";




export async function get_sharpe_ratio(req: Request, res: Response) {
    var sharpeRatioInput = new GetSharpeRatioInput();
    var portfolio: StockData[] = []
    var totalShares = 0;
    let errorsent = false;


    Object.entries(req.query).forEach(([key, value]: [string, any]) => {
        if (key == "years") {
            sharpeRatioInput.years = parseInt(value);
        }
        else {
            if (!(key in tickerData)) {
                res.status(400).send({ error: `Ticker ${key} not found` });
                errorsent = true;
                return;
            }

            totalShares += parseInt(value);
            var portfolioData = new StockData(key, parseInt(value));
            portfolio.push(portfolioData)
        }
    });
    if (errorsent) {
        return;
    }

    sharpeRatioInput.portfolio = portfolio;
    sharpeRatioInput.totalShares = totalShares;

    var output = await calculateSharpeRatio(sharpeRatioInput)

    res.status(200).send(output);

}



