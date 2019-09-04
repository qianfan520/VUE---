<template>
  <!-- 这个文件用来展示网站首页的内容 -->
  <div class="container">
    <!-- el-carousel:轮播图组件的意思  
  arrow:左右切换箭头总是显示 
    interval:图片切换间隔时间-->
    <el-carousel :interval="1000" arrow="always">
      <!-- l-carousel-item:指幻灯片的每一项 -->
      <el-carousel-item v-for="(item,index) in banners " :key="index">
        <h3>{{ item }}</h3>
        <!-- 以下是轮播图的背景图片区域 -->
        <!-- background-size：控制背景图片的大小，自适应宽高 -->
        <div
          class="banner-image"
          :style="`
            background:url(${ $axios.defaults.baseURL + item.url}) center center no-repeat;
            background-size:contain contain;`"
        ></div>
      </el-carousel-item>
    </el-carousel>
    <!-- 网站首页搜索区域 -->
    <div class="banner-content">
      <div class="search-bar">
        <!-- tab栏区域 -->
        <el-row type="flex" class="search-tab">
          <span
            v-for="(item,index) in options"
            :key="index"
            @click="handleClick(click)"
            :class="{active:current === index}"
          >
            <i>{{item.title}}</i>
          </span>
        </el-row>

        <!-- 网站首页输入框区域 -->
        <el-row type="flex" align="middle" class="search-input">
          <input :placeholder="options[current].placeholder" />
          <i class="el-icon-search"></i>
        </el-row>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data: {
    return: {
      //开始实现轮播的效果
      // 1.给所有图片创建一个数组
      banners: [
        "http://157.122.54.189:9095/assets/images/th01.jfif",
        "http://157.122.54.189:9095/assets/images/th02.jfif",
        "http://157.122.54.189:9095/assets/images/th03.jfif"
      ],
      // 定义搜索TAB切换的数据
      options: [
        {
          name: "攻略",
          placeholder: "搜索城市",
          pageUrl: "/post?city="
        },
        {
          name: "酒店",
          placeholder: "请输入城市搜索酒店",
          pageUrl: "/hotel?city="
        },
        {
          name: "机票",
          placeholder: "请输入出发地",
          pageUrl: "/air"
        }
      ],
      //设置索引值,当current=0的时候,就显示攻略,等于1 的时候就显示酒店
      searchValue: "", // 搜索框的值
      currentOption: 0 // 当前选中的选项
    }
  },
  mounted() {
    // 2.请求轮播图的数据
    // 该写法是一种通用的标准，nuxt帮我们封装好了。
    // vue.prototype.$axios = axios;
    this.$axio({
      url: "/scenics/banners"
    }).then(res => {
      // 3.获取轮播图的数组
      // const data = res.data.data; 可以解构为下行代码
      const {data} = res.data;  
      // 4.赋值给banners
      this.banners = data;
    });
    console.dir(this.$axios);
  },
  methods: {
    //设置点击搜索的TAB栏是触发
    handleClick(index) {
      //设置点击索引2的时候,代表点击是机票
      if (index === 2) {
        // 路由规则虽然pages可以直接访问，不需要配置
        // 但是可以通用路由的方法
        this.$router.push("/air");
      }
      //把当前点击的索引赋值给current
      this.current = index;
    },
    // 切换tab栏触发
    handleOption(index) {
      // 设置当前tab
      this.currentOption = index;
      如果切换的是机票tavern;
    },
    // 搜索的时候触发
    handleSearch() {
      const item = this.options[this.currentOption];
      //跳转的时候给对应的页面url加上搜索内容参数
      this.$router.push(item.pageUrl + this.searchValue);
    }
  }
};
</script>
<style scoped lang="less">
.container {
  min-width: 1000px;
  margin: 0 auto;
  position: relative;
  /deep/ .el-carousel__container {
    height: 700px;
  }
  .banner-image {
    width: 100%;
    height: 100%;
  }
  .banner-content {
    z-index: 9;
    width: 1000px;
    position: absolute;
    left: 50%;
    top: 45%;
    margin-left: -500px;
    border-top: 1px transparent solid;
    .search-bar {
      width: 552px;
      margin: 0 auto;
    }
    .search-tab {
      .active {
        i {
          color: #333;
        }
        &::after {
          background: #eee;
        }
      }
      span {
        width: 82px;
        height: 36px;
        display: block;
        position: relative;
        margin-right: 8px;
        cursor: pointer;
        i {
          position: absolute;
          z-index: 2;
          display: block;
          width: 100%;
          height: 100%;
          line-height: 30px;
          text-align: center;
          color: #fff;
        }
        &:after {
          position: absolute;
          left: 0;
          top: 0;
          display: block;
          content: "";
          width: 100%;
          height: 100%;
          border: 1px rgba(255, 255, 255, 0.2) solid;
          border-bottom: none;
          transform: scale(1.1, 1.3) perspective(0.7em) rotateX(2.2deg);
          transform-origin: bottom left;
          background: rgba(0, 0, 0, 0.5);
          border-radius: 1px 2px 0 0;
          box-sizing: border-box;
        }
      }
    }
    .search-input {
      width: 550px;
      height: 46px;
      background: #fff;
      border-radius: 0 4px 4px 4px;
      border: 1px rgba(255, 255, 255, 0.2) solid;
      border-top: none;
      box-sizing: unset;
      input {
        flex: 1;
        height: 20px;
        padding: 13px 15px;
        outline: none;
        border: 0;
        font-size: 16px;
      }
      .el-icon-search {
        cursor: pointer;
        font-size: 22px;
        padding: 0 10px;
        font-weight: bold;
      }
    }
  }
}
</style>