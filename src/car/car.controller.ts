import { Controller } from '@nestjs/common';
import { CarService} from './car.service'

@Controller('car')
export class CarController {
    constructor (private carService: CarService)
    {}

    async getCars(){
        this.carService.getCars();
    }
}
