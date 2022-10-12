let prato;
let bebida;
let sobremesa;
// escolha da comida

function EscolherFrango(){
    document.getElementById("frango").style.border = "5px solid green";
    document.getElementById("peixe").style.border = "5px solid rgba(255, 255, 255, 1)";
    document.getElementById("salada").style.border = "5px solid rgba(255, 255, 255, 1)";

    prato="frango";
}
function EscolherPeixe(){
    document.getElementById("peixe").style.border = "5px solid green";
    document.getElementById("frango").style.border = "5px solid  rgba(255, 255, 255, 1)";
    document.getElementById("salada").style.border = "5px solid rgba(255, 255, 255, 1)";
    prato="Peixe";
}
function EscolherSalada(){
    document.getElementById("salada").style.border = "5px solid green";
    document.getElementById("peixe").style.border = "5px solid  rgba(255, 255, 255, 1)";
    document.getElementById("frango").style.border = "5px solid rgba(255, 255, 255, 1)";
    prato="Salada";
}


// escolha da bebida

function EscolherCoca(){
    document.getElementById("coca").style.border = "5px solid green";
    document.getElementById("suco").style.border = "5px solid rgba(255, 255, 255, 1)";
    document.getElementById("cha").style.border = "5px solid rgba(255, 255, 255, 1)";
    bebida= "coca";
}
function EscolherSuco(){
    document.getElementById("suco").style.border = "5px solid green";
    document.getElementById("coca").style.border = "5px solid rgba(255, 255, 255, 1)";
    document.getElementById("cha").style.border = "5px solid rgba(255, 255, 255, 1)";
    bebida= "suco";
}
function EscolherCha(){
    document.getElementById("cha").style.border = "5px solid green";
    document.getElementById("suco").style.border = "5px solid rgba(255, 255, 255, 1)";
    document.getElementById("coca").style.border = "5px solid rgba(255, 255, 255, 1)";
    bebida="cha";
}


// escolha da sobremesa

function EscolherPudim(){
    document.getElementById("pudim").style.border = "5px solid green";
    document.getElementById("cheesecake").style.border = "5px solid rgba(255, 255, 255, 1)";
    document.getElementById("pannaCotta").style.border = "5px solid rgba(255, 255, 255, 1)";
    sobremesa="pudim";
}
function EscolherCheesecake(){
    document.getElementById("cheesecake").style.border = "5px solid green";
    document.getElementById("pudim").style.border = "5px solid rgba(255, 255, 255, 1)";
    document.getElementById("pannaCotta").style.border = "5px solid rgba(255, 255, 255, 1)";
    sobremesa="cheesecake";
}
function EscolherPannaCotta(){
    document.getElementById("pannaCotta").style.border = "5px solid green";
    document.getElementById("pudim").style.border = "5px solid rgba(255, 255, 255, 1)";
    document.getElementById("cheesecake").style.border = "5px solid rgba(255, 255, 255, 1)";
    sobremesa="pannaCotta";
}
 // finalizar pedido 

 
   if (alert(prato) & alert(bebida) & alert(sobremesa)) {
    function FinalizarPedido(){
        document.getElementById("FinalizarPedido").style.background = "rgba(50, 183, 47, 1)";
        document.getElementById("FinalizarPedido").innerHTML = "Finalizar Pedido";
       } 
   }
    
    
    
 


