/*import Bingo from "./Bingo";*/
import CardsModel from "./CardsModel";
export default class PlayersModel{

    qtdCards: number;
    nome: string;
    cards: any[];

    constructor(nome: string, qtd: number){
        this.qtdCards = qtd;
        this.nome = nome;
        this.cards = [];
    }

    initCards(qtd: number){
        for(let i=0; i<qtd; i++){
            const card = new CardsModel();
            card.createCard();
            this.cards.push(card)
            console.log("Players Model " + this.cards)
        }     
    }
}