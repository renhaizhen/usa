<template>
  <div class="wrap">
    <div class="box">
      <div class="content">
        <div class="footer">       
            <p><a href="#">Proudly powered by WordPress</a></p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.wrap {
  width: 100%;
  margin: 0 auto;
  background-color: #222222;
}
.box {
  border-top: 1px solid #777777;
  height: 50px;
}
.content {
  padding-top: 0%;
  padding-bottom: 5%;
  width: 70%;
  margin: 0 auto;
  overflow: hidden;
}
.footer{
    text-align: center;
    color: white;
}
.footer p a{
    text-decoration: none;
    color: white;
}
</style>
