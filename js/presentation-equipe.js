//Charger les fichiers json pour la présentation de l'équipe de Marseille  (python -m http.server)
// fetch("presentation_equipeMarseille.json")
//     .then(function(response) {
//         return response.json();
//     })
//     .then(function(presentationEquipe) {
//         let outputPresentation = "";
//         outputPresentation += `<div class='presentation-equipe col-md-4'>
//             <h2 class="h2">ÉQUIPE PRO MASCULINE</h2><BR>
//             <p class="text1">${presentationEquipe.presentation}</p>
//         </div>`;
//         document.querySelector('presentation-equipe').innerHTML = outputPresentation
//     })







//Page d'acceuil présentation de l'équipe de Marseille
let http = new XMLHttpRequest();
http.open('get', '../data/presentation_equipeMarseille.json');
http.send();

http.onload = function() {
    if (this.readyState == 4 && this.status == 200) {
        let presentation = JSON.parse(this.responseText);

        let outputPresentation = '';
        outputPresentation += `<h2 class="h2">ÉQUIPE PRO MASCULINE</h2><BR>
                                <p class="text1">${presentation[0].presentation}</p>`;

        document.querySelector('.presentation-equipe').innerHTML = outputPresentation;

    }
}


//Page d'acceuil (Afficher l'image de 7 joueurs de l'équipe de Marseille 'Nom et Prénom)
let httpjoueurAcceuil = new XMLHttpRequest();
httpjoueurAcceuil.open('get', '../data/presentation_des_joueurs.json');
httpjoueurAcceuil.send();

httpjoueurAcceuil.onload = function() {
    if (this.readyState == 4 && this.status == 200) {
        let joueurs = JSON.parse(this.responseText);

        let outputprofilJoueur = '';
        for (let i = 0; i < (joueurs.length - 44); i++) {
            outputprofilJoueur += `<div class="col-md-3 mt-5 pt-5">
                                    <div class="cardJoueur1 ">
                                        <img class="w-100 " src="${joueurs[i].image_joueur}">
                                        <h2  class="h2 text-light py-2">${joueurs[i].prenom} <br><span class="text-dark">${joueurs[i].nom}</span></h2>
                                    </div>
                                </div>`;

        }

        document.querySelector('.profilJoueur').innerHTML = outputprofilJoueur;


    }


}


//Page de présentation de chaque joueur

let httppresentationJoueur = new XMLHttpRequest();
httppresentationJoueur.open('get', '../data/presentation_des_joueurs.json');
httppresentationJoueur.send();




httppresentationJoueur.onload = function() {
    if (this.readyState == 4 && this.status == 200) {
        let joueurs = JSON.parse(this.responseText);

        var outputdetailJoueur = '';
        var soustraction = "-";
        for (let j = 0; j < joueurs.length - 18; j++) {

            const moonLanding = new Date(`${joueurs[j].date_naissance}"`);

            let ageJoueur;

            ageJoueur = 2022 - moonLanding.getFullYear()
            console.log(ageJoueur);

            outputdetailJoueur += ` <div class="col-md-6">
            <div class="row mt-5 pt-5">
                <div class="col-md-6">
                    <div class="cardJoueur2 ">
                        <img class="w-100 " src="${joueurs[j].image_joueur}">
                    </div>
                </div>
                <div class="col-md-6 float-left">
                    <a class="font1 h3 color1  text-decoration-none">${joueurs[j].prenom} <span class="text-dark">${joueurs[j].nom}</span></a><br><br><br>
                    <p class="font1 h6">
                        Nationalité: <img src="${joueurs[j].image_pays}" width="20" height="20" alt="France" typeof="foaf:Image"><BR><BR>
                        Date de naissance: ${joueurs[j].date_naissance} <BR><BR>
                        Age: ${ageJoueur} ans<BR><BR>
                        Arrivée au club: <small> ${joueurs[j].formation} </small><BR><BR><BR><BR>
                        Taille / Poids: <small>${joueurs[j].taille}</small><BR><BR><BR><BR><BR><BR>
                            <a class="nav-link  bg1 text-center text-light" href="${joueurs[j].detail_url}  target="_blank" ">
                                En savoir plus</a>
                    </p>
                </div>
            </div>
        </div>`;

        }
        document.querySelector('.detatilJoueur').innerHTML = outputdetailJoueur;
    }
    //PageEquipe nationale: <small>Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetu</small> <BR><BR>
}