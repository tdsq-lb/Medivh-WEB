<template>
 <div class="pc_index">
  <!-- 导航 -->
  <nav>
   <a class="logo" href="home">
    <!-- <h1>麦迪文</h1> -->
    <img src="/img/logo.png" alt="logo" />
   </a>
   <ul class="bars" @click="handleBars($event)">
    <li class="bars_item">
     <router-link to="/pc_index/home">首页</router-link>
    </li>
    <!-- <li class="bars_item">
     <router-link to="/pc_index/home">首页</router-link>
    </li>
    <li class="bars_item">
     <router-link to="/pc_index/home">首页</router-link>
    </li> -->
   </ul>
  </nav>
  <!-- 内容 -->
  <div class="content">
   <div class="content_bg"></div>
   <router-view name="helper" class="content_box"></router-view>
  </div>
  <!-- 页脚 -->
  <footer>
   <div class="footer-info">
    <h4>关注我们：</h4>
    <div
     @mouseenter="handelMouseentern()"
     @mouseleave="handleMouseleave()"
     class="wechat"
    >
     <div class="wechat-box" v-if="isvVisible">
      <!-- <div class="wechat-hover"></div> -->
      <img class="wechat-code" src="/img/weixin.jpg" alt="weixin" />
      <div class="ant-dropdown-arrow"></div>
     </div>
    </div>
    <!-- 鼠标移入事件 mouseenter 鼠标移出事件 mouseleave -->
   </div>
   <span class="footer-split-line"></span>
   <div class="footer-record-code">
    <div>杭州麦迪文网络科技有限公司</div>
    <div><span class="record-code-icon"></span>浙ICP备20002282号-1</div>
   </div>
  </footer>
 </div>
</template>


<script>
import { ref, reactive } from "vue";
export default {
 setup() {
  const isvVisible = ref(false);
  const handleBars = (event) => {
   console.log(event);
  };
  const handelMouseentern = () => {
   isvVisible.value = true;
  };
  const handleMouseleave = () => {
   isvVisible.value = false;
  };
  return { handleBars, handelMouseentern, handleMouseleave, isvVisible };
 },
};
</script>


<style scoped>
@import "../../public/css/pc.css";
</style>