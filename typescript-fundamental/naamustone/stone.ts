interface Card {
    att: number;
    hp: number;
    mine: boolean;
    field: boolean
    cost?: number;
    hero?: boolean;
}

class Hero implements Card{
    public att: number;
    public hp: number;
    private hero: boolean;
    public mine: boolean;
    private field: boolean;
    constructor(mine:boolean) {
        this.mine =mine;
        this.att=Math.ceil(Math.random()*2);
        this.hp=Math.ceil(Math.random()*5)+25;
        this.hero=true;
        this.field=true;
    }
}

class Sub implements Card{
    public att: number;
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
new Hero(true);

interface Player {
    hero: HTMLDivElement
    deck: HTMLDivElement
    field: HTMLDivElement
    cost: HTMLDivElement
    deckData: Card[]
    heroData: Card | null
    fieldData: Card[]
    chosenCard: HTMLDivElement | null
    chosenCardData: Card | null
}

const opponent={
    hero: document.getElementById('rival-hero'),
    deck: document.getElementById('rival-deck'),
    field: document.getElementById('rival-cards'),
    cost: document.getElementById('rival-cost'),
    deckData:[],
    heroData: null,
    fieldData: [],
    chosenCard:null,
    chosenCardData: null,
}

const me={
    hero: document.getElementById('my-hero'),
    deck: document.getElementById('my-deck'),
    field: document.getElementById('my-cards'),
    cost: document.getElementById('my-cost'),
    deckData:[],
    heroData: null,
    fieldData: [],
    chosenCard:null,
    chosenCardData: null,
}