<template>
  <!-- 这个文件主要用来实现首页登入框的内容 -->
  <el-form :model="form" ref="form" :rules="rules" class="form">
    <!-- 添加porp属性,为了实现当输入框为空的时候出现提示语 -->
    <el-form-item class="form-item" prop="username">
      <!-- 添加双向绑定实现表单验证 -->
      <el-input placeholder="用户名/手机" v-model="form.username"></el-input>
    </el-form-item>
    <el-form-item class="form-item" prop="password">
      <el-input placeholder="密码" type="password" v-model="form.password"></el-input>
    </el-form-item>

    <p class="form-text">
      <nuxt-link to="#">忘记密码</nuxt-link>
    </p>

    <el-button class="submit" type="primary" @click="handleLoginSubmit">登录</el-button>
  </el-form>
</template>

<script>
export default {
  data() {
    return {
      // 表单数据
      form: {
        username: "", //设置用户名为空
        password: "" //设置密码为空
      },
      // 表单规则
      rules: {
        username: [
          {
            required: true,
            message: "请输入用户名",
            trigger: "blur"
          }
        ],
        password: [
          {
            required: true,
            message: "请输入密码",
            trigger: "blur" //设置当鼠标失去焦点,触发这条验证规则
          }
        ]
      }
    };
  },
  methods: {
    // 提交登录
    handleLoginSubmit() {
      // 验证表单
      this.$refs["form"].validate(valid => {
        // 为true表示没有错误
        if (valid) {
          //在已经操作了管理数据,那么下面代码可以替换成
          // this.$axios({
          //   url: "/accounts/login",
          //   method: "POST",
          //   data: this.form
          // }).then(res => {
          //   console.log(res.data);
          // });
          this.$store.dispatch('user/login',this.form).then(res=>{
            //登入成功提示
            this.$message({
              message:'登入成功,正在跳转',
              type:'success'
            });
            //跳转到页面
             setTimeout(()=>{
               this.$router.replace('/')
             },1000);
             //如果登入成功后,跳转到用户页面就要把头部信息显示为登入后的,在herder文件修改
          })
        }
      });
    }
  }
};
</script>

<style scoped lang="less">
.form {
  padding: 25px;
}

.form-item {
  margin-bottom: 20px;
}

.form-text {
  font-size: 12px;
  color: #409eff;
  text-align: right;
  line-height: 1;
}

.submit {
  width: 100%;
  margin-top: 10px;
}
</style>