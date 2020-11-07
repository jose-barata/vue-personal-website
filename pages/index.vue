<template>
  <div
    class="app-landing"
    :class="isDarkTheme ? 'theme--dark' : 'theme--light'"
  >
    <v-card flat tile :dark="isDarkTheme">
      <div class="app-landing__intro">
        <h1 class="app-landing__title">Hello, I'm (name)</h1>
        <p class="app-landing__subtitle">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
      </div>

      <div class="app-landing__actions">
        <v-btn
          :dark="isDarkTheme"
          :light="!isDarkTheme"
          :color="isDarkTheme ? '#ffee58' : '#fff'"
          outlined
          @click="goToAbout"
          >More about me</v-btn
        >
        <v-btn
          :dark="isDarkTheme"
          :light="!isDarkTheme"
          :color="isDarkTheme ? '#ffee58' : '#fff'"
          outlined
          @click="goToSkills"
          >More about my skills</v-btn
        >
      </div>
    </v-card>
    <Footer :parent="'landing'"></Footer>
  </div>
</template>

<script>
import Footer from "~/components/Footer.vue";

export default {
  components: {
    Footer,
  },
  methods: {
    goToAbout() {
      this.$router.push("about");
    },
    goToSkills() {
      this.$router.push("skills");
    },
  },
  computed: {
    isDarkTheme: {
      get() {
        return this.$store.state.darkTheme;
      },
    },
  },
};
</script>

<style lang="scss" scoped>
@import "~/assets/styles/variables.scss";

.app-landing {
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr max-content;
  justify-content: center;
  width: 100%;
  height: 100%;
  overflow: hidden;
  .v-card {
    display: flex;
    flex-direction: column;
    justify-content: center;
    .app-landing__intro {
      padding: 10px;
    }
    .app-landing__title {
      font-family: "RobotoSlab-Bold";
      text-align: center;
      padding-bottom: 20px;
    }
    .app-landing__subtitle {
      font-size: 20px;
      text-align: center;
    }
    .app-landing__actions {
      display: flex;
      flex-direction: row;
      justify-content: center;
      .v-btn {
        margin: 10px;
      }
    }
  }
}

// Theme
.app-landing {
  &.theme--light {
    background-color: $light-primary;
  }
  &.theme--dark {
    background-color: $dark-background;
  }
  .v-card {
    &.theme--light {
      background-color: $light-primary;
      color: $light-background;
    }
    &.theme--dark {
      background-color: $dark-background;
      color: $dark-primary;
    }
  }
}

@media only screen and (min-width: 768px) {
  .app-landing {
    .v-card {
      .app-landing__subtitle {
        padding: 0 20px 0 20px;
      }
    }
  }
}

@media only screen and (max-device-width: 736px) {
  .app-landing {
    .v-card {
      transform: scale(0.9);
      h1 {
        font-size: 86px;
      }
    }
  }
}
</style>
