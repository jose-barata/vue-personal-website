<template>
  <div
    class="app-skills"
    :class="isDarkTheme ? 'theme--dark' : 'theme--light'"
    @click="$store.commit('header/updateShowMenu', false)"
  >
    <Header :route="route" />
    <div class="app-skills__wrapper">
      <v-card flat tile :dark="isDarkTheme">
        <v-expansion-panels accordion v-model="panel" mandatory>
          <v-expansion-panel>
            <v-expansion-panel-header>
              <h5 class="app-skills__title">Technology Stack</h5>
            </v-expansion-panel-header>
            <v-expansion-panel-content>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                eu sem integer vitae justo eget magna. Phasellus faucibus
                scelerisque eleifend donec pretium.
              </p>
              <RadarChart />
            </v-expansion-panel-content>
          </v-expansion-panel>
          <v-expansion-panel>
            <v-expansion-panel-header>
              <h5 class="app-skills__title">Front-End vs Back-End</h5>
            </v-expansion-panel-header>
            <v-expansion-panel-content>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                eu sem integer vitae justo eget magna. Phasellus faucibus
                scelerisque eleifend donec pretium.
              </p>
              <PieChart />
            </v-expansion-panel-content>
          </v-expansion-panel>
        </v-expansion-panels>
      </v-card>
    </div>
    <Footer :parent="'skills'"></Footer>
  </div>
</template>

<script>
import Header from "~/components/Header.vue";
import Footer from "~/components/Footer.vue";
import PieChart from "~/components/PieChart.vue";
import RadarChart from "~/components/RadarChart.vue";

export default {
  components: {
    Header,
    PieChart,
    RadarChart,
    Footer,
  },
  data: () => ({
    route: "skills",
    panel: 0,
  }),
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

.app-skills {
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: max-content 1fr max-content;
  height: 100%;
  .app-skills__wrapper {
    overflow: auto;
    .v-card {
      height: 100%;
      padding: 10px;
      .app-skills__title {
        text-align: left;
      }
      .v-item-group {
        &.v-expansion-panels--accordion {
          height: 100%;
        }
        .v-expansion-panel {
          &:last-of-type {
            margin-bottom: 10px;
          }
        }
      }
    }
  }
}

// theme
.app-skills {
  &.theme--light {
    background-color: $light-background;
  }
  &.theme--dark {
    background-color: $dark-background;
  }
  .app-skills__wrapper {
    .v-card {
      &.theme--light {
        .v-item-group {
          .v-expansion-panel {
            &[aria-expanded="false"] {
              background-color: darken($color: white, $amount: 5%);
            }
          }
        }
      }
      &.theme--dark {
        .v-item-group {
          .v-expansion-panel {
            &[aria-expanded="true"] {
              background-color: lighten($color: black, $amount: 15%);
            }
            &[aria-expanded="false"] {
              background-color: lighten($color: black, $amount: 20%);
            }
          }
        }
      }
    }
  }
}

@media (min-width: 1281px),
  (min-width: 1025px) and (max-width: 1280px),
  screen and (min-device-width: 1200px) and (max-device-width: 1600px) and (-webkit-min-device-pixel-ratio: 1),
  screen and (min-device-width: 1200px) and (max-device-width: 1600px) and (-webkit-min-device-pixel-ratio: 2) and (min-resolution: 192dpi) {
  .app-skills {
    .app-skills__wrapper {
      .v-card {
        display: flex;
        justify-content: center;
        .v-item-group {
          width: 50%;
        }
      }
    }
  }
}
</style>
