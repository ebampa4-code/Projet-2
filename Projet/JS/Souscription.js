const form = document.querySelector("form");

form.addEventListener("submit", function(event) {

    event.preventDefault();


    const email = document.querySelector("#email").value;
    const prenom = document.querySelector("#prenom").value;
    const nom = document.querySelector("#nom").value;
    const specialisation = document.querySelector("#specialisation").value;
    const competences = document.querySelector("#competences").value;


    const programmeur = {

        nom: prenom + " " + nom,
        specialisation: specialisation,
        competences: competences,
        note: "⭐ 0.0",
        experience: "Nouvelle recrue"

    };


    let programmeurs = JSON.parse(localStorage.getItem("programmeurs")) || [];


    programmeurs.push(programmeur);


    localStorage.setItem(
        "programmeurs",
        JSON.stringify(programmeurs)
    );


    alert("Compte créé avec succès !");


    window.location.href = "Recrutement.html";

});


function get_data(e){

    let pwd = document.getElementById('password').value;
    let pwd_conf = document.getElementById('confirm-password').value;

    if( pwd !== pwd_conf){

        alert("Les mots de passe ne sont pas identiques");

    }else{

        let mail = document.getElementById('email').value;
        let prenom = document.getElementById('prenom').value;
        let nom = document.getElementById('nom').value;
        let spec = document.getElementById('specialisation').value;
        let cmpt = document.getElementById('competences').value;

        let newuserdata = [
            {
                email: mail,
                prenom: prenom,
                nom: nom,
                specialisation: spec,
                competences: cmpt,
                motdepasse : pwd
            }
        ];

        let userdata = JSON.parse(localStorage.getItem("userdata"));

        userdata.push(newuserdata);

        localStorage.setItem("userdata", JSON.stringify(userdata));
        localStorage.setItem("current_user", JSON.stringify(newuserdata));

    }
}



document.getElementById("submit").addEventListener("click",get_data)
document.getElementById("Formulaire").addEventListener("submit",get_data);