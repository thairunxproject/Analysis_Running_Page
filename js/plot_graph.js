$('document').ready(function () {

  $("#chart-container").insertFusionCharts({
    type: "scrollcolumn2d",
    width: "100%",
    height: "400",
    dataFormat: "json",
    dataSource: {
      chart: {
        caption: "ยอดไลก์และติดตามของ 10 อันดับเพจเกี่ยวกับการวิ่ง",
        subcaption: "ณ วันที่ 27 สิงหาคม 2562",
        yaxisname: "ยอดการกดไลก์และติดตาม",
        numvisibleplot: "22",
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
          seriesname: "Liked",
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
          seriesname: "followed",
          data: [
            {
              value: "782537"
            },
            {
              value: "660562"
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
  


    $("#chart-container-stack").insertFusionCharts({
        type: "scrollstackedcolumn2d",
        width: "100%",
        height: "100%",
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
                ganttlinealpha: "50"
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
                    start: "28/08/2019",
                    end: "29/08/2019"
                  },
                  {
                    start: "29/08/2019",
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
          



});
