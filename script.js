const peso = document.querySelector("#peso"),
    altura = document.querySelector("#altura"),
    resultado = document.querySelector("#resultado"),
    btnCalcular = document.querySelector("#btn-calcular")

let r


condicao = (c) => {

    if(c <= 18.5){
        resultado.innerHTML = `Seu imc é: ${c.toFixed(2)}, abaixo do peso.`
    }else if(c > 18.5  && c <= 29.9){
        resultado.innerHTML = `Seu imc é: ${c.toFixed(2)}, peso normal.`
    }else if(c > 25 && c <= 29.9){
        resultado.innerHTML = `Seu imc é: ${c.toFixed(2)}, sobrepeso.`
    }else if(c > 30 && c <= 34.9){
        resultado.innerHTML = `Seu imc é: ${c.toFixed(2)}, obsidade grau I.`
    }else if(c > 35 && c <= 39.9){
        resultado.innerHTML = `Seu imc é: ${c.toFixed(2)}, obsidade grau II.`
    }else if(c > 40){
        resultado.innerHTML = `Seu imc é: ${c.toFixed(2)}, obsidade grau III ou mórbida.`
    }

}



calcular = () =>{
    
    let p = peso.value
    let a = altura.value
    r = p / (a*a)

    if(p == '' || a == ''){
        alert("Digite seu peso e altura")
    }else{
        resultado.innerHTML = ''
        condicao(r)
    }
    
} 


btnCalcular.addEventListener('click', calcular);


