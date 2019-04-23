<template>
  <div class="news">
    <!-- banner -->
    <Banner></Banner>
    <!-- news-title -->
    <!-- 新闻 -->
    <div class="container section">
      <div class="news-title">
        <h3>新闻</h3>
        <span>
          <router-link to="news-list?type=industry">查看更多>></router-link>
        </span>
      </div>
      <div class="news-list-box">
        <div class="pic">
          <img src="http://www.pptok.com/wp-content/uploads/2012/08/xunguang-4.jpg">
        </div>
        <div class="list">
          <ul>
            <li class="active">
              <a href="#">
                <h3 class="line-clamp1">弄ID彼此哦的吧你从对比你弄ID彼此哦的吧你从对比你ID彼此哦的吧你从对比弄ID彼此哦的吧你从对比你哦…</h3>
                <span>2017.6.26</span>
              </a>
            </li>
            <li>
              <a href="#">
                <h3 class="line-clamp1">弄ID彼此哦的吧你从对比你哦…</h3>
                <span>2017.6.26</span>
              </a>
            </li>
            <li>
              <a href="#">
                <h3 class="line-clamp1">弄ID彼此哦的吧你从对比你哦…</h3>
                <span>2017.6.26</span>
              </a>
            </li>
            <li>
              <a href="#">
                <h3 class="line-clamp1">弄ID彼此哦的吧你从对比你哦…</h3>
                <span>2017.6.26</span>
              </a>
            </li>
            <li>
              <a href="#">
                <h3 class="line-clamp1">弄ID彼此哦的吧你从对比你哦…</h3>
                <span>2017.6.26</span>
              </a>
            </li>
            <li>
              <a href="#">
                <h3 class="line-clamp1">弄ID彼此哦的吧你从对比你哦…</h3>
                <span>2017.6.26</span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <!-- 行业 -->
    <div class="container-full section-bc">
      <div class="container">
        <div class="news-title">
          <h3>行业</h3>
          <span>
            <router-link to="news-list?type=industry">查看更多>></router-link>
          </span>
        </div>
        <!-- why -->
        <div class="home-why">
          <el-row class="why-box">
            <el-col :span="6">
              <div class="item">
                <img src="http://www.pptok.com/wp-content/uploads/2012/08/xunguang-4.jpg" alt>
                <h3 class="line-clamp2">文章标题文章标题文章标题文章标题文章标标题文章标标题文章标标题文章标标题文章</h3>
                <p>2018.10.31</p>
              </div>
            </el-col>
            <el-col :span="6">
              <div class="item">
                <img src="http://www.pptok.com/wp-content/uploads/2012/08/xunguang-4.jpg" alt>
                <h3 class="line-clamp2">文章标题文章标题文章标题文章标题文章标标题文章标标题文章标标题文章标标题文章</h3>
                <p>2018.10.31</p>
              </div>
            </el-col>
            <el-col :span="6">
              <div class="item">
                <img src="http://www.pptok.com/wp-content/uploads/2012/08/xunguang-4.jpg" alt>
                <h3 class="line-clamp2">文章标题文章标题</h3>
                <p>2018.10.31</p>
              </div>
            </el-col>
            <el-col :span="6">
              <div class="item">
                <img src="http://www.pptok.com/wp-content/uploads/2012/08/xunguang-4.jpg" alt>
                <h3 class="line-clamp2">文章标题文章标题文章标题文章标题文章标标题文章标标题文章标标题文章标标题文章</h3>
                <p>2018.10.31</p>
              </div>
            </el-col>
          </el-row>
        </div>
      </div>
    </div>
    <!-- 视频 -->
    <div class="container-full section">
      <div class="container">
        <div class="news-title">
          <h3>视频</h3>
          <span>
            <a href="#">查看更多>></a>
          </span>
        </div>
        <div class="news-video">
          <div class="video">视频</div>
          <!-- 通用title -->
          <div class="home-title">
            <h2>文章的标题的文章的标题的文章的标题</h2>
            <img src="@/assets/img/title-line.png" alt>
            <h3>文章的标题的文章的标题的文章的标题文章的标题的文章的标题的文章的标题文章的标题的文章的标题的文章的标题文章的标题的文章的标题的文章的标题文章的标题的文章的标题的文章的标题文章的标题的文章的标题的文章的标题</h3>
          </div>
        </div>
      </div>
    </div>
    <!-- 新闻 -->
    <div class="container-full section-bc">
      <div class="container">
        <!-- 通用title -->
        <div class="home-title">
          <h2>观点</h2>
          <img src="@/assets/img/title-line.png" alt>
          <div class="gd-list">
            <el-carousel :initial-index=currentIndex>
              <el-carousel-item v-for="(item,index) in gdlist" :key="index">
                <li>
                  <h3>{{item.title}}</h3>
                </li>
              </el-carousel-item>
            </el-carousel>
          </div>
        </div>
      </div>
      <div class="indicators">
        <ul>
          <li class="active" v-for="(item,index) in gdlist" :key="index" @mouseenter="mouseenter(index)"></li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "news",
  data() {
    return {
      currentIndex: 0,
      gdlist: [
        {
          title:
            "文章的标题的文章的标题的文章的标题文章的标题的文章的标题的文章",
          img: ""
        },
        {
          title: "222222222222222",
          img: ""
        },
        {
          title: "333333333333333333333",
          img: ""
        }
      ]
    };
  },
  methods:{
    mouseenter(index){
      console.log(index);
      
this.currentIndex = index;
    }
  }
};
</script>

<style lang="less" scoped>
// 首页通用title
.home-title {
  // display: flex;
  text-align: center;
  width: 774px;
  margin: auto;
  // justify-content: center;
  h2 {
    font-size: @fz30;
    color: @c333;
  }
  img {
    margin-top: 20px;
  }
  h3 {
    font-size: @fz22;
    margin-top: 38px;
    color: @c666;
    line-height: 30px;
  }
}
.news-title {
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #d5d5d5;
  padding: 30px 0;
  h3 {
    display: flex;
    align-items: center;
    font-size: @fz30;
    color: @c-primary;
  }
  h3::before {
    content: "";
    display: inline-block;
    width: 6px;
    height: 29px;
    background-color: @c-primary;
    margin-right: 20px;
  }
  span {
    font-size: @fz20;
    a {
      color: @c666;
    }
  }
}
// 图文列表
.news-list-box {
  display: flex;
  padding: 10px 0;
  .pic {
    width: 50%;
    padding-top: 20px;
    img {
      width: 100%;
    }
  }
  .list {
    width: 50%;
    padding-left: 60px;
    box-sizing: border-box;
    ul {
      li {
        line-height: 82px;
        border-bottom: 1px solid #d5d5d5;
        a {
          display: flex;
          justify-content: space-between;
          align-items: center;
          font-size: @fz20;

          color: @c666;
          h3 {
            display: flex;
            align-items: center;
          }
          h3::before {
            content: "";
            display: inline-block;
            display: block;
            width: 0;
            height: 0;
            margin-right: 10px;
            border-width: 8px 0 8px 8px;
            border-style: solid;
            border-color: transparent transparent transparent @c-primary; /*透明 透明 透明 黄*/
            // position:absolute;
            // top:0px;
            // left:0px;
          }
          span {
            font-size: @fz20;
          }
        }
      }
      li.active {
        a {
          color: @c-primary;
        }
      }
    }
  }
}
// why
.home-why {
  padding: 50px 0;
  color: @c666;
  .why-box {
    margin: 0 -20px;
  }
  .item {
    padding: 0px 0px 30px 0px;
    min-height: 300px;
    margin: 5px 20px;
    border-radius: 10px;
    background-color: @c-fff;
    box-shadow: 0 0 10px #f1f1f1;
    overflow: hidden;
    img {
      height: 327px;
      // width: 100%;
    }
    h3 {
      font-size: @fz20;
      padding: 20px 20px 0px 20px;
      text-align: left;
      line-height: 28px;
      // color: #c98938;
      min-height: 55px;
    }
    p {
      line-height: 28px;
      font-size: @fz18;
      color: @c999;
      text-align: right;
      // margin-top: 30px;
      padding: 20px 20px 0 0;
    }
  }
  .item:hover {
    background-color: @c-fff;
    border-radius: 10px;
    box-shadow: 0 0 30px #e6e6e6;
    transition: 0.5s;
    h3 {
      color: @c-primary;
      transition: 0.5s;
    }
  }
}
// 视频
.news-video {
  .video {
    width: 1030px;
    height: 575px;
    border-radius: 10px;
    margin: auto;
    margin-top: 80px;
    margin-bottom: 60px;
    background-color: #d5d5d5;
  }
}
// 指示器
.indicators {
  margin-top: 50px;
  ul {
    display: flex;
    justify-content: center;
    align-items: center;
    li {
      width: 14px;
      height: 14px;
      background-color: @c-primary;
      margin: 0 10px;
      border-radius: 20px;
      opacity: 0.6;
    }
    li.active {
      width: 20px;
      height: 14px;
      opacity: 1;
    }
  }
}
.gd-list {
  ul {
    display: block;
    overflow: hidden;
    li {
      float: left;
    }
  }
}
</style>

