$('document').ready(function () {
    $("#chart-container").insertFusionCharts({
        type: "column2d",
        width: "100%",
        height: "400",
        dataFormat: "json",
        dataSource: {
            // Chart Configuration
            "chart": {
                "caption": "จำนวนยอดไลก์เฟซบุ๊กเพจเกี่ยวกับการวิ่ง",
                "subCaption": "ณ วันที่ 26 สิงหาคม 2562",
                "xAxisName": "ชื่อเพจ",
                "yAxisName": "จำนวนยอดคนกดไลก์",
                "numberSuffix": "K",
                "theme": "fusion",
                "baseFont": "Kanit",

            },
            // Chart Data
            "data": [{
                "label": "Thairun",
                "value": "642.482"
            }, {
                "label": "วิ่งไหนดี",
                "value": "770.927"
            }, {
                "label": "ออกไปวิ่ง",
                "value": "95.000"
            }, {
                "label": "นักวิ่งน่ารัก",
                "value": "111.708"
            }]
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
            subCaption: "ตั้งแต่วันที่ 26 - 29 สิงหาคม 2562",
            yaxisname: "ยอดไลก์",
            flatscrollbars: "0",
            scrollheight: "12",
            numvisibleplot: "8",
            numberSuffix: "K",
            baseFont: "Kanit",
            plottooltext:
                "<b>$dataValue</b> On $label",
            theme: "fusion"
            },
            categories: [
            {
                category: [
                {
                    label: "Thairun"
                }
                ]
            }
            ],
            dataset: [
            {
                seriesname: "ยอดคนกดไลก์วันที่ 26",
                data: [
                {
                    value: "642.48"
                }
                ]
            },
            {
                seriesname: "ยอดคนกดไลก์เพิ่มใน 4 วัน",
                data: [
                {
                    value: "10"
                }
                ]
            }
            ]
        }
        });




});
