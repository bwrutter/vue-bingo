<template>
  <v-app>
      <BingoComponent/>
  </v-app>
</template>

<script>
import BingoComponent from './components/BingoComponent';

export default {
  name: 'App',

  components: {
      BingoComponent,
  },

  data: () => ({
  }),
};
</script>
