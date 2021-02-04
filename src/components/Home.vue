<template>
 <div>
  <div class="swiper-container">
   <div class="swiper-wrapper">
    <div class="swiper-slide" v-for="(item, index) in arrData" :key="index">
     <div class="home-games-item">
      <div class="home-phone-player"></div>
      <div class="home-games-item_inner">
       <img
        class="home-games-item_bg"
        src="https://sf1.ohayoo.cn/obj/developer-platform/ohayoo_v3_game_bg2.png"
       />
       <div class="home-games-item_inner_item">
        <div class="home-games-item_header">
         <img class="home-games-item_icon" :src="item.icon" alt="icon" />
         <div>
          <h3 class="home-games-item_title">{{ item.title }}</h3>
          <ul class="home-games-item_tags">
           <li v-for="(childItem, childIndex) in item.type" :key="childIndex">
            {{ childItem }}
           </li>
          </ul>
         </div>
        </div>
        <p class="home-games-item_desc">{{ item.introduce }}</p>
        <div class="home-games-item_weixin">
         <h2>微信扫码体验</h2>
         <img :src="item.weixin" alt="weixin" />
        </div>
       </div>
      </div>
     </div>
    </div>
   </div>
   <div class="swiper-pagination"></div>
   <!--分页器。如果放置在swiper-container外面，需要自定义样式。-->
  </div>
 </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, reactive } from "vue";
import Swiper, { Navigation, Pagination } from "swiper";
Swiper.use([Navigation, Pagination]);
import "swiper/swiper-bundle.css";
// import "swiper/swiper.scss"; //引入文件要按照node_modules下swiper的文件路径引入，不要直接赋值，各个版本不一致
export default defineComponent({
 name: "Home",
 components: {},
 setup() {
  const arrData = reactive([
   {
    id: 1,
    title: "吃我一刀",
    type: ["解密"],
    introduce:
     "指尖滑动就能收获属于你的一个武侠解谜体验。通过层层关卡，修炼海量武林秘籍，体验最完美的武侠。",
    icon: "src/assets/img/cwyd-icon.png",
    weixin: "src/assets/img/cwyd-weixin.jpg",
   },
   {
    id: 2,
    title: "春节大挑战",
    type: ["休闲", "益智"],
    introduce:
     "独创拼字玩法，休闲与教育兼具，轻松与挑战并存。休闲放松的同时，还能寓教于乐，别具一格的中华文化体验。",
    icon: "src/assets/img/cjdtz-icon.png",
    weixin: "src/assets/img/cjdtz-weixin.jpg",
   },
   {
    id: 3,
    title: "药不能停",
    type: ["休闲", "益智"],
    introduce:
     "一款同时包含解密，puzzle，消除，能满足你所有需求的沙雕武侠风小游戏！",
    icon: "src/assets/img/ybnt-icon.png",
    weixin: "src/assets/img/ybnt-weixin.jpg",
   },
   {
    id: 4,
    title: "冲天小火箭",
    type: ["脸控", "跑酷"],
    introduce:
     "摇摇头，圣诞火箭上月球！转转脸，红包福袋不停捡！还能通过奖励金币升级火箭配置，带你飞向更高的太空。",
    icon: "src/assets/img/ctxhj-icon.png",
    weixin: "src/assets/img/ctxhj-weixin.jpg",
   },
   {
    id: 5,
    title: "Q点大作战",
    type: ["休闲", "益智", "桌游", "对战"],
    introduce:
     "简单经典的游戏规则，Q萌诙谐的游戏画面，令人愉快的游戏配乐，绝对完美的休闲体验！",
    icon: "src/assets/img/qddzz-icon.png",
    weixin: "src/assets/img/qddzz-weixin.jpg",
   },
  ]);
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
  return { arrData };
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