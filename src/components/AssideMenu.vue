<template>
  <div id="AssideMenu">
    <el-col :span="24">
      <div class="nikName" >
      <div class="topImg">
        <img src="../assets/zj.png" alt="">
      </div>
      <span>外卖商家中心</span>
    </div>
    <el-menu
      router
      :default-active="this.$route.fullPath"
      class="el-menu-vertical-demo"
      background-color="#304156"
      text-color="#fff"
      active-text-color="#1296DB">
      <el-menu-item index="/BackHome">
        <i class="el-icon-s-home"></i>
        <span slot="title">后台首页</span>
      </el-menu-item>
      <el-menu-item index="/OderMan">
        <i class="el-icon-s-order"></i>
        <span slot="title">订单管理</span>
      </el-menu-item>
      <el-submenu index="/GoodsMan">
        <template slot="title">
          <i class="el-icon-goods"></i>
          <span>商品管理</span>
        </template>
          <el-menu-item index="/GoodsMan/GoodsList">商品列表</el-menu-item>
          <el-menu-item index="/GoodsMan/GoodsAdd">商品添加</el-menu-item>
          <el-menu-item index="/GoodsMan/GoodsGroup">商品分类</el-menu-item>
      </el-submenu>
      <el-menu-item index="/StoreMan">
        <i class="el-icon-s-shop"></i>
        <span slot="title">店铺管理</span>
      </el-menu-item>
      <el-submenu index="/AccountMan">
        <template slot="title">
          <i class="el-icon-s-custom"></i>
          <span>账号管理</span>
        </template>
          <el-menu-item index="/AccountMan/AccountList">账号列表</el-menu-item>
          <el-menu-item index="/AccountMan/AddAccount">添加账号</el-menu-item>
          <el-menu-item index="/AccountMan/UpdateAccount">修改密码</el-menu-item>
      </el-submenu>
      <el-submenu index="/SellTotal">
        <template slot="title">
          <i class="el-icon-pie-chart"></i>
          <span>销售统计</span>
        </template>
          <el-menu-item index="/SellTotal/ShopTotal">商品统计</el-menu-item>
          <el-menu-item index="/SellTotal/OrderTotal">订单统计</el-menu-item>
      </el-submenu>
    </el-menu>
    </el-col>
  </div>
</template>

<script>
export default {
  name: 'AssideMenu'
}
</script>

<style lang="less" scoped>
  #AssideMenu{
    flex: 0 0 230px;
    height: 100%;
    overflow: hidden;
    .el-col{
      height: 100%;
      .el-menu{
        height: 100%;
        border-right: none;
      }
    }
    .nikName{
      display: flex;
      align-items: center;
      height: 50px;
      color: white;
      box-sizing: border-box;
      background-color: #304156;
      .topImg{
        display: flex;
        align-items: center;
        justify-content: center;
        width: 40px;
        height: 40px;
        border-radius: 50%;
        margin-right: 10px;
        margin-left: 23px;
        background-color: #1886C2;
        img{
          width: 65%;
        }
      }
    }
  }
</style>
