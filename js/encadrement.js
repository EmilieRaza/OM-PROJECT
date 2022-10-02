//Page de présentation des encadreurs de l'équipe
let httpEncadrement = new XMLHttpRequest();
httpEncadrement.open('get', '../data/presentation_des_joueurs.json');
httpEncadrement.send();

httpEncadrement.onload = function() {
    if (this.readyState == 4 && this.status == 200) {
        let joueurs = JSON.parse(this.responseText);

        let outputEncadrement = '';
        for (let i = 34; i < joueurs.length; i++) {

            outputEncadrement += `
            <div class="col-md-6 pt-5 mt-5">
                                <div class="row">
                                    <div class="col-md-6">
                                        <div class="cardencadrement ">
                                            <img class="w-100 " src="${joueurs[i].image_joueur}">
                                        </div>
                                    </div>
                                    <div class="col-md-6 float-left">
                                        <a class="font1 h3 color1  text-decoration-none">${joueurs[i].prenom}
                                             <span class="text-dark color2">${joueurs[i].nom}</span></a><br><br><br>
                                        <p class="font1 h6">
                                            Nationalité: <img src="${joueurs[i].image_pays}" width="20" height="20" alt="France" typeof="foaf:Image"><BR><BR>
                                            Date de naissance: 29.03.1987 à Saint-Pierre <BR><BR>
                                            Age: 33 ans<BR><BR>
                                            Formation: <small>Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetu</small><BR><BR>
                                            Club: <small>Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetu</small><BR><BR>
                                            Equipe nationale: <small>Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetu</small> <BR><BR>
                                                <a class="nav-link  bg2 text-center text-light" href="#!">
                                                    En savoir plus</a>
                                        </p>
                                    </div>
                                </div>
                            </div>

        `;
        }
        document.querySelector('.Encadrement').innerHTML = outputEncadrement;
    }

}


/*<div class="col-md-6">
                                <div class="row">
                                    <div class="col-md-6">
                                        <div class="cardencadrement ">
                                            <img class="w-100 " src="https://www.om.fr/sites/default/files/2022-08/JON-PASCUA_0.png">
                                        </div>
                                    </div>
                                    <div class="col-md-6 float-left">
                                        <a class="font1 h3 color1  text-decoration-none">Jon 
                                             <span class="text-dark color2">Pascua</span></a><br><br><br>
                                        <p class="font1 h6">
                                            Nationalité: <img src="https://www.om.fr/sites/default/files/2019-08/esspainflag_111796.png" width="20" height="20" alt="France" typeof="foaf:Image"><BR><BR>
                                            Date de naissance: 29.03.1987 à Saint-Pierre <BR><BR>
                                            Age: 33 ans<BR><BR>
                                            Formation: <small>Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetu</small><BR><BR>
                                            Club: <small>Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetu</small><BR><BR>
                                            Equipe nationale: <small>Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetu</small> <BR><BR>
                                                <a class="nav-link  bg2 text-center text-light" href="#!">
                                                    En savoir plus</a>
                                        </p>
                                    </div>
                                </div>
                            </div>*/