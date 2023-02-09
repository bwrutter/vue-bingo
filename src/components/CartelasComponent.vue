<template>
    <div class="u-wrapper" id="bingo_template">
        <table class="bingo">
            <thead>
                <tr>
                    <th class="bingo-letter">B</th>
                    <th class="bingo-letter">I</th>
                    <th class="bingo-letter">N</th>
                    <th class="bingo-letter">G</th>
                    <th class="bingo-letter">O</th>
                </tr>
            </thead>
            <tbody class="bingo-set">
                <tr>
                    <td class="bingo-number">{{ cardPlayer1[1] }}</td>
                    <td class="bingo-number">{{ cardPlayer1[2] }}</td>
                    <td class="bingo-number">{{ cardPlayer1[3] }}</td>
                    <td class="bingo-number">{{ cardPlayer1[4] }}</td>
                    <td class="bingo-number">{{ cardPlayer1[5] }}</td>
                </tr>
                <tr>
                    <td class="bingo-number">{{ cardPlayer1[6] }}</td>
                    <td class="bingo-number">{{ cardPlayer1[7] }}</td>
                    <td class="bingo-number">{{ cardPlayer1[8] }}</td>
                    <td class="bingo-number">{{ cardPlayer1[9] }}</td>
                    <td class="bingo-number">{{ cardPlayer1[10] }}</td>
                </tr>
                <tr>
                    <td class="bingo-number">{{ cardPlayer1[11] }}</td>
                    <td class="bingo-number">{{ cardPlayer1[12] }}</td>
                    <td class="bingo-number">X</td>
                    <td class="bingo-number">{{ cardPlayer1[13] }}</td>
                    <td class="bingo-number">{{ cardPlayer1[14] }}</td>
                </tr>
                <tr>
                    <td class="bingo-number">{{ cardPlayer1[15] }}</td>
                    <td class="bingo-number">{{ cardPlayer1[16] }}</td>
                    <td class="bingo-number">{{ cardPlayer1[17] }}</td>
                    <td class="bingo-number">{{ cardPlayer1[18] }}</td>
                    <td class="bingo-number">{{ cardPlayer1[19] }}</td>
                </tr>
                <tr>
                    <td class="bingo-number">{{ cardPlayer1[20] }}</td>
                    <td class="bingo-number">{{ cardPlayer1[21] }}</td>
                    <td class="bingo-number">{{ cardPlayer1[22] }}</td>
                    <td class="bingo-number">{{ cardPlayer1[23] }}</td>
                    <td class="bingo-number">{{ cardPlayer1[24] }}</td>
                </tr>
            </tbody>
        </table>
    </div>

</template>
<script>
/*import CardsModel from '../models/CardsModel.ts';
import BingoComponent from './BingoComponent.vue'*/

export default {

  name: "CartelasComponent",
  props: {
    cardPlayer1: []
  },
  
    data() {
        return {
            B: [],
            I: [],
            N: [],
            G: [],
            O: [],
        }
    },

    components: {
    },

    methods: {
 
    }

}

</script>

<style scoped>
* {
    box-sizing: border-box;
}

body {
    color: #333;
}

.u-hidden {
    display: none;
}

.u-wrapper {
    position: relative;
    display: inline-block;
    margin: 10px;
    z-index: 1;
}

.bingo {
    table-layout: fixed;
    width: 270px;
}

.bingo-letter {
    padding: 5px 0;
    font-family: 'sans-serif';
    font-size: 20px;
}

.bingo-number {
    padding: auto;
    height: 45px;
    border: 3px solid #464646;
    font-size: 24px;
    font-family: 'sans-serif';
    text-align: center;
}
</style>
