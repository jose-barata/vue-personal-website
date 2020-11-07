<template>
  <v-chart :options="pie" autoresize />
</template>

<script>
import ECharts from 'vue-echarts'
import 'echarts/lib/chart/pie'

export default {
  components: {
    'v-chart': ECharts
  },
  computed: {
    pie() {
      return {
        series: [
          {
            type: 'pie',
            roseType: 'radius',
            data: [
              { value: 40, name: 'Back-End' },
              { value: 60, name: 'Front-End' }
            ],
            label: {
              normal: {
                formatter: '{b} {d}%',
                position: 'inside'
              },
              color: 'rgba(255, 255, 255, 0.3)'
            },
            itemStyle: {
              color: '#c23531',
              shadowBlur: 10,
              shadowColor: 'rgba(0, 0, 0, 0.5)'
            }
          }
        ]
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.echarts {
  width: 100%;
  padding: 15px;
}
</style>
