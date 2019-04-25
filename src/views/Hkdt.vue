<template>
  <div>
    <div class="hkdt">
      <div class="hkdt-left">
        <div class="aside-title">
          <h3>{{$t('hkdt.nav.title')}}</h3>
        </div>
        <div class="aside-nav">
          <ul>
            <li class="active">
              <a href='#a1'>{{$t('hkdt.nav.list.title')}}</a>
            </li>
            <li>
              <a href='#a2'>{{$t('hkdt.nav.list.title2')}}</a>
            </li>
          </ul>
        </div>
        <div class="consultation">
          <div class="aside-title">
            <h3>{{$t('hkdt.information.title')}}</h3>
          </div>
          <div class="consultation-list">
            <p>{{$t('hkdt.information.info')}}</p>
            <div class="btn">
              <a href="javascript:;">{{$t('hkdt.information.look')}}</a>
            </div>
          </div>
        </div>
      </div>
      <!-- 右侧 -->
      <div class="hkdt-right">
        <!-- 什么是hkdt -->
        <h2 id="a1">{{$t('hkdt.whathkdt.title')}}</h2>
        <div class="whathkdt">
          <p>
            <a href="#1">{{$t('hkdt.whathkdt.info')}}</a>
          </p>
          <p>
            <a href="#2">{{$t('hkdt.whathkdt.info2')}}</a>
          </p>
        </div>
        <!-- 什么地方能用到hkdt -->
        <h2 id="a2">{{$t('hkdt.usehkdt.title')}}</h2>
        <div class="usehkdt www">
          <div class="item">
            <img src="@/assets/img/why-1.png" alt srcset>
            <h3>{{$t('hkdt.usehkdt.list.title')}}</h3>
          </div>
          <div class="item">
            <img src="@/assets/img/why-2.png" alt srcset>
            <h3>{{$t('hkdt.usehkdt.list.title2')}}</h3>
          </div>
          <div class="item">
            <img src="@/assets/img/why-3.png" alt srcset>
            <h3>{{$t('hkdt.usehkdt.list.title3')}}</h3>
          </div>
          <div class="item">
            <img src="@/assets/img/why-4.png" alt srcset>
            <h3>{{$t('hkdt.usehkdt.list.title4')}}</h3>
          </div>
          <div class="item">
            <img src="@/assets/img/why-5.png" alt srcset>
            <h3>{{$t('hkdt.usehkdt.list.title5')}}</h3>
          </div>
          <div class="item">
            <img src="@/assets/img/why-6.png" alt srcset>
            <h3>{{$t('hkdt.usehkdt.list.title6')}}</h3>
          </div>
          <div class="item">
            <img src="@/assets/img/why-7.png" alt srcset>
            <h3>{{$t('hkdt.usehkdt.list.title7')}}</h3>
          </div>
          <div class="item">
            <img src="@/assets/img/why-8.png" alt srcset>
            <h3>{{$t('hkdt.usehkdt.list.title8')}}</h3>
          </div>
          <div class="item">
            <img src="@/assets/img/why-9.png" alt srcset>
            <h3>{{$t('hkdt.usehkdt.list.title9')}}</h3>
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
        li:hover {
          a {
            color: #c98938;
          }
        }
        // li.active {
        //   a {
        //     color: #c98938;
        //   }
        // }
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
      font-size: @fz30;
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
    .usehkdt {
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      margin-top: 57px;
      .item {
        background-image: url("../assets/img/dbx6.png");
        width: 180px;
        height: 200px;
        margin: 10px;
        // background-color: #999999;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        img {
          // width: auto;
          width: 40px;
        }
        h3 {
          margin-top: 15px;
          font-size: @fz18;
          text-align: center;
        }
      }
    }
  }
}
</style>

