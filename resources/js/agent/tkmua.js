document.addEventListener('DOMContentLoaded', function(){
    const selectMonthOrCharter = $('.selectMonthOrCharter')
    if(selectMonthOrCharter.val() === '1') {
        $('.bars li .bar').each(function(key, bar) {
        var percentage= $(this).data('percentage');
        $(this).animate({
            height: (percentage/150)*100 + '%'
        })
        })
    }

selectMonthOrCharter.change(function() {
    if( $(this).val() ==='1'){
        $('.chart .numbers').show()
        $('.chart .bars').show()
        $('.chart #myChart').hide()
    }
    if( $(this).val() ==='2'){
        $('.chart .numbers').hide()
        $('.chart .bars').hide()
        $('.chart #myChart').show()
    }

})


  var xValues = ['Quý 1', 'Quý 2', 'Quý3', 'Quý 4'];
  var yValues = [];

  var SLMonth = []
    $('.bars li .bar').each(function(key, bar) {
        var percentage= $(this).data('percentage');
        SLMonth.push(percentage);
    })
    
    for(let i = 0; i< SLMonth.length; i+=3){
        var qarter = SLMonth[i] + SLMonth[i+1] + SLMonth[i+2]
        yValues.push(qarter)
    }
    console.log(yValues)

  new Chart("myChart", {
    type: "line",
    data: {
      labels: xValues,
      datasets: [
        {
          fill: false,
          lineTension: 0,
          backgroundColor: "rgba(0,0,255,1.0)",
          borderColor: "rgba(0,0,255,0.1)",
          data: yValues
        }
      ]
    },
    options: {
      legend: { display: false },
      scales: {
        yAxes: [{ ticks: { min: 0, max: 450 } }]
      }
    }
  });
})