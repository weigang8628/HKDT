<template>
  <div class="header" :style="{background:'rgba(26,26,26,'+opacity+')'}">
    <div class="header-content container">
      <!-- logo -->
      <div class="logo">
        <router-link to="/">
          <img src="@/assets/img/logo.png" alt srcset>
        </router-link>
      </div>
      <!-- 导航 -->
      <div class="nav">
        <ul>
          <li :class="currentRouter == '/'?'active':''">
            <router-link to="/home">{{$t('nav.home')}}</router-link>
          </li>
          <li :class="currentRouter == '/book'?'active':''">
            <router-link to="/book">{{$t('nav.book')}}</router-link>
          </li>
          <li :class="currentRouter == '/wallet'?'active':''">
            <router-link to="/wallet">{{$t('nav.wallet')}}</router-link>
          </li>
          <li
            :class="currentRouter == '/news'?'active':''"
            v-popover:popover1
            @mouseover="mouseover"
            @mouseout="mouseout"
          >
            <router-link to="/about">{{$t('nav.about.title')}}</router-link>
            <i :class="iconrotate==true?'active':''" class="el-icon-arrow-down"></i>
          </li>
        </ul>
        <!-- 关于子菜单 -->
        <el-popover ref="popover1" placement="bottom-start" width="150" trigger="hover">
          <div class="about-list">
            <ul>
              <li>
                <router-link to="/about/hkdt">{{$t('nav.about.list.hkdt')}}</router-link>
              </li>
              <li>
                <router-link to="/news">{{$t('nav.about.list.news')}}</router-link>
              </li>
              <li>
                <router-link to="/about/exchange">{{$t('nav.about.list.ahzjys')}}</router-link>
              </li>
            </ul>
          </div>
        </el-popover>
      </div>
      <!-- 语言切换 -->
      <div class="language" v-popover:popover2>
        {{$t('locale')}}
        <i class="el-icon-arrow-down"></i>
        <el-popover ref="popover2" placement="bottom" width="150" trigger="hover">
          <div class="language-list">
            <ul>
              <li v-for="(item,index) in language" :key="index" @click="languageClick(item)">
                <a href="javascript:;">{{item.title}}</a>
              </li>
            </ul>
          </div>
        </el-popover>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "",
  props: {
    opacity: {
      type: Number,
      default: function() {
        return 1;
      }
    }
  },
  data() {
    return {
      iconrotate: false,
      i18ndata: {},
      activeIndex: "1",
      activeIndex2: "1",
      visible: false,
      language: [
        {
          title: "简体中文",
          locale: "zh_CN"
        },
        {
          title: "繁體中文",
          locale: "zh_HK"
        },
        {
          title: "English",
          locale: "en_US"
        }
      ],
      currentRouter: ""
    };
  },
  created() {
    // this.i18ndata = sessionStorage.getItem('locale');
    this.currentRouter = this.$route.path;
  },
  methods: {
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
    },
    languageClick(item) {
      this.visible = false;
      this.$i18n.locale = item.locale; //切换语言
      // this.i18ndata = this.$i18n.messages[item.locale];
      sessionStorage.setItem('locale',item.locale)//存入缓存
      console.log(this.$i18n.messages[item.locale]);
      
    },
    mouseover() {
      this.iconrotate = true;
    },
    mouseout() {
      this.iconrotate = false;
    }
  },
  watch: {
    $route(to, from) {
      this.currentRouter = this.$route.path;
    }
  }
};
</script>
<style lang="less" scoped>
h1 {
  color: @color-red;
}
.header {
  position: fixed;
  width: 100%;
  z-index: 3;
  // background: #1a1a1a;
  top: 0;
  .logo {
    img {
      width: 168px;
      height: 63px;
    }
  }
  .header-content {
    display: flex;
    // width: 80%;
    height: 100px;
    margin: 0 auto;
    align-items: center;
  }
  .nav {
    flex: 1;
    display: flex;
    justify-content: center;
    font-size: @fz18;
    ul {
      display: flex;
      width: 450px;
      justify-content: space-between;
      li {
        text-align: center;
        color: @c-fff;
        opacity: 0.8;
        a {
          color: @c-fff;
        }
        i{
          margin-left: 5px;
        }
      }
      li.active {
        opacity: 1;
        font-size: 20px;
      }
    }
  }
  .language {
    border: @border-white;
    border-radius: 50px;
    font-size: 18px;
    color: #ffffff;
    width: 160px;
    height: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    span {
      font-size: @fz18;
    }
    i {
      margin-left: 10px;
    }
  }
}
.language-list ul li {
  margin: 10px 0 10px 0;
  text-align: center;
  font-size: @fz20;
}
.about-list ul li {
  margin: 10px 0 10px 0;
  text-align: left;
  font-size: @fz20;
}
</style>
