<template>
  <div id="storeMan">
      <el-card class="box-card">
        <div slot="header" class="clearfix">
          <span>店铺管理</span>
        </div>
        <div  class="text item">
          <div class="content">
            <label for="">店铺名称</label>
            <el-input v-model="storeName" placeholder="请输入内容"></el-input>
          </div>
          <div class="content top_conent">
            <label for="">店铺公告</label>
            <el-input
              type="textarea"
              :rows="5"
              placeholder="请输入内容"
              v-model="storeNotice">
            </el-input>
          </div>
          <div class="content top_conent">
            <label for="">店铺头像</label>
            <div class="block">
              <img src="../../assets/ths.jpg" alt="">
            </div>
          </div>
          <div class="content top_conent">
            <label for="">店铺图片</label>
            <div class="block">
              <img src="../../assets/ths.jpg" alt="">
              <img src="../../assets/ths.jpg" alt="">
            </div>
          </div>
          <div class="content top_conent">
            <el-upload
              action="https://jsonplaceholder.typicode.com/posts/"
              list-type="picture-card"
              :on-preview="handlePictureCardPreview"
              :on-remove="handleRemove">
              <i class="el-icon-plus"></i>
            </el-upload>
          </div>
        </div>
      </el-card>
  </div>
</template>

<script>
export default {
  name: 'StoreMan',
  data () {
    return {
      storeName: '牛战士餐厅（绵阳城市学院）',
      storeNotice: '牛战士餐厅是一家以牛肉为主打菜品的餐厅。它的装修风格现代简约，通常用暖色调和木质元素营造出舒适的用餐环境。'
    }
  }
}
</script>

<style lang="less" scoped>
  #storeMan{
    .box-card{
      .text{
        .content{
          margin-bottom: 20px;
          label{
          margin-right: 15px;
        }
          .el-input,.el-textarea{
            width: 280px;
          }
        }
        .top_conent{
          display: flex;
          align-items: flex-start;
          .block{
            display: flex;
            width: 100px;
            height: 100px;
            img{
              margin-right: 10px;
              width: 100%;
              border-radius: 8px;
            }
          }
          ::v-deep .el-upload{
            width: 100px;
            margin-left: 78px;
            height: 100px;
            line-height: 100px;
          }
        }
      }
    }
  }
</style>
