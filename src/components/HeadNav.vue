<template>
  <div id="HeadNav">
    <!-- 头部导航 -->
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item :to="{ path:'/'}" v-for="item in $route.matched" :key="item.path">{{ item.meta.navTitle }}</el-breadcrumb-item>
    </el-breadcrumb>
    <div class="avatar">
      <span>欢迎你,牛战士</span>
      <img src="../assets/bull.png" alt="">
    </div>
  </div>
</template>

<script>
export default {
  name: 'HeadNav'
}
</script>

<style lang="less" scoped>
  #HeadNav{
    display: flex;
    justify-content: space-between;
    background-color: white;
    .el-breadcrumb{
      padding: 20px;
    }
    .avatar{
      display: flex;
      align-items: center;
      margin-right: 50px;
      img{
        margin-left: 15px;
        width: 40px;
        height: 40px;
        border-radius: 50%;
      }
    }
  }
</style>
