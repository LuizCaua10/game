var carred = document.getElementById("red")//carro vermelho
var carwhite = document.getElementById("white")//carro branco
var btnwhite = document.getElementById("branco")//btn para selecionar carro branco
var btnverm = document.getElementById("vermelho")//btn para selecionar carro vermelho
var result = document.getElementById("result")//btn resultado
var btns = document.getElementsByClassName("btn")
var resetar = document.getElementById("resetar")//btn resetar
var acelerar = document.getElementById("acelerar")//btn acelerar
var desacelerar = document.getElementById("desacelerar")//btn desacelerar
//carro vermelho function
carred.addEventListener("click", function(){
    var right = parseInt(window.getComputedStyle(carred).right)
    result.textContent = "Vermalho!"
    document.body.style.background = "red"
    document.body.style.color = "black"

    for(i=0; i<=2;i++){
        btns[i].style.display = "block"
    }
})
//resetar function
resetar.addEventListener("click", function(){
    document.body.style.backgroundColor = "black"
    document.body.style.color = "white"
    result.textContent = "?"
    for(i=0; i<=2;i++){
        btns[i].style.display = "none"
    var top = parseInt(window.getComputedStyle(carred).top)
    carred.style.top = "60px"
    carred.style.width = "50px"
    carred.style.height = "50px"
    carred.style.right = "205px"
    carwhite.style.top = "60px"
    carwhite.style.width = "50px"
    carwhite.style.height = "50px"
    carwhite.style.left = "205px"

    }
})

//btn carro vermelho function
btnverm.addEventListener("click", function(){
    var right = parseInt(window.getComputedStyle(carred).right)
    result.textContent = "Vermelho!"
    document.body.style.background = "red"
    document.body.style.color = "black"

    for(i=0; i<=2;i++){
        btns[i].style.display = "block"
    }
})

//carro branco function
carwhite.addEventListener("click", function(){
    var right = parseInt(window.getComputedStyle(carred).left)
    result.textContent = "Branco!"
    document.body.style.background = "white"
    document.body.style.color = "black"

    for(i=0; i<=2;i++){
        btns[i].style.display = "block"
    }
})
//btn carro branco function
btnwhite.addEventListener("click", function(){
    var right = parseInt(window.getComputedStyle(carred).left)
    result.textContent = "Branco!"
    document.body.style.background = "white"
    document.body.style.color = "black"

    for(i=0; i<=2;i++){
        btns[i].style.display = "block"
    }
})
//movimento do carro vermelho
document.addEventListener("keydown",function(event){
        console.log(event)
    
    if (event.key === "ArrowUp" && result.textContent === "Vermalho!") { 
        
        var top = parseInt(window.getComputedStyle(carred).top)
        
        top = top - 5 
        
        carred.style.top = top + "px"
    }

    if (event.key === "ArrowDown" && result.textContent === "Vermalho!") { 
        
        var top = parseInt(window.getComputedStyle(carred).top)

        top = top + 5

        carred.style.top = top + "px"

    }
    if (event.key === "ArrowDown" && result.textContent === "Vermalho!") { 
        
        var height = parseInt(window.getComputedStyle(carred).height)

        height = height + 6

        carred.style.height = height + "px"
    }
      if (event.key === "ArrowUp" && result.textContent === "Vermalho!") {

        var height = parseInt(window.getComputedStyle(carred).height)

        height = height - 6

        carred.style.height = height + "px"

    } //movimento do carro branco
    
    if (event.key === "ArrowUp" && result.textContent === "Branco!") { 
        
        var top = parseInt(window.getComputedStyle(carwhite).top)
        
        top = top - 6
        
        carwhite.style.top = top + "px"
    }

    if (event.key === "ArrowDown" && result.textContent === "Branco!") { 
        
        var top = parseInt(window.getComputedStyle(carwhite).top)

        top = top + 6

        carwhite.style.top = top + "px"

    }
    if (event.key === "ArrowDown" && result.textContent === "Branco!") { 
        
        var width = parseInt(window.getComputedStyle(carwhite).width)

        width = width + 5

        carwhite.style.width = width + "px"
    }
    if (event.key === "ArrowUp" && result.textContent === "Branco!") {

        var width = parseInt(window.getComputedStyle(carwhite).width)

        width = width - 5

        carwhite.style.width = width + "px"
    }
    if (event.key === "ArrowUp" && result.textContent === "Branco!") {
        var left = parseInt(window.getComputedStyle(carwhite).left)
        
        left = left + 5

        carwhite.style.left = left + "px"

    }
    if (event.key === "ArrowDown" && result.textContent === "Branco!") {
        var left = parseInt(window.getComputedStyle(carwhite).left)
        
        left = left - 5

        carwhite.style.left = left + "px"

    }
})
acelerar.addEventListener("click",function(){
    var carroSelecionado = result.textContent;

    if (carroSelecionado === "Vermelho!") {
        var topRed = parseInt(window.getComputedStyle(carred).top);
        top = top - 5; 
        carred.style.top = top + "px";

        var height = parseInt(window.getComputedStyle(carred).height);
        height = height + 6;
        carred.style.height = height + "px";

        var width = parseInt(window.getComputedStyle(carred).width);
        width = width + 6; 
        carred.style.width = width + "px";

    } else if (carroSelecionado === "Branco!") {
        var top = parseInt(window.getComputedStyle(carwhite).top);
        top = top - 5; 
        carwhite.style.top = top + "px";

        var heightWhite = parseInt(window.getComputedStyle(carwhite).height);
        height = height + 6;
        carwhite.style.height = height + "px";
        
        var width = parseInt(window.getComputedStyle(carwhite).width);
        width = width + 6; 
        carwhite.style.width = width + "px";
    }
})
