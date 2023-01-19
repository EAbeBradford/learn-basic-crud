import { Controller, Get ,Post, Delete, Put } from '@nestjs/common';
import { CarService} from './car.service'

@Controller('car')
export class CarController {
    constructor (private carService: CarService)
    {}

    @Get()
    async getCars(){
        return this.carService.getCars();
    }

    @Get('/id')
    async getCarsById(){
        return this.carService.getCar();
    }

    @Post()
    async postCar(){
        return this.carService.postCarById();
    }

    @Delete()
    async deleteCarById(){
        return this.carService.deleteCarById();
    }
    
    @Put()
    async putCarById(){
        return this.carService.putCarById();
    }

}
