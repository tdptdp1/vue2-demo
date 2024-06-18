<template>
  <div id="GoodsGroup">
    <el-card class="box-card">
      <div slot="header" class="clearfix">
        <span>商品分类</span>
        <el-button style="float: right; padding: 8px 8px" type="primary" @click="addGroup">添加分类</el-button>
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
            <template slot-scope="scope">
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
          :page-sizes="[5, 8, 10, 14]"
          :page-size="100"
          layout="total, sizes, prev, pager, next, jumper"
          :total="14">
        </el-pagination>
      </div>
    </el-card>
    <!-- 编辑弹窗 -->
    <el-dialog
      title="提示"
      :visible.sync="editDialogVisible"
      width="30%">
      <el-form  status-icon  label-width="100px" class="demo-ruleForm" v-if="editDetail">
        <el-form-item label="序号">
          <el-input v-model="editDetail.num"></el-input>
        </el-form-item>
        <el-form-item label="分类名称">
          <el-input v-model="editDetail.groutName"></el-input>
        </el-form-item>
      </el-form>
      <span slot="footer" class="dialog-footer">
        <el-button @click="editDialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="comfim">确 定</el-button>
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
      <!-- 添加分类 -->
      <el-dialog
        title="提示"
        :visible.sync="addDialogVisible"
        width="30%">
        <el-form  status-icon  label-width="100px" class="demo-ruleForm">
          <el-form-item label="序号"  prop="pass">
            <el-input    :disabled="true" v-model="addGroupList.num" autocomplete="off"></el-input>
          </el-form-item>
          <el-form-item label="分类名称" prop="checkPass">
            <el-input  v-model="addGroupList.groutName" autocomplete="off"></el-input>
          </el-form-item>
          <el-form-item label="是否启用" prop="age">
            <el-input v-model="addGroupList.isSelect"></el-input>
          </el-form-item>
        </el-form>
        <span slot="footer" class="dialog-footer">
          <el-button @click="addDialogVisible = false">取 消</el-button>
          <el-button type="primary" @click="addlistComfirm">确 定</el-button>
        </span>
      </el-dialog>
  </div>
</template>

<script>
import { nanoid } from 'nanoid'
export default {
  name: 'GoodsGroup',
  data () {
    return {
      tableData: [{
        id: nanoid(),
        num: '1',
        groutName: '热销榜',
        isSelect: true
      }, {
        id: nanoid(),
        num: '2',
        groutName: '单人精彩套餐',
        isSelect: true
      }, {
        id: nanoid(),
        num: '3',
        groutName: '冰爽饮品显示特惠',
        isSelect: true
      }, {
        id: nanoid(),
        num: '4',
        groutName: '精选热卖',
        isSelect: true
      }, {
        id: nanoid(),
        num: '5',
        groutName: '爽口凉菜',
        isSelect: true
      }],
      addGroupList: {
        id: nanoid(),
        num: '',
        groutName: '',
        isSelect: true
      },
      editDialogVisible: false,
      deleteDialogVisible: false,
      deleteCurrentId: '',
      editDetail: null,
      addDialogVisible: false
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
    },
    comfim () {
      this.editDialogVisible = false
      this.$message.success('修改成功')
    },
    addGroup () {
      const lastObj = this.tableData.length - 1
      this.addGroupList.num = Number(this.tableData[lastObj].num) + 1
      this.addDialogVisible = true
    },
    addlistComfirm () {
      this.tableData.push(this.addGroupList)
      this.addDialogVisible = false
    }
  }
}
</script>

<style>

</style>
