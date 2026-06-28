const searchInput = document.querySelector("#searchInput");
const cards = document.querySelectorAll(".dev-card");

searchInput.addEventListener("input", () => {

    let search = searchInput.value.toLowerCase();

    cards.forEach(card => {

        let content = card.innerText.toLowerCase();

        card.style.display = content.includes(search)
            ? ""
            : "none";

    });

});

const developers = document.querySelector(".developers");


let programmeurs = JSON.parse(localStorage.getItem("programmeurs")) || [];



programmeurs.forEach(programmeur => {


    const card = document.createElement("div");

    card.classList.add("dev-card");


    card.innerHTML = `

        <img src="../Images/Developpeur_défaut.png">


        <h2>
            ${programmeur.nom}
        </h2>


        <h3>
            ${programmeur.specialisation}
        </h3>


        <p>
            <em>${programmeur.competences}</em>
        </p>


        <div class="info">

            <span>
                ${programmeur.note}
            </span>


            <span>
                ${programmeur.experience}
            </span>

        </div>


        <button>
            Engager
        </button>

    `;


    developers.appendChild(card);


});
