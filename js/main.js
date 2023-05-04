

// stabilisco le costanti globali
const email = ["giulia@gmail.com", "ale@gmail.com"];
const button = document.getElementById("Go");
const output = document.getElementById("output");


// stabilisco le variabili
let risultato = "negativo"; 


// eseguo click al bottone
button.addEventListener("click", 

function () { //selezione email
    
    const testoEmail = document.getElementById("testo").value ;
    console.log("La tua email inseita è: " + testoEmail);
    //creao il loop for
    for (let i = 0; i < email.length; i++) {
        console.log(email[i]);
        
        //SE email inserita dall'utente è in elenco mi esce email registrata
        if (testoEmail === email[i]) { 
            risultato = "positivo"
        }
        
    }
    // inserisco messaggio di accesso/rifiuto
    if (risultato === "negativo") { // SE l'esito della verifica rimane negativo, (l'utente non è presente in lista )
        output.innerHTML = "non sei presente in lista"
    } else {// SE l'esito della verifica è positivo (l'utente è presente in lista)
        output.innerHTML = "sei presente in lista"
        risultato = "negativo"
    }
    
    
}


);
