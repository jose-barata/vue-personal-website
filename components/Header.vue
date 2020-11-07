<template>
  <v-toolbar dense data-app :dark="isDarkTheme">
    <v-toolbar-title>
      <nuxt-link to="/">yourwebsite</nuxt-link>
      / {{ route }}
    </v-toolbar-title>
    <v-spacer></v-spacer>
    <v-menu offset-y v-model="showMenu" :dark="isDarkTheme">
      <template v-slot:activator="{ on }">
        <v-btn icon :dark="!isDarkTheme" :light="isDarkTheme" v-on="on">
          <v-icon v-text="'mdi-dots-vertical'" title="Pages"></v-icon>
        </v-btn>
        <v-btn
          icon
          :dark="!isDarkTheme"
          :light="isDarkTheme"
          @click="$store.commit('toggleTheme')"
          title="Switch Theme"
        >
          <v-icon v-text="'mdi-brightness-6'"></v-icon>
        </v-btn>
      </template>
      <v-list>
        <v-list-item @click="goToLanding">
          <v-list-item-icon>
            <v-icon v-text="'mdi-home-outline'"></v-icon>
          </v-list-item-icon>
          <v-list-item-title>Landing page</v-list-item-title>
        </v-list-item>
        <v-list-item v-if="route === 'about'" @click="goToSkills">
          <v-list-item-icon>
            <v-icon v-text="'mdi-bullseye-arrow'"></v-icon>
          </v-list-item-icon>
          <v-list-item-title>Skills page</v-list-item-title>
        </v-list-item>
        <v-list-item v-if="route === 'skills'" @click="goToAbout">
          <v-list-item-icon>
            <v-icon v-text="'mdi-comment-outline'"></v-icon>
          </v-list-item-icon>
          <v-list-item-title>About page</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-menu>
  </v-toolbar>
</template>

<script>
export default {
  props: {
    route: String,
  },
  methods: {
    goToLanding() {
      this.$router.push("/");
    },
    goToSkills() {
      this.$router.push("skills");
    },
    goToAbout() {
      this.$router.push("about");
    },
  },
  computed: {
    showMenu: {
      get() {
        return this.$store.state.header.showMenu;
      },
      set(value) {
        this.$store.commit("header/updateShowMenu", value);
      },
    },
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

.v-toolbar {
  position: relative;
  z-index: 10;
  .v-toolbar__title {
    a {
      text-decoration: none;
    }
  }
  .v-list-item__icon {
    margin-right: 10px;
  }
}

.v-toolbar {
  &.theme--light {
    background-color: $light-primary !important;
    .v-toolbar__title {
      color: $light-background;
      a {
        color: $light-background;
        text-decoration: none;
      }
    }
  }
  &.theme--dark {
    background-color: $dark-primary !important;
    .v-toolbar__title {
      color: $dark-background;
      a {
        color: $dark-background;
        text-decoration: none;
      }
    }
  }
}
</style>
