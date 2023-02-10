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
                    <td class="bingo-number">{{ B[0] }}</td>
                    <td class="bingo-number">{{ I[0] }}</td>
                    <td class="bingo-number">{{ N[0] }}</td>
                    <td class="bingo-number">{{ G[0] }}</td>
                    <td class="bingo-number">{{ O[0] }}</td>
                </tr>
                <tr>
                    <td class="bingo-number">{{ B[1] }}</td>
                    <td class="bingo-number">{{ I[1] }}</td>
                    <td class="bingo-number">{{ N[1] }}</td>
                    <td class="bingo-number">{{ G[1] }}</td>
                    <td class="bingo-number">{{ O[1] }}</td>
                </tr>
                <tr>
                    <td class="bingo-number">{{ B[2] }}</td>
                    <td class="bingo-number">{{ I[2] }}</td>
                    <td class="bingo-number">X</td>
                    <td class="bingo-number">{{ G[2] }}</td>
                    <td class="bingo-number">{{ O[2] }}</td>
                </tr>
                <tr>
                    <td class="bingo-number">{{ B[3] }}</td>
                    <td class="bingo-number">{{ I[3] }}</td>
                    <td class="bingo-number">{{ N[3] }}</td>
                    <td class="bingo-number">{{ G[3] }}</td>
                    <td class="bingo-number">{{ O[3] }}</td>
                </tr>
                <tr>
                    <td class="bingo-number">{{ B[4] }}</td>
                    <td class="bingo-number">{{ I[4] }}</td>
                    <td class="bingo-number">{{ N[4] }}</td>
                    <td class="bingo-number">{{ G[4] }}</td>
                    <td class="bingo-number">{{ O[4] }}</td>
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
    cardPlayer1: [],
    sortedLetter: [],
    sortedNumber: [],
    B: [],
    I: [],
    N: [],
    G: [],
    O: []
  },
  
    data() {
        return {
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
