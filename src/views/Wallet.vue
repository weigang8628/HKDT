<template>
  <div>
    <!-- banner -->
    <Banner></Banner>
    <div class="container wallet">
      <div class="wallet-left">
        <div class="aside-title">
          <h3>导航速查</h3>
        </div>
        <div class="aside-nav">
          <ul>
            <li class="active">
              <a href>第一步</a>
            </li>
            <li>
              <a href>第一步</a>
            </li>
            <li>
              <a href>第一步</a>
            </li>
            <li>
              <a href>第一步</a>
            </li>
            <li>
              <a href>第一步</a>
            </li>
          </ul>
        </div>
        <div class="consultation">
          <div class="aside-title">
            <h3>新鲜咨询</h3>
          </div>

          <div class="consultation-list">
            <p>HKDT 是 Anchor公司基于港元、面向全球发行的稳定、透明、安全的数字资产。是依靠一流的区块链技术，用足额的现金类资产为支撑，以一比一的比例，锚定港元的强兑换体系,科技进步带来的红利。</p>
            <div class="btn">
              <a href>查看</a>
            </div>
          </div>
        </div>
      </div>
      <!-- 右侧 -->
      <div class="wallet-right">
        <!-- 第一步 -->
        <div class="stepbox step1">
          <div class="text">
            <h1>手机安装直接扫码下载APP即可</h1>
            <div class="title">「 苹果手机如何安装app？」</div>
            <h3>第一步</h3>
            <p>APP安装成功后，点击图标，若出现“未授信任的企业级开发者”提示，请您在手机里的“设置”中操作授信。授信成功后，再次点击APP，即可正常使用。</p>
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
              <h3>第二步</h3>
              <p>打开手机里的“设置-通用-设备管理”。</p>
            </div>
          </div>
        </div>
        <!-- 第三步 -->
        <div class="stepbox step3">
          <div class="item">
            <div class="pic">
              <img src="@/assets/img/step-2.png" alt srcset>
            </div>
            <div class="text">
              <h3>第三步</h3>
              <p>打开手机里的“设置-通用-设备管理”。</p>
            </div>
          </div>
        </div>
        <!-- 第四步 -->
        <div class="stepbox step4">
          <div class="item">
            <div class="pic">
              <img src="@/assets/img/step-2.png" alt srcset>
            </div>
            <div class="text">
              <h3>第四步</h3>
              <p>打开手机里的“设置-通用-设备管理”。</p>
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
        .pic {
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

