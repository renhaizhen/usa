<template>
  <div class="wrap">
    <div class="box">
      <div class="content">
        <div class="item-left">
          <h2 class="item-title">仪表盘</h2>
        </div>
        <div class="item-content">
          <div class="model-ready">
            <p>Your Address</p>
            <p><input type="text" placeholder="KT1"></p>
            <p><button>GO</button></p>          
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
    }
  }
};
</script>

<style scoped>
.wrap {
  width: 100%;
  margin: 0 auto;
  background-color: #222222;
  color: #dddddd;
  overflow: hidden;
}
.box {
  border-top: 1px solid #777777;
  /* height: 400px; */
  overflow: hidden;
}
.content {
  padding-top: 5%;
  padding-bottom: 5%;
  width: 70%;
  margin: 0 auto;
  overflow: hidden;
}
.item-title {
  float: left;
  width: 36%;
}
.item-content {
  float: right;
  width: 58%;
}
.wrapper {
  width: 100%;
  height: 25px;
  position: relative;
  clear: both;
  margin-bottom: 20px;
}

</style>
