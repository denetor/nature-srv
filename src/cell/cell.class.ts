export class Cell {
    terrain: string;


    constructor(terrain) {
        this.terrain = terrain;
    }


    /**
     * String representation
     */
    toString() {
        return this.terrain === 'grass' ? '___' : '...';
    }
}
