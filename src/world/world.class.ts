import { Map } from '../map/map.class';
import { Creature } from '../creatures/creature.class';
import { Sheep } from '../creatures/sheep.class';

export class World {
    map: Map;
    creatures: Creature[];


    constructor() {
        this.map = new Map(10, 10);
        this.creatures = [];
        // create some test creatures
        this.creatures.push(new Sheep(6, 6));
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
        let lines = [];
        let s = '';
        for (let y=0; y<this.map.sizeY; y++) {
            s = '';
            for (let x=0; x<this.map.sizeX; x++) {
                s += this.map.cells[y*this.map.sizeY + x].getSymbol();
                s += this.getCreatureSymbol(x, y) === null ? this.map.cells[y*this.map.sizeY + x].getSymbol() : this.getCreatureSymbol(x, y);
                s += this.map.cells[y*this.map.sizeY + x].getSymbol();
                s += '|';
            }
            lines.push(s);
        }
        return lines;
    }


    /**
     * Returns the symbol of the creature at a certain coordinates pair.
     *
     * @param x
     * @param y
     */
    getCreatureSymbol(x: number, y:number) {
        let s = null;
        this.creatures.forEach(creature => {
            if (creature.x === x && creature.y === y) {
                console.log(creature);
                s = creature.symbol;
            }
        });
        return s;
    }
}
