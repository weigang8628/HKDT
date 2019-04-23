 <template>
  <div class="container-full footer">
    <div class="footer-list container">
      <div class="footer-logo">
        <img src="@/assets/img/logo.png" alt>
      </div>
      <div class="footer-about">
        <div class="title">关于我们</div>
        <div class="list">
          <ul>
            <li>商务合作：chenx@hkdt.org</li>
            <li>商务合作：chenx@hkdt.org</li>
            <li>商务合作：chenx@hkdt.org</li>
          </ul>
        </div>
      </div>
      <div class="footer-media">
        <div class="title">HKDT官方媒体</div>
        <div class="list">
          <ul>
            <li slot="reference">
              <div class="icon">
                <img src="@/assets/img/f-1.png" alt>
              </div>
              <div class="text">官方微信订阅</div>
            </li>
            
            <li>
              <div class="icon">
                <img src="@/assets/img/f-2.png" alt>
              </div>
              <div class="text">Twitter</div>
            </li>
            <li>
              <div class="icon">
                <img src="@/assets/img/f-3.png" alt>
              </div>
              <div class="text">Twitter</div>
            </li>
            <li>
              <div class="icon">
                <img src="@/assets/img/f-4.png" alt>
              </div>
              <div class="text">Twitter</div>
            </li>
            <li>
              <div class="icon">
                <img src="@/assets/img/f-5.png" alt>
              </div>
              <div class="text">Twitter</div>
            </li>
            <li>
              <div class="icon">
                <img src="@/assets/img/f-6.png" alt>
              </div>
              <div class="text">Twitter</div>
            </li>
            <li>
              <div class="icon">
                <img src="@/assets/img/f-7.png" alt>
              </div>
              <div class="text">Twitter</div>
            </li>
          </ul>
        </div>
      </div>
      <div class="footer-wallet">
        <div class="title">HKDT钱包下载</div>
        <div class="list">
          <img src="http://res.cjyun.org/a/10146/201808/68b5b1d742cb00efa00804dd87bada05.png" alt>
        </div>
      </div>
    </div>
    <div class="footer-copyright">@2019 HKDT，版权所有。</div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      msg: "全局footer"
    };
  },
  methods:{
    showfn(){
      console.log('移入');
      
      
    }
  }
};
</script>
<style lang="less" scoped>
.footer {
  background-color: #1a1a1a;
  padding: 40px 0 48px 0;
  color: #ffffff;
  .footer-list {
    display: flex;
    justify-content: space-between;
    .title {
      font-size: @fz24;
      text-align: left;
      opacity: 0.8;
      margin-top: 13px;
      margin-bottom: 10px;
    }
    .list {
      font-size: @fz14;
    }
    // logo
    .footer-logo {
      img {
        width: 147px;
      }
    }
    // 关于
    .footer-about {
      .list {
        ul {
          li {
            padding: 18px 0;
            text-align: left;
            font-size: @fz18;
            opacity: 0.6;
          }
        }
      }
    }
    // 媒体
    .footer-media {
      width: 39%;
      .list {
        ul {
          display: flex;
          flex-wrap: wrap;
          justify-content: space-between;
          li {
            display: flex;
            font-size: @fz18;
            margin: 10px 0;
            width: 160px;
            opacity: 0.6;
            .icon {
              width: 40px;
              height: 40px;
              display: flex;
              justify-content: center;
              align-items: center;
              // border: 2px solid #ffffff;
              box-sizing: border-box;
              border-radius: 50%;
              margin-right: 10px;
              img {
                // width: 18px;
              }
            }
            .text {
              line-height: 35px;
            }
          }
          li:hover {
            opacity: 1;
          }
        }
      }
    }
    // 钱包
    .footer-wallet {
      .list {
        opacity: 1;
        padding-top: 18px;
        img {
          width: 150px;
          height: 150px;
        }
      }
    }
  }
  .footer-copyright {
    font-size: @fz18;
    margin-top: 25px;
    opacity: 0.8;
    text-align: center;
  }
}
</style>