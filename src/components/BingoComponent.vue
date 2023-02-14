<template>
  <v-app id="inspire" style="background-color:#F6776E">
    <v-main style="background-color:#F6776E">
      <div>
        <v-img alt="bingo" src="../assets/bingo.png" style="max-width: 250px; padding: 10px; margin: auto;"> </v-img>
      </div>
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
            <v-sheet class="columsPlayers" color="#F4F775">
              <div class="players">{{ player1 }}</div>
              <CartelasComponent :B="B" :I="I" :N="N" :G="G" :O="O" />
            </v-sheet>
          </v-col>
          <v-col>
            <v-sheet class="centralColumn" color="#F4F775">
              <div class="sortLetterAndNumber">{{ sortLetterAndNumber[sortLetterAndNumber.length - 1] }}</div>
              <div class="button-bingo">
                <v-btn color="success" fab x-large dark @click="sort">
                  <v-icon>mdi-refresh</v-icon>
                </v-btn>
              </div>
            </v-sheet>
          </v-col>
          <v-col>
            <v-sheet class="columsPlayers" color="#F4F775">
              <div class="players">{{ player2 }}</div>
              <CartelasComponent :B="B" :I="I" :N="N" :G="G" :O="O" />
            </v-sheet>
          </v-col>
        </v-row>
      </v-container>
    </v-main>
  </v-app>
</template>
<script>
import CartelasComponent from "./CartelasComponent.vue"

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
    }
  },

  components: {
    CartelasComponent
  },

  methods: {
    register() {
      this.$refs.form.validate();
      if (this.$refs.form.validate() == true) {
        this.havePlayer = true;
        if (this.player2 == '') {
          this.player2 = "Dona Tereza"
        }

        for (let i = 0; i <= 4; i++) {

          this.B.push(Math.floor(Math.random() * 75));
          this.I.push(Math.floor(Math.random() * 75));

          if (i == 2) {
            this.N.push("X");
          } else {
            this.N.push(Math.floor(Math.random() * 75));
          }

          this.G.push(Math.floor(Math.random() * 75));
          this.O.push(Math.floor(Math.random() * 75));

        }
      }
    },

    sort() {
      let allLetter = "BINGO";
      let randomNumberToLetter = Math.floor(Math.random() * 5);
      let letras = allLetter.substring(randomNumberToLetter + 1, randomNumberToLetter);
      let numero = Math.floor(Math.random() * 75);

      if (this.sortLetterAndNumber == '') {
        this.sortLetterAndNumber.push(letras + numero);
      } else if (!this.sortLetterAndNumber.includes(letras + numero)) {
        this.sortLetterAndNumber.push(letras + numero);
      } else {
        console.log("Terceiro IF")
      }

      this.sortedNumber.push(numero);

      if (this.cardPlayer1.includes(this.sortedNumber.length - 1)) {
        this.contador++
        console.log(this.contador)
        if (this.contador === 25) {
          alert("VENCEU!!!!!!!!!");
        }
      }
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
}

.columsPlayers {
  width: 300px;
  height: 400px;
  border-radius: 15px;
}

.container {
  height: relative;
  width: 800px;
}

.centralColumn {
  border-radius: 15px;
}
</style>