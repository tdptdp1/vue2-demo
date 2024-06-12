<template>
  <div id="AddAccount">
    <el-card class="box-card">
      <div slot="header" class="clearfix">
        <span>添加账号</span>
      </div>
      <div  class="text item">
        <div class="content">
            <label for="" style="margin-left: 30px;">账号</label>
            <el-input v-model="uName" placeholder="请输入内容"></el-input>
        </div>
        <div class="content">
            <label for="" style="margin-left: 30px;">密码</label>
            <el-input v-model="uPassword" placeholder="请输入内容"></el-input>
        </div>
        <div class="content">
            <label for="" style="margin-left: 13px;">用户组</label>
            <el-select v-model="selectName" placeholder="请选择" style="width: 350px;">
              <el-option
                v-for="item in options"
                :key="item.value"
                :label="item.label"
                :value="item.value">
              </el-option>
            </el-select>
        </div>
      </div>
      <div class="btn">
        <el-button type="primary">添加</el-button>
        <el-button>重置</el-button>
      </div>
    </el-card>
  </div>
</template>

<script>
export default {
  name: 'AddAccount',
  data () {
    return {
      selectName: '',
      uName: '',
      uPassword: '',
      options: [{
        value: '选项1',
        label: '牛魔王'
      }, {
        value: '选项2',
        label: '貂蝉'
      }, {
        value: '选项3',
        label: '妲己'
      }]
    }
  }
}
</script>

<style lang="less" scoped>
  #AddAccount{
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
