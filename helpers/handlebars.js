const handlebars = require('handlebars');

module.exports = {
    sum: (a,b) => a+b,
    
    checkParts(parts, WFs, agents, WCs){
      let part = parts || WFs || agents || WCs || false;
      
      if(!part) {
        part = parts
      }

     

      return part.map((p, index) => {
        var i = index +1;
        return `<tr>
        <td>${i}</td>
        <td>${p.name}</td>
        <td>${p.address}</td>
        <td>${p.phone}</td>
        <td>${p.email}</td>
    </tr>`
      }).join(' ')
    },

    show(isShow) {
      return isShow
    },

    selectProductLine(i, allProductLinesOfWarehouses){
       
      if(+i < allProductLinesOfWarehouses.length){

        const optionProductLines = allProductLinesOfWarehouses[+i].map((ProductLinesOfWarehouse, index) => {
          return `<option value="${index}" data-codeProductLine="${ProductLinesOfWarehouse.productLines.codeProductLine}" data-index = "${index}" data-price = "${ProductLinesOfWarehouse.productLines.price}"  data-amount = "${ProductLinesOfWarehouse.productLines.Inventory.inventoryNumber}">${ProductLinesOfWarehouse.productLines.nameProductLine}</option>`
        })
        return `<option value="">sản phẩm</option>` + optionProductLines.join(' ')
      }
   }
  }
  