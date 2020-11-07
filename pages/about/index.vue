<template>
  <div
    class="app-about"
    :class="isDarkTheme ? 'theme--dark' : 'theme--light'"
    @click="$store.commit('header/updateShowMenu', false)"
  >
    <Header :route="route" />
    <div class="app-about__wrapper">
      <v-card flat tile class="app-about__container" :dark="isDarkTheme">
        <v-card class="app-about__card mx-auto">
          <v-list-item>
            <v-list-item-avatar>
              <v-icon
                v-text="'mdi-check-decagram'"
                color="rgba(76,175,80 ,1)"
              ></v-icon>
            </v-list-item-avatar>
            <v-list-item-content>
              <v-list-item-title class="headline">You</v-list-item-title>
              <v-list-item-subtitle>Your Job</v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>

          <v-img
            src="https://images.pexels.com/photos/4954715/pexels-photo-4954715.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260"
            aspect-ratio="2"
            position="top center"
          ></v-img>

          <v-card-text>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Et
            pharetra pharetra massa massa ultricies mi quis hendrerit dolor.
            Nibh cras pulvinar mattis nunc sed blandit. Non quam lacus
            suspendisse faucibus interdum posuere. Ac ut consequat semper
            viverra nam libero justo. Nulla facilisi etiam dignissim diam quis
            enim lobortis scelerisque. Proin nibh nisl condimentum id venenatis
            a condimentum vitae sapien. In hac habitasse platea dictumst
            vestibulum rhoncus est. Euismod lacinia at quis risus sed vulputate
            odio. Pellentesque elit ullamcorper dignissim cras tincidunt
            lobortis feugiat.
          </v-card-text>

          <v-card-actions>
            <v-btn text @click="goToSkills">About my skills</v-btn>
            <v-spacer></v-spacer>

            <v-btn text v-if="likesCounter < 3" @click="incrementLikes">
              ({{ 956 + likesCounter }})
              <v-icon v-text="'mdi-heart'" color="rgba(244,67,54 ,1)"></v-icon>
            </v-btn>

            <v-btn text v-if="likesCounter > 2" @click="overlay = !overlay"
              >Aww, thanks</v-btn
            >
            <v-overlay :value="overlay">
              <v-btn id="app-about__overlaybtn" @click="overlay = false"
                >You are an amazing individual</v-btn
              >
            </v-overlay>
          </v-card-actions>
        </v-card>
      </v-card>
    </div>
    <Footer :parent="'about'"></Footer>
  </div>
</template>

<script>
import Footer from "~/components/Footer.vue";
import Header from "~/components/Header.vue";

export default {
  components: {
    Header,
    Footer,
  },
  data: () => ({
    route: "about",
    panel: 0,
    likesCounter: 0,
    overlay: false,
  }),
  methods: {
    incrementLikes() {
      this.likesCounter++;
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
  head() {
    return {
      titleTemplate: `%s | ${this.route}`,
    };
  },
};
</script>

<style lang="scss" scoped>
@import "~/assets/styles/variables.scss";

.app-about {
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: max-content 1fr max-content;
  height: 100%;
  .app-about__wrapper {
    overflow: auto;
    .app-about__container {
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
      align-items: center;
      height: 100%;
      padding: 10px;
      .app-about__card {
        margin-bottom: 10px;
        .v-card__text {
          text-align: justify;
        }
      }
    }
  }
}

//theme
.app-about {
  &.theme--light {
    background-color: $light-background;
    .app-about__card {
      a {
        color: $light-foreground;
      }
    }
  }
  &.theme--dark {
    background-color: $dark-background;
    #app-about__overlaybtn {
      background-color: $light-background;
      color: $light-foreground;
    }
    .app-about__card {
      background-color: lighten($color: $dark-background, $amount: 5%);
      a {
        color: $dark-foreground;
      }
    }
  }
}

@media (min-width: 1281px),
  (min-width: 1025px) and (max-width: 1280px),
  screen and (min-device-width: 1200px) and (max-device-width: 1600px) and (-webkit-min-device-pixel-ratio: 1),
  screen and (min-device-width: 1200px) and (max-device-width: 1600px) and (-webkit-min-device-pixel-ratio: 2) and (min-resolution: 192dpi) {
  .app-about {
    .app-about__wrapper {
      .app-about__container {
        .app-about__card {
          max-width: 800px;
        }
      }
    }
  }
}
</style>
