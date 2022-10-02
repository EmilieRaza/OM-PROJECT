//Page de présentation supporteurs de l'équipe de Marseille
let httpSupporteur = new XMLHttpRequest();
httpSupporteur.open('get', '../data/groupes-de-supporters.json');
httpSupporteur.send();

httpSupporteur.onload = function() {
    if (this.readyState == 4 && this.status == 200) {
        let supporteurs = JSON.parse(this.responseText);

        let outputSupporteur = '';
        for (let i = 0; i < supporteurs.length; i++) {
            console.log(supporteurs[i]);

            outputSupporteur += ` 
            <div class="col-md-12 mt-3">

            <hR>
            <a class="font1 h3 color1  text-decoration-none">${supporteurs[i].supporteur}</a><br><br>
            <p class="font1 h6">
                ABBRÉVIATION : ${supporteurs[i].abreviation}|

                LOCAL : ${supporteurs[i].localisation} |
                
                TÉLÉPHONE : ${supporteurs[i].telephone} |
                
                EMPLACEMENT : ${supporteurs[i].emplacement} 
                
            </p>

            </div>`;
        }
        document.querySelector('.supporteur').innerHTML = outputSupporteur;
    }

}




//Présentation du fan club de l'équipe de Marseille
let httpFanClub = new XMLHttpRequest();
httpFanClub.open('get', '../data/fan-club.json');
httpFanClub.send();

httpFanClub.onload = function() {
    if (this.readyState == 4 && this.status == 200) {
        let fanClub = JSON.parse(this.responseText);

        let outputFanClub = '';
        for (let i = 0; i < fanClub.length; i++) {

            outputFanClub += `<hR>
            <div class="row">
                <div class="col-md-4">
                    <img class="w-100" src="${fanClub[i].image}">
                </div>
                <div class="col-md-6">
                    <a class="font1 h3 color1  text-decoration-none">${fanClub[i].titre} </a><br><br>
                    <p class="font1 h6">${fanClub[i].description} </p>
                </div>
            </div>
`;
        }
        document.querySelector('.fanClubMarseille').innerHTML = outputFanClub;
    }

}


//Présentation du fan club Afrique de l'équipe de Marseille
let httpFanClubAfrique = new XMLHttpRequest();
httpFanClubAfrique.open('get', '../data/fan-afrique.json');
httpFanClubAfrique.send();

httpFanClubAfrique.onload = function() {
    if (this.readyState == 4 && this.status == 200) {
        let fanClubAfrique = JSON.parse(this.responseText);

        let outputFanClubAfrique = '';
        for (let i = 0; i < fanClubAfrique.length; i++) {

            outputFanClubAfrique += `<div class="col-md-4">
            <img class="w-100" src="${fanClubAfrique[i].image}">
            </div>
            <div class="col-md-6">
            <a class="font1 h3 color1  text-decoration-none">${fanClubAfrique[i].titre}</a><br><br>
            <p class="font1 h6">${fanClubAfrique[i].description}</p>
        </div>
        <hR>

`;
        }
        document.querySelector('.fanClubMarseilleAfrique').innerHTML = outputFanClubAfrique;
    }

}