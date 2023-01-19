import { Controller, Get, Query, Post, Param, Body, Delete, Put } from '@nestjs/common';
import { CarService} from './car.service';
import { CarDto } from './car.dto';

@Controller('car')
export class CarController {
    constructor (private carService: CarService)
    {}

    @Get()
    public async getCars(){
        return this.carService.getCars();
    }

    @Get(':id')
    public async asyncgetCarsById(@Param('id') id: number){
        const result  = await this.carService.getCarById(id);
        // try {
        //     return result;
        // } catch(exeption e){
        //     console.log("error getting by id");
        // }
        return result;
    }

    @Post()
    public  postCar(@Body() car:CarDto){
        return this.carService.postCar(car);
    }

    @Delete(':id')
    public async deleteCarById(@Param('id') id: number){
        this.carService.deleteCarById(id);
    }

    @Put(':id')
    public async putCarById(@Param('id') id: number, @Query() query){
        const propertyName = query.property_name;
        const propertyValue = query.property_value;
        return this.carService.putCarById(id, propertyName, propertyValue);
    }
}
