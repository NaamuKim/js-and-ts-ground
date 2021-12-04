export interface Card {
    att: number;
    hp: number;
    mine: boolean;
    field: boolean
    cost?: number;
    hero?: boolean;
}

export interface Player {
    hero: HTMLDivElement
    deck: HTMLDivElement
    field: HTMLDivElement
    cost: HTMLDivElement
    deckData: Sub[]
    heroData: Hero | null
    fieldData: Sub[]
    chosenCard: HTMLDivElement | null
    chosenCardData: Card | null
}

export class Sub implements Card {
    public att: number ;
    public hp: number;
    public field: boolean= false;
    public mine: boolean;
    public cost: number;
    constructor(mine:boolean) {
        this.mine=mine;
        this.att=Math.ceil(Math.random()*5);
        this.hp =Math.ceil(Math.random()*5);
        this.cost=Math.floor((this.att+ this.hp)/2);
    }

}

export class Hero implements Card{
    public att: number;
    public hp: number;
    public hero: boolean;
    public mine: boolean;
    public field: boolean;
    constructor(mine:boolean) {
        this.mine =mine;
        this.att=Math.ceil(Math.random()*2);
        this.hp=Math.ceil(Math.random()*5)+25;
        this.hero=true;
        this.field=true;
    }
}