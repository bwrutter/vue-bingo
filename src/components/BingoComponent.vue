<template>
  <v-app id="inspire" style="background-color:#F6776E">
    <v-main style="background-color:#F6776E">
      <div>
        <v-img alt="bingo" src="../assets/bingo.png" style="max-width: 250px; padding: 10px; margin: auto;"> </v-img>
      </div>
      <!--<div>
        {{ posicoesDisponiveis }}
      </div>-->
      <div class="formulario" v-if="!havePlayer">
        <v-form ref="form" v-model="valid" lazy-validation>
          <v-text-field v-model="player1" :rules="[v => (!!v) || 'Nome é obrigatório!']" label="Nome do jogador 1"
            required></v-text-field>
          <v-text-field v-model="player2" label="Nome do jogador 2 ou nome aleatório" required></v-text-field>
          <v-text-field v-model="numberCards" :rules="[v => !!v || 'Quantidade de cartelas é obrigatória!']"
            label="Quantidade de cartelas" required></v-text-field>
          <v-btn color="success" class="mr-4" @click="register">Jogar</v-btn>
        </v-form>
      </div>
      <v-container class="container" v-if="havePlayer">
        <v-row>
          <v-col>
            <div class="players">{{ player1 }}</div>
            <v-sheet class="columsPlayers" color="#F4F775">
                <CartelasComponent :posicoesSorteadas="posicoesSorteadas" :todasPosicoes="todasPosicoes" @ganhou="encerrarOJogo(1)" />
            </v-sheet>
            <v-sheet class="columsPlayers" color="#F4F775">
                <CartelasComponent :posicoesSorteadas="posicoesSorteadas" :todasPosicoes="todasPosicoes" @ganhou="encerrarOJogo(1)" />
            </v-sheet>
          </v-col>
          <v-col>
            <v-sheet class="centralColumn" color="#F4F775">
              <div class="sortLetterAndNumber">{{ letraPlacar + numeroPlacar }}</div>
              <div class="button-bingo">
                <v-btn color="success" fab x-large dark @click="sortear">
                  <v-icon>mdi-refresh</v-icon>
                </v-btn>
              </div>
            </v-sheet>
          </v-col>
          <v-col>
            <div class="players">{{ player2 }}</div>
            <v-sheet class="columsPlayers" color="#F4F775">
                <CartelasComponent :posicoesSorteadas="posicoesSorteadas" :todasPosicoes="todasPosicoes" @ganhou="encerrarOJogo(2)" />
            </v-sheet>
            <v-sheet class="columsPlayers" color="#F4F775">
                <CartelasComponent :posicoesSorteadas="posicoesSorteadas" :todasPosicoes="todasPosicoes" @ganhou="encerrarOJogo(2)" />
            </v-sheet>
          </v-col>
        </v-row>
      </v-container>
    </v-main>
  </v-app>
</template>
<script>
import CartelasComponent from "./CartelasComponent.vue"
import { sortearPosicao } from './randomizer';

export default {

  data() {
    return {
      havePlayer: false,
      player1: "",
      player2: "",
      numberCards: "",
      sortLetterAndNumber: [],
      sortedNumber: [],
      contador: Number,
      B: [],
      I: [],
      N: [],
      G: [],
      O: [],
      posicoesDisponiveis: [],
      todasPosicoes: [],
      posicoesSorteadas: [],
      numeroPlacar: "",
      letraPlacar: "",
      vencedor: ""
    }
  },

  components: {
    CartelasComponent
  },

  methods: {
    register() {
      this.$refs.form.validate();
      if (this.$refs.form.validate() == true){
        this.gerarTabuleiro()
      }
      if (this.$refs.form.validate() == true) {
        this.havePlayer = true;
        if (this.player2 == '') {
          this.player2 = "Dona Tereza"
        }
      }
    },

    gerarTabuleiro() {
      const todasPosicoes = [
        this.gerarColuna(1),
        this.gerarColuna(2),
        this.gerarColuna(3),
        this.gerarColuna(4),
        this.gerarColuna(5),
      ]
      this.todasPosicoes = todasPosicoes
      this.posicoesDisponiveis = todasPosicoes.flat(1)
    },

    gerarColuna(numeroDaColuna) {
      const coluna = Array.from({ length: 15 }).map((_value, index) => {
        return (index + 1) + (15 * (numeroDaColuna - 1))
      })
      return coluna
    },

    sortearNumero() {
      const posicao = sortearPosicao(this.posicoesDisponiveis)
      const [numero] = this.posicoesDisponiveis.splice(posicao, 1)
      this.posicoesSorteadas.push(numero)

      return numero
    },

    encerrarOJogo(vencedor) {
      this.vencedor = vencedor

      if(vencedor == 1){
        window.alert(this.player1 + " ganhou !")
      } else if(vencedor == 2){
        window.alert(this.player2 + " ganhou !")
      }
    },

    sortear() {
      let allLetter = "BINGO";
      let randomNumberToLetter = Math.floor(Math.random() * 5);
      let letras = allLetter.substring(randomNumberToLetter + 1, randomNumberToLetter);
      let numero = this.sortearNumero()
      this.numeroPlacar = numero

      if(this.numeroPlacar <= 15){
        this.letraPlacar = "B"
      } else if (this.numeroPlacar >= 16 && this.numeroPlacar <= 30) {
        this.letraPlacar = "I"
      } else if (this.numeroPlacar >= 31 && this.numeroPlacar <= 46) {
        this.letraPlacar = "N"
      } else if (this.numeroPlacar >= 47 && this.numeroPlacar <= 62) {
        this.letraPlacar = "G"
      } else {
        this.letraPlacar = "O"
      }

      if (this.sortLetterAndNumber == '') {
        this.sortLetterAndNumber.push(letras + numero);
      } else if (!this.sortLetterAndNumber.includes(letras + numero)) {
        this.sortLetterAndNumber.push(letras + numero);
      } else {
        console.log("Terceiro IF")
      }

      this.sortedNumber.push(numero);

    }
  }
}
</script>
<style>
.formulario {
  align-items: center;
  width: 400px;
  padding: 20px;
  margin: auto;
  border: 4px solid #cfb845;
  border-radius: 10px;
}

.button-bingo {
  margin: auto;
  padding: 10px;
  width: 100px;
  height: 100px;
}

.sortLetterAndNumber {
  margin: auto;
  border: 1px solid #ccc;
  width: 100px;
  height: 100px;
  font-family: 'sans-serif';
  font-size: 45px;
  text-align: center;
  border-radius: 15px;
}

.players {
  margin: auto;
  width: 300px;
  height: 50px;
  font-family: 'sans-serif';
  font-size: 30px;
  text-align: center;
  margin: auto;
  background-color: #F4F775;
  border-radius: 10px;
}

.columsPlayers {
  width: 300px;
  height: 330px;
  border-radius: 15px;
  margin-top: 15px;
}

.container {
  height: relative;
  width: 800px;
}

.centralColumn {
  border-radius: 15px;
}
</style>