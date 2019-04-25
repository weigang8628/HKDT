<template>
  <div class="home">
    <!-- banner -->
    <Banner></Banner>
    <!-- 新闻  -->

    <div class="container-full">
      <News :newList="newList"></News>
    </div>
    <!-- hkdt设计理念 -->
    <div class="section-bc">
      <!-- 通用title -->
      <div class="home-title">
        <h2>{{$t('homeidea.title')}}</h2>
        <img src="@/assets/img/title-line.png" alt>
        <h3>{{$t('homeidea.title2')}}</h3>
      </div>
      <!-- 理念list -->
      <div class="container home-idea">
        <el-row>
          <el-col :xs="24" :sm="24" :md="8">
            <div class="item">
              <img src="@/assets/img/i-1.png" alt>
              <h3>{{$t('homeidea.list.item1.title')}}</h3>
              <p>{{$t('homeidea.list.item1.info')}}</p>
            </div>
          </el-col>
          <el-col :xs="24" :sm="24" :md="8">
            <div class="item">
              <img src="@/assets/img/i-2.png" alt>
              <h3>{{$t('homeidea.list.item2.title')}}</h3>
              <p>{{$t('homeidea.list.item2.info')}}</p>
            </div>
          </el-col>
          <el-col :xs="24" :sm="24" :md="8">
            <div class="item">
              <img src="@/assets/img/i-3.png" alt>
              <h3>{{$t('homeidea.list.item3.title')}}</h3>
              <p>{{$t('homeidea.list.item3.info')}}</p>
            </div>
          </el-col>
        </el-row>
        <el-row>
          <el-col :xs="24" :sm="24" :md="8">
            <div class="item">
              <img src="@/assets/img/i-4.png" alt>
              <h3>{{$t('homeidea.list.item4.title')}}</h3>
              <p>{{$t('homeidea.list.item4.info')}}</p>
            </div>
          </el-col>
          <el-col :xs="24" :sm="24" :md="8">
            <div class="item">
              <img src="@/assets/img/i-5.png" alt>
              <h3>{{$t('homeidea.list.item5.title')}}</h3>
              <p>{{$t('homeidea.list.item5.info')}}</p>
            </div>
          </el-col>
          <el-col :xs="24" :sm="24" :md="8">
            <div class="item">
              <img src="@/assets/img/i-6.png" alt>
              <h3>{{$t('homeidea.list.item6.title')}}</h3>
              <p>{{$t('homeidea.list.item6.info')}}</p>
            </div>
          </el-col>
        </el-row>
      </div>
    </div>
    <!-- 为什么锚定港币？ -->
    <div class="section">
      <!-- 通用title -->
      <div class="home-title">
        <h2>{{$t('homewhy.title')}}</h2>
        <img src="@/assets/img/title-line.png" alt>
      </div>
      <!-- why -->
      <div class="container home-why">
        <el-row>
          <el-col :xs="24" :sm="24" :md="6">
            <div class="item">
              <img src="@/assets/img/w-1.png" alt>
              <h3>{{$t('homewhy.list.item1.title')}}</h3>
              <p>{{$t('homewhy.list.item1.info')}}</p>
              <p>{{$t('homewhy.list.item1.info2')}}</p>
            </div>
          </el-col>
          <el-col :xs="24" :sm="24" :md="6">
            <div class="item">
              <img src="@/assets/img/w-2.png" alt>
              <h3>{{$t('homewhy.list.item2.title')}}</h3>
              <p>{{$t('homewhy.list.item2.info')}}</p>
              <p>{{$t('homewhy.list.item2.info2')}}</p>
            </div>
          </el-col>
          <el-col :xs="24" :sm="24" :md="6">
            <div class="item">
              <img src="@/assets/img/w-3.png" alt>
              <h3>{{$t('homewhy.list.item3.title')}}</h3>
              <p>{{$t('homewhy.list.item3.info')}}</p>
              <p>{{$t('homewhy.list.item3.info2')}}</p>
            </div>
          </el-col>
          <el-col :xs="24" :sm="24" :md="6">
            <div class="item">
              <img src="@/assets/img/w-4.png" alt>
              <h3>{{$t('homewhy.list.item4.title')}}</h3>
              <p>{{$t('homewhy.list.item4.info')}}</p>
              <p>{{$t('homewhy.list.item4.info2')}}</p>
            </div>
          </el-col>
        </el-row>
      </div>
    </div>
    <!-- 合作伙伴 -->
    <div class="section-bc partner">
      <!-- 合作伙伴 -->
      <div class="home-title">
        <h2>{{$t('homepartner.title')}}</h2>
        <img src="@/assets/img/title-line.png" alt>
      </div>
      <div class="container partner-list">
        <ul>
          <li>
            <div class="w">
              <img src="@/assets/img/p-1.png" alt>
            </div>
          </li>
          <li>
            <div class="w">
              <img src="@/assets/img/p-2.png" alt>
            </div>
          </li>
          <li>
            <div class="w">
              <img src="@/assets/img/p-3.png" alt>
            </div>
          </li>
          <li>
            <div class="w">
              <img src="@/assets/img/p-4.png" alt>
            </div>
          </li>
          <li>
            <div class="w">
              <img src="@/assets/img/p-5.png" alt>
            </div>
          </li>
          <li>
            <div class="w">
              <img src="@/assets/img/p-6.png" alt>
            </div>
          </li>
          <li>
            <div class="w">
              <img src="@/assets/img/p-7.png" alt>
            </div>
          </li>
          <li>
            <div class="w">
              <img src="@/assets/img/p-8.png" alt>
            </div>
          </li>
          <li>
            <div class="w">
              <img src="@/assets/img/p-9.png" alt>
            </div>
          </li>
          <li>
            <div class="w">
              <img src="@/assets/img/p-10.png" alt>
            </div>
          </li>
        </ul>
      </div>
    </div>
    <!-- 合作媒体 -->
    <div class="section media">
      <!-- 合作媒体 -->
      <div class="home-title">
        <h2>{{$t('homemedia.title')}}</h2>
        <img src="@/assets/img/title-line.png" alt>
      </div>
      <div class="container media-list">
        <ul>
          <li>
            <div class="w">
              <img src="@/assets/img/m-1.png" alt>
            </div>
          </li>
          <li>
            <div class="w">
              <img src="@/assets/img/m-2.png" alt>
            </div>
          </li>
          <li>
            <div class="w">
              <img src="@/assets/img/m-3.png" alt>
            </div>
          </li>
          <li>
            <div class="w">
              <img src="@/assets/img/m-4.png" alt>
            </div>
          </li>
          <li>
            <div class="w">
              <img src="@/assets/img/m-5.png" alt>
            </div>
          </li>
          <li>
            <div class="w">
              <img src="@/assets/img/m-6.png" alt>
            </div>
          </li>
          <li>
            <div class="w">
              <img src="@/assets/img/m-7.png" alt>
            </div>
          </li>
          <li>
            <div class="w">
              <img src="@/assets/img/m-8.png" alt>
            </div>
          </li>
          <li>
            <div class="w">
              <img src="@/assets/img/m-9.png" alt>
            </div>
          </li>
          <li>
            <div class="w">
              <img src="@/assets/img/m-10.png" alt>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import News from "@/components/Home/News.vue";

export default {
  name: "home",
  data() {
    return {
      newList: [
        {
          title: "1234234243",
          url: "http://"
        }
      ]
    };
  },
  created() {},
  mounted() {},
  methods: {},
  components: {
    News
  }
};
</script>
<style lang="less" scoped>
// 设计理念
.home-idea {
  padding: 50px;
  color: @c666;
  .item {
    padding: 50px 30px;
    margin: 10px;
    text-align: center;
    img {
      height: 55px;
    }
    h3 {
      font-size: @fz24;
      padding-top: 38px;
    }
    p {
      line-height: 28px;
      font-size: @fz18;
      color: @c999;
      margin-top: 30px;
    }
  }
  .item:hover {
    background-color: #ffffff;
    border-radius: 10px;
    box-shadow: 0 0 30px #e6e6e6;
    transition: 0.5s;
    p {
      color: @c666;
      transition: 0.5s;
    }
  }
}
// why
.home-why {
  padding: 50px;
  color: @c666;
  .item {
    padding: 80px 30px 50px 30px;
    min-height: 300px;
    margin: 5px 20px;
    background-color: #ffffff;
    box-shadow: 0 0 10px #f1f1f1;
    text-align: center;
    img {
      height: 100px;
    }
    h3 {
      font-size: @fz24;
      padding-top: 29px;
      color: #c98938;
    }
    p {
      line-height: 28px;
      font-size: @fz18;
      color: @c999;
      text-align: left;
      margin-top: 30px;
    }
    p:last-child {
      margin-top: 10px;
    }
  }
  .item:hover {
    background-color: #ffffff;
    border-radius: 10px;
    box-shadow: 0 0 30px #e6e6e6;
    transition: 0.5s;
    p {
      color: @c666;
      transition: 0.5s;
    }
  }
}
// 合作伙伴
.partner {
  .partner-list {
    margin-top: 30px;
    ul {
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
      li {
        width: 20%;
        // margin-bottom: 10px;
        .w {
          background-color: #ffffff;
          padding: 15px 20px;
          margin: 10px 10px;
          height: 64px;
          display: flex;
          justify-content: center;
          align-items: center;
          img {
            max-width: 100%;
          }
        }
      }
    }
  }
}
// 合作伙伴
.media {
  .media-list {
    margin-top: 30px;
    ul {
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
      li {
        width: 20%;
        // margin-bottom: 10px;
        .w {
          background-color: #ffffff;
          padding: 15px 20px;
          margin: 10px 10px;

          img {
            max-width: 100%;
          }
        }
      }
    }
  }
}
</style>

