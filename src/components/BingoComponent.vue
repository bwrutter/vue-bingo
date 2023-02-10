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
              <CartelasComponent :cardPlayer1="cardPlayer1" :sortedLetter="sortedLetter" :sortedNumber="sortedNumber" :B="B" :I="I" :N="N" :G="G" :O="O"/>
            </v-sheet>
          </v-col>
          <v-col>
            <v-sheet class="centralColumn" color="#F4F775">
              <div class="sortLetterAndNumber">{{ sortLetterAndNumber[sortLetterAndNumber.length -1] }}</div>
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
              <CartelasComponent :cardPlayer1="cardPlayer1" :sortedLetter="sortedLetter" :sortedNumber="sortedNumber" :B="B" :I="I" :N="N" :G="G" :O="O"/>
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
      sortLetterAndNumber: [],
      cardPlayer1: [],
      sortedLetter: [],
      sortedNumber: [],
      sorteio: [],
      contador: [],
      B: [],
      I: [],
      N: [],
      G: [],
      O: [],
      cartelasTeste: [this.B,this.I,this.N,this.G,this.O]
    }
  },

  components: {
    CartelasComponent
  },

  methods: {
    register() {
      this.$refs.form.validate();
      if (this.$refs.form.validate() == true){
        this.havePlayer = true;
          if (this.player2 == ''){
            this.player2 = "Dona Tereza"
          }





          let x = new Array(75);
          for(let i=1; i<76; i++) {
              x[i] = i; 
          } 
          x.sort(function(a,b){ return (Math.round(Math.random())-0.5); });
          console.log("IMPRIME O X: " + x)

          for (let i = 0; i <= 4; i++){
            
            this.B.push(Math.floor(Math.random() * 75));
            this.I.push(Math.floor(Math.random() * 75));

            if (i == 2){
              this.N.push("X");
            } else {
              this.N.push(Math.floor(Math.random() * 75));
            }

            this.G.push(Math.floor(Math.random() * 75));
            this.O.push(Math.floor(Math.random() * 75));
          if (i == 4){
            this.cardPlayer1.push(this.B, this.I, this.N, this.G, this.O);
            console.log(this.cardPlayer1);
            console.log("ARRAY N " + this.cardPlayer1[2])
          }
      }
    }
    },

    sort(){
      let allLetter = "BINGO";
      let randomNumberToLetter = Math.floor(Math.random() * 5);
      let letras = allLetter.substring(randomNumberToLetter+1,randomNumberToLetter);
      let numero = Math.floor(Math.random() * 75);

      /*switch ( letras ) {
        case "B":
        this.B.push(numero)
      break;
        case "I":
        this.I.push(numero)
      break;
        case "N":
        this.N.push(numero)
      break;
        case "G":
        this.G.push(numero)
      break;
        case "O":
        this.O.push(numero)
      break;
        default:
       alert("DEU ERRO")
       break;
      }
      console.log("B=" + this.B + "---I=" + this.I + "---N=" +  this.N + "---G=" +  this.G + "---O=" +  this.O)*/
      
      if (this.sortLetterAndNumber == ''){
        this.sortLetterAndNumber.push(letras + numero);
        console.log("PRIMEIRO IF")
      } else if (!this.sortLetterAndNumber.includes(letras + numero)){
        console.log("SEGUNDO IF")
        this.sortLetterAndNumber.push(letras + numero);
      } else {
        console.log("Teceiro IF")
      }

      this.sortedLetter.push(letras);
      this.sortedNumber.push(numero);
      /*console.log(this.sortLetterAndNumber[this.sortLetterAndNumber.length -1])
      let sorteio = []
      this.sorteio.push(sortLetterAndNumber)
      let acertos = this.sorteio.filter(numero => this.cardPlayer1.includes(numero)) */
      /*console.log("Você acertou " + acertos.length + " números: ", acertos)
      console.log("CARD PLAYER   " + this.cardPlayer1)
      console.log("CARD PLAYER SOZINHO " + this.cardPlayer1[1])*/
   
      if(this.cardPlayer1.includes(this.sortedNumber.length -1)){
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