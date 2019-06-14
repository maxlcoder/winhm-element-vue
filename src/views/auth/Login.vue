<template>
  <div>
    <el-row type="flex" justify="center">
      <el-col :span="6">
        <el-input v-model="username" placeholder="请输入用户名"></el-input>
      </el-col>
    </el-row>
    <el-row type="flex" justify="center">
      <el-col :span="6">
        <el-input v-model="password" placeholder="请输入密码" show-password></el-input>
      </el-col>
    </el-row>
    <el-row type="flex" justify="center">
      <el-col :span="6">
        <el-button type="success" class="login">登录</el-button>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  name: 'Login',
  data() {
    return {
      username: '',
      password: '',
    };
  },
};
</script>

<style>
  .el-row {
    margin: 10px;
  }
  .login {
    width: 100%;
  }
</style>
