<template>
  <v-container class="app-error" fluid>
    <v-card flat tile dark>
      <div>
        <h1>{{ error.statusCode }}</h1>
        <h3>{{ error.message }}</h3>
        <br />
        <v-btn outlined @click="goToLanding">
          Take me away
        </v-btn>
      </div>
    </v-card>
    <Footer :parent="'error'"></Footer>
  </v-container>
</template>

<script>
import Footer from '~/components/Footer.vue'

export default {
  components: {
    Footer
  },
  props: ['error'],
  methods: {
    goToLanding() {
      this.$router.push('/')
    }
  }
}
</script>

<style lang="scss" scoped>
.app-error {
  padding: 0;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr max-content;
  height: 100%;
  text-align: center;
  .v-card {
    display: flex;
    justify-content: center;
    flex-direction: row;
    align-items: center;
  }
}

@media only screen and (max-device-width: 736px) {
  .app-error {
    .v-card {
      h3 {
        padding: 5px;
      }
    }
  }
}
</style>
