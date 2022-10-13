let prato;
let bebida;
let sobremesa;
let PrecoPrato;
let PrecoBebida;
let PrecoSobremesa;
let mensagem;

// escolha da comida
//remover os 3 primeiros carcteres da string mudar de ,para .  converter para numero
function EscolherFrango() {
    document.getElementById("frango").style.border = "5px solid green";
    document.getElementById("peixe").style.border = "5px solid rgba(255, 255, 255, 1)";
    document.getElementById("salada").style.border = "5px solid rgba(255, 255, 255, 1)";
    prato = "Frango Yin Yang";
    //remover os 3 primeiros caracteres da string
    const priceFrango = document.getElementById('price-frango').textContent;
    const PrecoFrangoV = priceFrango.replace('R$ ', '');
    // mudar de virgula para ponto e colocar com 2 casas decimais
    PrecoPrato = parseFloat(PrecoFrangoV.replace(",", ".") + "<br>");
    console.log(typeof (PrecoPrato))
    console.log(PrecoPrato)
    Finalizar();
}

function EscolherPeixe() {
    document.getElementById("peixe").style.border = "5px solid green";
    document.getElementById("frango").style.border = "5px solid  rgba(255, 255, 255, 1)";
    document.getElementById("salada").style.border = "5px solid rgba(255, 255, 255, 1)";
    prato = "Peixe Assado";
    //remover os 3 primeiros caracteres da string
    const pricePeixe = document.getElementById('price-peixe').textContent;
    const PrecoPeixeV = pricePeixe.replace('R$ ', '');
    // mudar de virgula para ponto e colocar com 2 casas decimais
    PrecoPrato = parseFloat(PrecoPeixeV.replace(",", ".") + "<br>");
    console.log(typeof (PrecoPrato))
    console.log(PrecoPrato)
    Finalizar();
}

function EscolherSalada() {
    document.getElementById("salada").style.border = "5px solid green";
    document.getElementById("peixe").style.border = "5px solid  rgba(255, 255, 255, 1)";
    document.getElementById("frango").style.border = "5px solid rgba(255, 255, 255, 1)";
    prato = "Salada Tropical";
    //remover os 3 primeiros caracteres da string
    const priceSalada = document.getElementById('price-salada').textContent;
    const PrecoSaladaV = priceSalada.replace('R$ ', '');
    // mudar de virgula para ponto e colocar com 2 casas decimais
    PrecoPrato = parseFloat(PrecoSaladaV.replace(",", ".") + "<br>");
    console.log(typeof (PrecoPrato))
    console.log(PrecoPrato)
    Finalizar();
}

// escolha da bebida

function EscolherCoca() {
    document.getElementById("coca").style.border = "5px solid green";
    document.getElementById("suco").style.border = "5px solid rgba(255, 255, 255, 1)";
    document.getElementById("cha").style.border = "5px solid rgba(255, 255, 255, 1)";
    bebida = "Coquinha Gelada";
    //remover os 3 primeiros caracteres da string
    const priceCoca = document.getElementById('price-coca').textContent;
    const PrecoCocaV = priceCoca.replace('R$ ', '');
    // mudar de virgula para ponto e colocar com 2 casas decimais
    PrecoBebida = parseFloat(PrecoCocaV.replace(",", ".") + "<br>");
    console.log(typeof (PrecoBebida))
    console.log(PrecoBebida)
    Finalizar();
}

function EscolherSuco() {
    document.getElementById("suco").style.border = "5px solid green";
    document.getElementById("coca").style.border = "5px solid rgba(255, 255, 255, 1)";
    document.getElementById("cha").style.border = "5px solid rgba(255, 255, 255, 1)";
    bebida = "Suco Natural";
    //remover os 3 primeiros caracteres da string
    const priceSuco = document.getElementById('price-suco').textContent;
    const PrecoSucoV = priceSuco.replace('R$ ', '');
    // mudar de virgula para ponto e colocar com 2 casas decimais
    PrecoBebida = parseFloat(PrecoSucoV.replace(",", ".") + "<br>");
    console.log(typeof (PrecoBebida))
    console.log(PrecoBebida)
    Finalizar();
}

function EscolherCha() {
    document.getElementById("cha").style.border = "5px solid green";
    document.getElementById("suco").style.border = "5px solid rgba(255, 255, 255, 1)";
    document.getElementById("coca").style.border = "5px solid rgba(255, 255, 255, 1)";
    bebida = "Chá de Hortelã";
    //remover os 3 primeiros caracteres da string
    const priceCha = document.getElementById('price-cha').textContent;
    const PrecoChaV = priceCha.replace('R$ ', '');
    // mudar de virgula para ponto e colocar com 2 casas decimais
    PrecoBebida = parseFloat(PrecoChaV.replace(",", ".") + "<br>");
    console.log(typeof (PrecoBebida))
    console.log(PrecoBebida)
    Finalizar();
}

// escolha da sobremesa

function EscolherPudim() {
    document.getElementById("pudim").style.border = "5px solid green";
    document.getElementById("cheesecake").style.border = "5px solid rgba(255, 255, 255, 1)";
    document.getElementById("pannaCotta").style.border = "5px solid rgba(255, 255, 255, 1)";
    sobremesa = "Pudim de Leite";
    //remover os 3 primeiros caracteres da string
    const pricePudim = document.getElementById('price-pudim').textContent;
    const PrecoPudimV = pricePudim.replace('R$ ', '');
    // mudar de virgula para ponto e colocar com 2 casas decimais
    PrecoSobremesa = parseFloat(PrecoPudimV.replace(",", ".") + "<br>");
    console.log(typeof (PrecoSobremesa))
    console.log(PrecoSobremesa)
    Finalizar();
}

function EscolherCheesecake() {
    document.getElementById("cheesecake").style.border = "5px solid green";
    document.getElementById("pudim").style.border = "5px solid rgba(255, 255, 255, 1)";
    document.getElementById("pannaCotta").style.border = "5px solid rgba(255, 255, 255, 1)";
    sobremesa = "Cheesecake de Frutas Vermelhas";
    //remover os 3 primeiros caracteres da string
    const priceCheesecake = document.getElementById('price-cheesecake').textContent;
    const PrecoCheesecakeV = priceCheesecake.replace('R$ ', '');
    // mudar de virgula para ponto e colocar com 2 casas decimais
    PrecoSobremesa = parseFloat(PrecoCheesecakeV.replace(",", ".") + "<br>");
    console.log(typeof (PrecoSobremesa))
    console.log(PrecoSobremesa)
    Finalizar();
}

function EscolherPannaCotta() {
    document.getElementById("pannaCotta").style.border = "5px solid green";
    document.getElementById("pudim").style.border = "5px solid rgba(255, 255, 255, 1)";
    document.getElementById("cheesecake").style.border = "5px solid rgba(255, 255, 255, 1)";
    sobremesa = "PannaCotta de Frutas Vermelhas";
    //remover os 3 primeiros caracteres da string
    const pricePannaCotta = document.getElementById('price-pannaCotta').textContent;
    const PrecoPannaCottaV = pricePannaCotta.replace('R$ ', '');
    // mudar de virgula para ponto e colocar com 2 casas decimais
    PrecoSobremesa = parseFloat(PrecoPannaCottaV.replace(",", ".") + "<br>");
    console.log(typeof (PrecoSobremesa))
    console.log(PrecoSobremesa)
    Finalizar();
}

function Finalizar() {
    if ((prato) && (bebida) && (sobremesa)) {
        document.getElementById("FinalizarPedido").style.background = "rgba(50, 183, 47, 1)";
        document.getElementById("FinalizarPedido").innerHTML = "      Finalizar Pedido      ";
    }
}

//function FinalizarPedido() {
//    let total = parseFloat(PrecoPrato + PrecoBebida + PrecoSobremesa).toFixed(2);
//    mensagem =
//        "\n Olá, gostaria de fazer o pedido:" +
//        "\n- Prato:" + prato +
 //       "\n- Bebida:" + bebida +
 //       "\n- Sobremesa:" + sobremesa +
 //       "\n Total: R$" + total;
 //   console.log(mensagem)
 //   window.open("https://wa.me/+5561996184703?text=" + mensagem);
//}


function FinalizarPedido(){
    let total = parseFloat(PrecoPrato + PrecoBebida + PrecoSobremesa).toFixed(2);
	var celular = "+5561996184703";
  
  var texto =  
         "\n Olá, gostaria de fazer o pedido: " +
         "\n- Prato: " + prato +
         "\n- Bebida: " + bebida +
         "\n- Sobremesa: " + sobremesa +
         "\n Total: R$ " + total;

  texto = window.encodeURIComponent(texto);
  
  window.open("https://api.whatsapp.com/send?phone=" + celular + "&text=" + texto, "_blank");
	//Obs.. use "_system", no lugar de blank, caso você esteja usando Phonegap / Cordova / Ionic ou qualquer um baseado em webview;
}


