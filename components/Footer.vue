<template>
  <v-footer class="app-footer" padless>
    <v-card
      flat
      tile
      :dark="isDarkTheme"
      :class="{ 'is-landing': parent === 'landing' }"
    >
      <v-card-text>
        <a
          href="https://www.instagram.com"
          target="_blank"
          rel="noreferrer noopener"
          title="Instagram"
        >
          <v-icon v-text="'mdi-instagram'" size="36px"></v-icon>
        </a>
        <a
          href="https://github.com"
          target="_blank"
          rel="noreferrer noopener"
          title="Github"
        >
          <v-icon v-text="'mdi-github'" size="36px"></v-icon>
        </a>
        <a href="mailto:someemail@email.com" title="E-Mail">
          <v-icon v-text="'mdi-email-outline'" size="36px"></v-icon>
        </a>
        <v-icon
          v-if="parent !== 'error'"
          v-text="'mdi-brightness-6'"
          size="36px"
          title="Switch Theme"
          @click="$store.commit('toggleTheme')"
        ></v-icon>
      </v-card-text>

      <v-divider></v-divider>

      <v-card-text>© {{ presentYear }} You </v-card-text>
    </v-card>
  </v-footer>
</template>

<script>
export default {
  props: {
    parent: String,
  },
  computed: {
    presentYear: function () {
      return new Date().getFullYear();
    },
    isDarkTheme: {
      get() {
        return this.$store.state.darkTheme || this.parent === "error";
      },
    },
  },
};
</script>

<style lang="scss">
@import "~/assets/styles/variables.scss";
.app-footer {
  .v-card {
    width: 100%;
    text-align: center;
    a {
      text-decoration: none;
    }
    .v-icon {
      &:hover {
        transform: rotate(360deg);
      }
      &:focus::after {
        opacity: 0;
      }
    }
  }
}

// Theme
.app-landing {
  .app-footer {
    .v-card {
      &.theme--light.is-landing {
        background-color: $light-primary;
        .v-icon {
          color: $light-background;
        }
        .v-card__text {
          color: $light-background;
        }
        .v-divider {
          border-color: rgba($color: $light-background, $alpha: 0.12);
        }
      }
      &.theme--dark.is-landing {
        .v-icon {
          color: $dark-primary;
        }
        .v-card__text {
          color: $dark-primary;
        }
        .v-divider {
          border-color: rgba($color: $dark-primary, $alpha: 0.12);
        }
      }
    }
  }
}
</style>
