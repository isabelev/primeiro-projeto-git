let preço = Number(prompt("Digite o valor da compra: "))
let avista = preço-((10/100)*preço)
let parcelado = preço/3

alert("Valor total: "+preço+".00 R$\nÀ vista: "+avista+".00 R$\nOu 3x sem juros: "+parcelado+".00 R$")