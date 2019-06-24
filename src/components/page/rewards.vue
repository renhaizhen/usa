<template>
  <div class="wrap">
    <div class="box box1">
      <div class="content">
        <div class="item-left">
          <h2 class="item-title">我们是谁</h2>
        </div>
        <div class="item-content">
          <div class="model-ready">
            <p>TezosBakery.ch是首批在瑞士设有服务器的Tezos代表服务之一。我们在我们安全稳定的服务器基础架构上烘焙（Tezos Proof-of-Stake）您的委托。</p>
            <p>我们可以共同为块生成过程做出贡献，并帮助Tezos网络发展。但最重要的是：你获得了巨大的回报！</p>
            <template>
              <el-table :data="tableData" style="width: 65%;">
                <el-table-column prop="price" label="Tezos价格（￥）" width="200px%" align="center"></el-table-column>
                <el-table-column prop="change" label="24小时变化" width="200px" align="center"></el-table-column>
              </el-table>
            </template>
          </div>
        </div>
      </div>
    </div>
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
    <div class="box">
      <div class="content">
        <div class="item-left">
          <h2 class="item-title">追踪您的奖励</h2>
        </div>
        <div class="item-content">
          <div class="model-ready">
            <p>使用仪表板检查您的奖励：</p>
            <p><input type="text" placeholder="KT1"></p>
            <p><button>发起</button></p>          
            <p>...或者与我们的<a href="#">第一位</a>代表一起测试</p>
            <p>计算您的估计年度奖励：</p>
            <p><a href="#">计算器</a></p>
            <p>目前估计奖励每年</p>
            <p>约为7.96％</p>
          </div>
        </div>
      </div>
    </div>
    <div class="box">
      <div class="content">
        <div class="item-left">
          <h2 class="item-title">联系</h2>
        </div>
        <div class="item-content">
          <div class="model-ready">            
            <p>加入我们的电报频道<a href="#">TezosBakery</a></p>
            <p>我们很乐意回答您的问题或获得反馈</p>
            <p>或发送电子邮件至info@tezosbakery.ch</p>
            <p>捐赠XTZ </p>
            <p>tz1fZ767VDbqx4DeKiFswPSHh513f51mKEUZ</p>
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
      tableData: [
        {
          price: "0.48瑞士法郎（0.48美元）",
          change: "↑3.11％"
        }
      ],
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
