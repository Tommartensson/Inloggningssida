let User = document.getElementById("User");
let Pass = document.getElementById("Pass");
let button = document.getElementById("Button");

// Variabler från index

button.addEventListener("click", function()
{
    //variabler inuti knappen för tbx1 och tbx2
    let namn = User.value;
    let losen = Pass.value;
    
    

    if(namn == "test" && losen == "1234")
    {
        document.getElementById("div").innerHTML = "Koden fungerar!";
        localStorage.getItem(namn, losen)
        
    }
    else
    {
        document.getElementById("div").innerHTML = "Fel kod du får testa igen!"
        localStorage.clear();
        console.log("fel kod")
    }
})
