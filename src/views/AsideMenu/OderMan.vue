<template>
  <div id="OderMan">
    <div class="headInput">
      <label for="">订单号</label>
      <el-input v-model="order" placeholder="订单号"></el-input>
      <label for="">收货人</label>
      <el-input v-model="harvest" placeholder="收货人"></el-input>
      <label for="">手机号</label>
      <el-input v-model="telePhone" placeholder="手机号"></el-input>
      <label for="">订单状态</label>
      <el-select v-model="oderStatus" placeholder="订单状态">
        <el-option
          v-for="item in options"
          :key="item.value"
          :label="item.label"
          :value="item.value">
        </el-option>
      </el-select>
    </div>
    <div class="selectTime">
      <label for="">选择时间</label>
      <el-time-picker
          is-range
          v-model="value1"
          range-separator="至"
          start-placeholder="开始时间"
          end-placeholder="结束时间"
          placeholder="选择时间范围">
      </el-time-picker>
      <el-button type="primary">查询</el-button>
    </div>
    <div class="table_content">
      <el-table
          :data="tableData"
          border
          style="width: 100%">
          <el-table-column
            fixed
            prop="orderNum"
            label="订单号"
            width="120">
          </el-table-column>
          <el-table-column
            prop="oderTime"
            label="下单时间"
            width="120">
          </el-table-column>
          <el-table-column
            prop="telePhone"
            label="手机号"
            width="120">
          </el-table-column>
          <el-table-column
            prop="harvest"
            label="收货人"
            width="120">
          </el-table-column>
          <el-table-column
            prop="address"
            label="配送地址"
            width="200">
          </el-table-column>
          <el-table-column
            prop="reachTime"
            label="送达时间"
            width="120">
          </el-table-column>
          <el-table-column
            prop="remark"
            label="用户备注"
            width="120">
          </el-table-column>
          <el-table-column
            prop="oerderMoney"
            label="订单金额"
            width="120">
          </el-table-column>
          <el-table-column
            prop="oerderStatus"
            label="订单状态"
            width="120">
          </el-table-column>
          <el-table-column
            fixed="right"
            label="操作"
            width="100">
            <template slot-scope="scope">
              <el-button @click="handlShowIofo(scope.row)" type="text" size="small">查看</el-button>
              <el-button @click="handlShowIofo(scope.row)" type="text" size="small">编辑</el-button>
            </template>
          </el-table-column>
      </el-table>
    </div>
    <div class="block">
    <el-pagination
      :current-page="currentPage4"
      :page-sizes="[100, 200, 300, 400]"
      :page-size="100"
      layout="total, sizes, prev, pager, next, jumper"
      :total="400">
    </el-pagination>
  </div>
    <!-- 查看Dialog -->
    <el-dialog
      title="详情"
      :visible.sync="dialogVisible"
      width="30%"
     >
     <el-form status-icon  label-width="100px" class="demo-ruleForm" v-if="tableDeatail">
        <el-form-item label="姓名" prop="pass">
          <el-input  v-model="tableDeatail.harvest" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="送达时间" prop="checkPass">
          <el-input  v-model="tableDeatail.reachTime" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="备注" prop="age">
          <el-input v-model.number="tableDeatail.remark"></el-input>
        </el-form-item>
      </el-form>
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="dialogVisible = false">确 定</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
export default {
  data () {
    return {
      order: '',
      harvest: '',
      telePhone: '',
      oderStatus: '',
      dialogVisible: false,
      tableData: [{
        orderNum: '1240533',
        oderTime: '19:00:00',
        telePhone: '15983138602',
        harvest: '牛战士',
        address: '绵阳市城市学院二期',
        reachTime: '16:52',
        remark: '魔鬼辣',
        oerderMoney: '58',
        oerderStatus: '已受理'
      }, {
        orderNum: '1240533',
        oderTime: '19:00:00',
        telePhone: '15983138602',
        harvest: '牛战士',
        address: '绵阳市城市学院二期',
        reachTime: '16:52',
        remark: '魔鬼辣',
        oerderMoney: '58',
        oerderStatus: '已受理'
      }, {
        orderNum: '1240533',
        oderTime: '19:00:00',
        telePhone: '15983138602',
        harvest: '牛战士',
        address: '绵阳市城市学院二期',
        reachTime: '16:52',
        remark: '魔鬼辣',
        oerderMoney: '58',
        oerderStatus: '已受理'
      }, {
        orderNum: '1240533',
        oderTime: '19:00:00',
        telePhone: '15983138602',
        harvest: '牛战士',
        address: '绵阳市城市学院二期',
        reachTime: '16:52',
        remark: '魔鬼辣',
        oerderMoney: '58',
        oerderStatus: '已受理'
      }, {
        orderNum: '1240533',
        oderTime: '19:00:00',
        telePhone: '15983138602',
        harvest: '牛战士',
        address: '绵阳市城市学院二期',
        reachTime: '16:52',
        remark: '魔鬼辣',
        oerderMoney: '58',
        oerderStatus: '已受理'
      }],
      tableDeatail: null
    }
  },
  methods: {
    handlShowIofo (row) {
      this.dialogVisible = true
      this.tableDeatail = row
      console.log(this.tableDeatail)
    }
  }
}
</script>

<style lang="less" scoped>
  #OderMan{
    padding: 15px;
    border-radius: 5px;
    background-color: white;
    .headInput{
      display: flex;
      align-items: center;
      min-width: 1135px;
      margin-bottom: 20px;
      .el-input{
        width: 200px;
        margin:0 15px;
      }
      .el-select{
        margin-left: 15px;
      }
    }
    .selectTime{
      display: flex;
      align-items: center;
      margin-bottom: 20px;
      .el-date-editor{
        margin: 0 15px;
      }
    }
    .table_content{
      margin-bottom: 30px;
      width: 1230px;
    }
  }
</style>
