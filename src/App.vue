<template>
  <v-app>
    <v-main style="width: 400px;">
      <Head/>
      <router-view/>
      <Footer/>
    </v-main>
  </v-app>
</template>

<script>
import Head from './components/Head';
import Footer from './components/Footer';

export default {
  name: 'App',
  components: {
    Head,
    Footer
  }
};
</script>
