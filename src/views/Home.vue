<template>
  <div class="home">
    <!-- banner -->
    <Banner></Banner>
    <!-- 新闻  -->
    <div class="container-full">
      <div class="home-news container">
        <div class="title">
          <img src="@/assets/img/xinwen-icon.png" alt> 新闻
        </div>
        <div class="list">
          <a href="#">新闻的列表在这里显示新闻的列表</a>
        </div>
        <div class="more">
          <router-link to="news">更多新闻 >></router-link>
        </div>
      </div>
    </div>
    <!-- hkdt设计理念 -->
    <div class="section-bc">
      <!-- 通用title -->
      <div class="home-title">
        <h2>HKDT 设计理念</h2>
        <img src="@/assets/img/title-line.png" alt>
        <h3>高效链接法定货币和数字资产</h3>
      </div>
      <!-- 理念list -->
      <div class="container home-idea">
        <el-row>
          <el-col :span="8">
            <div class="item">
              <img src="@/assets/img/i-1.png" alt>
              <h3>1:1强兑换，稳定</h3>
              <p>锚定港元（1HKDT=1 港元）的强兑换体系，不受到数字资产市场长短期波动行为的影响。</p>
            </div>
          </el-col>
          <el-col :span="8">
            <div class="item active">
              <img src="@/assets/img/i-2.png" alt>
              <h3>1:1强兑换，稳定</h3>
              <p>锚定港元（1HKDT=1 港元）的强兑换体系，不受到数字资产市场长短期波动行为的影响。</p>
            </div>
          </el-col>
          <el-col :span="8">
            <div class="item">
              <img src="@/assets/img/i-3.png" alt>
              <h3>1:1强兑换，稳定</h3>
              <p>锚定港元（1HKDT=1 港元）的强兑换体系，不受到数字资产市场长短期波动行为的影响。</p>
            </div>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="8">
            <div class="item">
              <img src="@/assets/img/i-4.png" alt>
              <h3>1:1强兑换，稳定</h3>
              <p>锚定港元（1HKDT=1 港元）的强兑换体系，不受到数字资产市场长短期波动行为的影响。</p>
            </div>
          </el-col>
          <el-col :span="8">
            <div class="item">
              <img src="@/assets/img/i-5.png" alt>
              <h3>1:1强兑换，稳定</h3>
              <p>锚定港元（1HKDT=1 港元）的强兑换体系，不受到数字资产市场长短期波动行为的影响。</p>
            </div>
          </el-col>
          <el-col :span="8">
            <div class="item">
              <img src="@/assets/img/i-6.png" alt>
              <h3>1:1强兑换，稳定</h3>
              <p>锚定港元（1HKDT=1 港元）的强兑换体系，不受到数字资产市场长短期波动行为的影响。</p>
            </div>
          </el-col>
        </el-row>
      </div>
    </div>
    <!-- 为什么锚定港币？ -->
    <div class="section">
      <!-- 通用title -->
      <div class="home-title">
        <h2>为什么锚定港币？</h2>
        <img src="@/assets/img/title-line.png" alt>
      </div>
      <!-- why -->
      <div class="container home-why">
        <el-row>
          <el-col :span="6">
            <div class="item">
              <img src="@/assets/img/w-1.png" alt>
              <h3>1:1强兑换，稳定</h3>
              <p>香港连接世界与中国大陆；</p>
              <p>同时也能辐射东南亚，天然具有国际化的优势</p>
            </div>
          </el-col>
          <el-col :span="6">
            <div class="item">
              <img src="@/assets/img/w-2.png" alt>
              <h3>1:1强兑换，稳定</h3>
              <p>香港连接世界与中国大陆；</p>
              <p>同时也能辐射东南亚，天然具有国际化的优势</p>
            </div>
          </el-col>
          <el-col :span="6">
            <div class="item">
              <img src="@/assets/img/w-3.png" alt>
              <h3>1:1强兑换，稳定</h3>
              <p>香港连接世界与中国大陆；</p>
              <p>同时也能辐射东南亚，天然具有国际化的优势</p>
            </div>
          </el-col>
          <el-col :span="6">
            <div class="item">
              <img src="@/assets/img/w-4.png" alt>
              <h3>1:1强兑换，稳定</h3>
              <p>香港连接世界与中国大陆；</p>
              <p>同时也能辐射东南亚，天然具有国际化的优势</p>
            </div>
          </el-col>
        </el-row>
      </div>
    </div>
    <!-- 合作伙伴 -->
    <div class="section-bc partner">
      <!-- 合作伙伴 -->
      <div class="home-title">
        <h2>合作伙伴</h2>
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
        <h2>合作媒体</h2>
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
import HelloWorld from "@/components/HelloWorld.vue";

export default {
  name: "home",
  mounted(){
  },
  components: {
    HelloWorld
  }
};
</script>
<style lang="less" scoped>
// 新闻列表
.home-news {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 80px;
  .list {
    flex: 1;
    display: flex;
    padding-left: 50px;
    font-size: @fz24;
    a::before {
      content: "";
      display: inline-block;
      width: 10px;
      height: 10px;
      border-radius: 50%;
      background-color: @c333;
      margin-right: 15px;
    }
  }
  .title {
    display: flex;
    align-items: center;
    color: @c-primary;
    font-size: @fz22;
    img {
      margin-right: 10px;
    }
  }
  .more {
    font-size: @fz20;
    border-left: 1px solid #333333;
    padding-left: 20px;
  }
  // .more::before{
  //     content: '';
  //     display: inline-block;
  //     width: 2px;
  //     height: 25px;
  //     // border-radius: 50%;
  //     background-color: @c333;
  //     position: absolute;
  //     margin-left: -10px;

  //   }
}
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
.el-carousel__item h3 {
  color: #475669;
  font-size: 14px;
  opacity: 0.75;
  line-height: 150px;
  margin: 0;
}

.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n + 1) {
  background-color: #d3dce6;
}
</style>

