<template>
  <!-- 白皮书 -->
  <div>
    <!-- banner -->
    <Banner></Banner>
    <div class="container book section">
      <div class="pic">11</div>
      <div class="text">
        <div class="line">

        </div>
        <h1>{{$t('book.title')}}</h1>
        <div class="content">
          <p>
            {{$t('book.info')}}
          </p>
          <p>
            {{$t('book.info2')}}
          </p>
        </div>
        <div class="download">
          <a href> {{$t('book.download')}}</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: "book",
  components: {
    // HelloWorld
  }
};
</script>
<style lang="less" scoped>
.section{
  padding: 150px 0 120px 0;
}
.book {
  display: flex;
  .pic {
    width: 40%;
    background-color: @c-primary;
  }
  .text {
    width: 60%;
    padding-left: 60px;
    .line{
width:110px;
height:10px;
background-color: @c-primary;
    }
    h1 {
      margin-top: 36px;
      font-size: @fz50;
    }
    .content {
      margin-top: 50px;
      overflow: hidden;
      font-size: @fz24;
      color: @c999;
      p {
        line-height: 61px;
        text-indent: 1em;
        margin-top: 30px;
      }
    }
    .download {
      margin-top: 80px;
      a {
        display: inline-block;
        background-color: @c-primary;
        border-radius: 50px;
        font-size: @fz30;
        height: 76px;
        text-align: center;
        line-height: 76px;
        width: 220px;
        color: #ffffff;
      }
    }
  }
}
</style>

