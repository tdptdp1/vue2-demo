<template>
  <div id="AccountList">
    <el-card class="box-card">
      <div slot="header" class="clearfix">
        <span>账号列表</span>
      </div>
      <div  class="text item">
        <el-table
          ref="multipleTable"
          :data="tableData"
          tooltip-effect="dark"
          style="width: 100%"
          @selection-change="handleSelectionChange">
          <el-table-column
            type="selection"
            width="55">
          </el-table-column>
          <el-table-column
            label="账号"
            width="120">
            <template slot-scope="scope">{{ scope.row.idName }}</template>
          </el-table-column>
          <el-table-column
            prop="name"
            label="用户组"
            width="120">
          </el-table-column>
          <el-table-column
            prop="createTime"
            label="创建时间"
            show-overflow-tooltip>
          </el-table-column>
          <el-table-column label="操作">
            <template >
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
          :page-sizes="[2, 5, 8, 10]"
          :page-size="5"
          layout="total, sizes, prev, pager, next, jumper"
          :total="35">
        </el-pagination>
      </div>
      <div class="setting">
        <el-button type="danger">批量删除</el-button>
        <el-button type="primary">取消选择</el-button>
      </div>
    </el-card>
  </div>
</template>

<script>
export default {
  name: 'AccountList',
  data () {
    return {
      tableData: [{
        idName: '貂蝉',
        name: '超级管理员',
        createTime: '2024/6/12'
      }, {
        idName: '妲己',
        name: '普通管理员',
        createTime: '2024/6/12'
      }, {
        idName: '牛魔王',
        name: '超级管理员',
        createTime: '2024/6/12'
      }, {
        idName: '韩信',
        name: '普通管理员',
        createTime: '2024/6/12'
      }]
    }
  }
}
</script>

<style lang="less" scoped>
  #AccountList{
    .block{
      margin: 20px 0;
    }
  }
</style>
