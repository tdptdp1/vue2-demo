<template>
  <div id="GoodsGroup">
    <el-card class="box-card">
      <div slot="header" class="clearfix">
        <span>商品分类</span>
        <el-button style="float: right; padding: 8px 8px" type="primary">添加分类</el-button>
      </div>
      <div  class="text item">
        <el-table
          :data="tableData"
          style="width: 100%">
          <el-table-column
            label="序号"
            width="180">
            <template slot-scope="scope">
              <span style="margin-left: 10px">{{ scope.row.num }}</span>
            </template>
          </el-table-column>
          <el-table-column
            label="分类名称"
            width="350">
            <template slot-scope="scope">
              <span style="margin-left: 10px">{{ scope.row.groutName }}</span>
            </template>
          </el-table-column>
          <el-table-column
            label="是否启用"
            width="300">
            <template slot-scope="scope">
              <el-switch
                v-model="scope.row.isSelect"
                active-color="#13ce66"
                inactive-color="#ff4949">
              </el-switch>
            </template>
          </el-table-column>
          <el-table-column label="操作">
            <template>
              <el-button
                size="mini"
                >编辑</el-button>
              <el-button
                size="mini"
                type="danger"
                >删除</el-button>
            </template>
          </el-table-column>
        </el-table>
      </div>
      <div class="block">
        <el-pagination
          :current-page="currentPage4"
          :page-sizes="[5, 8, 10, 14]"
          :page-size="100"
          layout="total, sizes, prev, pager, next, jumper"
          :total="14">
        </el-pagination>
      </div>

    </el-card>
  </div>
</template>

<script>
export default {
  name: 'GoodsGroup',
  data () {
    return {
      tableData: [{
        num: '1',
        groutName: '热销榜',
        isSelect: true
      }, {
        num: '2',
        groutName: '单人精彩套餐',
        isSelect: true
      }, {
        num: '3',
        groutName: '冰爽饮品显示特惠',
        isSelect: true
      }, {
        num: '4',
        groutName: '精选热卖',
        isSelect: true
      }, {
        num: '5',
        groutName: '爽口凉菜',
        isSelect: true
      }]
    }
  }
}
</script>

<style>

</style>
