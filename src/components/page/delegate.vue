<template>
  <div class="wrap">
    <div class="box">
      <div class="content">
        <div class="item-left">
          <h2 class="item-title">让我们烤你的TEZOS吧</h2>
        </div>
        <div class="item-content">
          <div class="model-ready">
            <p>委托你的ꜩ</p>
            <div>
              <span>tz1fZ767VDbqx4DeKiFswPSHh513f51mKEUZ</span>
              <button class="copy">复制</button>
            </div>
            <p>
              <a href="#">在tzscan.io上查看</a>
            </p>
            <div class="wrapper">
              <font style="vertical-align: inherit;" class="progress-text">可用的授权容量：超过委派</font>
              <el-progress :text-inside="true" :stroke-width="25" :percentage="100" status="exception"></el-progress>
            </div>
            <ul>
              <li>每个周期后自动支付</li>
              <li>安全的服务器位于瑞士</li>
              <li>低功耗</li>
              <li>使用可再生能源：</li>
            </ul>
            <p>
              <a href="#"><img src="../../assets/star.png" alt="" class="star"></a>
            </p>
            <ul>
              <li>无风险授权</li>
              <li>10％的费用</li>
            </ul>
            <p>这就是您委派Tezos的方法：</p>
            <p><a href="#">逐步手册</a></p>
            <template>
              <el-table :data="tableData2" style="width: 65%;">
                <el-table-column prop="outprice" label="目前的北克州" width="200px%" align="center"></el-table-column>
                <el-table-column prop="price" label="ꜩ" width="200px" align="center"></el-table-column>
              </el-table>
            </template>
            <ul>
              <li>如果您现在在当前周期62中委托我们，我们可以在第68周期开始为您烘焙</li>
              <li>在第74周期，我们会收到第68周期的烘焙奖励，并将您的奖励发送给您的代表帐户</li>
              <li>如果您在支付之前的奖励非常小，我们会保留至少1ꜩ累积</li>
            </ul>
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
      tableData2: [
        {
          outprice: "放债",
          price: "28'957.83"
        },{
          outprice: "赌注平衡",
          price: "234'295.53"
        },{
          outprice: "放样能力",
          price: "218'817.20"
        },{
          outprice: "债券要求",
          price: "13.2338％"
        }
      ]
    }
  }
};
</script>

<style scoped>
.el-table th,
.el-table tr,
.el-table__body-wrapper,
.el-table__header-wrapper {
  background-color: #222222 !important;
  color: white;
}
.el-table__row td:nth-of-type(2) {
  color: green;
}
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
.progress-text{
  position: absolute;
  z-index: 2;
  top: 4px;
  left: 108px;
}
.star{
  width: 94px;
  height: 42px;
}
</style>
