<template>
  <div class="news">
    <!-- banner -->
    <Banner></Banner>
    <!-- news-title -->
    <!-- 新闻 -->
    <div class="container section">
      <div class="news-title">
        <h3>{{$t('news.news.title')}}</h3>
        <span>
          <router-link to="news-list?type=news">{{$t('news.news.more')}}>></router-link>
        </span>
      </div>
      <div class="news-list-box">
        <div class="pic">
          <div class="block">
            <el-carousel
              ref="carouselNews"
              :interval="5000"
              indicator-position="none"
              @change="changeNews"
            >
              <el-carousel-item v-for="item in 4" :key="item">
                <!-- <h3>{{ item }}</h3> -->
                <img src="http://www.pptok.com/wp-content/uploads/2012/08/xunguang-4.jpg" alt>
              </el-carousel-item>
            </el-carousel>
          </div>
        </div>
        <div class="list">
          <ul>
            <li
              :class="currentIndexNews == index?'active':''"
              v-for="(item,index) in newsList"
              :key="index"
              @mouseenter="mouseenterNews(index)"
              @click="goArticle(item.id)"
            >
              <a href="javascript:;">
                <h3 class="line-clamp1">{{item.title}}</h3>
                <span>{{item.date}}</span>
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
          <h3>{{$t('news.industry.title')}}</h3>
          <span>
            <router-link to="news-list?type=industry">{{$t('news.industry.more')}}>></router-link>
          </span>
        </div>
        <!-- why -->
        <div class="home-why">
          <el-row class="why-box">
            <el-col :xs="12" :sm="12" :md="6" v-for="(item,index) in industryList" :key="index">
              <div class="item" @click="goArticle(item.id)">
                <a href="javascript:;">
                  <img :src="item.url" alt>
                  <h3 class="line-clamp2">{{item.title}}</h3>
                  <p>{{item.date}}</p>
                </a>
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
          <h3>{{$t('news.video.title')}}</h3>
          <span>
            <a href="#">{{$t('news.video.more')}}>></a>
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
    <!-- 观点 -->
    <div class="container-full section-bc">
      <div class="container">
        <!-- 通用title -->
        <div class="home-title">
          <h2>{{$t('news.comments.title')}}</h2>
          <img src="@/assets/img/title-line.png" alt>
          <!-- 观点列表 -->
          <div class="gd-list">
            <el-carousel
              ref="carousel"
              :interval="5000"
              arrow="never"
              indicator-position="none"
              height="150px"
              @change="change"
            >
              <el-carousel-item v-for="(item,index) in commentsList" :key="index">
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
          <li
            :class="currentIndex == index ?'active':''"
            v-for="(item,index) in commentsList"
            :key="index"
            @mouseenter="mouseenter(index)"
          ></li>
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
      currentIndexNews: 0,
      // 新闻
      newsList: [
        {
          title:
            "文章的标题的文章的标题的文章的标题文章的标题章的标题文章的标章的标题文章的标章的标题文章的标的文章的标题的文章",
          date: "2019.02.23",
          id: "11111111111"
        },
        {
          title:
            "章的标题文章的标章的标题文章的标章的标题文章的标章的标题文章的标章的标题文章的标",
          date: "2019.02.23",
          id: "11111111112"
        },
        {
          title:
            "33333333333章的标题文章的标章的标题文章的标章的标题文章的标章的标题文章的标3333333333",
          date: "2019.02.23",
          id: "11111111113"
        },
        {
          title:
            "33333333333章的标题文章的标章的标题文章的标章的标题文章的标章的标题文章的标3333333333",
          date: "2019.02.23",
          id: "11111111114"
        },
        {
          title:
            "33333333333章的标题文章的标章的标题文章的标章的标题文章的标章的标题文章的标3333333333",
          date: "2019.02.23",
          id: "11111111115"
        },
        {
          title:
            "33333333333章的标题文章的标章的标题文章的标章的标题文章的标章的标题文章的标3333333333",
          date: "2019.02.23",
          id: "11111111116"
        }
      ],
      // 观点列表
      commentsList: [
        {
          title:
            "文章的标题的文章的标题的文章的标题文章的标题章的标题文章的标章的标题文章的标章的标题文章的标的文章的标题的文章",
          img: ""
        },
        {
          title:
            "章的标题文章的标章的标题文章的标章的标题文章的标章的标题文章的标章的标题文章的标",
          img: ""
        },
        {
          title:
            "33333333333章的标题文章的标章的标题文章的标章的标题文章的标章的标题文章的标3333333333",
          img: ""
        }
      ],
      // 行业新闻
      industryList: [
        {
          title:
            "33333333333章的标题文章的标章的标题文章的标章的标题文章的标章的标题文章的标3333333333",
          img: "http://www.pptok.com/wp-content/uploads/2012/08/xunguang-4.jpg",
          date: "2018.05.13",
          id:'1111111111'
        },
        {
          title:
            "的标题文章的标章的标题文章的标章的标题文章的标章的标题文章的标3333333333",
          img: "http://www.pptok.com/wp-content/uploads/2012/08/xunguang-4.jpg",
          date: "2018.05.13",
          id:'1111111112'
        },
        {
          title:
            "标题文章的标章的标题文章的标章的标题文章的标章的标题文章的标3333333333",
          img: "http://www.pptok.com/wp-content/uploads/2012/08/xunguang-4.jpg",
          date: "2018.05.13",
          id:'1111111113'
        },
        {
          title:
            "33333333333章的标题文章的标章的标题文章的标章的标题文章的标章的标题文章的标3333333333",
          img: "http://www.pptok.com/wp-content/uploads/2012/08/xunguang-4.jpg",
          date: "2018.05.13",
          id:'1111111114'
        }
      ]
    };
  },
  methods: {
    mouseenter(index) {
      console.log(index);
      this.currentIndex = index;
      this.$refs.carousel.setActiveItem(index);
    },
    change(index) {
      this.currentIndex = index;
    },
    changeNews(index) {
      this.currentIndexNews = index;
    },
    //
    mouseenterNews(index) {
      this.currentIndexNews = index;
      this.$refs.carouselNews.setActiveItem(index);
    },
    // 打开详情
    goArticle(id) {
      this.$router.push({
        path: "article",
        query: {
          type: "",
          id: id
        }
      });
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
            // display: flex;
            align-items: center;
            padding-right: 10px;
          }
          h3::before {
            content: "";
            display: inline-block;
            // display: block;
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
      //   transition: 0.5s;
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

