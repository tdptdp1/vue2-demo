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
          <template>
            <el-button
              size="mini"
              type="primary"
              >编辑</el-button>
            <el-button
              size="mini"
              type="danger"
             >删除</el-button>
          </template>
        </el-table-column>
      </el-table>
    </div>
  </el-card>
</template>

<script>
export default {
  name: 'GoodsList',
  data () {
    return {
      tableData: [{
        goodsName: '烤鸡',
        group: '农家产品',
        price: 99,
        picture: '../../../public/nr.png',
        description: '外焦里嫩'
      }, {
        goodsName: '烤鸡',
        group: '农家产品',
        price: 99,
        picture: '../../../public/nr.png',
        description: '外焦里嫩'
      }, {
        goodsName: '烤鸡',
        group: '农家产品',
        price: 99,
        picture: '../../../public/nr.png',
        description: '外焦里嫩'
      }, {
        goodsName: '烤鸡',
        group: '农家产品',
        price: 99,
        picture: '../../../public/nr.png',
        description: '外焦里嫩'
      }]
    }
  },
  methods: {
    handleEdit (index, row) {
      console.log(index, row)
    },
    handleDelete (index, row) {
      console.log(index, row)
    }
  }
}
</script>

<style lang="less" scoped>
</style>
