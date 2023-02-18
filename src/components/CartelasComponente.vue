<template>
    <div class="u-wrapper" id="bingo_template">
        <table class="bingo">
            <div v-if="ganhei" width="20px"> BINGOOOO!</div>
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
                    <td :class="getNumberClass(B[0])">{{ B[0] }}</td>
                    <td :class="getNumberClass(I[0])">{{ I[0] }}</td>
                    <td :class="getNumberClass(N[0])">{{ N[0] }}</td>
                    <td :class="getNumberClass(G[0])">{{ G[0] }}</td>
                    <td :class="getNumberClass(O[0])">{{ O[0] }}</td>
                </tr>
                <tr>
                    <td :class="getNumberClass(B[1])">{{ B[1] }}</td>
                    <td :class="getNumberClass(I[1])">{{ I[1] }}</td>
                    <td :class="getNumberClass(N[1])">{{ N[1] }}</td>
                    <td :class="getNumberClass(G[1])">{{ G[1] }}</td>
                    <td :class="getNumberClass(O[1])">{{ O[1] }}</td>
                </tr>
                <tr>
                    <td :class="getNumberClass(B[2])">{{ B[2] }}</td>
                    <td :class="getNumberClass(I[2])">{{ I[2] }}</td>
                    <td class="bingo-number">X</td>
                    <td :class="getNumberClass(G[2])">{{ G[2] }}</td>
                    <td :class="getNumberClass(O[2])">{{ O[2] }}</td>
                </tr>
                <tr>
                    <td :class="getNumberClass(B[3])">{{ B[3] }}</td>
                    <td :class="getNumberClass(I[3])">{{ I[3] }}</td>
                    <td :class="getNumberClass(N[3])">{{ N[3] }}</td>
                    <td :class="getNumberClass(G[3])">{{ G[3] }}</td>
                    <td :class="getNumberClass(O[3])">{{ O[3] }}</td>
                </tr>
                <tr>
                    <td :class="getNumberClass(B[4])">{{ B[4] }}</td>
                    <td :class="getNumberClass(I[4])">{{ I[4] }}</td>
                    <td :class="getNumberClass(N[4])">{{ N[4] }}</td>
                    <td :class="getNumberClass(G[4])">{{ G[4] }}</td>
                    <td :class="getNumberClass(O[4])">{{ O[4] }}</td>
                </tr>
            </tbody>
        </table>
    </div>

</template>
<script>
import { sortearXPosicoes } from './randomizer'

export default {

    name: "CartelasComponent",
    props: {
        posicoesSorteadas: [],
        todasPosicoes: [],
    },

    data() {
        return {
            B: [],
            I: [],
            N: [],
            G: [],
            O: []
        }
    },
    computed: {
        numeros() {
            return [...this.B, ...this.I, ...this.N, ...this.G, ...this.O]
        },
        ganhei() {
            const numerosAcerto = this.numeros.filter(n => this.posicoesSorteadas.includes(n))
            if (numerosAcerto.length >= 25) {
                return true
            } else {
            return false
        }
        }
    },

    methods: {
        getNumberClass(numero) {
            if (this.posicoesSorteadas.includes(numero)) {
                return 'bingo-number-sorteado'
            }
            return 'bingo-number'
        },
        gerarNumerosAleatorios() {
            this.B = sortearXPosicoes(this.todasPosicoes[0], 5)
            this.I = sortearXPosicoes(this.todasPosicoes[1], 5)
            this.N = sortearXPosicoes(this.todasPosicoes[2], 5)
            this.G = sortearXPosicoes(this.todasPosicoes[3], 5)
            this.O = sortearXPosicoes(this.todasPosicoes[4], 5)
            this.N[2][2] = 'x'

        },
    },
    mounted() {
        this.gerarNumerosAleatorios()
    },
    watch: {
    ganhei(ganhei, ) {
      if (ganhei) {
        this.$emit("ganhou")
      }
    }
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

.bingo-number-sorteado {
    padding: auto;
    height: 45px;
    border: 3px solid #464646;
    background-color: red;
    font-size: 24px;
    font-family: 'sans-serif';
    text-align: center;
}
</style>
