export class Creature {
    x: number;
    y: number;
    creatureType: string;
    foodType: string;
    favouriteHabitat: string;
    symbol: string;
    sleep: number;                  // sleep status. When 0 the Creature must sleep
    fed: number;                    // fed status. When 0 the Creature dies starving

    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.creatureType = 'generic';
        this.foodType = null;
        this.favouriteHabitat = null;
        this.symbol = 'C';
        this.sleep = 100;
        this.fed = 100;
    }
}
