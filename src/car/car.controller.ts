import { Controller, Get, Query, Post, Param, Body, Delete, Put } from '@nestjs/common';
import { CarService} from './car.service';
import { CarDto } from './car.dto';

@Controller('car')
export class CarController {
    constructor (private carService: CarService)
    {}

    @Get()
    public getCars(){
        return this.carService.getCars();
    }

    @Get(':id')
    public getCarsById(@Param('id') id: number){
        return this.carService.getCarById(id);
    }

    @Post()
    public postCar(@Body() car:CarDto){
        return this.carService.postCar(car);
    }

    @Delete()
    public deleteCarById(@Param('id') id: number){
        this.carService.deleteCarById(id);
    }

    @Put()
    public putCarById(@Param('id') id: number, @Query() query){
        const propertyName = query.property_name;
        const propertyValue = query.property_value;
        return this.carService.putCarById(id, propertyName, propertyValue);
    }
}
