const settings = document.querySelector(".settings");
const btn = document.getElementById("settingsBtn");
const theme = document.getElementById("theme");


if(btn){

btn.onclick = () => {

    settings.classList.toggle("active");

};

}



function Themesombre(){

    theme.href = "../CSS/Accueil_Sombre.css";

}



function Themeclair(){

    theme.href = "../CSS/Accueil_Clair.css";

}
