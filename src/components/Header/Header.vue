 <template>
  <div class="header" :style="{background:'rgba(26,26,26,'+opacity+')'}">
    <!-- {{i18ndata}}
    {{opacity}} -->
    <div class="header-content">
      <!-- logo -->
      <div class="logo">
        <router-link to="/">
          <img src="../../assets/img/logo.png" alt srcset>
        </router-link>
      </div>
      <!-- 导航 -->
      <div class="nav">
        <ul>
          <li v-for="(item,key) in i18ndata.nav" :key="key">
            <router-link :to="'/'+key">{{item}}</router-link>
          </li>
        </ul>
      </div>
      <!-- 语言切换 -->
      <div class="language" @click="visible = !visible">
        <el-button slot="reference" type="text">
          {{crrentLanguage}}
          <i class="el-icon-arrow-down"></i>
        </el-button>
        <el-popover placement="bottom" width="150" trigger="manual" v-model="visible">
          <div class="language-list">
            <ul>
              <li v-for="(item,index) in language" :key="index" @click="languageClick(item)">
                <a href="javascript:;">{{item.title}}</a>
              </li>
            </ul>
          </div>
        </el-popover>
        <!-- <el-menu>
    <el-submenu index="9">
        <template slot="title">简体中文</template>
        <el-menu-item index="9-1">简体中文</el-menu-item>
        <el-menu-item index="9-2">English</el-menu-item>
      </el-submenu>
        </el-menu>-->
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name:'',
  props: {
  opacity: {
      type: Number,
      default: function () {
        return 1
      }
    }
  },
  data() {
    return {
      i18ndata: {},
      activeIndex: "1",
      activeIndex2: "1",
      visible: false,
      crrentLanguage: "简体中文",
      language: [
        {
          title: "简体中文",
          locale: "zh_CN"
        },
        {
          title: "繁体中文",
          locale: "zh_CN"
        },
        {
          title: "English",
          locale: "en_US"
        }
      ]
    };
  },
  created() {
    this.i18ndata = this.$i18n.messages["zh_CN"];
  },
  methods: {
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
    },
    languageClick(item) {
      this.crrentLanguage = item.title;
      this.visible = false;
      this.$i18n.locale = item.locale; //切换语言
      this.i18ndata = this.$i18n.messages[item.locale];
      console.log(this.$i18n.messages[item.locale]);
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
    width: 80%;
    height: 100px;
    margin: 0 auto;
    align-items: center;
  }
  .nav {
    flex: 1;
    display: flex;
    justify-content: center;
    font-size: @fz18;
    opacity: 0.8;
    ul {
      display: flex;
      width: 60%;
      justify-content: space-between;
      li {
        a {
          color: @c-fff;
        }
      }
    }
  }
  .language {
    border: @border-white;
    border-radius: 50px;
    // padding: 0 30px;
    width: 160px;
    height: 40px;

    span {
      font-size: @fz18;
    }
    .el-button--text {
      color: @c-fff;
      i {
        color: @c-fff;
      }
    }
  }
}
.language-list ul li {
  margin: 10px 0 10px 0;
  text-align: center;
  font-size: @fz20;
}
</style>
