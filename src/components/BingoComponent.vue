<template>
  <v-app id="inspire" style="background-color:#F6776E">
    <v-main style="background-color:#F6776E">
      <div>
        <v-img alt="bingo" src="../assets/bingo.png" style="max-width: 250px; padding: 10px; margin: auto;"> </v-img>
      </div>
      <div class="formulario" v-if="!temJogador">
        <v-form ref="form" v-model="valid" lazy-validation>
          <v-text-field v-model="jogador1" :rules="[v => (!!v) || 'Nome é obrigatório!']" label="Nome do jogador 1"
            required></v-text-field>
          <v-text-field v-model="jogador2" label="Nome do jogador 2 ou nome aleatório" required></v-text-field>
          <v-text-field v-model="numeroCartelas" :rules="[v => !!v || 'Quantidade de cartelas é obrigatória e no máximo 4']"
            label="Quantidade de cartelas, máximo 4" required></v-text-field>
          <v-btn color="success" class="mr-4" @click="register">Jogar</v-btn>
        </v-form>
      </div>
      <v-container class="container" v-if="temJogador">
        <v-row>
          <v-col>
            <div class="jogadores">{{ jogador1 }}</div>
            <v-sheet v-for="cartela in cartelas" :key="cartela" class="colunajogadores" color="#F4F775">
              <CartelasComponente :posicoesSorteadas="posicoesSorteadas" :todasPosicoes="todasPosicoes"
                @ganhou="encerrarOJogo(1)" />
            </v-sheet>
          </v-col>
          <v-col>
            <v-sheet class="colunaCentral" color="#F4F775">
              <div class="letraNumero">{{ letraPlacar + numeroPlacar }}</div>
              <div class="botao-bingo">
                <v-btn color="success" fab x-large dark @click="sortearNumero">
                  <v-icon>mdi-refresh</v-icon>
                </v-btn>
              </div>
            </v-sheet>
          </v-col>
          <v-col>
            <div class="jogadores">{{ jogador2 }}</div>
            <v-sheet v-for="cartela in cartelas" :key="cartela" class="colunajogadores" color="#F4F775">
              <CartelasComponente :posicoesSorteadas="posicoesSorteadas" :todasPosicoes="todasPosicoes"
                @ganhou="encerrarOJogo(2)" />
            </v-sheet>
          </v-col>
        </v-row>
      </v-container>
    </v-main>
  </v-app>
</template>
<script >
import CartelasComponente from "./CartelasComponente.vue";
import { sortearPosicao } from "./randomizer";

export default {

  data() {
    return {
      temJogador: false,
      jogador1: null,
      jogador2: null,
      numeroCartelas: null,
      posicoesDisponiveis: [],
      todasPosicoes: [],
      posicoesSorteadas: [],
      numeroPlacar: null,
      letraPlacar: null,
      vencedor: null,
      ultimosSorteados: [],
      cartelas: null
    }
  },

  components: {
    CartelasComponente
  },

  methods: {
    register() {
      this.$refs.form.validate();
      if (this.$refs.form.validate() == true && this.numeroCartelas <= 4) {
        this.gerarTabuleiro()
        this.temJogador = true;
        this.cartelas = parseInt(this.numeroCartelas)
        if (this.jogador2 == null) {
          this.jogador2 = "Dona Tereza"
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

      if(this.vencedor != null){
        this.reiniciaBingo()
      } else {
        const posicao = sortearPosicao(this.posicoesDisponiveis)
        const [numero] = this.posicoesDisponiveis.splice(posicao, 1)
        this.posicoesSorteadas.push(numero)
        this.letraNumeroSorteio(numero)
        return numero        
      }
    },

    letraNumeroSorteio(numero) {
      this.numeroPlacar = numero

      if (this.numeroPlacar <= 15) {
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

    },

    encerrarOJogo(vencedor) {
      this.vencedor = vencedor

      if (vencedor == 1) {
        window.alert("BINGOOOOOOO!!!! " + this.jogador1 + " ganhou !")
      } else if (vencedor == 2) {
        window.alert("BINGOOOOOOO!!!! " + this.jogador2 + " ganhou !")
      }
    },

    reiniciaBingo() {
      this.temJogador = false
      this.jogador1 = null
      this.jogador2 = null
      this.numeroCartelas = null
      this.posicoesDisponiveis = [],
      this.todasPosicoes = [],
      this.posicoesSorteadas = [],
      this.numeroPlacar = null,
      this.letraPlacar = null,
      this.vencedor = null
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

.botao-bingo {
  margin: auto;
  padding: 10px;
  width: 100px;
  height: 100px;
}

.letraNumero {
  margin: auto;
  border: 1px solid #ccc;
  width: 100px;
  height: 100px;
  font-family: 'sans-serif';
  font-size: 45px;
  text-align: center;
  border-radius: 15px;
}

.jogadores {
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

.colunajogadores {
  width: 300px;
  height: 330px;
  border-radius: 15px;
  margin-top: 15px;
}

.container {
  height: relative;
  width: 800px;
}

.colunaCentral {
  border-radius: 15px;
}</style>