<template>
  <div>
    <header class="header">
      <div class="back iconfont">&#xe624;</div>
      <div class="search"></div>
      <div class="city">城市</div>
    </header>

    <swiper :options="swiperOption">
      <swiper-slide v-for="item in swiperInfo" :key="item.id">
        <div class="swiper-img-con">
          <img  class="swiper-img" :src="item.imgUrl"/>
        </div>
      </swiper-slide>
      <div class="swiper-pagination"  slot="pagination"></div>
    </swiper>
  </div>

</template>
<script>
export default {
  name: 'Index'
}
</script>

<style  scoped>
  .header{
    display: flex;
    height: 0.86rem;
    background: #05bad5;
    color:#fff;
  }
  .back{
    width:.64rem;
    line-height: .86rem;
    text-align: center;
  }
  .city{
    width:1.14rem;
    line-height: .86rem;
    text-align: center;
  }
  .search{
    flex:1;
    margin:.14rem .18rem;
    background:#fff;
    border-radius: .1rem;
  }
</style>
