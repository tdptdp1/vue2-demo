<template>
  <div id="UpdateAccount">
    <el-card class="box-card">
      <div slot="header" class="clearfix">
        <span>修改密码</span>
      </div>
      <div  class="text item">
        <div class="content">
            <label for="" style="margin-left: 30px;">原密码</label>
            <el-input v-model="ruleFrom.uName" placeholder="请输入内容"></el-input>
        </div>
        <div class="content">
            <label for="" style="margin-left: 30px;">新密码</label>
            <el-input v-model="ruleFrom.uPassword" placeholder="请输入内容"></el-input>
        </div>
        <div class="content">
            <label for="" style="margin-left: 13px;">确认密码</label>
            <el-input v-model="ruleFrom.comfim" placeholder="请输入内容"></el-input>
        </div>
      </div>
      <div class="btn">
        <el-button type="primary">确定</el-button>
        <el-button  @click="resetForm()">重置</el-button>
      </div>
    </el-card>
  </div>
</template>

<script>
export default {
  name: 'UpdateAccount',
  data () {
    return {
      ruleFrom: {
        uName: '',
        uPassword: '',
        comfim: ''
      }
    }
  },
  methods: {
    resetForm () {
      for (const key in this.ruleFrom) {
        this.ruleFrom[key] = ''
      }
    }
  }
}
</script>

<style>
  #UpdateAccount{
    .content{
            min-width: 500px;
            margin-bottom: 20px;
            label{
            margin-right: 15px;
          }
          .el-input{
            width: 350px;
          }
          }
    .btn{
       margin-left: 73px;
    }
  }
</style>
