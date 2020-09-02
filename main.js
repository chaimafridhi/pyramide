console.log("Salut, bienvenue dans ma super pyramide ! Combien d'etages veux-tu?");
var n;
n = prompt("Donner le nombre d'étages");

//console.log("le nombre etage de pyramide : " + n);

var longueur = (2 * n) - 1;

if ( n<=25 ){
  for(var etage = 1; etage <= n; etage++){

    var nEspace = n - etage;

    var nDiese = longueur - (2 * nEspace);

    if (nEspace != 0){ // != opereateur different
      var ligne = "-";
    
      for (var i = 2; i<= nEspace;i++){
    
        ligne = ligne + "-";
      }
    
      for (var i = 1; i<= nDiese;i++){
    
        ligne = ligne + "#";
    
      } 
    }
    else{
      ligne = "#";
      for (var i = 2; i<= nDiese;i++){
    
        ligne = ligne + "#";
    
      }
    }
    console.log(ligne);
  }
}

