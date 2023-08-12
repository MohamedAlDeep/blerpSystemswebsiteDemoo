let body = document.getElementById('bdy')
let nav = document.getElementById('nav')
if(window.innerWidth > 500){
    body.style.height = '100vh'
    nav.style.display = 'inline-flex'
}

if(window.innerWidth < 500){ 
    nav.style.display = 'inline'
}
