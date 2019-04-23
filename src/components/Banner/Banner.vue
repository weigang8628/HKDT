 <template>
  <div class="home-banner">
    <div class="block">
      <el-carousel trigger="click" height="800px">
        <el-carousel-item class="item" v-for="item in 4" :key="item">
          <div class="container">
            <div class="text">
              <h3>HKDT</h3>
              <p>
                科技让数字盛宏
                <span>-更美好</span>
              </p>
              <div>全球化、安全、便捷</div>
            </div>
          </div>
          <img src="@/assets/img/banner1.png" alt>
        </el-carousel-item>
      </el-carousel>
    </div>
  </div>
</template>

<script>
export default {
  name: "banner",
  data() {
    return {};
  }
};
</script>
<style lang="less" scoped>
// banner
.home-banner {
  .item {
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
          font-size: 40px;
          display: flex;
          justify-content: center;
          align-items: center;
        }
      }
    }
  }
}
</style>