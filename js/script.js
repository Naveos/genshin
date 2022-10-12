var element1;
var element2;

function element() {
    element1 = document.getElementById("element1").options[document.getElementById('element1').selectedIndex].text;
    element2 = document.getElementById("element2").options[document.getElementById('element2').selectedIndex].text;
    if(element1 == element2){
        result = "Aucune réaction"
    }
    if(element1 == "Hydro"){
        if(element2 == "Pyro"){
            result = "Evaporation"
        }
        else if(element2 == "Electro"){
            result = "Electrocution"
        }
        else if(element2 == "Geo"){
            result = "Cristallisation"
        }
        else if(element2 == "Anemo"){
            result = "Dispersion"
        }
        else if(element2 == "Cryo"){
            result = "Gel"
        }
        else if(element2 == "Dendro"){
            result = "Aucune réaction"
        }
    }
    else if(element1 == "Pyro"){
        if(element2 == "Hydro"){
            result = "Evaporation"
        }
        else if(element2 == "Electro"){
            result = "Surcharge"
        }
        else if(element2 == "Geo"){
            result = "Cristallisation"
        }
        else if(element2 == "Anemo"){
            result = "Dispersion"
        }
        else if(element2 == "Cryo"){
            result = "Fonte"
        }
        else if(element2 == "Dendro"){
            result = "Brulure"
        }
    }
    else if(element1 == "Electro"){
        if(element2 == "Hydro"){
            result = "Electrocution"
        }
        else if(element2 == "Pyro"){
            result = "Surcharge"
        }
        else if(element2 == "Geo"){
            result = "Cristalisation"
        }
        else if(element2 == "Anemo"){
            result = "Dispersion"
        }
        else if(element2 == "Cryo"){
            result = "Supraconduction"
        }
        else if(element2 == "Dendro"){
            result = "Aucune réaction"
        }
    }
    else if(element1 == "Geo"){
        if(element2 == "Hydro"){
            result = "Cristallisation"
        }
        else if(element2 == "Pyro"){
            result = "Cristallisation"
        }
        else if(element2 == "Electro"){
            result = "Cristallisation"
        }
        else if(element2 == "Anemo"){
            result = "Aucune réaction"
        }
        else if(element2 == "Cryo"){
            result = "Cristallisation"
        }
        else if(element2 == "Dendro"){
            result = "Aucune réaction"
        }
    }
    else if(element1 == "Anemo"){
        if(element2 == "Hydro"){
            result = "Dispersion"
        }
        else if(element2 == "Pyro"){
            result = "Dispersion"
        }
        else if(element2 == "Electro"){
            result = "Dispersion"
        }
        else if(element2 == "Geo"){
            result = "Aucune réaction"
        }
        else if(element2 == "Cryo"){
            result = "Dispersion"
        }
        else if(element2 == "Dendro"){
            result = "Aucune réaction"
        }
    }
    else if(element1 == "Cryo"){
        if(element2 == "Hydro"){
            result = "Gel"
        }
        else if(element2 == "Pyro"){
            result = "Fonte"
        }
        else if(element2 == "Electro"){
            result = "Supraconduction"
        }
        else if(element2 == "Geo"){
            result = "Cristallisation"
        }
        else if(element2 == "Anemo"){
            result = "Dispersion"
        }
        else if(element2 == "Dendro"){
            result = "Aucune réaction"
        }
    }
    else if(element1 == "Dendro"){
        if(element2 == "Hydro"){
            result = "Aucune réaction"
        }
        else if(element2 == "Electro"){
            result = "Aucune réaction"
        }
        else if(element2 == "Geo"){
            result = "Aucune réaction"
        }
        else if(element2 == "Anemo"){
            result = "Aucune réaction"
        }
        else if(element2 == "Cryo"){
            result = "Aucune réaction"
        }
        else if(element2 == "Dendro"){
            result = "Aucune réaction"
        }
    }
    document.getElementById("result").innerHTML = (result);
    console.log(element1,element2)
}

var a = 1;
var b = 1;
var id1 = "naveo";
var id2 = "angel";
var password1 = "1234"
var password2 = "popeye89"

function login() {
    a = document.getElementById("userId").value;
    b = document.getElementById("userPassword").value;
    if (a == id1){
        if (b == password1){
            document.getElementById("reponseLogin").innerHTML = ("Connecté");
        }
        else {
            document.getElementById("reponseLogin").innerHTML = ("Mot de passe incorrect");
        }
    }
    else if (a == id2){
        if (b == password2){
            document.getElementById("reponseLogin").innerHTML = ("Connecté");
        }
        else{
            document.getElementById("reponseLogin").innerHTML = ("Mot de passe incorrect");
        }
    }
    else{
        document.getElementById("reponseLogin").innerHTML = ("Nom d'utilisateur incorrect");
    }
}