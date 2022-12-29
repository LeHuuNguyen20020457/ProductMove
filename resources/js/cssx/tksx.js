document.addEventListener('DOMContentLoaded', function() {
    
    
    function handleSelectTimeMonth(){
        const selectMonth = document.querySelector('.selectMonth')
        selectMonth.onchange = function(select){
            $.ajax({
                url: '/manufacturing/tksx',
                type: 'POST',
                dataType: 'html', 
                data: {
                    month: select.target.value,
                    
                },
                success: function(result) {
                    $('.tableTKSX').html(result)
                }
            })
        }
    }
   
    function handleSelectTimeQuarter(){
        const selectQuarter = document.querySelector('.selectQuarter')
        selectQuarter.onchange = function(select) {
            $.ajax({
                url: '/manufacturing/tksx',
                type: 'POST',
                dataType: 'html', 
                data: {
                    quarter: select.target.value,
                },
                success: function(result) {
                    $('.tableTKSX').html(result)
                }
            })
        }
    }

    const selectTQ = document.querySelector('.select-TQ')
    const divSelectTime = document.querySelector('.select-Time')
    selectTQ.onchange = function(select) {
        
        if(select.target.value === '1'){
            divSelectTime.innerHTML = `<select name="" id="" class = "selectMonth">
                                            <option value="">Chọn tháng</option>
                                            <option value="1">Tháng 1</option>
                                            <option value="2">Tháng 2</option>
                                            <option value="3">Tháng 3</option>
                                            <option value="4">Tháng 4</option>
                                            <option value="5">Tháng 5</option>
                                            <option value="6">Tháng 6</option>
                                            <option value="7">Tháng 7</option>
                                            <option value="8">Tháng 8</option>
                                            <option value="9">Tháng 9</option>
                                            <option value="10">Tháng 10</option>
                                            <option value="11">Tháng 11</option>
                                            <option value="12">Tháng 12</option>
                                        </select>`

            handleSelectTimeMonth()
        }
        else if(select.target.value === '2') {
            divSelectTime.innerHTML = `<select name="" id="" class = "selectQuarter">
                                            <option value="">Chọn quý</option>
                                            <option value="1">Quý 1</option>
                                            <option value="2">Quý 2</option>
                                            <option value="3">Quý 3</option>
                                            <option value="4">Quý 4</option>
                                        </select>`
            handleSelectTimeQuarter()
        }
    }
})