import {Card, Player} from "./types";

class Hero implements Card{
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

function isSub(data:Card):data is Sub{
    return !!data.cost;
}
function isHero(data:Card): data is Hero {
    return !!data.hero;
}

new Hero(true);



const opponent: Player={
    hero: document.getElementById('rival-hero')as HTMLDivElement,
    deck: document.getElementById('rival-deck')as HTMLDivElement,
    field: document.getElementById('rival-cards')as HTMLDivElement,
    cost: document.getElementById('rival-cost')as HTMLDivElement,
    deckData:[],
    heroData: null,
    fieldData: [],
    chosenCard:null,
    chosenCardData: null,
}

const me: Player={
    hero: document.getElementById('my-hero')as HTMLDivElement,
    deck: document.getElementById('my-deck')as HTMLDivElement,
    field: document.getElementById('my-cards')as HTMLDivElement,
    cost: document.getElementById('my-cost')as HTMLDivElement,
    deckData:[],
    heroData: null,
    fieldData: [],
    chosenCard:null,
    chosenCardData: null,
}

const turnButton = document.getElementById('turn-btn') as HTMLButtonElement;
let myTurn = true;

function initiate(){
    [opponent, me].forEach((item)=>{
        item.deckData= [];
        item.heroData= null;
        item.fieldData=[];
        item.chosenCard= null;
        item.chosenCardData=null;
    });
    createDeck({mine: true, count: 5});
    createDeck({mine: false, count: 5});
    createHero({mine:true});
    createHero({mine:false});
    redrawScreen({mine:true});
    redrawScreen({mine:false});
}
initiate();

function createDeck({mine,count}:{mine: boolean, count: number}){
    const player=mine ? me: opponent;
    for(let i:number=0; i<count; i++){
        player.deckData.push(new Sub(mine));
    }
    redrawDeck(player);
}

function createHero({mine}:{mine: boolean}){
        const player = mine ? me : opponent;
        player.heroData = new Hero(mine);
        connectCardDOM({ data: player.heroData, DOM: player.hero, hero: true})
}

interface A {
    data: Card,
    DOM: HTMLElement,
    hero?:boolean
}

function connectCardDOM({data,DOM,hero=false}:A){
    const cardEl= document.querySelector('.card-hidden .card')!.cloneNode(true) as HTMLDivElement;
    cardEl.querySelector('.card-att')!.textContent=String(data.att);
    cardEl.querySelector('.card-hp')!.textContent= String(data.hp);
    if(hero){
        (cardEl.querySelector(".card-cost") as HTMLDivElement).style.display='none';
        const name=document.createElement('div');
        name.textContent= '영웅';
        cardEl.appendChild(name);
    } else {
        cardEl.querySelector('.card-cost')!.textContent=String(data.cost);
    }

    cardEl.addEventListener('click',()=>{
        if(isSub(data)&&data.mine===myTurn&&!data.field){
            if(!deckToField({data})){
                createDeck({mine: myTurn, count:1})
            }
        }
        turnAction({cardEl,data})
    });
    DOM.appendChild(cardEl);
}

function redrawScreen({mine}: {mine:boolean}) {
    const player =mine? me: opponent;
    redrawHero(player);
}

function redrawHero(target: Player){
    if(!target.heroData){
        throw new Error('heroData가 없습니다');
    }
    target.hero.innerHTML="";
    connectCardDOM({data: target.heroData, DOM: target.hero, hero: true})
}

function redrawDeck(target: Player){
    target.deck.innerHTML="";
    target.deckData.forEach((data)=>{
        connectCardDOM({data, DOM: target.deck, hero: false})
    })
}

function redrawField(target: Player){
    target.field.innerHTML="";
    target.fieldData.forEach(function(data) {
        connectCardDOM({data, DOM: target.field});
    });
}
function deckToField({data}: {data:Sub}):boolean {
    const target =myTurn ? me: opponent;
    const currentCost =Number(target.cost.textContent);
    if(currentCost<data.cost){
        alert('코스트가 모자릅니다.');
        return true;
    }
    data.field=true;
    const idx=target.deckData.indexOf(data);
    target.deckData.splice(idx,1);
    target.fieldData.push(data);
    redrawField(target);
    redrawDeck(target);
    target.cost.textContent=String(currentCost-data.cost);
    return false;
}

function turnAction({cardEl,data}:{cardEl:HTMLDivElement,data:Card}){
    const team = myTurn? me: opponent;
    const enemy= myTurn ? opponent : me;
    if(cardEl.classList.contains('card-turnover')){
        return;
    }
    const enemyCard= myTurn ? !data.mine : data.mine;
    if(enemyCard && team.chosenCardData){
        data.hp=data.hp-team.chosenCardData.att;
        if(data.hp<=0) {
            if(isSub(data)){
                const index=enemy.fieldData.indexOf(data);
                enemy.fieldData.splice(index,1);
            } else {
                alert('승리했습니다!');
                initiate();
            }
        }
        redrawScreen({mine: !myTurn});
        if(team.chosenCard){
            team.chosenCard.classList.remove('card-selected');
            team.chosenCard.classList.add('card-turnover');
        }
        team.chosenCard = null;
        team.chosenCardData = null;
        return;
    } else if(enemyCard){
        return;
    }
    if (data.field) { // 카드가 필드에 있으면
        //  영웅 부모와 필드카드의 부모가 다르기때문에 document에서 모든 .card를 검색한다
        // 카드.parentNode.querySelectorAll('.card').forEach(function (card) {
        document.querySelectorAll('.card').forEach(function (card) {
            card.classList.remove('card-selected');
        });
        console.log(cardEl);
        cardEl.classList.add('card-selected');
        team.chosenCard = cardEl;
        team.chosenCardData = data;
    }
}

turnButton.addEventListener('click', function() {
    const target = myTurn ? me : opponent;
    document.getElementById('rival')!.classList.toggle('turn');
    document.getElementById('my')!.classList.toggle('turn');
    redrawField(target);
    redrawHero(target);
    myTurn = !myTurn; // 턴을 넘기는 코드
    if (myTurn) {
        me.cost.textContent = '10';
    } else {
        opponent.cost.textContent = '10';
    }
});