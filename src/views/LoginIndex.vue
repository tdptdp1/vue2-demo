<template>
  <div id="LoginIndex">
    <div class="login">
        <h3>系统登陆</h3>
        <el-input
          size="mini"
          v-model="uName">
          <i slot="prefix" class="el-input__icon iconfont icon-renxiang"></i>
        </el-input>
        <el-input
          :type="isSwitch ?  'text' : 'password'  "
          size="mini"
          v-model="uPassword">
          <i slot="prefix" class="el-input__icon iconfont icon-guansuo"></i>
          <i slot="suffix" class="el-input__icon iconfont " :class="isSwitch ? 'icon-zhengyan' : 'icon-biyan' " @click="showPassword"></i>
        </el-input>
        <el-button type="primary" @click="login">登录</el-button>
    </div>
  </div>
</template>

<script>
import '@/icons/iconfont.css'
export default {
  data () {
    return {
      uName: 'admin',
      uPassword: '123456',
      isSwitch: false
    }
  },
  methods: {
    showPassword () {
      this.isSwitch = !this.isSwitch
    },
    login () {
      if (!this.uName.trim()) {
        this.$message.error('请输入账号')
        return false
      }
      if (!this.uPassword.trim()) {
        this.$message.error('请输入密码')
        return false
      }
      if (this.uName.trim() === 'admin' && this.uPassword.trim() === '123456') {
        this.$router.push({
          path: '/BackHome'
        })
        this.$message.success('登录成功')
      } else {
        this.$message.error('请输入正确的密码或密码')
      }
    }
  },
  watch: {
    isSwitch: {
      immediate: true,
      handler () {
        if (this.isSwitch) {
          if (this.timeID) {
            clearTimeout(this.timeID)
          }
          this.timeID = setTimeout(() => {
            this.isSwitch = false
          }, 500)
        }
      }
    }
  }
}
</script>

<style lang="less" scoped>
  #LoginIndex{
    position: relative;
    height: 100%;
    background-color: #2D3A4B;
    .login{
      height: min-content;
      position: absolute;
      left: 0;
      right: 0;
      top: 0;
      bottom: 0;
      margin: auto;
      max-width: 300px;
      text-align: center;
      h3{
        color: white;
        margin-bottom: 20px;
      }
      .el-input{
        margin-bottom: 15px;
       ::v-deep .el-input__inner{
          background-color: transparent;
        }
      }
      .el-button{
        width: 100%;
        height: 30px;
        padding: 0;
        span{
          line-height: 30px;
        }
      }
    }
  }
</style>
