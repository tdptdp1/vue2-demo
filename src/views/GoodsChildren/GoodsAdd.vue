<template>
  <div id="GoodsAdd">
    <el-card class="box-card">
      <div slot="header" class="clearfix">
        <span>商品添加</span>
      </div>
      <div  class="text item">
        <div class="content">
          <label for="">商品添加</label>
          <el-input v-model="addGoods" placeholder="商品名称"></el-input>
        </div>
        <div class="content">
          <label for="">商品分类</label>
          <el-select v-model="value" placeholder="请选择商品分类">
            <el-option
              v-for="item in options"
              :key="item.value"
              :label="item.label"
              :value="item.value">
            </el-option>
          </el-select>
        </div>
        <div class="content">
          <label for="">商品价格</label>
          <el-input-number v-model="num" @change="handleChange" :min="1" :max="10" label="描述文字"></el-input-number>
        </div>
        <div class="content">
          <label for="">商品图片</label>
          <el-upload
            action="https://jsonplaceholder.typicode.com/posts/"
            list-type="picture-card"
            :on-preview="handlePictureCardPreview"
            :on-remove="handleRemove">
            <i class="el-icon-plus"></i>
          </el-upload>
          <el-dialog :visible.sync="dialogVisible">
            <img width="100%" :src="dialogImageUrl" alt="">
          </el-dialog>
        </div>
        <div class="content">
          <label for="">商品描述</label>
          <el-input
            type="textarea"
            :rows="2"
            placeholder="请输入内容"
            v-model="textarea">
          </el-input>
        </div>
        <div class="content">
          <el-button type="primary" class="emitGoods">添加商品</el-button>
        </div>
      </div>
    </el-card>
  </div>
</template>

<script>
export default {
  name: 'GoodsAdd',
  data () {
    return {
      options: [{
        value: '选项1',
        label: '黄金糕'
      }, {
        value: '选项2',
        label: '双皮奶'
      }, {
        value: '选项3',
        label: '蚵仔煎'
      }, {
        value: '选项4',
        label: '龙须面'
      }, {
        value: '选项5',
        label: '北京烤鸭'
      }],
      addGoods: '',
      num: 1
    }
  }
}
</script>

<style lang="less" scoped>
  .content{
    display: flex;
    margin-bottom: 20px;
    label{
      margin-right: 20px
    }
    .el-input{
      width: 350px;
    }
    .el-textarea{
      width: 350px;
    }
    .emitGoods{
      margin-left: 80px;
    }
  }
</style>
