 <template>
  <div class="home-banner">
    <div class="block">
      <el-carousel
        trigger="click"
        :height="bannerheight+'px'"
        :interval="5000"
        ref="carousel"
        arrow="never"
        indicator-position="none"
        @change="change"
      >
        <el-carousel-item class="item" v-for="item in bannerList" :key="item">
          <!-- <div class="container">
            <div class="text">
              <h3>{{$t('banner.item1.title')}}</h3>
              <p>
                {{$t('banner.item1.title2')}}
                <span>{{$t('banner.item1.title3')}}</span>
              </p>
              <div>{{$t('banner.item1.title4')}}</div>
            </div>
          </div>-->
          <a href="#">
            <img src="@/assets/img/banner1.png" alt>
          </a>
        </el-carousel-item>
      </el-carousel>
      <!-- 指示器 -->
      <div class="indicators">
        <ul>
          <li
            :class="currentIndex == index ?'active':''"
            v-for="(item,index) in bannerList"
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
  name: "banner",
  data() {
    return {
      bannerList: [1, 2, 3, 4],
      currentIndex: 0,
      bannerheight: 0
    };
  },
  mounted() {
    this.resizefn();
    window.onresize = () => {
      this.resizefn();
    };
  },
  methods: {
    resizefn() {
      if (document.documentElement.clientWidth > 1920) {
        this.bannerheight = 1920 * 0.41667;
      } else {
        let clientWidth = document.documentElement.clientWidth;
        this.bannerheight = clientWidth * 0.41667;
      }
    },
    mouseenter(index) {
      console.log(index);

      this.currentIndex = index;
      this.$refs.carousel.setActiveItem(index);
    },
    change(index) {
      this.currentIndex = index;
    }
  }
};
</script>
<style lang="less" scoped>
// banner
.home-banner {
  .item {
    img {
      max-width: 100%;
    }
    > div {
      position: relative;
      .text {
        position: absolute;
        top: 223px;
        color: #ffffff;
        text-align: left;

        h3 {
          font-size: 66px;
          color: #ffffff;
          opacity: 1;
          line-height: 1;
          font-weight: bold;
        }
        p {
          margin-top: 40px;
          font-size: 56px;
          font-weight: lighter;
          span {
            font-weight: bold;
          }
        }
        > div {
          margin-top: 50px;
          background-color: #e7a42e;
          color: #ffffff;
          width: 450px;
          height: 80px;
          border-radius: 100px;
          font-size: 36px;
          display: flex;
          justify-content: center;
          align-items: center;
        }
      }
    }
  }
}
// 指示器
.indicators {
  margin-top: -50px;
  z-index: 2;
  position: relative;
  padding-bottom: 36px;
  ul {
    display: flex;
    justify-content: center;
    align-items: center;
    li {
      width: 36px;
      height: 8px;
      background-color: #ffffff;
      margin: 0 10px;
      border-radius: 20px;
      opacity: 0.6;
    }
    li.active {
      width: 36px;
      height: 8px;
      opacity: 1;
      background-color: @c-primary;
      //   transition: 0.5s;
    }
  }
}
</style>