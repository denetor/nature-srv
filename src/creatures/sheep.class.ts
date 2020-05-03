import { Creature } from './creature.class';

export class Sheep extends Creature {


    constructor(x, y) {
        super(x, y);
        this.creatureType = 'sheep';
        this.foodType = 'grass';
        this.favouriteHabitat = 'grass';
        this.symbol = 'S';
    }
}
