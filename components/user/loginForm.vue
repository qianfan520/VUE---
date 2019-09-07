
<template>
<!-- 这个文件主要用来渲染用户登入注册的功能 -->
<!-- model:绑定服务对象 -->
<!-- ref:获取DOM元素 this.$refs.form -->
<!-- rules:表单验证规则 -->
<!-- prop:绑定表单验证规则 -->
    <el-form 
        :model="form" 
        ref="form"
        :rules="rules" 
        class="form">

<!-- 用户输入框区域 -->
        <el-form-item class="form-item" prop="username">
            <el-input 
            v-model="form.username"
            placeholder="用户名/手机">
            </el-input>
        </el-form-item>

<!-- 用户密码输入框区域 -->
        <el-form-item class="form-item" prop="password">
            <el-input 
            v-model="form.password"
            placeholder="密码" 
            type="password">
            </el-input>
        </el-form-item>

        <p class="form-text">
            <nuxt-link to="#">忘记密码</nuxt-link>
        </p>

<!-- 用户登录按钮区域 -->
        <el-button 
        class="submit"
        type="primary"
        @click="handleLoginSubmit">
            登录
        </el-button>
    </el-form>

</template>

<script>
export default {
    data(){
        return {
            // 表单数据
            form: {
              //绑定登录组件
              username:'',  //用户名
              password:''    //密码
            },
            // 表单验证规则 这个只是负责验证,仍然可以提交
            rules: {
              username:[
                {required:true,message:'请输入用户名',trigger:'blur'}
              ],
                password:[
                {required:true,message:'请输入密码',trigger:'blur'}
              ],
            },
        }
    },
    // 方法
    methods: {
        // 提交登录
        handleLoginSubmit(){
          //element-ui的验证表单中的事件
           this.$refs.form.validate(valid =>{
              if(valid){
                //请求登录
                this.$axios({
                  url:"/accounts/login",
                  method:'POST',
                  data:this.form
                }).then(res =>{
                     console.log(res)
                })
              }else{
                   console.log("验证失败")
              }
           })
        }
    }
} 
</script>

<style scoped lang="less">
    .form{
        padding:25px;
    }

    .form-item{
        margin-bottom:20px;
    }

    .form-text{
        font-size:12px;
        color:#409EFF;
        text-align: right;
        line-height: 1;
    }

    .submit{
        width:100%;
        margin-top:10px;
    }
</style>
