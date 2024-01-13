let stars = document.getElementById('stars')
let moon = document.getElementById ('moon')
let mountain3 = document.getElementById('mountain3')
let mountain4 = document.getElementById('mountain4')
let river = document.getElementById('river')
let boat6 = document.getElementById('boat')
let press = document.querySelector('.press')

window.onscroll = function (){
    let value = scrollY;
   stars.style.left = value + 'px'
   moon.style.top = value * 4 + 'px'
   mountain3.style.top = value * 2 + 'px'
   mountain4.style.top = value * 1.5 + 'px'
   river.style.top = value + 'px'
   boat6.style.top = value + 'px'
   boat6.style.left = value * 3 + 'px'
   press.style.fontSize = value  + 'px'
   if(scrollY >= 100){
    press.style.fontSize = 67  + 'px'
    press.style.position =  'fixed'
    if(scrollY <= 300){
        press.style.display =  'none'
    }else{
        press.style.display =  'block'
    }
    if(scrollY >= 100){
        document.querySelector('.main').style.background = 'linear-gradient( rgb(15, 229, 218),rgb(10, 10, 229))'
    }else{
        document.querySelector('.main').style.background = 'linear-gradient(#94f5f0,rgb(6, 6, 195))'
    }

   }

}

/*



*/



/*
let stars = document.getElementById('stars')
let moon = document.getElementById ('moon')
let mountain3 = document.getElementById('mountain3')
let mountain4 = document.getElementById('mountain4')
let river = document.getElementById('river')
let boat6 = document.getElementById('boat')
let press = document.querySelector('.press')

window.onscroll = function (){
    let value = scrollY;
   stars.style.left = value + 'px'
   moon.style.top = value * 4 + 'px'
   mountain3.style.top = value * 2 + 'px'
   mountain4.style.top = value * 1.5 + 'px'
   river.style.top = value + 'px'
   boat6.style.top = value + 'px'
   boat6.style.left = value * 3 + 'px'
   press.style.fontSize = value  + 'px'
   if(scrollY >= 100){
    press.style.fontSize = 67  + 'px'
    press.style.position =  'fixed'
    if(scrollY <= 300){
        press.style.display =  'none'
    }else{
        press.style.display =  'block'
    }
    if(scrollY >= 100){
        document.querySelector('.main').style.background = 'linear-gradient( rgb(15, 229, 218),rgb(10, 10, 229))'
    }else{
        document.querySelector('.main').style.background = 'linear-gradient(#94f5f0,rgb(6, 6, 195))'
    }

   }

}

// nr

*/


















