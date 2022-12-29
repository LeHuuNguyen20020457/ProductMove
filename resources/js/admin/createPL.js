    const btnSave = document.querySelector('.luulai')
    const formPL = document.forms['savePL-form']
    btnSave.onclick = function() {
        if(confirm('Bạn chắc chắn muốn thêm dòng sản phẩm này') === true){
            formPL.submit()
        }
}