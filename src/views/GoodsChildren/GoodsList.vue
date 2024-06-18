<template>
  <el-card class="box-card">
    <div slot="header" class="clearfix">
      <span>商品列表</span>
    </div>
    <div  class="text item">
      <el-table
        :data="tableData"
        style="width: 100%">
        <el-table-column
          label="商品名称"
          width="180">
          <template slot-scope="scope">
            <i class="el-icon-arrow-right"></i>
            <span style="margin-left: 10px">{{ scope.row.goodsName }}</span>
          </template>
        </el-table-column>
        <el-table-column
          label="所属分类"
          width="180">
          <template slot-scope="scope">
            <span style="margin-left: 10px">{{ scope.row.group }}</span>
          </template>
        </el-table-column>
        <el-table-column
          label="商品价格"
          width="180">
          <template slot-scope="scope">
            <span style="margin-left: 10px">{{ scope.row.price }}</span>
          </template>
        </el-table-column>
        <el-table-column
          label="商品图片"
          width="180">
          <template >
            <span style="margin-left: 10px">
              <img src="../../assets/nr.png"  style="width: 35px; height: 35px">
            </span>
          </template>
        </el-table-column>
        <el-table-column
          label="商品描述"
          width="180">
          <template slot-scope="scope">
            <span style="margin-left: 10px">{{ scope.row.description }}</span>
          </template>
        </el-table-column>
        <el-table-column label="操作">
          <template  slot-scope="scope">
            <el-button
              size="mini"
              type="primary"
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
    <!-- 编辑弹窗 -->
    <el-dialog
      title="提示"
      :visible.sync="editDialogVisible"
      width="30%">
      <el-form  status-icon  label-width="100px" class="demo-ruleForm" v-if="editDetail">
        <el-form-item label="名称">
          <el-input  v-model="editDetail.goodsName" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="所属分类">
          <el-input  v-model="editDetail.group" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="商品价格">
          <el-input v-model="editDetail.price"></el-input>
        </el-form-item>
        <el-form-item label="商品描述">
          <el-input v-model="editDetail.description"></el-input>
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
  </el-card>
</template>

<script>
import { nanoid } from 'nanoid'
export default {
  name: 'GoodsList',
  data () {
    return {
      tableData: [{
        id: nanoid(),
        goodsName: '烤鸡',
        group: '农家产品',
        price: 99,
        picture: '../../../public/nr.png',
        description: '外焦里嫩'
      }, {
        id: nanoid(),
        goodsName: '烤鸡',
        group: '农家产品',
        price: 99,
        picture: '../../../public/nr.png',
        description: '外焦里嫩'
      }, {
        id: nanoid(),
        goodsName: '烤鸡',
        group: '农家产品',
        price: 99,
        picture: '../../../public/nr.png',
        description: '外焦里嫩'
      }, {
        id: nanoid(),
        goodsName: '烤鸡',
        group: '农家产品',
        price: 99,
        picture: '../../../public/nr.png',
        description: '外焦里嫩'
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
    deleteIofo (){
      this.tableData = this.tableData.filter((item)=>item.id !== this.deleteCurrentId)
      this.deleteDialogVisible = false
      this.$message.success('删除成功')
    },
    comfim () {
      this.editDialogVisible = false
      this.$message.success('修改成功')
    }
  }
}
</script>

<style lang="less" scoped>
</style>
