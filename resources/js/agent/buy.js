document.addEventListener("DOMContentLoaded", function(){
    $('.save--info-buy').click(function() {
        if(confirm('Bạn muốn lưu khách hàng này!!!') === true){
        const nameCustomer = $('.name--customer').val();
        const phoneCustomer = $('.phone--customer').val();
        const codeSP = $('.code--sp').val();
        $.ajax({
            url: '/customer/buy/createCustomer',
            type: 'POST',
            dataType: 'html',
            data: {
                name: nameCustomer,
                phone: phoneCustomer,
                productID: codeSP
            },
            success: function(result) {
                $('.buy__info').html(result)
                window.location.reload();
            }
        })
        }
    })
})