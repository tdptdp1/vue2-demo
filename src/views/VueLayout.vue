<template>
  <div id="VueLayout">
    <!-- 侧边栏菜单 -->
    <AssideMenu/>
    <!-- 右侧展示区 -->
    <div id="main">
      <!-- 头部导航 -->
      <HeadNav/>
      <!-- 内容区 -->
      <div id="content">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script>
import AssideMenu from '@/components/AssideMenu.vue'
import HeadNav from '@/components/HeadNav.vue'
export default {
  name: 'VueLayout',
  components: {
    AssideMenu,
    HeadNav
  }
}
</script>

<style lang="less" scoped>
  #VueLayout{
    display: flex;
    height: 100%;
    background-color: #ddd;
    #main{
      flex: 1;
      #content{
        padding: 20px;
        height: 100%;
      }
    }
  }
</style>
