<template>
 <div>
  <div class="swiper-container">
   <div class="swiper-wrapper">
    <div class="swiper-slide">
     <div class="home-games-item">
      <!-- player -->
      <div class="home-phone-player"></div>
      <!-- player -->
      <!-- inner -->
      <div class="home-games-item_inner"></div>
      <!-- <div class="home-games-item_inner">
       <div class="home-games-item_header">
        <img
         class="home-games-item_icon"
         src="https://sf1-ttcdn-tos.pstatp.com/obj/developer-platform/home_bingdu_icon.png"
        />
        <div>
         <h3 class="home-games-item_title">消灭病毒</h3>
         <ul class="home-games-item_tags">
          <li>飞行射击</li>
          <li>抖音爆款</li>
          <li>射击类创意游戏</li>
         </ul>
        </div>
       </div>
      </div> -->
      <!-- inner -->
     </div>
    </div>
    <div class="swiper-slide">
     <div class="home-games-item">
      <!-- player -->
      <div class="home-phone-player"></div>
      <!-- player -->
      <!-- inner -->
      <div class="home-games-item_inner"></div>
      <!-- <div class="home-games-item_inner">
       <div class="home-games-item_header">
        <img
         class="home-games-item_icon"
         src="https://sf1-ttcdn-tos.pstatp.com/obj/developer-platform/home_bingdu_icon.png"
        />
        <div>
         <h3 class="home-games-item_title">消灭病毒</h3>
         <ul class="home-games-item_tags">
          <li>飞行射击</li>
          <li>抖音爆款</li>
          <li>射击类创意游戏</li>
         </ul>
        </div>
       </div>
      </div> -->
      <!-- inner -->
     </div>
    </div>
    <div class="swiper-slide">
     <div class="home-games-item">
      <!-- player -->
      <div class="home-phone-player"></div>
      <!-- player -->
      <!-- inner -->
      <div class="home-games-item_inner"></div>
      <!-- <div class="home-games-item_inner">
       <div class="home-games-item_header">
        <img
         class="home-games-item_icon"
         src="https://sf1-ttcdn-tos.pstatp.com/obj/developer-platform/home_bingdu_icon.png"
        />
        <div>
         <h3 class="home-games-item_title">消灭病毒</h3>
         <ul class="home-games-item_tags">
          <li>飞行射击</li>
          <li>抖音爆款</li>
          <li>射击类创意游戏</li>
         </ul>
        </div>
       </div>
      </div> -->
      <!-- inner -->
     </div>
    </div>
   </div>
   <div class="swiper-pagination"></div>
   <!--分页器。如果放置在swiper-container外面，需要自定义样式。-->
  </div>
 </div>
</template>

<script lang="ts">
import { defineComponent, onMounted } from "vue";
import Swiper, { Navigation, Pagination } from "swiper";
Swiper.use([Navigation, Pagination]);
import "swiper/swiper-bundle.css";
// import "swiper/swiper.scss"; //引入文件要按照node_modules下swiper的文件路径引入，不要直接赋值，各个版本不一致
export default defineComponent({
 name: "Home",
 components: {},
 setup() {
  onMounted(() => {
   new Swiper(".swiper-container", {
    loop: true,
    spaceBetween: 150, //slide之间距——间距30
    slidesPerView: 2, // 多列——一屏显示4列
    centeredSlides: true, // 多列居中显示
    // pagination: {
    //  el: ".swiper-pagination",
    // },
   });
  });
 },
});
</script>

<style scoped>
@import "../assets/css/home.css";

.swiper-container {
 --swiper-theme-color: #ff6600;
 --swiper-pagination-color: #00ff33; /* 两种都可以 */
}
</style>