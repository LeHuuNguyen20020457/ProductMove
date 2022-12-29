
function shortString(selector) {
    const elements = document.querySelectorAll(selector);
    const tail = '...';
    if (elements && elements.length) {
        for (const element of elements) {
        let text = element.innerText;
        if (element.hasAttribute('data-limit')) {
            if (text.length > element.dataset.limit) {
            element.innerText = `${text.substring(0, element.dataset.limit - tail.length).trim()}${tail}`;
            }
        } else {
            throw Error('Cannot find attribute \'data-limit\'');
        }
        }
    }
}



function handleTableSPBH() {
    const rightArrows = $('.rightArrows')
   
    rightArrows.click(function(e){

    if($(this).css("animation") !== '0.3s linear 0s 1 normal forwards running bottomArrows')
        {
            $(this).css({"animation": "bottomArrows 0.3s linear forwards",})
        }
        else{
                $(this).css({"animation": "rightArrows 0.3s linear forwards",})
        }
         $(this).parents('tr').next().toggle()

         if($('.productStatusTd')[$(this).attr('data-index')].innerText === 'Đang sửa chửa'){
             $('.btnRequestWR')[$(this).attr('data-index')].setAttribute('disabled', true)
             $('.btnRequestWR')[$(this).attr('data-index')].style["background-color"] = 'rgba(0,0,0,0.2)'
         }
        
    })

    // nếu đang trong lúc bảo hành thì button sẽ disable
    

}

function makeid(length) {
    var text = "";
    var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    
    for (var i = 0; i < length; i++)
        text += possible.charAt(Math.floor(Math.random() * possible.length));
    
    return text;
}

function handleBillWarranty() {
    const productID = $('.productID').text();
    const selectWarrantyCenter = $('#selectWarrantyCenter')
    const billWarrantyDescription = $('#billWarranty-description')

    var warrantyCenterID
    warrantyCenterID = selectWarrantyCenter.val()
    

    var description;
    description = billWarrantyDescription.val()

    $.ajax({
        url: '/SendWarranty/create',
        type: 'POST',
        dataType: 'html',
        data: {
            productID,
            warrantyCenterID,
            description,
        },
        success: function(result) {
            $('.search__warranty').html(result)
            window.location.reload();
        }
    })

}


function handleBtnRequest(){
    const codeProductP = $('.codeProductP')
    const btnRequestWR = $('.btnRequestWR')
    const nameProductP = $('.nameProductP')
    const nameCustomerP = $('.nameCustomerP')
    const phoneCustomerP = $('.phoneCustomerP')
    
    btnRequestWR.click(function() {
        var index = $(this).attr('data-index')
        
        var codeProduct = codeProductP[index].innerText
        var nameProduct = nameProductP[index].innerText
        var nameCustomer = nameCustomerP[index].innerText
        var phoneCustomer = phoneCustomerP[index].innerText
        var codeSKU = makeid(5)

        $.ajax({
            url: '/agent/billWarranty',
            type: 'POST',
            dataType: 'html',
            data: {
                codeProduct,
                nameProduct,
                nameCustomer,
                phoneCustomer,
                codeSKU,
            },
            success: function (result) {
                $('.search__warranty').html(result)
                shortString('.short');
                $('.btnCreateWarranty').click(function() {
                    handleBillWarranty()
                })
            }
        })
    })
}

document.addEventListener('DOMContentLoaded', function() {
    $(".search--phone-btn").click(function() {
        var numberPhone = $(".search--phone").val()
       
        $.ajax({
            url: '/customer/buy/searchProductWarranty',
            type: 'POST',
            dataType: 'html',
            data: {
                phone: numberPhone,
            },
            success: function(result) {
                $('.table--SPBH').html(result)
                handleTableSPBH()
                handleBtnRequest()
            }
        })
            
    })
})

