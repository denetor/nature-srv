import { Map } from '../map/map.class';

export class World {
    map: Map;


    constructor() {
        this.map = new Map(10, 10);
    }


    /**
     * String representation
     */
    toString() {
        return this.map.toString();
    }


    /**
     * Array of string representation
     */
    toLines() {
        return this.map.toLines();
    }
}
