    let numCase = 0

musiques.forEach(function (musique, numCase) {
    console.log('Musiques :' + musique);
    console.log(numCase)

    let divList = document.querySelector('.wrapper').innerHTML +=
        '<div class="musiques" id="item-'+numCase+'"><div class="hidden"><figure><img src='+images[numCase]+' alt="Image de l\'album"><figcaption>'+albums[numCase]+' de '+artistes[numCase]+'</figcaption></figure></div><div class="texte hiddenTexte"><h3>' + musique + '</h3><p>' + descriptionMusiques[numCase] + '</p><button id= "button-' + numCase + '">⏵</button><br><p><a href="'+liens[numCase]+'" target="_blank">Écouter en intégralité sur Youtube Music !</a><p/></div></div>';

    //passage à la case suivante
    numCase++

});


// Sélectionner tous les boutons et les éléments audio
const buttonsPausePlay = document.querySelectorAll("[id^='button-']");
const songs = document.querySelectorAll("[id^='audio-']");

// Associer un événement à chaque bouton
buttonsPausePlay.forEach((button, numCase) => {
    button.addEventListener('click', function (event) {
        const clickedButton = event.target;

        // Accéder à l'élément audio correspondant au bouton
        const song = songs[numCase];

        // Vérifier si la chanson est en pause ou non
        if (song.paused) {
            song.play();
            clickedButton.innerHTML = clickedButton.innerHTML.replace("⏵", "⏸"); 
        } else {
            song.pause();
            clickedButton.innerHTML = clickedButton.innerHTML.replace("⏸", "⏵"); 
        }
    });
}); 

// Envoie des données du formulaire
let submit = document.querySelector('#envoyer')
submit.addEventListener("click",function(){
    let url = "https://perso-etudiant.u-pem.fr/~gambette/portrait/api.php?login=vilasse&courriel=philippe.gambette@u-pem.fr&message=" + encodeURIComponent(titre.value + artiste.value +description.value + lien.value);
    console.log(url)

  fetch(url).then(function(response) {
    response.json().then(function(data){
    console.log("Réponse reçue : ")
    console.log(data);
})
})

    let send = document.querySelector("#Réponse")
    send.innerHTML = "Votre proposition a été pris en compte !"
});

//Code du formulaire
let titre =  document.querySelector('#titre');
let description = document.querySelector('#descriptionChoix');
let lien = document.querySelector('#lien');
let artiste = document.querySelector('#artiste');


    let preview = document.querySelector('.preview');
    let exempleBtn = document.querySelector('#previewBtn');
    exempleBtn.addEventListener("click", function updatePreview(){   
        
    preview.innerHTML = '<div><h2>'+titre.value+'</h2><p>'+description.value+'</p><p><strong>Artiste :</strong>'+artiste.value+'</p><button>⏵</button><br><p><a href="'+lien.value+'"target="_blank">Écouter en intégralité !</a></p></div>';

        // Afficher la prévisualisation après le clic
        preview.style.display = 'block';
})


//Code des crédits
let modal = document.querySelector('#creditsModal');
let btn = document.querySelector('.credits');
let closeBtn = document.querySelector('.close');

// Ouvrir la modale
btn.addEventListener('click', function () {
    modal.style.display = 'block';
});

// Fermer la modale
closeBtn.addEventListener('click', function () {
    modal.style.display = 'none';
});


//Apparition des éléments à l'écran
const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry)
        if(entry.isIntersecting){
            entry.target.classList.add('show');
        }else{
            entry.target.classList.remove('show');
        }
    });
},{ 
    threshold: 0.55
});
const hiddenElements = document.querySelectorAll('.hidden, .hiddenTexte');
hiddenElements.forEach((el) => observer.observe(el));

console.log(hiddenElements)

