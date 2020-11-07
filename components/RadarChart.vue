<template>
  <v-chart :options="radarChart" autoresize />
</template>

<script>
import ECharts from 'vue-echarts'
import 'echarts/lib/chart/radar'

export default {
  components: {
    'v-chart': ECharts
  },
  data: () => ({
    nameGap: 15
  }),
  methods: {
    handleResize() {
      this.nameGap = window.innerWidth <= 768 ? 5 : 15
    }
  },
  computed: {
    radarChart() {
      const scores = [
        { name: 'Angular 2+', max: 100, value: 90 },
        { name: 'AngularJs', max: 100, value: 30 },
        { name: 'Vue', max: 100, value: 30 },
        { name: 'React', max: 100, value: 20 },
        { name: 'Java', max: 100, value: 70 },
        { name: 'Spring', max: 100, value: 30 },
        { name: 'Python', max: 100, value: 20 },
        { name: 'Sass', max: 100, value: 80 },
        { name: 'Nosql', max: 100, value: 20 },
        { name: 'Sql', max: 100, value: 50 }
      ]
      return {
        tooltip: {},
        radar: {
          indicator: scores.map(({ name, max }) => {
            return { name, max }
          }),
          nameGap: this.nameGap
        },
        series: [
          {
            type: 'radar',
            areaStyle: {},
            data: [{ value: scores.map(({ value }) => value) }]
          }
        ]
      }
    }
  },
  created() {
    window.addEventListener('resize', this.handleResize)
    this.handleResize()
  },
  destroyed() {
    window.removeEventListener('resize', this.handleResize)
  }
}
</script>

<style lang="scss" scoped>
.echarts {
  width: 100%;
  padding: 15px;
}
</style>
