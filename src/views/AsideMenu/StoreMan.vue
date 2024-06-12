<template>
  <el-card class="box-card">
    <div slot="header" class="clearfix">
      <span>店铺管理</span>
      <el-button style="float: right; padding: 5px 10px" type="primary">保存</el-button>
    </div>
    <div  class="text item">
      <div class="store">
        <label for="">店铺管理</label>
        <el-input v-model="input" placeholder="请输入内容" >
        </el-input>
      </div>
      <div class="store">
        <label for="" class="notice">店铺公告</label>
        <el-input
        type="textarea"
        :rows="2"
        placeholder="请输入内容"
        v-model="textarea">
      </el-input>
      </div>
      <div class="store avatar">
        <label for="" class="notice">店铺头像</label>
        <div class="img">
          <img src="../../assets/ths.jpg" alt="">
        </div>
      </div>
      <div class="store avatar">
        <label for="" class="notice">店铺图片</label>
        <div class="img">
          <img src="../../assets/OIP.jpg" alt="">
        </div>
        <div class="img">
          <img src="../../assets/th.jpg" alt="">
        </div>
      </div>
      <div class="updateImg">
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
    </div>
  </el-card>
</template>

<script>
export default {
  name: 'StoreMan'
}
</script>

<style lang="less" scoped>
  .text {
    font-size: 14px;
  }

  .item {
    margin-bottom: 18px;
    .store{
      margin-bottom: 20px;
      text-wrap: nowrap;
      color: #7e7a7a;
      .el-input{
      width: 30%;
      height: 28px;
      min-width: 100px;
      margin:0 0 0 15px;
      /deep/ .el-input__inner{
        height: 100%;
      }
    }
    .notice{
        vertical-align: top
      }
      .el-textarea{
        width: 30%;
        min-width: 200px;
        margin:0 0 0 15px;
      }
      .img{
        width: 100px;
        height: 100px;
        margin-left: 15px;
        border-radius: 5px;
        overflow: hidden;
        img{
          height: 100%;
        }
      }
    }
  }
  .avatar{
    display: flex;
  }
  .clearfix:before,
  .clearfix:after {
    display: table;
    content: "";
  }
  .clearfix:after {
    clear: both
  }

  .box-card {
    width: 100%;
  }
  .updateImg{
    /deep/.el-upload{
      width: 100px;
      height: 100px;
      margin-left: 70px;
    }
  }
</style>
