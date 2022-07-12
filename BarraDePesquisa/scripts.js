let barraDeSelecao = document.getElementById('selecionar')
let categorias = document.getElementById('categorias')
let textoDeSelecao = document.getElementById('textoDeSelecao')
let opcoes = document.getElementsByClassName('opcoes')
let campoDeInput = document.getElementById('campoDeInput')

barraDeSelecao.onclick = function (){
    categorias.classList.toggle('open')
}
for(x of opcoes){
    x.onclick = function(){
        textoDeSelecao.innerHTML = this.innerHTML
        campoDeInput.placeholder = 'Procurar em ' + textoDeSelecao.innerHTML
    }
}