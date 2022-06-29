let valor = prompt("Digite o valor a ser sacado?")
let saque = Number(valor)
document.write(`<h3>VOCE FICOU R$${valor} MAI$ RICO!!</h3>`)

let notas = []
let moedas = []

while( saque >= 200){
    notas.push('img/200-real.jpg')
    saque = saque - 200
}
while( saque >= 100){
    notas.push('img/100-real.jpg')
    saque = saque - 100
}
while( saque >= 50){
    notas.push('img/50-real.jpg')
    saque = saque - 50
}
while( saque >= 20){
    notas.push('img/20-real.jpg')
    saque = saque - 20
}
while( saque >= 10){
    notas.push('img/10-real.jpg')
    saque = saque - 10
}
while( saque >= 5){
    notas.push('img/5-real.jpg')
    saque = saque - 5
}
while( saque >= 2){
    notas.push('img/2-real.jpg')
    saque = saque - 2
}
while( saque >= 1){
    moedas.push('img/1-real.png')
    saque = saque - 1
}
while( saque >= .5){
    moedas.push('img/50-cents.png')
    saque = saque - .5
}
while( saque >= .25){
    moedas.push('img/25-cents.png')
    saque = saque - .25
}
while( saque >= .1){
    moedas.push('img/10-cents.png')
    saque = saque - .1
}
while( saque >= .05){
    moedas.push('img/5-cents.png')
    saque = saque - .05
}
while( saque > 0.009){
    moedas.push('img/juquinha.png')
    saque = saque - .01
}
document.write(`<div class="saqueNotas">`)
var rotate = 50
for(nota of notas){
    document.write(`<img src="${nota}" class="notas" style="transform: rotate(${rotate}deg);"></img>`)
    var rotate = rotate + 15
}
document.write(`</div>`)

document.write(`<div class="saqueMoedas">`)
var leftV = 12
var topV = 50
var rotatem = 0
for(moeda of moedas){
    document.write(`<img src="${moeda}" class="moedas" style="transform: rotate(${rotatem}deg); top: ${topV}vh; left: ${leftV}vw;"></img>`)
    var leftV = leftV + 3
    var topV = topV + 2
    var rotatem = rotatem + 55
}
document.write(`</div>`)