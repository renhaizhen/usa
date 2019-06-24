<template>
  <div class="wrap">
    <div class="header-img"></div>
    <div class="header-nav" :class="navClass?'navColor1':'navColor2'">
      <div class="logo-box">
        <img src="../../assets/pic1.png" alt class="logo" @click="handleClick(index)" :data="index">
      </div>
      <div class="nav-items">
        <el-menu
          :default-active="activeIndex"
          class="el-menu-demo"
          mode="horizontal"
          @select="handleSelect"
          background-color="transparent"
          text-color="#fff"
          active-text-color="#ffd04b"
        >
          <el-menu-item index="1" @click="handleClick(delegate)" :data="delegate">代表</el-menu-item>
          <el-submenu index="2">
            <template slot="title">奖励</template>
            <el-menu-item index="2-1" @click="handleClick(rewards)" :data="rewards">计算者</el-menu-item>
            <el-menu-item index="2-2">选项2</el-menu-item>
          </el-submenu>
          <el-menu-item index="3" @click="handleClick(contact)" :data="contact">联系</el-menu-item>
          <el-menu-item index="4" @click="handleClick(dashboard)" :data="dashboard">仪表盘</el-menu-item>
          <el-menu-item index="5">贝克历法</el-menu-item>
          <el-menu-item index="6">德语</el-menu-item>
        </el-menu>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      activeIndex: "1",
      navClass: true,
      delegate: 'delegate',
      rewards:'rewards',
      contact:'contact',
      index:'index',
      dashboard:'dashboard'
    };
  },
  mounted() {
    window.addEventListener("scroll", this.handleScroll);
  },
  methods: {
    handleSelect(key, keyPath) {
      // console.log(key, keyPath);
    },
    handleScroll() {
      var scrollTop =
        window.pageYOffset ||
        document.documentElement.scrollTop ||
        document.body.scrollTop;
      // console.log(scrollTop);
      if (scrollTop > 15) {
        this.navClass = false;
      } else if (scrollTop < 15) {
        this.navClass = true;
      }
    },
    handleClick(data) {
      // console.log(data);
      this.$router.push("/"+data)
    }
  }
};
</script>

<style scoped>
.wrap {
  overflow: hidden;
  width: 100%;
  height: 100%;
}
.header-img {
  height: 754px;
  width: 100%;
  background: url(../../assets/bg.jpeg) no-repeat center center;
  background-size: cover;
  background-attachment: fixed;
}
.logo-box {
  float: left;
  margin-right: 30%;
  margin-left: 10%;
}
.logo {
  max-height: 80px;
  cursor: pointer;
}
.header-nav {
  overflow: hidden;
  width: 100%;
  position: absolute;
  top: 0px;
  background-color: transparent;
  padding: 10px 0;
}
.nav-items {
  float: left;
}
.navColor1 {
  background-color: transparent;
}
.navColor2 {
  background-color: #767676;
  opacity: 0.7;
  position: fixed;
  top: 0;
  z-index: 999;
}
</style>
