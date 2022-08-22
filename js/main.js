

function overHtml(){
    var infoHtml = document.getElementById("campoinstrucoes");
    infoHtml.innerText = "HTML5 - Aprendi muito a estruturar os sites usando o HTML5, acredito estar em um nível intermediario!"
}


function outHtml(){
    var infoHtmlout = document.getElementById("campoinstrucoes");
    infoHtmlout.innerText = " "
}






function overCss(){
    var infoCss = document.getElementById("campoinstrucoes");
    infoCss.innerText = "CSS - Estilizando os sites e descubrindo funcionalidades e efeitos"
}


function outCss(){
    var infoCssout = document.getElementById("campoinstrucoes");
    infoCssout.innerText = " "
}







function overJs(){
    var infoJs = document.getElementById("campoinstrucoes");
    infoJs.innerText = "JavaScript - Atualmente estudando mais o JS, conhecendo um mar de possibilidades!"
}


function outJs(){
    var infoJsout = document.getElementById("campoinstrucoes");
    infoJsout.innerText = " "
}






function overPhp(){
    var infoPhp = document.getElementById("campoinstrucoes");
    infoPhp.innerText = "PHP - Fase inicial de aprendizagem, mas já consigo trabalhar juntamente com o Laravel."
}


function outPhp(){
    var infoPhpout = document.getElementById("campoinstrucoes");
    infoPhpout.innerText = " "
}






function overPy(){
    var infoPy = document.getElementById("campoinstrucoes");
    infoPy.innerText = "PYTHON - O meu próximo passo, estou muito ansioso e empolgado para aprender!"
}


function outPy(){
    var infoPyout = document.getElementById("campoinstrucoes");
    infoPyout.innerText = " "
}


const btnMObile = document.getElementById('btn-mobile');

function toggleMenu() {

const navPrincipal = document.getElementById('nav-principal');
navPrincipal.classList.toggle('active')

}

btnMObile.addEventListener('click', toggleMenu);