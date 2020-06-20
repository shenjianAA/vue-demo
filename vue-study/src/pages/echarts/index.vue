<template>
  <div>
    <div id="myChart" :style="{width: '500px', height: '300px'}"></div>
    <div id="myChart1" :style="{width: '500px', height: '300px'}"></div>
  </div>
</template>

<script>
export default {
  name: "hello",
  data() {
    return {
      msg: "Welcome to Your Vue.js App"
    };
  },
  mounted() {
    this.drawChart();
    this.draw3DChart();
  },
  methods: {
    drawLine() {
      // 基于准备好的dom，初始化echarts实例
      let myChart = this.$echarts.init(document.getElementById("myChart"));
      // 绘制图表
      myChart.setOption({
        title: { text: "在Vue中使用echarts" },
        tooltip: {},
        xAxis: {
          data: ["衬衫", "羊毛衫", "雪纺衫", "裤子", "高跟鞋", "袜子"]
        },
        yAxis: {},
        series: [
          {
            name: "销量",
            type: "bar",
            data: [5, 20, 36, 10, 10, 20]
          }
        ]
      });
    },
    drawChart() {
      let myChart = this.$echarts.init(document.getElementById("myChart"));
      let xdata = ["衬衫", "羊毛衫", "雪纺衫", "裤子", "高跟鞋", "袜子"];
      let ydata = [5, 20, 36, 10, 10, 20];
      myChart.setOption({
        tooltip: {
          trigger: "axis"
        },
        grid: {
          top: "15%",
          left: "8%",
          right: "12%",
          bottom: "3%",
          containLabel: true
        },
        xAxis: {
          type: "category",
          data: xdata,
          name: "教室",
          splitLine: {
            show: false
          },
          axisTick: {
            show: false
          },
          axisLine: {
            symbol: ["none", "arrow"],
            symbolSize: [15, 17],
            lineStyle: {
              color: "#000000",
              width: 2 //  改变坐标线的颜色
            }
          },
          axisLabel: {
            //调整x轴的lable
            textStyle: {
              fontSize: 12 // 让字体变大
            }
          }
        },
        yAxis: {
          type: "value",
          name: "时长（小时）",
          splitLine: {
            //刻度线
            show: false
          },
          splitArea: {
            //柱状图后面的背景色
            show: true,
            areaStyle: {
              color: ["rgba(221,247,250,0.7)", "rgba(245,249,232,0.7)"]
            }
          },
          axisTick: {
            show: false
          },
          axisLabel: {
            //调整y轴的lable
            textStyle: {
              fontSize: 12 // 让字体变大
            },
            show: true
          },
          axisLine: {
            symbol: ["none", "arrow"],
            symbolSize: [15, 17],
            lineStyle: {
              color: "#000000",
              width: 2 //  改变坐标线的颜色
            }
          }
        },
        series: [
          {
            name: "时长统计",
            type: "bar",
            showSymbol: false,
            hoverAnimation: false,
            data: ydata,
            barWidth: 17, //柱图宽度
            itemStyle: {
              //左面
              normal: {
                color: "#FC9F9F"
                //   color: function(params) {
                //     let colorList = [
                //       "#EA5353",
                //       "#DB8D4D",
                //       "#9DD530",
                //       "#38CFCA",
                //       "#6C54E2",
                //       "#749f83",
                //       "#ca8622",
                //       "#bda29a",
                //       "#6e7074",
                //       "#546570"
                //     ];
                //     return colorList[params.dataIndex];
              }
            }
          },
          {
            name: "a",
            tooltip: {
              show: false
            },
            type: "bar",
            barWidth: 17,
            itemStyle: {
              //右面
              normal: {
                color: "#FC9F9F"
                //   color: function(params) {
                //     let colorList = [
                //       "#FA6363",
                //       "#F1A363",
                //       "#AEE93C",
                //       "#41EBE5",
                //       "#866FF5",
                //       "#749f83",
                //       "#ca8622",
                //       "#bda29a",
                //       "#6e7074",
                //       "#546570"
                //     ];
                //     return colorList[params.dataIndex];
                //   },
                //   barBorderRadius: [0, 0, 180, 0]
              }
            },
            data: ydata,
            barGap: 0
          },
          {
            name: "b",
            tooltip: {
              show: false
            },
            type: "pictorialBar",
            itemStyle: {
              //顶部
              normal: {
                color: "#FC9F9F",
                // color: function(params) {
                //   let colorList = [
                //     "#FC9F9F",
                //     "#F7B177",
                //     "#BBF64A",
                //     "#4DF4EE",
                //     "#947FFA",
                //     "#749f83",
                //     "#ca8622",
                //     "#bda29a",
                //     "#6e7074",
                //     "#546570"
                //   ];
                //   return colorList[params.dataIndex];
                // },
                borderColor: "",
                borderWidth: 0.01,
                label: {
                  show: true, //开启显示
                  position: "top", //在上方显示
                  textStyle: {
                    //数值样式
                    color: "black",
                    fontSize: 16,
                    fontFamily: "微软雅黑"
                  }
                }
              }
            },
            symbol: "rect",
            symbolRotate: 45,
            symbolSize: ["24", "24"],
            symbolOffset: ["0", "-11"],
            symbolPosition: "end",
            data: ydata,
            z: 3
          }
        ]
      });
    },
    draw3DChart() {
      var hours = [
        "12a",
        "1a",
        "2a",
        "3a",
        "4a",
        "5a",
        "6a",
        "7a",
        "8a",
        "9a",
        "10a",
        "11a",
        "12p",
        "1p",
        "2p",
        "3p",
        "4p",
        "5p",
        "6p",
        "7p",
        "8p",
        "9p",
        "10p",
        "11p"
      ];
      var days = [
        "Saturday",
        "Friday",
        "Thursday",
        "Wednesday",
        "Tuesday",
        "Monday",
        "Sunday"
      ];

      var data = [
        [0, 0, 5],
        [0, 1, 1],
        [0, 2, 0],
        [0, 3, 0],
        [0, 4, 0],
        [0, 5, 0],
        [0, 6, 0],
        [0, 7, 0],
        [0, 8, 0],
        [0, 9, 0],
        [0, 10, 0],
        [0, 11, 2],
        [0, 12, 4],
        [0, 13, 1],
        [0, 14, 1],
        [0, 15, 3],
        [0, 16, 4],
        [0, 17, 6],
        [0, 18, 4],
        [0, 19, 4],
        [0, 20, 3],
        [0, 21, 3],
        [0, 22, 2],
        [0, 23, 5],
        [1, 0, 7],
        [1, 1, 0],
        [1, 2, 0],
        [1, 3, 0],
        [1, 4, 0],
        [1, 5, 0],
        [1, 6, 0],
        [1, 7, 0],
        [1, 8, 0],
        [1, 9, 0],
        [1, 10, 5],
        [1, 11, 2],
        [1, 12, 2],
        [1, 13, 6],
        [1, 14, 9],
        [1, 15, 11],
        [1, 16, 6],
        [1, 17, 7],
        [1, 18, 8],
        [1, 19, 12],
        [1, 20, 5],
        [1, 21, 5],
        [1, 22, 7],
        [1, 23, 2],
        [2, 0, 1],
        [2, 1, 1],
        [2, 2, 0],
        [2, 3, 0],
        [2, 4, 0],
        [2, 5, 0],
        [2, 6, 0],
        [2, 7, 0],
        [2, 8, 0],
        [2, 9, 0],
        [2, 10, 3],
        [2, 11, 2],
        [2, 12, 1],
        [2, 13, 9],
        [2, 14, 8],
        [2, 15, 10],
        [2, 16, 6],
        [2, 17, 5],
        [2, 18, 5],
        [2, 19, 5],
        [2, 20, 7],
        [2, 21, 4],
        [2, 22, 2],
        [2, 23, 4],
        [3, 0, 7],
        [3, 1, 3],
        [3, 2, 0],
        [3, 3, 0],
        [3, 4, 0],
        [3, 5, 0],
        [3, 6, 0],
        [3, 7, 0],
        [3, 8, 1],
        [3, 9, 0],
        [3, 10, 5],
        [3, 11, 4],
        [3, 12, 7],
        [3, 13, 14],
        [3, 14, 13],
        [3, 15, 12],
        [3, 16, 9],
        [3, 17, 5],
        [3, 18, 5],
        [3, 19, 10],
        [3, 20, 6],
        [3, 21, 4],
        [3, 22, 4],
        [3, 23, 1],
        [4, 0, 1],
        [4, 1, 3],
        [4, 2, 0],
        [4, 3, 0],
        [4, 4, 0],
        [4, 5, 1],
        [4, 6, 0],
        [4, 7, 0],
        [4, 8, 0],
        [4, 9, 2],
        [4, 10, 4],
        [4, 11, 4],
        [4, 12, 2],
        [4, 13, 4],
        [4, 14, 4],
        [4, 15, 14],
        [4, 16, 12],
        [4, 17, 1],
        [4, 18, 8],
        [4, 19, 5],
        [4, 20, 3],
        [4, 21, 7],
        [4, 22, 3],
        [4, 23, 0],
        [5, 0, 2],
        [5, 1, 1],
        [5, 2, 0],
        [5, 3, 3],
        [5, 4, 0],
        [5, 5, 0],
        [5, 6, 0],
        [5, 7, 0],
        [5, 8, 2],
        [5, 9, 0],
        [5, 10, 4],
        [5, 11, 1],
        [5, 12, 5],
        [5, 13, 10],
        [5, 14, 5],
        [5, 15, 7],
        [5, 16, 11],
        [5, 17, 6],
        [5, 18, 0],
        [5, 19, 5],
        [5, 20, 3],
        [5, 21, 4],
        [5, 22, 2],
        [5, 23, 0],
        [6, 0, 1],
        [6, 1, 0],
        [6, 2, 0],
        [6, 3, 0],
        [6, 4, 0],
        [6, 5, 0],
        [6, 6, 0],
        [6, 7, 0],
        [6, 8, 0],
        [6, 9, 0],
        [6, 10, 1],
        [6, 11, 0],
        [6, 12, 2],
        [6, 13, 1],
        [6, 14, 3],
        [6, 15, 4],
        [6, 16, 0],
        [6, 17, 0],
        [6, 18, 0],
        [6, 19, 0],
        [6, 20, 1],
        [6, 21, 2],
        [6, 22, 2],
        [6, 23, 6]
      ];
      let option = {
        tooltip: {},
        visualMap: {
          max: 20,
          inRange: {
            color: [
              "#313695",
              "#4575b4",
              "#74add1",
              "#abd9e9",
              "#e0f3f8",
              "#ffffbf",
              "#fee090",
              "#fdae61",
              "#f46d43",
              "#d73027",
              "#a50026"
            ]
          }
        },
        xAxis3D: {
          type: "category",
          data: hours
        },
        yAxis3D: {
          type: "category",
          data: days
        },
        zAxis3D: {
          type: "value"
        },
        grid3D: {
          boxWidth: 200,
          boxDepth: 80,
          viewControl: {
            // projection: 'orthographic'
          },
          light: {
            main: {
              intensity: 1.2,
              shadow: true
            },
            ambient: {
              intensity: 0.3
            }
          }
        },
        series: [
          {
            type: "bar3D",
            data: data.map(function(item) {
              return {
                value: [item[1], item[0], item[2]]
              };
            }),
            shading: "lambert",

            label: {
              textStyle: {
                fontSize: 16,
                borderWidth: 1
              }
            },

            emphasis: {
              label: {
                textStyle: {
                  fontSize: 20,
                  color: "#900"
                }
              },
              itemStyle: {
                color: "#900"
              }
            }
          }
        ]
      };
      let myChart = this.$echarts.init(document.getElementById("myChart1"));
      myChart.setOption(option);
    }
  }
};
</script>

<style lang="scss" scoped>
</style>