const randomColor = function (){
    const hex = "0123456789ABCDEF"
    let color = "#"
    for(let i = 0; i < 6; i++){
        color += hex[Math.floor(Math.random() * 16)]
    }
    return color
}
let inter;
const startChange = function(){
    if(!inter){
        inter = setInterval(ChangeBg, 1000)
    }
    function ChangeBg(){
        document.body.style.backgroundColor = randomColor()
    }
}
const stopChange = function(){
    clearInterval(inter)
    inter = null;    
}
document.querySelector('#start').addEventListener('click', startChange)
document.querySelector('#stop').addEventListener('click', stopChange)
