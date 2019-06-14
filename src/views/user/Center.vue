<template>
  <div>
    <el-row type="flex" justify="center">
      <el-col :span="6">
         <el-image
          style="width: 100px; height: 100px"
          :src="url"
          :fit="fit"></el-image>
      </el-col>
    </el-row>
    <el-row type="flex" justify="center">
      <el-col :span="6">
        <span>{{ username }}</span>
      </el-col>
    </el-row>
    <el-row type="flex" justify="center" :gutter="12">
      <el-col :span="2">
        <el-card shadow="always">
          12
        </el-card>
        
      </el-col>
      <el-col :span="2">
        <el-card shadow="always">
          12
        </el-card>
      </el-col>
      <el-col :span="2">
        <el-card shadow="always">
          12
        </el-card>
      </el-col>
    </el-row>
    <el-row>
      <span>{{ description }}</span>
    </el-row>
    
  </div>
</template>

<script>
export default {
  name: 'Center',
  data() {
    return {
      username: 'Woody',
      description: '说明说明说明说明说明说明说明说明说明说明说明说明说明说明说明说明',
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
