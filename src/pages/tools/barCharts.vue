// Echarts使用自定义图片
<template>
  <div id="main" :style="{ width: '500px', height: '500px' }"></div>
</template>

<script setup>
import * as echarts from "echarts";
import { onMounted } from "vue";
import symbolImgT from "../../assets/images/sjT.png";
import symbolImgB from "../../assets/images/sjB.png";

onMounted(() => {
  const chartDom = document.getElementById("main");
  const myChart = echarts.init(chartDom);
  const data = [120, 200, 150, 80, 70, 110, 130];
  const data1 = [60, 230, 250, 180, 10, 160, 30];
  const rateArr = [];
  data.forEach((item, index) => {
    const rate =
      (Math.abs((item - data1[index]) / item) * 100).toFixed(2) + "%";
    rateArr.push(rate);
  });
  console.log(rateArr);

  let dataPpoint = [];
  data.forEach((item, index) => {
      let img = "image://" + symbolImgT
      if(item < data1[index]) {
          img = "image://" + symbolImgB
      }
    const obj = {
      symbol: img,
      xAxis: index, //放需要展示图片的x轴索引
      yAxis: item, //y轴对应的值
      symbolSize: 16,
      symbolKeepAspect: true,
      symbolOffset: [0, -10], //图片相对于柱形图的偏移量
      label: {
        formatter: function (params) {
          return rateArr[params.dataIndex];
        },
        padding: [4, 2],
        lineHeight: 26,
        position: "right",
      },
    };
    dataPpoint.push(obj);
  });

  const option = {
    xAxis: {
      type: "category",
      data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
    },
    yAxis: {
      type: "value",
    },
    series: [
      {
        data: data,
        type: "bar",
        markPoint: {
          data: dataPpoint,
          label: {
            show: true, //顶部默认会展示y轴的值，可以设置false,不展示
          },
        },
      },
      {
        data: data1,
        type: "bar",
      },
    ],
  };

  myChart.setOption(option);

  window.onresize = function () {
    //自适应大小
    myChart.resize();
  };
});
</script>

<style lang="scss" scoped>
</style>
