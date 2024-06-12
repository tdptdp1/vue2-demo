<template>
  <div id="ShopTotal">
    <div class="echarts" ref="echarts"></div>
  </div>
</template>

<script>
import * as echarts from 'echarts'
export default {
  name: 'ShopTotal',
  mounted () {
    const chart = this.$refs.echarts
    this.myChart = echarts.init(chart)
    this.myChart.setOption({
      title: {
        text: '堆叠折线图'
      },
      legend: {
        data: ['邮件营销', '联盟广告', '食品广告', '直接访问', '搜索引擎']
      },
      xAxis: {
        boundaryGap: false,
        data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日']
      },
      yAxis: {},
      series: [
        {
          name: '邮件营销',
          type: 'line',
          data: [1610, 1700, 1600, 1900, 2000, 2100, 2120],
          areaStyle: {},
          itemStyle: {
            color: '#B2D8C6'
          },
          label: {
            show: true,
            position: 'top'
          }
        },
        {
          name: '联盟广告',
          type: 'line',
          data: [900, 980, 920, 915, 930, 1100, 1180],
          areaStyle: {},
          itemStyle: {
            color: '#E1A793'
          }
        },
        {
          name: '食品广告',
          type: 'line',
          data: [500, 520, 530, 540, 560, 700, 750],
          areaStyle: {},
          itemStyle: {
            color: '#90BCC2'
          }
        },
        {
          name: '直接访问',
          type: 'line',
          data: [400, 430, 300, 416, 445, 470, 450],
          areaStyle: {},
          itemStyle: {
            color: '#6D7C87'
          }
        },
        {
          name: '搜索引擎',
          type: 'line',
          data: [120, 150, 160, 130, 100, 180, 220],
          areaStyle: {},
          itemStyle: {
            color: '#D4716E'
          }
        }
      ]
    })
  }
}
</script>

<style lang="less" scoped>
  #ShopTotal{
    background-color: white;
    .echarts{
      width: 1200px;
      height: 600px;
      padding: 20px;
    }
  }
</style>
