<template>
  <div id="OrderTotal">
    <div class="echarts" ref="echarts"></div>
  </div>
</template>

<script>
import * as echarts from 'echarts'
export default {
  name: 'ShopTotal',
  data () {
    return {
      colors: ['#C23531', '#2F4554', '#74ACB3']
    }
  },
  mounted () {
    const chart = this.$refs.echarts
    this.myChart = echarts.init(chart)
    this.myChart.setOption({
      color: this.colors,
      tooltip: {
        trigger: 'axis',
        axisPointer: {
          type: 'cross'
        }
      },
      grid: {
        right: '20%'
      },
      toolbox: {
        feature: {
          dataView: { show: true, readOnly: false },
          restore: { show: true },
          saveAsImage: { show: true }
        }
      },
      legend: {
        data: ['蒸发量', '降水量', '平均温度']
      },
      xAxis: [
        {
          type: 'category',
          axisTick: {
            alignWithLabel: true
          },
          // prettier-ignore
          data: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月']
        }
      ],
      yAxis: [
        {
          type: 'value',
          name: '水量',
          position: 'left',
          alignTicks: true,
          axisLine: {
            show: true,
            lineStyle: {
              color: '#686868'
            }
          },
          axisLabel: {
            formatter: '{value} ml'
          }
        },
        {
          show: false
        },
        {
          type: 'value',
          name: '温度',
          position: 'right',
          alignTicks: true,
          axisLine: {
            show: true,
            lineStyle: {
              color: '#686868'
            }
          },
          axisLabel: {
            formatter: '{value} °C'
          }
        }
      ],
      series: [
        {
          name: '蒸发量',
          type: 'bar',
          data: [
            2.0, 4.9, 7.0, 23.2, 25.6, 76.7, 135.6, 162.2, 32.6, 20.0, 6.4, 3.3
          ]
        },
        {
          name: '降水量',
          type: 'bar',
          yAxisIndex: 1,
          data: [
            2.6, 5.9, 9.0, 26.4, 28.7, 70.7, 175.6, 182.2, 48.7, 18.8, 6.0, 2.3
          ]
        },
        {
          name: '平均温度',
          type: 'line',
          yAxisIndex: 2,
          data: [2.0, 2.2, 3.3, 4.5, 6.3, 10.2, 20.3, 23.4, 23.0, 16.5, 12.0, 6.2]
        }
      ]
    })
  }
}
</script>

<style lang="less" scoped>
  #OrderTotal{
    background-color: white;
    .echarts{
      width: 1200px;
      height: 600px;
      padding: 20px;
    }
  }
</style>
