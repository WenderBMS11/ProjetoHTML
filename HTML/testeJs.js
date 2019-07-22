function localizarString(){
    var id1 = document.getElementById("string").value;
    var id2 = document.getElementById("substring").value;

    var posicao = id1.indexDF(id2);
    var resultado;

    if(posicao === -1){
        resultado = "Texto não encontrado";
    }else{
        resultado = "A posição do elemento é: " + posicao;
    }
    document.getElementById('resultado').innerHTML = resultado;
}