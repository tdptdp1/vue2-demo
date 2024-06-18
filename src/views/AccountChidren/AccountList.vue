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
            <template   slot-scope="scope">
              <el-button
                size="mini"
                 @click="handleEdit(scope.$index, scope.row)"
               >编辑</el-button>
              <el-button
                size="mini"
                type="danger"
                @click="handleDelete(scope.$index, scope.row)"
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
        <!-- 编辑弹窗 -->
        <el-dialog
      title="提示"
      :visible.sync="editDialogVisible"
      width="30%">
      <el-form  status-icon  label-width="100px" class="demo-ruleForm" v-if="editDetail">
        <el-form-item label="账号">
          <el-input  v-model="editDetail.idName" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="用户组">
          <el-input  v-model="editDetail.name" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="创建时间">
          <el-input v-model="editDetail.createTime"></el-input>
        </el-form-item>
      </el-form>
      <span slot="footer" class="dialog-footer">
        <el-button @click="editDialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="editDialogVisible = false">确 定</el-button>
      </span>
        </el-dialog>
     <!-- 删除弹窗-->
     <el-dialog
        title="删除"
        :visible.sync="deleteDialogVisible"
        width="30%"
        :before-close="deleteDialogVisible">
        <span>是否删除</span>
        <span slot="footer" class="dialog-footer">
          <el-button @click="deleteDialogVisible = false">取 消</el-button>
          <el-button type="primary" @click="deleteIofo">确 定</el-button>
        </span>
      </el-dialog>
  </div>
</template>

<script>
import { nanoid } from 'nanoid'
export default {
  name: 'AccountList',
  data () {
    return {
      tableData: [{
        id: nanoid(),
        idName: '貂蝉',
        name: '超级管理员',
        createTime: '2024/6/12'
      }, {
        id: nanoid(),
        idName: '妲己',
        name: '普通管理员',
        createTime: '2024/6/12'
      }, {
        id: nanoid(),
        idName: '牛魔王',
        name: '超级管理员',
        createTime: '2024/6/12'
      }, {
        id: nanoid(),
        idName: '韩信',
        name: '普通管理员',
        createTime: '2024/6/12'
      }],
      editDialogVisible: false,
      deleteDialogVisible: false,
      deleteCurrentId: '',
      editDetail: null
    }
  },
  methods: {
    handleEdit (index, row) {
      this.editDetail = row
      this.editDialogVisible = true
    },
    handleDelete (index, row) {
      this.deleteDialogVisible = true
      this.deleteCurrentId = row.id
    },
    deleteIofo () {
      this.tableData = this.tableData.filter((item) => item.id !== this.deleteCurrentId)
      this.deleteDialogVisible = false
      this.$message.success('删除成功')
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
