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


