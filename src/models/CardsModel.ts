export default class CardsModel {
    B = [];
    I = [];
    N = [];
    G = [];
    O = [];

    constructor() {
        this.B = [];
        this.I = [];
        this.N = [];
        this.G = [];
        this.O = [];
    }

    createCard() {
        const qtNumberForColumn = 5;
        const qtTotalNumber = 75;
        if (qtTotalNumber % qtNumberForColumn === 0) {

            const count = qtTotalNumber / qtNumberForColumn;
            let max = count + 1;
            let min = count - count + 1;
            this.randomNumber(this.B, max, min);

            max = count * 2 + 1;
            min = count * 2 - count + 1;
            this.randomNumber(this.I, max, min);

            max = count * 3 + 1;
            min = count * 3 - count + 1;
            this.randomNumber(this.N, max, min);
            this.witheSpace(this.N)

            max = count * 4 + 1;
            min = count * 4 - count + 1;
            this.randomNumber(this.G, max, min);

            max = count * 5 + 1;
            min = count * 5 - count + 1;
            this.randomNumber(this.O, max, min);

            console.log("CHAMOU Cards Model " + count)
        }
    }

    randomNumber(array: number[], max: number, min: number) {
        for (let i = 0; i < 5; i++) {
            const count = Math.floor(Math.random() * (max - min) + min);
            if (array.indexOf(count) >= 0) {
                i--;
            } else {
                array.push(count)
            }
        }
    }

    witheSpace(array: null[]) {
        array[2] = null;
    }

}