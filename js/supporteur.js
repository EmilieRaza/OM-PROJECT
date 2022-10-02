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