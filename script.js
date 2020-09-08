let User = document.getElementById("User");
let Pass = document.getElementById("Pass");
let body = document.getElementsByTagName("body") [0];
let button = document.getElementById("Button");
// Variabler från index
let Utlogg = document.createElement("button");
Utlogg.innerHTML = "Logga ut!"
//skapar knapp i scriptet
let namn = User.value;
let losen = Pass.value;
//variabler 


if(localStorage.length == 1){
    //lägger till knapp + text
    document.getElementById("div").innerHTML = "<h1>Du är redan inloggad, Välkommen!</h1>";
    body.appendChild(Utlogg)
    Utlogg.addEventListener("click", function()
    {
        //rensar localstorage och startar om sidan
        localStorage.clear();
        location.reload();
    })
}

else{
button.addEventListener("click", function()
{
    
    
  
    if(namn == "test" && losen == "1234")
    {
        document.getElementById("div").innerHTML = "<h1>Du är inloggad, Välkommen!</h1>";
        localStorage.setItem(Pass, losen);
        body.appendChild(Utlogg);
        Utlogg.addEventListener("click", function()
    {
        localStorage.clear();
        location.reload();
    })
    }
    else
    {
        document.getElementById("div").innerHTML = "<h1>Fel kod du får testa igen!</h1>"
        let testIgen = document.createElement("button")
        testIgen.innerHTML = "Testa igen"
        body.appendChild(testIgen)
        testIgen.addEventListener("click", function(){
            location.reload();
        })

        
    }
})
}
