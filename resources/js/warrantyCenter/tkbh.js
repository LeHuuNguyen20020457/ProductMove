    document.addEventListener('DOMContentLoaded', function(){
    var xValues = ['Tháng 1','Tháng 2','Tháng 3','Tháng 4','Tháng 5','Tháng 6','Tháng 7','Tháng 8','Tháng 9','Tháng 10', 'Tháng 11','Tháng 12'];

    new Chart("myChartTKBH", {
    type: "line",
    data: {
        labels: xValues,
        datasets: [{ 
        data: [40,50,60,60,53,55,50,40,45,66,30, 40],
        borderColor: "blue",
        backgroundColor: "rgba(0,0,255,1.0)",
        fill: false,
        
        }, { 
        data: [5,10,15,5,7,12,5,7,8,10,7,8],
        borderColor: "red",
        backgroundColor: "rgba(0,0,255,1.0)",
        fill: false,
       
        }]
    },
    options: {
        legend: {display: false,
        }
    }
    });
    })