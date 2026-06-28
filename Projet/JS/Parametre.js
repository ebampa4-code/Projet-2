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

function check_data(){

    const session = JSON.parse(localStorage.getItem("current_user"));

    if(session){
        
    }

    else{

        if( new URL(window.location.href).pathname !== "/HTML/Souscription.html"){

            window.location.href = "../HTML/Souscription.html";

        }
    }

}

check_data();