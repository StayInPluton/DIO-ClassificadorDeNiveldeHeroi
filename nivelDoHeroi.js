var nomeHeroi = "Pedro";
var nivelDoheroi = 0;
var xp = 7600;

var xpTotal = nivelDoheroi + xp;

if (xpTotal <= 1000){
    var rank = "Ferro"
} else if (xpTotal >= 1001 & xpTotal <= 2000){
    var rank = "Bronze"
}else if (xpTotal >= 2001 & xpTotal <= 5000){
    var rank = "Prata"
}else if (xpTotal >= 5001 & xpTotal <= 7000){
    var rank = "Ouro"
}else if (xpTotal >= 7001 & xpTotal <= 8000){
    var rank = "Platina"
}else if (xpTotal >= 8001 & xpTotal <= 9000){
    var rank = "Ascendente"
}else if (xpTotal >= 9001 & xpTotal <= 10000){
    var rank = "Imortal"
}else{
    var rank = "Radiante"
}

console.log("O Herói de nome "+ nomeHeroi +" está no nível de "+ rank);
