<template>
  <!-- why -->
  <div>
    <!-- 合作伙伴 -->
    <div class="section partner">
      <!-- 合作伙伴 -->
      <div class="home-title">
        <h2>合作伙伴</h2>
        <img src="@/assets/img/title-line.png" alt>
      </div>

      <div class="partner-list">
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
      <!-- map -->
      <div class="map">
        <div
          class="circle"
          v-for="(item , index) in maplist"
          :key="index"
          :style="{left:item.x+'px',top:item.y+'px'}"
          @mouseenter="mouseenter(index)"
          @mouseleave="mouseleave"
        >
          <div class="circle-title">
            <div class="circle1"></div>
            <div class="circle2"></div>
            <div class="circle3"></div>
          </div>
          <div class="circle-box" v-if="index==currentindex">
            <div class="line1"></div>
            <div class="line2"></div>
            <img src="@/assets/img/p-10.png" alt>
          </div>
        </div>
      </div>
    </div>
    <div class="hkdt_wrap2">
            <div class="lilte_circle">
                <div class="circle"></div>
                <div class="circle2"></div>
                
            </div>   
        </div>
  </div>
</template>

<script>
export default {
  name: "book",
  data() {
    return {
      currentindex: -1,
      maplist: [
        {
          title: "",
          img: "",
          x: 475,
          y: 75
        },
        {
          title: "",
          img: "",
          x: 342,
          y: 222
        },
        {
          title: "",
          img: "",
          x: 400,
          y: 481
        },
        {
          title: "",
          img: "",
          x: 682,
          y: 377
        },
        {
          title: "",
          img: "",
          x: 741,
          y: 417
        }
        ,
        {
          title: "",
          img: "",
          x: 876,
          y: 127
        },
        {
          title: "",
          img: "",
          x: 982,
          y: 309
        }
        ,
        {
          title: "",
          img: "",
          x: 1081,
          y: 160
        }
        ,
        {
          title: "",
          img: "",
          x: 1078,
          y: 256
        },
        {
          title: "",
          img: "",
          x: 1170,
          y: 546
        }
      ]
    };
  },
  methods: {
    mouseenter(index) {
      console.log("移入", index);
      this.currentindex = index;
    },
    mouseleave() {
      console.log("移出");
      this.currentindex = -1;
    }
  },
  components: {
    // HelloWorld
  }
};
</script>
<style lang="less" scoped>
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
          border: 1px solid #d5d5d5;
          img {
            max-width: 100%;
          }
        }
      }
    }
  }
}
.map {
  position: relative;
  width: 1359px;
  height: 671px;
  margin: auto;
  margin-top: 130px;
  background-image: url("../assets/img/world.png");
  background-repeat: no-repeat;

  .circle {
    position: absolute;

    .circle-title {
      width: 50px;
      height: 50px;
      margin-left: -17px;
      margin-top: -22px;
      display: flex;
      justify-content: center;
      align-items: center;
      .circle1 {
        width: 10px;
        height: 10px;
        border-radius: 50%;
        background-color: #ff0000;
        animation: warn 1s ease-out;
    animation-iteration-count: infinite;
      }
      .circle2 {
        width: 20px;
        height: 20px;
        border-radius: 50%;
        background: #ff7a2a;
        opacity: 0.8;
        text-align: center;
        margin-left: -15px;
        animation: warn 1s ease-out;
        animation-iteration-count: infinite;
        animation: warn 2s ease-out;
    animation-iteration-count: infinite;
      }
      .circle3 {
        width: 30px;
        height: 30px;
        border-radius: 50%;
        opacity: 0.8;
        background: #ff7a2a;
        opacity: 0.8;
        text-align: center;
        margin-left: -25px;
        animation: warn 1s ease-out;
        animation-iteration-count: infinite;
      }
    }
    .circle-box {
      position: absolute;
      top: -100px;
      left: 100px;
      // border: 1px solid #ff0000;
      .line1 {
        width: 96px;
        height: 1px;
        background-color: #8a8a8a;
        position: absolute;
        top: 22px;
        left: -96px;
      }
      .line2 {
        height: 76px;
        width: 1px;
        background-color: #8a8a8a;
        position: absolute;
        left: -96px;
        top: 22px;
      }
    }
  }
}


@keyframes warn {
    0% {
        transform: scale(1);
        opacity: .8;
    }
    25% {
        transform: scale(1.1);
        opacity: 0.8;
    }
    50% {
        transform: scale(1.2);
        opacity: 0.6;
    }
    75% {
        transform: scale(1.3);
        opacity: 0.4;
    }
    100% {
        transform: scale(1.4);
        opacity: 0.2;
    }
}
// 媒体查询
@media only screen and (max-width:768px) {
    .partner .partner-list ul li{
        width: 50%;
    }
    .map{
        transform: scale(0.6)
    }
}
</style>

