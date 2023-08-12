let mainDiv = document.getElementById('grid')
let btns = document.getElementById('btns')
let body = document.getElementById('bdy')
let btn1 = document.getElementById('btn1')
let btn2 = document.getElementById('btn2')


if(window.innerWidth < 592){
    mainDiv.style.gridTemplateColumns = '20rem'
    btns.style.gridTemplateColumns = '20rem'
}
