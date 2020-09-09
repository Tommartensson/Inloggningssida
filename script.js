let User = document.getElementById("Anvandare").value;
let Pass = document.getElementById("losen").value;
let body = document.getElementsByTagName("body")[0];
let button = document.getElementById("Button");
// Variabler från index
let Utlogg = document.createElement("button");
Utlogg.innerHTML = "Logga ut!";
//skapar knapp i scriptet


if(localStorage.length == 1){
    document.getElementById("div").innerHTML = "<h1>Du är redan inloggad, Välkommen!</h1>";
    body.appendChild(Utlogg);
    //lägger till knapp + text
    Utlogg.addEventListener("click", function()
    {
        localStorage.clear();
        location.reload();
        //rensar localstorage och startar om sidan
    })
}

else{
button.addEventListener("click", function()
{
    console.log(User + Pass)
    
    if(User == "test" && Pass == "1234")
    {
        document.getElementById("div").innerHTML = "<h1>Du är inloggad, Välkommen!</h1>";
        localStorage.setItem(Pass, Pass);
        body.appendChild(Utlogg);
        Utlogg.addEventListener("click", function()
    {
        localStorage.clear();
        location.reload();
    })
    }
    else
    {
        document.getElementById("div").innerHTML = "<h1>Fel kod du får testa igen!</h1>";
        let testIgen = document.createElement("button");
        console.log(localStorage)
        testIgen.innerHTML = "Testa igen";
        body.appendChild(testIgen);
        //skapar en knapp om man har fel
        testIgen.addEventListener("click", function(){
        location.reload();
        //knappens funktion
        })

        
    }
})
}
