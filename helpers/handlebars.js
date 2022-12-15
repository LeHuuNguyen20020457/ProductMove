const handlebars = require('handlebars');

module.exports = {
    sum: (a,b) => a+b,
    
    checkParts(parts, WFs, agents, WCs){
      let part = parts || WFs || agents || WCs || false;
      
      if(!part) {
        part = parts
      }

     

      return part.map((p, index) => {
        return `<tr>
        <td>${index}</td>
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

  }
  