 <template>
  <div class="container-full footer">
    <div class="footer-list container">
      <div class="footer-logo">
        <img src="@/assets/img/logo.png" alt>
      </div>
      <!-- 关于 -->
      <div class="footer-about">
        <div class="title">{{$t('foot.about.title')}}</div>
        <div class="list">
          <ul>
            <li>{{$t('foot.about.list.busess')}}</li>
            <li>{{$t('foot.about.list.media')}}</li>
            <li>{{$t('foot.about.list.feedback')}}</li>
          </ul>
        </div>
      </div>
      <!-- 媒体 -->
      <div class="footer-media">
        <div class="title">{{$t('foot.media.title')}}</div>
        <div class="list">
          <ul>
            <li v-popover:popover>
              <div class="icon">
                <img src="@/assets/img/f-1.png" alt>
              </div>
              <div class="text">{{$t('foot.media.list.account')}}</div>
              <el-popover ref="popover" placement="bottom-start" width="150" trigger="hover">
                <img
                  style="width:100%;"
                  src="@/assets/img/hkdt.png"
                >
              </el-popover>
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
              <div class="text">LinkedIn</div>
            </li>
            <li>
              <div class="icon">
                <img src="@/assets/img/f-4.png" alt>
              </div>
              <div class="text">{{$t('foot.media.list.support')}}</div>
            </li>
            <li>
              <div class="icon">
                <img src="@/assets/img/f-5.png" alt>
              </div>
              <div class="text">Instagram</div>
            </li>
            <li>
              <div class="icon">
                <img src="@/assets/img/f-6.png" alt>
              </div>
              <div class="text">Medium</div>
            </li>
            <li>
              <div class="icon">
                <img src="@/assets/img/f-7.png" alt>
              </div>
              <div class="text">{{$t('foot.media.list.weibo')}}</div>
            </li>
          </ul>
        </div>
      </div>
      <!-- 钱包 -->
      <div class="footer-wallet">
        <div class="title">{{$t('foot.wallet.title')}}</div>
        <div class="list">
          <img src="@/assets/img/hkdt.png" alt>
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
      footData:{}
    };
  },
  methods: {
    showfn() {
      console.log("移入");
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
            flex: auto;
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