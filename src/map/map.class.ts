import { Cell } from '../cell/cell.class';

export class Map {
    sizeX: number;
    sizeY: number;
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
        this.sizeY = y;
        this.sizeX = x;

        for (let iy=0; iy<y; iy++) {
            for (let ix=0; ix<x; ix++) {
                this.cells.push(new Cell(ix+iy>3 ? 'grass' : 'sea'));
            }
        }

    }


    /**
     * String representation
     */
    toString() {
        let s = '';
        for (let y=0; y<this.sizeY; y++) {
            for (let x=0; x<this.sizeX; x++) {
                s += this.cells[y*this.sizeY + x].toString();
            }
            s += '\n';
        }
        return s;
    }


    /**
     * Array of string representation
     */
    toLines() {
        let lines = [];
        let s = '';
        for (let y=0; y<this.sizeY; y++) {
            s = '';
            for (let x=0; x<this.sizeX; x++) {
                s += this.cells[y*this.sizeY + x].toString();
            }
            lines.push(s);
        }
        return lines;
    }
}
