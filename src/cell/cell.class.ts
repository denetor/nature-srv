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


    /**
     * Returns cell symbol, basing on cell type
     */
    getSymbol() {
        return this.terrain === 'grass' ? '_' : '.';
    }
}
