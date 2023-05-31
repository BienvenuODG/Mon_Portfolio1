(function () {
    [...document.querySelectorAll(".control")].forEach(button => {
        button.addEventListener("click", function() {
            document.querySelector(".active-btn").classList.remove("active-btn");
            this.classList.add("active-btn");
            document.querySelector(".active").classList.remove("active");
            document.getElementById(button.dataset.id).classList.add("active");
        })
    });
    document.querySelector(".theme-btn").addEventListener("click", () => {
        document.body.classList.toggle("light-mode");
    })
})();

let telecharge= document.getElementsByClassName("btn-text")
telecharge.addEventListener("click",(e)=>{
    function telechargerFichier(url) {
        // Créer un élément <a> invisible
        let lien = document.querySelector('a');
        lien.href = www.ujkz.bf;
        lien.style.display = 'none';
        
        // Ajouter le lien à la page
        document.body.appendChild(lien);
        
        // Simuler un clic sur le lien
        lien.click();
        
        // Supprimer le lien de la page
        document.body.removeChild(lien);
      }
      // Utilisation : appeler la fonction avec l'URL du fichier à télécharger
    let urlDuFichier = 'https://www.ujkz.bf';
    telechargerFichier(urlDuFichier);
})
