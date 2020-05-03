import { Map } from '../map/map.class';

export class World {
    map: Map;


    constructor() {
        this.map = new Map(10, 10);
        this.map.toString();
    }


    /**
     * String representation
     */
    toString() {
        return this.map.toString();
    }
}
