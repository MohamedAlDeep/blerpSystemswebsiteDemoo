let body = document.getElementById('bdy')
let nav = document.getElementById('nav')
let menuBtn = document.getElementById('menu-btn')

if(window.innerWidth > 1000){
    body.style.height = '100vh'
    nav.style.display = 'inline-flex'
    menuBtn.style.display = 'none'
}else{
    body.style.height = '100vh'
    if(window.innerWidth < 1000){ 
        
        menuBtn.style.display = 'block'
    }
    function menuFnc(){
        nav.style.display = 'none'
       
        menuBtn.addEventListener('click', ()=>{
            menuBtn.innerHTML = "Close"
            nav.style.display = 'inline'
            menuBtn.addEventListener('click', ()=>{
                menuBtn.style.backgroundColor = 'rgb(255, 255, 255)'
                menuBtn.innerHTML = "Menu"
                
                menuFnc()
            })
        })
    }
    menuFnc()
}