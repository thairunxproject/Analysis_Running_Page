$('document').ready(function () {

  $("#chart-work-plan").insertFusionCharts({
    type: "gantt",
    width: "100%",
    height: "500",
    dataFormat: "json",
    dataSource: {
      chart: {
        dateformat: "dd/mm/yyyy",
        subcaption: "",
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
            label: "เริ่มเก็บข้อมูลเชิงลึกและกำหนดตัว<br>วัดคะแนนในแต่ละหัวข้อที่สนใจ"
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
        caption: "ยอดไลก์และติดตามของ 12 เพจเกี่ยวกับการวิ่ง",
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
              label: "ไปวิ่งกัน : RunningHub"
            }
          ]
        }
      ],
      dataset: [
        {
          seriesname: "Number of likes",
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
              value: "101052"
            },
            {
              value: "95006"
            },
            {
              value: "94722"
            },
            {
              value: "94171"
            }
          ]
        },
        {
          seriesname: "Number of followers",
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
              value: "111707"
            },
            {
              value: "112637"
            },
            {
              value: "99680"
            },
            {
              value: "97332"
            },
            {
              value: "104886"
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
            caption: "อัตราการเติบโตของจำนวนยอดไลก์ภายใน 4 วัน",
            subCaption: "ตั้งแต่วันที่ 26 - 29 สิงหาคม 2562",
            yaxisname: "ยอดไลก์",
            flatscrollbars: "0",
            scrollheight: "12",
            numvisibleplot: "12",
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
                    label: "ไปวิ่งกัน : RunningHub"
                  }
      
                ]
            }
            ],
            dataset: [
            {
                seriesname: "ยอดคนกดไลก์ ณ วันที่ 26 สิงหาคม  2019",
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
                    value: "101052"
                  },
                  {
                    value: "95006"
                  },
                  {
                    value: "94722"
                  },
                  {
                    value: "94171"
                  }
      
                ]
            },
            {
                seriesname: "ยอดคนกดไลก์เพิ่มในเวลา 4 วัน",
                data: [
                  {
                    value: "2140"
                  },
                  {
                    value: "1313"
                  },
                  {
                    value: "968"
                  },
                  {
                    value: "922"
                  },
                  {
                    value: "250"
                  },
                  { 
                    value: "648"
                  },
                  {
                    value: "445"
                  },
                  {
                    value: "103"
                  },
                  {
                    value: "3370"
                  },
                  {
                    value: "303"
                  },
                  {
                    value: "220"
                  },
                  {
                    value: "2459"
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
                caption: "การจำลองข้อมูลเพจที่เกี่ยวข้องกับการวิ่ง",
                subcaption: "",
                xaxisminvalue: "-225",
                xaxismaxvalue: "225",
                yaxisminvalue: "-225",
                yaxismaxvalue: "225",
                xaxisname: "คะแนนในหัวข้อ [ Promote , Review , advertise ]",
                yaxisname: "คะแนนในหัวข้อ [ Entertain , Quotes&Interview , Articles ]",
                plottooltext: "Page : $name | Coordinates : [ $xvalue , $yvalue ] | Liked Count : $zvalue K",
                drawquadrant: "1",
                quadrantlabeltl: "",
                quadrantlabeltr: "",
                quadrantlabelbl: "",
                quadrantlabelbr: "",
                quadrantxval: "0",
                quadrantyval: "0",
                quadrantlinealpha: "80",
                quadrantlinethickness: "2",
                baseFont: "Kanit"
              },
              dataset: [
                {
                  data: [
                    {
                      x: "93.75",
                      y: "7.5",
                      z: "770.818",
                      name: "วิ่งไหนดี",
                      color: "#49A2C8" 
                    },
                    {
                      x: "72.5",
                      y: "41.5",
                      z: "642.59",
                      name: "Thairun",
                      color: "#5D62B4" 
                    },
                    {
                      x: "-12",
                      y: "102.5",
                      z: "132.71",
                      name: "Runner’s Journey",
                      color: "#49A2C8" 
                    },
                    {
                      x: "-8",
                      y: "93",
                      z: "132.346",
                      name: "ไปวิ่งกันเถอะ",
                      color: "#5382BE" 
                    },
                    {
                      x: "67",
                      y: "30.5",
                      z: "130.302",
                      name: "เรื่องวิ่งเรื่องกล้วย",
                      color: "#35E2DD" 
                    },
                    {
                      x: "161",
                      y: "-56",
                      z: "116.865",
                      name: "Runlah",
                      color: "#5382BE" 
                    },
                    {
                      x: "45.5",
                      y: "58.5",
                      z: "114.32",
                      name: "วิ่งไหนกัน ปั่นไหนดี",
                      color: "#3FC2D3" 
                    },
                    {
                      x: "-75",
                      y: "194.5",
                      z: "111.707",
                      name: "นักวิ่งน่ารัก",
                      color: "#35E2DD" 
                    },
                    {
                      x: "62",
                      y: "42.5",
                      z: "101.052",
                      name: "วิ่งแถวบ้าน",
                      color: "#35E2DD" 
                    },
                    {
                      x: "94",
                      y: "14",
                      z: "95.006",
                      name: "ออกไปวิ่ง",
                      color: "#35E2DD" 
                    },
                    {
                      x: "-59",
                      y: "188",
                      z: "94.722",
                      name: "Running Insider",
                      color: "#3FC2D3" 
                    },
                    {
                      x: "-7",
                      y: "113.5",
                      z: "94.171",
                      name: "ไปวิ่งกัน",
                      color: "#3FC2D3" 
                    }
                  ]
                }
              ]
            }
          });

          $("#chart-vistual-radar").insertFusionCharts({
            type: "radar",
            width: "100%",
            height: "600",
            dataFormat: "json",
            dataSource: {
              chart: {
                caption: "คุณภาพโพสต์ในแต่ละด้านของเพจ",
                subcaption: "",
                theme: "gammel",
                bgColor: "#FFFFFF",
                bgAlpha: "0",
                showBorder: "0",
                numbersuffix: "",
                plotfillalpha: "40",
                baseFont: "Kanit"
                },
              categories: [
                {
                  category: [
                    {
                      label: "Promote"
                    },
                    {
                      label: "Review"
                    },
                    {
                      label: "Advertise"
                    },
                    {
                      label: "Quotes & Interviews"
                    },
                    {
                      label: "Entertain"
                    },
                    {
                      label: "Articles"
                    }
                  ]
                }
              ],
              dataset: [
                {
                  seriesname: "วิ่งไหนดี",
                  plottooltext: "$seriesname - <b> Scrore $label : <b>$datavalue</b>",
                  data: [
                    {
                      value: "7.75"
                    },
                    {
                      value: "9.5"
                    },
                    {
                      value: "9"
                    },
                    {
                      value: "9"
                    },
                    {
                      value: "8.5"
                    },
                    {
                      value: "9.5"
                    }
                  ]
                },
                {
                  seriesname: "Thairun",
                  plottooltext: "$seriesname - <b> Scrore $label : <b>$datavalue</b>",
                  data: [
                    {
                      value: "8.75"
                    },
                    {
                      value: "0"
                    },
                    {
                      value: "8.5"
                    },
                    {
                      value: "8.5"
                    },
                    {
                      value: "8"
                    },
                    {
                      value: "9.5"
                    }
                  ]
                },
                {
                  seriesname: "Runner’s Journey",
                  plottooltext: "$seriesname - <b> Scrore $label : <b>$datavalue</b>",
                  data: [
                    {
                      value: "8"
                    },
                    {
                      value: "0"
                    },
                    {
                      value: "7.5"
                    },
                    {
                      value: "7.75"
                    },
                    {
                      value: "9"
                    },
                    {
                      value: "7.5"
                    }
                  ]
                },
                {
                  seriesname: "ไปวิ่งกันเถอะ",
                  plottooltext: "$seriesname - <b> Scrore $label : <b>$datavalue</b>",
                  data: [
                    {
                      value: "8"
                    },
                    {
                      value: "7"
                    },
                    {
                      value: "0"
                    },
                    {
                      value: "8"
                    },
                    {
                      value: "8"
                    },
                    {
                      value: "8"
                    }
                  ]
                },
                {
                  seriesname: "เรื่องวิ่งเรื่องกล้วย",
                  plottooltext: "$seriesname - <b> Scrore $label : <b>$datavalue</b>",
                  data: [
                    {
                      value: "8"
                    },
                    {
                      value: "8"
                    },
                    {
                      value: "9"
                    },
                    {
                      value: "8"
                    },
                    {
                      value: "0"
                    },
                    {
                      value: "8.5"
                    }
                  ]
                },
                {
                  seriesname: "Runlah",
                  plottooltext: "$seriesname - <b> Scrore $label : <b>$datavalue</b>",
                  data: [
                    {
                      value: "8.5"
                    },
                    {
                      value: "0.5"
                    },
                    {
                      value: "8"
                    },
                    {
                      value: "0.5"
                    },
                    {
                      value: "0"
                    },
                    {
                      value: "9.5"
                    }
                  ]
                },
                {
                  seriesname: "วิ่งไหนกัน ปั่นไหนดี",
                  plottooltext: "$seriesname - <b> Scrore $label : <b>$datavalue</b>",
                  data: [
                    {
                      value: "8"
                    },
                    {
                      value: "8"
                    },
                    {
                      value: "0"
                    },
                    {
                      value: "9"
                    },
                    {
                      value: "8"
                    },
                    {
                      value: "9.25"
                    }
                  ]
                },
                {
                  seriesname: "นักวิ่งน่ารัก",
                  plottooltext: "$seriesname - <b> Scrore $label : <b>$datavalue</b>",
                  data: [
                    {
                      value: "0.5"
                    },
                    {
                      value: "0.5"
                    },
                    {
                      value: "0.5"
                    },
                    {
                      value: "0.5"
                    },
                    {
                      value: "9"
                    },
                    {
                      value: "8.75"
                    }
                  ]
                },
                {
                  seriesname: "วิ่งแถวบ้าน",
                  plottooltext: "$seriesname - <b> Scrore $label : <b>$datavalue</b>",
                  data: [
                    {
                      value: "8.5"
                    },
                    {
                      value: "0"
                    },
                    {
                      value: "9"
                    },
                    {
                      value: "8.5"
                    },
                    {
                      value: "8"
                    },
                    {
                      value: "8.5"
                    }
                  ]
                },
                {
                  seriesname: "ออกไปวิ่ง",
                  plottooltext: "$seriesname - <b> Scrore $label : <b>$datavalue</b>",
                  data: [
                    {
                      value: "8.5"
                    },
                    {
                      value: "7.5"
                    },
                    {
                      value: "0"
                    },
                    {
                      value: "0"
                    },
                    {
                      value: "8.75"
                    },
                    {
                      value: "9"
                    }
                  ]
                },
                {
                  seriesname: "Running Inside",
                  plottooltext: "$seriesname - <b> Scrore $label : <b>$datavalue</b>",
                  data: [
                    {
                      value: "0.5"
                    },
                    {
                      value: "8"
                    },
                    {
                      value: "0"
                    },
                    {
                      value: "0"
                    },
                    {
                      value: "8.5"
                    },
                    {
                      value: "9.5"
                    }
                  ]
                },
                {
                  seriesname: "ไปวิ่งกัน",
                  plottooltext: "$seriesname - <b> Scrore $label : <b>$datavalue</b>",
                  data: [
                    {
                      value: "8.5"
                    },
                    {
                      value: "0.5"
                    },
                    {
                      value: "0.5"
                    },
                    {
                      value: "0.5"
                    },
                    {
                      value: "9"
                    },
                    {
                      value: "8.5"
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