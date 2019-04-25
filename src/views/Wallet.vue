<template>
  <div>
    <!-- banner -->
    <Banner></Banner>
    <div class="container wallet">
      <div class="wallet-left">
        <div class="aside-title">
          <h3>{{$t('wallet.nav.title')}}</h3>
        </div>
        <div class="aside-nav">
          <ul>
            <li class="active">
              <a href>{{$t('wallet.nav.list.title')}}</a>
            </li>
            <li>
              <a href>{{$t('wallet.nav.list.title2')}}</a>
            </li>
            <li>
              <a href>{{$t('wallet.nav.list.title3')}}</a>
            </li>
            <li>
              <a href>{{$t('wallet.nav.list.title4')}}</a>
            </li>
            <li>
              <a href>{{$t('wallet.nav.list.title5')}}</a>
            </li>
          </ul>
        </div>
        <div class="consultation">
          <div class="aside-title">
            <h3>{{$t('wallet.information.title')}}</h3>
          </div>
          <div class="consultation-list">
            <p>{{$t('wallet.information.info')}}</p>
            <div class="btn">
              <a href>{{$t('wallet.information.look')}}</a>
            </div>
          </div>
        </div>
      </div>
      <!-- 右侧 -->
      <div class="wallet-right">
        <!-- 第一步 -->
        <div class="stepbox step1">
          <div class="text">
            <h1>{{$t('wallet.title')}}</h1>
            <div class="title">{{$t('wallet.title2')}}</div>
            <h3>{{$t('wallet.step1.title')}}</h3>
            <p>{{$t('wallet.step1.info')}}</p>
          </div>
          <div class="pic">
            <img src="@/assets/img/step-1.png" alt srcset>
          </div>
        </div>
        <!-- 第二步 -->
        <div class="stepbox step2">
          <div class="item">
            <div class="pic">
              <img src="@/assets/img/step-2.png" alt srcset>
            </div>
            <div class="text">
              <h3>{{$t('wallet.step2.title')}}</h3>
            <p>{{$t('wallet.step2.info')}}</p>
            </div>
          </div>
        </div>
        <!-- 第三步 -->
        <div class="stepbox step3">
          <div class="item">
            <div class="pic">
              <img src="@/assets/img/step-3.png" alt srcset>
            </div>
            <div class="text">
              <h3>{{$t('wallet.step3.title')}}</h3>
            <p>{{$t('wallet.step3.info')}}</p>
            </div>
          </div>
        </div>
        <!-- 第四步 -->
        <div class="stepbox step4">
          <div class="item">
            <div class="pic">
              <img src="@/assets/img/step-4.png" alt srcset>
            </div>
            <div class="text">
              <h3>{{$t('wallet.step4.title')}}</h3>
            <p>{{$t('wallet.step4.info')}}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style lang="less" scoped>
.wallet {
  display: flex;
  justify-content: space-between;
  padding: 100px 0;
  .wallet-left {
    width: 220px;
    .aside-title {
      font-size: @fz30;
      display: inline-block;
      border-bottom: 3px solid #e6e6e6;
      padding-bottom: 19px;
      position: relative;
      h3 {
        font-weight: bold;
      }
    }
    .aside-title::before {
      content: "";
      display: inline-block;
      width: 37px;
      height: 4px;
      background-color: @c999;
      position: absolute;
      top: 53px;
      left: 50%;
      transform: translate(-50%, 0);
    }
    // 侧边导航
    .aside-nav {
      padding-top: 20px;
      ul {
        li {
          border-bottom: 1px solid #d5d5d5;
          line-height: 63px;
          a {
            font-size: @fz24;
            display: block;
            // font-weight: bold;
          }
          a::before {
            content: "";
            display: inline-block;

            border-width: 8px 0 8px 8px;
            border-style: solid;
            border-color: transparent transparent transparent #c98938;
            margin-right: 40px;
          }
        }
        li.active {
          a {
            color: #c98938;
          }
        }
      }
    }
    .consultation {
      padding-top: 80px;
      .consultation-list {
        padding-top: 20px;
        p {
          font-size: @fz18;
          line-height: 28px;
          // font-weight: bold;
        }
        .btn {
          margin-top: 68px;
          a {
            width: 130px;
            height: 40px;
            text-align: center;
            line-height: 40px;
            display: inline-block;
            background-color: #c98938;
            font-size: @fz24;
            color: @c-fff;
            border-radius: 20px;
          }
        }
      }
    }
  }
  .wallet-right {
    width: 70%;

    .stepbox {
      // margin-top: -100px;
      display: flex;
      .item {
        max-width: 40%;
        .pic {
          img{
            max-width: 100%;
          }
        }
        .text {
          text-align: center;
          h3 {
            font-size: @fz30;
            margin-top: 42px;
          }
          p {
            margin-top: 30px;
            font-size: @fz20;
            color: @c999;
            line-height: 36px;
          }
        }
      }
    }
    .step1 {
      display: flex;
      margin-top: 0;
      .text {
        padding-right: 100px;
      flex: 1;
        h1 {
          font-size: @fz30;
          color: @c333;
        }
        .title {
          margin-top: 144px;
          font-size: @fz36;
        }
        h3 {
          font-size: @fz30;
          margin-top: 47px;
        }
        p {
          margin-top: 30px;
          font-size: @fz20;
          color: @c999;
          line-height: 36px;
        }
      }
      .pic{
        flex: 1;
        img{
          max-width: 100%;
        }
      }
    }
    .step2 {
    }
    .step3 {
      display: flex;
      justify-content: flex-end;
      margin-top: -350px;
    }
    .step4 {
      margin-top: -120px;
    }
  }
}
</style>

