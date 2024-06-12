import Vue from 'vue'
import VueRouter from 'vue-router'
/* 组件引入 */
import VueLayout from '@/views/VueLayout.vue'
import AccountMan from '@/views/AsideMenu/AccountMan.vue'
import BackHome from '@/views/AsideMenu/BackHome.vue'
import GoodsMan from '@/views/AsideMenu/GoodsMan.vue'
import OderMan from '@/views/AsideMenu/OderMan.vue'
import SellTotal from '@/views/AsideMenu/SellTotal.vue'
import StoreMan from '@/views/AsideMenu/StoreMan.vue'
import AccountList from '@/views/AccountChidren/AccountList.vue'
import AddAccount from '@/views/AccountChidren/AddAccount.vue'
import UpdateAccount from '@/views/AccountChidren/UpdateAccount.vue'
import GoodsAdd from '@/views/GoodsChildren/GoodsAdd.vue'
import GoodsGroup from '@/views/GoodsChildren/GoodsGroup.vue'
import GoodsList from '@/views/GoodsChildren/GoodsList.vue'
import OrderTotal from '@/views/SellTotalChildren.vue/OrderTotal.vue'
import ShopTotal from '@/views/SellTotalChildren.vue/ShopTotal.vue'
import LoginIndex from '@/views/LoginIndex.vue'
/* 注册路由 */
Vue.use(VueRouter)
/* 创建路由实例 */
const router = new VueRouter({
  routes: [
    { path: '/', redirect: '/LoginIndex' },
    {
      path: '/',
      component: VueLayout,
      meta: { navTitle: '首页' },
      children: [
        {
          path: 'AccountMan',
          component: AccountMan,
          meta: { navTitle: '账号管理' },
          children: [
            { path: 'AccountList', component: AccountList, meta: { navTitle: '账号列表' } },
            { path: 'AddAccount', component: AddAccount, meta: { navTitle: '添加账号' } },
            { path: 'UpdateAccount', component: UpdateAccount, meta: { navTitle: '修改密码' } }
          ]
        },
        { path: 'BackHome', component: BackHome, meta: { navTitle: '后台首页' } },
        {
          path: 'GoodsMan',
          component: GoodsMan,
          meta: { navTitle: '商品管理' },
          children: [
            { path: 'GoodsAdd', component: GoodsAdd, meta: { navTitle: '商品添加' } },
            { path: 'GoodsGroup', component: GoodsGroup, meta: { navTitle: '商品分类' } },
            { path: 'GoodsList', component: GoodsList, meta: { navTitle: '商品列表' } }
          ]
        },
        {
          path: 'OderMan',
          component: OderMan,
          meta: { navTitle: '订单管理' },
          children: [
            { path: 'OrderTotal', component: OrderTotal },
            { path: 'ShopTotal', component: ShopTotal }
          ]
        },
        {
          path: 'SellTotal',
          component: SellTotal,
          meta: { navTitle: '销售统计' },
          children: [
            { path: 'ShopTotal', component: ShopTotal, meta: { navTitle: '商品统计' } },
            { path: 'OrderTotal', component: OrderTotal, meta: { navTitle: '订单统计' } }
          ]
        },
        { path: 'StoreMan', component: StoreMan, meta: { navTitle: '店铺管理' } }
      ]
    },
    { path: '/LoginIndex', component: LoginIndex }
  ]
})

export default router
