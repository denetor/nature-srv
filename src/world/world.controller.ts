import { Controller } from '@nestjs/common';
import { Map } from '../map/map.class';

@Controller('world')
export class WorldController {
    map: Map;


    constructor() {
        this.map = new Map(10, 10);
    }
}
