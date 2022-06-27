let valor = prompt("Digite o valor a ser sacado?")
let saque = Number(valor)
document.write(`<h3 class="saque">VOCE FICOU R$${valor} MAI$ RICO!!</h3>`)

while( saque >= 200){
    document.write('<img src="img/200-real.jpg" class="notas">')
    saque = saque - 200
}
while( saque >= 100){
    document.write('<img src="img/100-real.jpg" class="notas">')
    saque = saque - 100
}
while( saque >= 50){
    document.write('<img src="img/50-real.jpg" class="notas">')
    saque = saque - 50
}
while( saque >= 20){
    document.write('<img src="img/20-real.jpg" class="notas">')
    saque = saque - 20
}
while( saque >= 10){
    document.write('<img src="img/10-real.jpg" class="notas">')
    saque = saque - 10
}
while( saque >= 5){
    document.write('<img src="img/5-real.jpg" class="notas">')
    saque = saque - 5
}
while( saque >= 2){
    document.write('<img src="img/2-real.jpg" class="notas">')
    saque = saque - 2
}
while( saque >= 1){
    document.write('<img src="img/1-real.png" class="moedas">')
    saque = saque - 1
}
while( saque >= .5){
    document.write('<img src="img/50-cents.png" class="moedas">')
    saque = saque - .5
}
while( saque >= .25){
    document.write('<img src="img/25-cents.png" class="moedas">')
    saque = saque - .25
}
while( saque >= .1){
    document.write('<img src="img/10-cents.png" class="moedas">')
    saque = saque - .1
}
while( saque >= .05){
    document.write('<img src="img/5-cents.png" class="moedas">')
    saque = saque - .05
}
while( saque > 0.009){
    document.write('<img src="img/juquinha.png" class="juquinha">')
    saque = saque - .01
}

console.log(saque)