<template>
  <div class="container">
    <!-- justify-content:space-between:让元素左右对齐 -->
    <el-row type="flex" class="main" jjustify="space-between">
      <!-- 头部logo板块 -->
      <div class="logo">
        <img src="http://157.122.54.189:9093/images/logo.jpg" alt="陈二狗" />
      </div>

      <!-- 头部分类板块 -->
      <el-row type="flex" class="navs">
        <!-- nuxt-link的作用和使用方式和router-link一样 -->
        <nuxt-link to="/index">首页</nuxt-link>
        <nuxt-link to="/post">旅游攻略</nuxt-link>
        <nuxt-link to="/hotel">酒店</nuxt-link>
        <nuxt-link to="/air">国内机票</nuxt-link>
      </el-row>

      <!-- 如果用户存在,展示用户信息,数据来之state -->
      <el-dropdown v-if="$store.state.user.userInfo.token">
        <el-row type="flex" align="middle" class="el-dropdown-link">
          <nuxt-link to="#">
            <img :src="$axios.defaults.baseURL + $store.state.user.userInfo.user.defaultAvatar" />
            {{$store.state.user.userInfo.user.nickname}}
          </nuxt-link>
          <i class="el-icon-caret-bottom el-icon--right"></i>
        </el-row>
        <!-- 其他代码... -->
      </el-dropdown>
      <!-- 头部登入跳转板块 -->
      <div>
        <nuxt-link to="/user/login">登录/注册</nuxt-link>
      </div>
    </el-row>
  </div>
</template>

<script>
export default {
  methods:{
    //用户退出
    handleLogout(){
     const {commit} = this.$store;
     commit('user/cleanUserInfo');
     this.$message({
       message:'退出成功',
       type:'success'
     })
    }
  }
};
</script>

<style lang='less' scoped>
.container {
  height: 60px;
  line-height: 60px;
  border-bottom: 1px solid #ddd;
  box-shadow: 0 2px 2px #ddd;
}
.main {
  width: 1000px;
  margin: 0 auto;
}
.navs {
  flex: 1;
  margin-left: 10px;
  a {
    display: block;
    height: 60px;
    padding: 0 20px;
    box-sizing: border-box;
    &:hover {
      color: #409eff;
      border-bottom: 5px #409eff solid;
    }
  }
  // 该class是nuxt会去自动匹配nuxt-link的to的值，如果url和to的值相等会自动加上下面的class
  .nuxt-link-exact-active {
    background-clip: #409eff;
    color: #fff;
    &:hover {
      color: #fff;
    }
  }
}
.logo {
  padding-top: 9px;
  img {
    width: 156px;
    height: 42px;
    display: block;
  }
}
</style>