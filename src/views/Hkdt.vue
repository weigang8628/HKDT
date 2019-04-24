<template>
  <div>
    <div class="hkdt">
      <div class="hkdt-left">
        <div class="aside-title">
          <h3>导航速查</h3>
        </div>
        <div class="aside-nav">
          <ul>
            <li class="active">
              <a href>HKDT简介</a>
            </li>
            <li>
              <a href>应用场景</a>
            </li>
            <li>
              <a href>*******</a>
            </li>
            <li>
              <a href>*******</a>
            </li>
          </ul>
        </div>
        <div class="consultation">
          <div class="aside-title">
            <h3>新鲜资讯</h3>
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
      <div class="hkdt-right">
        <h2>什么是HKDT?</h2>
        <div class="whathkdt">
          <p>HKDT 是 Anchor公司基于港元、面向全球发行的稳定、透明、安全的数字资产。是依靠一流的区块链技术，用足额的现金类资产为支撑，以一比一的比例，锚定港元的强兑换体系。它高效地链接了法币和数字资产，帮助人们快速、便捷地融入数字世界，更好享受科技进步带来的红利。</p>
          <p>HKDT是基于以太坊ERC20的稳定数字货币系统，能兼容所有以太坊钱包。它通过智能合约，实现了在港币入账确认后生成相应的HKDT。在HKDT中，赎回港币时会自动销毁相应HKDT，以动态保持它与港币的1 : 1锚定关系。</p>
        </div>
        <h2>什么地方能用到HKDT?</h2>
        <div class="usehkdt www">
          <div class="item">
            <img src="@/assets/img/why-1.png" alt="" srcset="">
            <h3>游戏</h3>
          </div>
          <div class="item">
            <img src="@/assets/img/why-2.png" alt="" srcset="">
            <h3>游戏</h3>
          </div>
          <div class="item">
            <img src="@/assets/img/why-3.png" alt="" srcset="">
            <h3>游戏</h3>
          </div>
          <div class="item">
            <img src="@/assets/img/why-4.png" alt="" srcset="">
            <h3>游戏</h3>
          </div>
          <div class="item">
            <img src="@/assets/img/why-4.png" alt="" srcset="">
            <h3>游戏</h3>
          </div>
          <div class="item">
            <img src="@/assets/img/why-4.png" alt="" srcset="">
            <h3>游戏</h3>
          </div>
          <div class="item">
            <img src="@/assets/img/why-4.png" alt="" srcset="">
            <h3>游戏</h3>
          </div>
          <div class="item">
            <img src="@/assets/img/why-4.png" alt="" srcset="">
            <h3>游戏</h3>
          </div>
          <div class="item">
            <img src="@/assets/img/why-4.png" alt="" srcset="">
            <h3>游戏</h3>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style lang="less" scoped>
.hkdt {
  display: flex;
  justify-content: space-between;
  padding: 100px 0;
  .hkdt-left {
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
  .hkdt-right {
    width: 70%;
    h2 {
      color: #c98938;
      font-size: @fz30
    }
    // 什么是hkdt
    .whathkdt {
      border: 1px solid #999999;
      padding: 40px;
      border-radius: 10px;
      font-size: 20px;
      line-height: 36px;
      color: @c333;
      margin: 40px 0 80px 0;
      p {
        text-indent: 2em;
        margin-top: 30px;
      }
    }
    // hkdt使用
    .usehkdt{
      display: flex;
      flex-wrap: wrap;
      justify-content:center;
      margin-top: 57px;
      .item{
        background-image: url('../assets/img/dbx6.png');
        width: 180px;
        height: 200px;
        margin: 10px;
        // background-color: #999999;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        img{
          // width: auto;
          width: 40px;
        }
        h3{
          margin-top: 15px;
          font-size: 18
        }
      }
    }
  }
}

</style>

