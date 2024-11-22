// Ajout du script Javascript qui nous permet de rendre le menu cliquable.//

function toggler() {
    const icon = document.querySelector('#toggler')
    const menu = document.querySelector('.menu')
    //Quand le menu est ouvert, on affiche l'icone close pour pouvoir le refermer puis on affiche le contenu du menu, et on cache les éléments de la page.//
    if (icon.innerHTML == "menu") {
        icon.innerHTML = "close";
        menu.style.display = "block";
        presentation.style.display = "none";
        informations.style.display = "none";
    }
    //Quand le menu est fermé, on affiche l'icone menu pour pouvoir afficher le menu puis on cache les éléments du menu, et on affiche les éléments de la page.//
    else {
        icon.innerHTML = "menu";
        menu.style.display = "none";
        presentation.style.display = "flex";
        informations.style.display = "block";
    }
}

