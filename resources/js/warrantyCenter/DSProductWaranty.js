function handleBtnFinish(id, productID) {
    $.ajax({
        url: '/sendWarranty/delete',
        type: 'DELETE',
        dataType: 'html',
        data: {
            id,
            productID,
            status: 0,
        },
        success: function(result){
            console.log(result)
            window.location.reload();
        }
    })
}

function handleBtnErr(id, productID){
    $.ajax({
            url: '/sendWarranty/delete',
            type: 'DELETE',
            dataType: 'html',
            data: {
                id,
                productID,
                status: 2,
            },
            success: function(result){
                console.log(result)
                window.location.reload();
            }
        })
}

document.addEventListener('DOMContentLoaded', function(){
    const btnFinish = $('.btn--finish')
    const btnErr = $('.btn--err')
    
    btnFinish.click(function(){
        if(confirm('Sản phẩm đã được sửa xong rồi?') === true) {
            var id = $(this).parents('tr').children('td.idSW').text()
            var productID = $(this).parents('tr').children('td.productID').text()
            
            handleBtnFinish(id, productID)
        }
    })

    btnErr.click(function() {
        if(confirm('Sản phẩm lỗi này sẽ được gửi về cơ sở sản xuất?') === true){
            var id = $(this).parents('tr').children('td.idSW').text()
            var productID = $(this).parents('tr').children('td.productID').text()
            handleBtnErr(id, productID)
        }
    })
})