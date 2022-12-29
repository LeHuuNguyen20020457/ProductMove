    const clickUpDown = document.querySelectorAll('.clickUpDown')
    const iconUp = document.querySelectorAll('.icon-up')
    const navDown = document.querySelectorAll('.nav-down')
    for(let i = 0; i < clickUpDown.length; i++){
        clickUpDown[i].onclick = function(e) {
        if(navDown[i].style.display === 'block')
        {
            iconUp[i].style.animation = 'rotateUp 0.3s linear forwards'
            navDown[i].style.display = 'none'
        }
        else{
            iconUp[i].style.animation = 'rotateDown 0.3s linear forwards'
            navDown[i].style.display = 'block'
        }
    }
    }