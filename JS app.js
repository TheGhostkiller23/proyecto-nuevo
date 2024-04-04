const nombre = document.getElementById("name")
const email = document.getElementById("email")
const pass = document.getElementById("password")
const form = document.getElementById("form")
const parrafo = document.getElementById("warnings")

form.addEventListener("submit", e=>{
    e.preventDefault()
    let warnings = ""
    let entrar = false
    let regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/
    parrafo.innerHTML = ""
    if(nombre.value.length <6){
        warnings += ´El nombre no es valido <br>´
        entrar = true
    }
    if(!regexEmail.test(email.value)){
        warnings += ´El email no es valido <br>´
        entrar = true
    }
    if(pass.value.length < 8){
        warnings += ´La contraseña no es valida <br>´
        entrar = true
    }

    if(entrar){
        parrafo.innerHTML = warnings
    }else{
        parrafo.innerHTML = "Enviado"
    }
})

    //guardar_localStorage();

obtener_localstrorage();


function obtener_localstrorage(){


    if( localStorage.getItem("nombre ") ){ 

    // se que existe el nombre en el localstrorage
    let nombre = localStorage.getItem("nombre");
    let persona = JSON.parse( localStorage.getItem("persona") );


    console.log( nombre );
    console.log( persona );

    }else{
        console.log("no hay entradas en el local strorage");
    }



}


        function guardar_localStorage(){

        let persona = {
            nombre: "keiver",
            nombre del usuario: "keiver",
            edad: 31,
            email: "keiver@gmail.com",
            contraseña: "1234",
            recordar: "123";
            coords: {
                lat:10,
                lng: -10,
            } 
        };

        let nombre = "pedro";

        localStorage.setItem( "nombre",  nombre);
        localStorage.setItem("persona", JSON.stringify ( persona);
    
    }} }