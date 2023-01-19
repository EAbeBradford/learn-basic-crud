import { Injectable, HttpException } from '@nestjs/common';
import { resolve } from 'path';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { ICar } from './interfaces/car.interface';
import { CarDto } from './car.dto';

const carProjection = {
    __v: false,
    _id: false,
}
@Injectable()
export class CarService {

    constructor(@InjectModel('car') private readonly carModel: Model<ICar>,) { }

    public getCars():Promise<CarDto[]> {
        const cars = this.carModel.find({}, carProjection).exec();
        if (!cars || !cars[0]) {
            throw new HttpException('Not Found', 404);
        }
        return cars;
    }

    public async postCar(newCar: CarDto) {
        const car = await new this.carModel(newCar);
        return car.save();
    }


    public async getCarById(id: number): Promise<CarDto> {
        const car = this.carModel.findOne({ id }, carProjection).exec();

        if (!car) {
            throw new HttpException('Not Found', 404);
        }
        return car;
    }

    public async deleteCarById(id: number): Promise<CarDto> {
        const car = this.carModel.findOne({ id }, carProjection).exec();

        const car1 = await this.carModel.deleteOne({ id }).exec();

        if (car1.deletedCount === 0 || !car || !car[0]) {
            throw new HttpException('Not Found', 404);
        }
        return car;

    }

    public async putCarById(
        id: number,
        propertyName: string,
        propertyValue: string,
    ): Promise<CarDto> {
        const car = this.carModel.findOneAndUpdate({ id }, {
            [propertyName]: propertyValue,
        },).exec();

        if (!car) {
            throw new HttpException('Not Found', 404);
        }
        return car;

    }
}
