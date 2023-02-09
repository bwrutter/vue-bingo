<template>
  <v-app id="inspire" style="background-color:#F6776E">
    <v-main style="background-color:#F6776E">
      <div>
        <v-img alt="bingo" src="../assets/bingo.png" style="max-width: 250px; padding: 10px; margin: auto;"> </v-img>
      </div>
      <div class="formulario" v-if="!havePlayer">
        <v-form ref="form" v-model="valid" lazy-validation>
          <v-text-field v-model="player1" :rules="[v => (!!v) || 'Nome é obrigatório!']" label="Nome do jogador 1" required></v-text-field>
          <v-text-field v-model="player2" label="Nome do jogador 2 ou nome aleatório" required></v-text-field>
          <v-text-field v-model="numberCards" :rules="[v => !!v || 'Quantidade de cartelas é obrigatória!']" label="Quantidade de cartelas" required></v-text-field>
          <v-btn color="success" class="mr-4" @click="register">Jogar</v-btn>
        </v-form>
      </div>
      <v-container class="container" v-if="havePlayer">
        <v-row>
          <v-col>
            <v-sheet class="columsPlayers" color="#F4F775">
              <div class="players">{{ player1 }}</div>
              <CartelasComponent :cardPlayer1="cardPlayer1" :sortedLetter="sortedLetter" :sortedNumber="sortedNumber"/>
            </v-sheet>
          </v-col>
          <v-col>
            <v-sheet class="centralColumn" color="#F4F775">
              <div class="sortLetterAndNumber">{{ sortLetterAndNumber }}</div>
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
              <CartelasComponent :cardPlayer1="cardPlayer1" :sortedLetter="sortedLetter" :sortedNumber="sortedNumber"/>
            </v-sheet>
          </v-col>
        </v-row>
      </v-container>
    </v-main>
  </v-app>
</template>
<script>
/*import BingoModel from "../models/BingoModel.ts"*/
/*import CartelasComponent from "./CartelasComponent.vue"*/
import CartelasComponent from "./CartelasComponent.vue"
/*import PlayersModel from "../models/PlayersModel.ts"
import BingoModel from "../models/BingoModel.ts"*/
/*import CadastroComponent from "./CadastroComponent.vue"
import CadastroModel from "../CartelasComponent.vue"*/

export default {

  data() {
    return {
      havePlayer: false,
      player1: "",
      player2: "",
      numberCards: "",
      sortLetterAndNumber: "",
      cardPlayer1: [],
      sortedLetter: [],
      sortedNumber: [],
      sorteio: []
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
          for (let i = 0; i < 25; i++){
            this.cardPlayer1.push((Math.floor(Math.random() * 75)));
          }  
        /*let aux = new PlayersModel(this.player1, this.numberCards);
        aux.inicializarCartelas(this.numberCards);
        let teste = new BingoModel();
        teste.setSortLetterAndNumber("G25");
        this.jogadores.push(aux);*/
      }
    },

    sort(){
      let allLetter = "BINGO";
      let randomNumberToLetter = Math.floor(Math.random() * 5);
      let letras = allLetter.substring(randomNumberToLetter+1,randomNumberToLetter);
      let numero = Math.floor(Math.random() * 75);
      this.sortLetterAndNumber = ( letras + numero );
      this.sortedLetter.push(letras);
      this.sortedNumber.push(numero);

      /*let sorteio = []*/
      this.sorteio.push(numero)
      let acertos = this.sorteio.filter(numero => this.cardPlayer1.includes(numero)) 
      console.log("Você acertou " + acertos.length + " números: ", acertos)

      /*let randomNumberToLetter = Math.floor(Math.random() * 75);
      let randomLetter = allLetter.substring(randomNumberToLetter+1,randomNumberToLetter);
      this.sortLetterAndNumber = randomLetter + randomNumberToLetter;
      this.sortedLetter.push(randomLetter);
      this.sortedNumber.push(randomNumberToLetter);*/
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
.columsPlayers{
  width: 300px;
  height: 400px;
  border-radius: 15px;
}
.container{
  height: relative; 
  width: 800px; 
}
.centralColumn{
  border-radius: 15px;
}
</style>