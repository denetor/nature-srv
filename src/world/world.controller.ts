import { Controller, Get } from '@nestjs/common';
import { World } from './world.class';

@Controller('world')
export class WorldController {
    world: World;


    constructor() {
        this.world = new World();
    }


    @Get('status')
    status() {
        return {
            map: {},
            creatures: {},
            toLines: this.world.toLines(),
        }
    }
}
