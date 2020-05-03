import { Cell } from '../cell/cell.class';

export class Map {
    cells: Cell[];


    /**
     * Create a Map of x*y size
     * First version, adds some water
     *
     * @param x width
     * @param y height
     */
    constructor(x: number, y: number) {
        this.cells = [];

        for (let iy=0; iy<y; iy++) {
            for (let ix=0; ix<x; ix++) {
                this.cells.push(new Cell(ix+iy>3 ? 'grass' : 'sea'));
            }
        }
    }
}
