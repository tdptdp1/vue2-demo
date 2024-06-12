<template>
  <div id="OderMan">
    <!-- input输入框 -->
    <form action="">
      <label for="">订单号</label>
      <el-input v-model="personIofo.order" placeholder="订单号" size="mini"></el-input>
      <label for="">收货人</label>
      <el-input v-model="personIofo.person" placeholder="收货人" size="mini"></el-input>
      <label for="">手机号</label>
      <el-input v-model="personIofo.iphone" placeholder="手机号" size="mini"></el-input>
      <label for="">订单状态</label>
      <el-input v-model="personIofo.state" placeholder="订单状态" size="mini"></el-input>
    </form>
    <!-- 日期选择 -->
    <div class="block">
      <span class="demonstration">选择时间</span>
      <el-date-picker
        v-model="personIofo.date"
        type="daterange"
        size="mini"
        range-separator="至"
        start-placeholder="开始日期"
        end-placeholder="结束日期">
      </el-date-picker>
      <el-button type="primary" size="mini">查询</el-button>
    </div>
    <!-- 表格 -->
    <div class="table">
      <el-table
        :data="tableData"
        border
        style="width: 90%">
        <el-table-column
          fixed
          prop="date"
          label="订单号"
          width="130">
        </el-table-column>
        <el-table-column
          prop="name"
          label="下单时间"
          width="100">
        </el-table-column>
        <el-table-column
          prop="province"
          label="手机号"
          width="120">
        </el-table-column>
        <el-table-column
          prop="city"
          label="收货人"
          width="120">
        </el-table-column>
        <el-table-column
          prop="address"
          label="配送地址"
          width="220px"
        >
        </el-table-column>
        <el-table-column
          prop="zip"
          label="送达时间"
          width="120">
        </el-table-column>
        <el-table-column
          prop="zip"
          label="用户备注"
          width="120">
        </el-table-column>
        <el-table-column
          prop="zip"
          label="订单金额"
          width="120">
        </el-table-column>
         <el-table-column
          prop="zip"
          label="订单金额"
          width="120">
        </el-table-column>
        <el-table-column
          prop="zip"
          label="订单状态"
          width="120">
        </el-table-column>
        <el-table-column
          fixed="right"
          label="操作"
          width="100">
          <template slot-scope="scope">
            <el-button @click="handleClick(scope.row)" type="text" size="small">查看</el-button>
            <el-button type="text" size="small">编辑</el-button>
          </template>
        </el-table-column>
      </el-table>
      <div class="pageBox">
        <el-pagination
          :current-page="1"
          :page-sizes="[100, 200, 300, 400]"
          :page-size="100"
          layout="total, sizes, prev, pager, next, jumper"
          :total="400">
        </el-pagination>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'OderMan',
  data () {
    return {
      personIofo: { // 头部查询
        order: '',
        person: '',
        iphone: '',
        state: '',
        date: ''
      },
      tableData: [{ // 表格数据
        date: '2016-05-02',
        name: '王小虎',
        province: '上海',
        city: '普陀区',
        address: '上海市普陀区金沙江路 1518 弄',
        zip: 200333
      }, {
        date: '2016-05-04',
        name: '王小虎',
        province: '上海',
        city: '普陀区',
        address: '上海市普陀区金沙江路 1517 弄',
        zip: 200333
      }, {
        date: '2016-05-01',
        name: '王小虎',
        province: '上海',
        city: '普陀区',
        address: '上海市普陀区金沙江路 1519 弄',
        zip: 200333
      }, {
        date: '2016-05-03',
        name: '王小虎',
        province: '上海',
        city: '普陀区',
        address: '上海市普陀区金沙江路 1516 弄',
        zip: 200333
      }]
    }
  }
}
</script>

<style lang="less" scoped>
#OderMan{
  padding: 20px;
  height: 80%;
  background-color: white;
  border-radius: 5px;
  form{
    display: flex;
    align-items: center;
    min-width: 1300px;
    margin-bottom: 15px;
    color: #6A6C70;
    label{
      margin-right: 15px;
    }
    .el-input{
      width: 180px;
      margin-right: 15px;
    }
  }
  .table{
    .el-table{
    width: 100% !important;
  }
  }
  .block{
    margin-bottom: 35px;
    .demonstration{
      margin-right: 15px;
    }
    .el-button{
      margin-left: 15px;
    }
  }
  .pageBox{
    width: max-content;
    margin-top: 25px;
  }
}
</style>
