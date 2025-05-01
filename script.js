const comisionCompra = 0.63;
const comisionRetiro = 3.81;

let btnCalcular = document.getElementById("btnCalcular");
let gananciaBrutaTotal = document.getElementById("gananciaBruta");
let gananciaNetaTotal = document.getElementById("gananciaNeta");

let gananciaBrutaConvertida = document.getElementById("gananciaBrutaConvertida");
let gananciaNetaConvertida = document.getElementById("gananciaNetaConvertida");

btnCalcular.addEventListener("click", function (){
    let inputBCV = parseFloat(document.getElementById("inputBCV").value || 0);
    let inputParalelo = parseFloat(document.getElementById("inputParalelo").value || 0);
    let inputCapital = parseFloat(document.getElementById("inputCapital").value || 0);
    let capitalConvertido = inputCapital * inputBCV;
    let comisionTotal = comisionCompra + comisionRetiro;
    let comisionConvertida = (capitalConvertido * comisionTotal) / 100;
    let compraConvertida = capitalConvertido + comisionConvertida;
    let venta = inputCapital * inputParalelo;
    let gananciaBruta = venta;
    let gananciaNeta = venta - compraConvertida;
    let brutaDolares = gananciaBruta / inputBCV;
    let netaDolares = gananciaNeta / inputBCV;
    gananciaBrutaTotal.innerHTML = gananciaBruta.toFixed(2);
    gananciaNetaTotal.innerHTML = gananciaNeta.toFixed(2);
    gananciaBrutaConvertida.innerHTML = brutaDolares.toFixed(2);
    gananciaNetaConvertida.innerHTML = netaDolares.toFixed(2);   
});