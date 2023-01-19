import { Injectable } from '@nestjs/common';
import { CARS }  from './cars.mock';

@Injectable()

export class CarService {
    private cars = CARS;

    public async getCars(){
        return this.cars;  
    }

    public async postCar(car){
        return;
    }

    public async getCarById(id){
        return;
    }

    public async deleteCarById(id){
        return;
    }

    public async putCarById(id){
        return;
    }
}
