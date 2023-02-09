export default class BingoModel {
    sortLetterAndNumber: string;
    
    constructor(sortLetterAndNumber: string) {
        this.sortLetterAndNumber = sortLetterAndNumber;
    }

    sort() {
        const allLetter = "BINGO";
        const randomNumberToLetter = Math.floor(Math.random() * 5);
        this.sortLetterAndNumber = (allLetter.substring(randomNumberToLetter+1,randomNumberToLetter) + (Math.floor(Math.random() * 99)));
    }

    getSort() {
        return this.sortLetterAndNumber;
    }

    set setSortLetterAndNumber(sortLetterAndNumber: string){
        this.sortLetterAndNumber = sortLetterAndNumber;
        console.log("DEU BOA O SETTTER" + this.sortLetterAndNumber);
    }
}