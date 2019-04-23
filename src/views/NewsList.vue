<template>
  <div class="news-list">
    <div class="container">
      <div class="card news-list-title">
        <ul>
          <li class="active">新闻</li>
          <li>行业</li>
        </ul>
      </div>
    </div>
    <div class="container news-list-box">
      <!-- list列表 -->
      <div class="item">
        <a href="#">
          <div class="pic">
            <img src="http://www.pptok.com/wp-content/uploads/2012/08/xunguang-4.jpg" alt>
          </div>
          <div class="text">
            <h3 class="line-clamp1">文章标题文章标题文章标题文章标题文章标题</h3>
            <p class="line-clamp4">文章内容文章内容文章内容文章内容文章内容文章内容文章内容文章内容文章内容文章内容文章内容文章内容文章内容文章内容文章内容文章内</p>
            <div class="date">2019-03-07 11:28:02</div>
          </div>
        </a>
      </div>
      <div class="item">
        <a href="#">
          <div class="pic">
            <img src="http://www.pptok.com/wp-content/uploads/2012/08/xunguang-4.jpg" alt>
          </div>
          <div class="text">
            <h3>文章标题文章标题文章标题文章标题文章标题</h3>
            <p>文章内容文章内容文章内容文章内容文章内容文章内容文章内容文章内容文章内容文章内容文章内容文章内容文章内容文章内容文章内容文章内</p>
            <div class="date">2019-03-07 11:28:02</div>
          </div>
        </a>
      </div>
      <div class="item">
        <a href="#">
          <div class="pic">
            <img src="http://www.pptok.com/wp-content/uploads/2012/08/xunguang-4.jpg" alt>
          </div>
          <div class="text">
            <h3>文章标题文章标题文章标题文章标题文章标题</h3>
            <p>文章内容文章内容文章内容文章内容文章内容文章内容文章内容文章内容文章内容文章内容文章内容文章内容文章内容文章内容文章内容文章内</p>
            <div class="date">2019-03-07 11:28:02</div>
          </div>
        </a>
      </div>
      <div class="item">
        <a href="#">
          <div class="pic">
            <img src="http://www.pptok.com/wp-content/uploads/2012/08/xunguang-4.jpg" alt>
          </div>
          <div class="text">
            <h3>文章标题文章标题文章标题文章标题文章标题</h3>
            <p>文章内容文章内容文章内容文章内容文章内容文章内容文章内容文章内容文章内容文章内容文章内容文章内容内容文章内容文章内容文章内容文章内容文章内容内容文章内容文章内容文章内容文章内容文章内容文章内容文章内容文章内容文章内</p>
            <div class="date">2019-03-07 11:28:02</div>
          </div>
        </a>
      </div>
      <div class="item">
        <a href="#">
          <div class="pic">
            <img src="http://www.pptok.com/wp-content/uploads/2012/08/xunguang-4.jpg" alt>
          </div>
          <div class="text">
            <h3>文章标题文章标题文章标题文章标题文章标题</h3>
            <p>文章内容文章内容文章内容文章内容文章内容文章内容文章内容文章内容文章内容文章内容文章内容文章内容文章内容文章内容文章内容文章内</p>
            <div class="date">2019-03-07 11:28:02</div>
          </div>
        </a>
      </div>
      <!-- 分页 -->
      <div class="page">
        <el-button type="text">首页</el-button>
        <el-pagination layout="prev, pager, next" :total="1000"></el-pagination>
        <el-button type="text">末页</el-button>
      </div>
    </div>
  </div>
</template>
<style lang="less" scoped>
.news-list {
  padding-top: 100px;
  background-color: #e5e5e5;
  overflow: hidden;
  > div {
    background-color: @c-fff;
    margin-top: 18px;
  }
  .news-list-title {
    padding: 0 80px;
    overflow: hidden;
    ul {
      display: flex;
      border-bottom: 1px solid #e5e5e5;
      margin-top: 20px;
      margin-bottom: 28px;
      li {
        margin-right: 60px;
        padding: 10px 0;
        font-size: @fz24;
        position: relative;
      }
      li.active {
        color: @c-primary;
      }
      li.active::after {
        content: "";
        display: inline-block;
        width: 50px;
        height: 4px;
        background-color: @c-primary;
        border-radius: 5px;
        position: absolute;
        bottom: -3px;
        left: 0;
      }
    }
  }
  .news-list-box {
    padding: 80px;
    box-sizing: border-box;
    margin-bottom: 60px;
    .item {
      padding: 40px 0;
      border-bottom: 1px solid #e5e5e5;
      a {
        display: flex;
        .pic {
          width: 50%;
          overflow: hidden;
          height: 250px;
          img {
            // width: 100%;
            height: 100%;
          }
        }
        .text {
          // flex: auto;
          padding-left: 45px;
          h3 {
            font-size: @fz24;
            color: @c333;
          }
          p {
            font-size: @fz18;
            color: @c666;
            margin-top: 45px;
          }
          .date {
            margin-top: 55px;
          }
        }
      }
    }
  }
}
// 翻页
.page{
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 30px;
}
</style>

