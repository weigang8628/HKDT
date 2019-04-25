<template>
  <div class="home-news container">
    <div class="title">
      <img src="@/assets/img/xinwen-icon.png" alt>
      {{$t('honmenews.title')}}
    </div>
    <div class="list">
      <ul>
        <li ref="rollul" v-for="(item,index) in newList" :key="index" :class="{anim:animate==true}">
          <a href="#">{{item.title}}</a>
        </li>
      </ul>
    </div>
    <div class="more">
      <router-link to="news">{{$t('honmenews.more')}} >></router-link>
    </div>
  </div>
</template>

<script>
import { clearInterval } from "timers";
export default {
  name: "",
  props: {
    newList: {
      type: Array,
      default: function() {}
    }
  },
  data() {
    return {
      animate: true,
      time: null
    };
  },
  created() {
    // this.time = setInterval(this.scroll, 2000);
  },
  methods: {
    // scroll() {
    //   let con1 = this.$refs.rollul;
    //   con1[0].style.marginTop = "30px";
    //   this.animate = !this.animate;
    //   var that = this;
    //   this.time = setTimeout(function() {
    //     that.newList.push(that.newList[0]);
    //     that.newList.shift();
    //     con1[0].style.marginTop = "0px";
    //     that.animate = !that.animate; // 这个地方如果不把animate 取反会出现消息回滚的现象，此时把ul 元素的过渡属性取消掉就可以完美实现无缝滚动的效果了
    //   }, 1000);
    // }
  },
  destroyed() {
    // clearInterval(this.time);
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
    height: 36px;
    overflow: hidden;
    // transition: all 0.5s;
    ul {
      li {
        transition: all 0.5s;
        display: flex;
        align-items: center;
      }
      li::before {
        content: "";
        display: inline-block;
        width: 10px;
        height: 10px;
        border-radius: 50%;
        background-color: @c333;
        margin-right: 15px;
      }
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
</style>
