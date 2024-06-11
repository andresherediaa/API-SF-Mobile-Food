import { Request, Response, NextFunction } from 'express';

export class FoodValidators {
    static nearby(req: Request, res: Response, next: NextFunction) {
        const { latitude, longitude, radius, number_trucks } = req.query;

        // check query params
        if (!latitude || isNaN(Number(latitude))) {
            return res.status(400).json({
                error: "Latitude is required and must be a valid number"
            });
        }

        if (!longitude || isNaN(Number(longitude))) {
            return res.status(400).json({
                error: "Longitude is required and must be a valid number"
            });
        }

        next();
    }
}
