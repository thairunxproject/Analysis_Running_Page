$('document').ready(function () {

  $("#chart-work-plan").insertFusionCharts({
    type: "gantt",
    width: "100%",
    height: "500",
    dataFormat: "json",
    dataSource: {
      chart: {
        dateformat: "dd/mm/yyyy",
        caption: "แผนงานที่กำหนด",
        theme: "fusion",
        canvasborderalpha: "40",
        baseFont: "Kanit",
        ganttlinealpha: "50",
        captionFontSize: "20"
      },
      tasks: {
        color: "#5D62B5",
        task: [
          {
            start: "26/08/2019",
            end: "27/08/2019"
          },
          {
            start: "26/08/2019",
            end: "28/08/2019"
          },
          {
            start: "27/08/2019",
            end: "29/08/2019"
          },
          {
            start: "28/08/2019",
            end: "30/08/2019"
          },
          {
            start: "30/08/2019",
            end: "31/08/2019"
          }
        ]
      },
      processes: {
        headertext: "Task",
        headeralign: "left",
        fontsize: "14",
        isbold: "0",
        align: "left",
        process: [
          {
            label: "วางแผนงานทำงาน"
          },
          {
            label: "เริ่มสำรวจและเก็บข้อมูลพื้นฐาน<br>เพจเฟซบุ๊กที่เกี่ยวข้องกับการวิ่ง"
          },
          {
            label: "เริ่มเก็บข้อมูลเชิงลึกและกำหนดตัววัดคะแนน<br>ในแต่ละหัวข้อที่สนใจ"
          },
          {
            label: "สรุปข้อมูลจากการสำรวจทั้งหมด<br>ในรูปแบบข้อมูลและกราฟแสดงผล"
          },
          {
            label: "นำเสนอผลการดำเนินการทั้งหมด"
          }
        ]
      },
      categories: [
        {
          category: [
            {
              start: "26/08/2019",
              end: "27/08/2019",
              label: "Day 1"
            },
            {
                start: "27/08/2019",
                end: "28/08/2019",                      
                label: "Day 2"
            },
            {
                start: "28/08/2019",
                end: "29/08/2019",                      
                label: "Day 3"
            },
            {
                start: "29/08/2019",
                end: "30/08/2019",
                label: "Day 4"
            },
            {
                start: "30/08/2019",
                end: "31/08/2019",
                label: "Day 5"
            }
          ]
        }
      ]
    }
  });




  $("#chart-like-page").insertFusionCharts({
    type: "scrollcolumn2d",
    width: "100%",
    height: "400",
    dataFormat: "json",
    dataSource: {
      chart: {
        caption: "ยอดไลก์และติดตามของ 12 อันดับเพจเกี่ยวกับการวิ่ง",
        subcaption: "ณ วันที่ 26 สิงหาคม 2562",
        yaxisname: "ยอดการกดไลก์และติดตาม",
        numvisibleplot: "24",
        formatNumber: "0",
        labeldisplay: "auto",
        theme: "fusion",
        baseFont: "Kanit"
      },
      categories: [
        {
          category: [
            {
              label: "วิ่งไหนดี"
            },
            {
              label: "ThaiRun"
            },
            {
              label: "Runner’s Journey"
            },
            {
              label: "ไปวิ่งกันเถอะ"
            },
            {
              label: "เรื่องวิ่งเรื่องกล้วย"
            },
            {
              label: "Runlah"
            },
            {
              label: "วิ่งไหนกัน ปั่นไหนดี"
            },
            {
              label: "นักวิ่งน่ารัก"
            },
            {
              label: "วิ่งแถวบ้าน"
            },
            {
              label: "ออกไปวิ่ง"
            },
            {
              label: "Running Insider"
            },
            {
              label: "ไปวิ่งกัน"
            },
           
          ]
        }
      ],
      dataset: [
        {
          seriesname: "Liked",
          data: [
            {
              value: "777818"
            },
            {
              value: "642590"
            },
            {
              value: "132710"
            },
            {
              value: "132346"
            },
            {
              value: "130302"
            },
            { 
              value: "116865"
            },
            {
              value: "114320"
            },
            {
              value: "111707"
            },
            {
              value: "95006"
            },
            {
              value: "94171"
            },
            {
              value: "73942"
            },
            {
              value: "34589"
            }
          ]
        },
        {
          seriesname: "followed",
          data: [
            {
              value: "782537"
            },
            {
              value: "660562"
            },
            {
              value: "151102"
            },
            {
              value: "136148"
            },
            {
              value: "131228"
            },
            {
              value: "119513"
            },
            {
              value: "117264"
            },
            {
              value: "114395"
            },
            {
              value: "95006"
            },
            {
              value: "104886"
            },
            {
              value: "74940"
            },
            {
              value: "36279"
            }
          ]
        }
      ]
    }
  });
  


    $("#chart-like-page-grown").insertFusionCharts({
        type: "scrollstackedcolumn2d",
        width: "100%",
        height: "500",
        dataFormat: "json",
        dataSource: {
            chart: {
            caption: "จำนวนยอดไลก์เพจที่เพิ่มขึ้นในระยะเวลา 4 วัน",
            subCaption: "ตั้งแต่วันที่ 26 - 30 สิงหาคม 2562",
            yaxisname: "ยอดไลก์",
            flatscrollbars: "0",
            scrollheight: "12",
            numvisibleplot: "11",
            formatNumber: "0",
            baseFont: "Kanit",
            plottooltext:
                "ยอดกดไลก์ : <b>$dataValue</b> ของเพจ  $label",
            theme: "fusion"
            },
            categories: [
            {
                category: [
                  {
                    label: "วิ่งไหนดี"
                  },
                  {
                    label: "ThaiRun"
                  },
                  {
                    label: "ไปวิ่งกันเถอะ"
                  },
                  {
                    label: "เรื่องวิ่งเรื่องกล้วย"
                  },
                  {
                    label: "Runlah"
                  },
                  {
                    label: "วิ่งไหนกัน ปั่นไหนดี"
                  },
                  {
                    label: "นักวิ่งน่ารัก"
                  },
                  {
                    label: "ออกไปวิ่ง"
                  },
                  {
                    label: "ไปวิ่งกัน"
                  },
                  {
                    label: "ไปวิ่ง"
                  },
                  {
                    label: "Running thailand events"
                  }
                ]
            }
            ],
            dataset: [
            {
                seriesname: "ยอดคนกดไลก์วันที่ ณ วันที่ 26 สิงหาคม  2019",
                data: [
                  {
                    value: "777818"
                  },
                  {
                    value: "642590"
                  },
                  {
                    value: "132346"
                  },
                  {
                    value: "130302"
                  },
                  { 
                    value: "116865"
                  },
                  {
                    value: "114320"
                  },
                  {
                    value: "111707"
                  },
                  {
                    value: "95006"
                  },
                  {
                    value: "94171"
                  },
                  {
                    value: "73942"
                  },
                  {
                    value: "34589"
                  }
                ]
            },
            {
                seriesname: "ยอดคนกดไลก์เพิ่มใน 5 วัน",
                data: [
                  {
                    value: "1000"
                  },
                  {
                    value: "1000"
                  },
                  {
                    value: "1000"
                  },
                  {
                    value: "1000"
                  },
                  { 
                    value: "1000"
                  },
                  {
                    value: "1000"
                  },
                  {
                    value: "1000"
                  },
                  {
                    value: "1000"
                  },
                  {
                    value: "1000"
                  },
                  {
                    value: "1000"
                  },
                  {
                    value: "1000"
                  }
                ]
            }
            ]
        }
        });


          
          $("#chart-vistual-graph").insertFusionCharts({
            type: "bubble",
            width: "100%",
            height: "500",
            dataFormat: "json",
            dataSource: {
              chart: {
                theme: "fusion",
                caption: "Sales & Profit Analysis",
                subcaption: "For Last Quarter",
                xaxisminvalue: "-100",
                xaxismaxvalue: "100",
                yaxisminvalue: "-30000",
                yaxismaxvalue: "30000",
                xaxisname: "Average Price",
                yaxisname: "Units Sold",
                plottooltext: "$name : Profit Contribution: $zvalue%",
                drawquadrant: "1",
                quadrantlabeltl: "Low Price / High Sales",
                quadrantlabeltr: "High Price / High Sales",
                quadrantlabelbl: "Low Price / Low Sales",
                quadrantlabelbr: "High Price / Low Sales",
                quadrantxval: "0",
                quadrantyval: "12000",
                quadrantlinealpha: "50",
                quadrantlinethickness: "2"
              },
              categories: [
                {
                  category: [
                    {
                      label: "0",
                      x: "0"
                    },
                    {
                      label: "$20",
                      x: "20",
                      showverticalline: "1"
                    },
                    {
                      label: "$40",
                      x: "40",
                      showverticalline: "1"
                    },
                    {
                      label: "$60",
                      x: "60",
                      showverticalline: "1"
                    },
                    {
                      label: "$80",
                      x: "80",
                      showverticalline: "1"
                    },
                    {
                      label: "$100",
                      x: "100",
                      showverticalline: "1"
                    }
                  ]
                }
              ],
              dataset: [
                {
                  data: [
                    {
                      x: "80",
                      y: "15000",
                      z: "24",
                      name: "Nike"
                    },
                    {
                      x: "60",
                      y: "18500",
                      z: "26",
                      name: "Adidas"
                    },
                    {
                      x: "-50",
                      y: "19450",
                      z: "19",
                      name: "Puma"
                    },
                    {
                      x: "65",
                      y: "10500",
                      z: "8",
                      name: "Fila"
                    },
                    {
                      x: "43",
                      y: "8750",
                      z: "5",
                      name: "Lotto"
                    },
                    {
                      x: "32",
                      y: "22000",
                      z: "10",
                      name: "Reebok"
                    },
                    {
                      x: "44",
                      y: "13000",
                      z: "9",
                      name: "Woodland"
                    }
                  ]
                }
              ],
              trendlines: [
                {
                  line: [
                    {
                      startvalue: "20000",
                      endvalue: "30000",
                      istrendzone: "1",
                      color: "#aaaaaa",
                      alpha: "14"
                    },
                    {
                      startvalue: "10000",
                      endvalue: "20000",
                      istrendzone: "1",
                      color: "#aaaaaa",
                      alpha: "7"
                    }
                  ]
                }
              ]
            }
          });
          
});

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
      e.preventDefault();

      document.querySelector(this.getAttribute('href')).scrollIntoView({
          behavior: 'smooth'
      });
  });
});