<template>
  <div id="BackHome">
    <div id="detail">
      <div class="detail-child" v-for="(item,index) in headDeatail" :key="index">
        <svg class="icon" aria-hidden="true">
          <use :xlink:href="item.icon"></use>
        </svg>
        <div class="total">
          <p>{{ item.title }}</p>
          <p>{{ item.total }}</p>
        </div>
      </div>
    </div>
    <div id="echarIoc">
      <div class="information" ref="information"></div>
    </div>
  </div>
</template>

<script>
/* 引入 ECharts */
import * as echarts from 'echarts'
export default {
  name: 'BackHome',
  data () {
    return {
      headDeatail: [
        { icon: '#icon-dingdan', title: '总订单', total: '102,400' },
        { icon: '#icon-xiaoshoue', title: '总销售额', total: '200,533' },
        { icon: '#icon-dingdan1', title: '今日订单数', total: '582,255' },
        { icon: '#icon-xiaoshoue-copy', title: '今日销售额', total: '153,255' }
      ]
    }
  },
  mounted () {
    this.myChart = echarts.init(this.$refs.information)
    this.myChart.setOption({
      title: {
        text: '数据统计'
      },
      tooltip: {
        trigger: 'axis'
      },
      legend: {
        data: ['订单', '销售额', '注册人数', '管理员人数']
      },
      grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
      },
      toolbox: {
        feature: {
          saveAsImage: {}
        }
      },
      xAxis: {
        type: 'category',
        boundaryGap: false,
        data: ['2016/10/1', '2017/10/1', '2018/10/1', '2019/10/1', '2020/10/1', '2021/10/1', '2022/10/1']
      },
      yAxis: {
        type: 'value',
        axisLine: {
          show: true,
          lineStyle: {
            color: '#686868'
          }
        }
      },
      series: [
        {
          name: '订单',
          type: 'line',
          data: [280, 350, 300, 250, 285, 286, 296]
        },
        {
          name: '销售额',
          type: 'line',
          data: [1000, 1100, 860, 1600, 1200, 1190, 900]
        },
        {
          name: '注册人数',
          type: 'line',
          data: [250, 280, 270, 240, 286, 210, 300]
        },
        {
          name: '管理员人数',
          type: 'line',
          data: [80, 0, 50, 60, 40, 80, 100, 60]
        }
      ]
    })
  }
}
</script>

<style lang="less" scoped>
  #BackHome{
    width: 100%;
    height: 100%;
    background-color: #ddd;
    #detail{
      display: flex;
      justify-content: space-between;
      height: 110px;
      margin-bottom: 45px;
      .detail-child{
        display: flex;
        align-items: center;
        justify-content: space-evenly;
        width: 20%;
        height: 100%;
        // min-width: 200px;
        background-color: white;
        .icon{
          width: 70px;
          height: 70px;
        }
        .total{
          font-size: 17px;
          p:first-child{
            color: #ddd;
            margin-bottom: 5px;
          }
          p:last-child{
             font-weight: bold;
           }
        }
      }
    }
    #echarIoc{
      height: 400px;
      padding: 20px;
      border-radius: 5px;
      background-color: white;
      .information{
        width: 1200px;
        height: 100%;
      }
    }
  }
</style>
