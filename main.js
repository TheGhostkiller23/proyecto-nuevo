

const usuario = ´[
    [
    }   {
        "usuario": "usuario nuevo",
        "email": "emailnuevo@gmail.com",
        "contraseña": "nuevacontraseña",
        },
    
        {
            "usuario": "keiver",
            "email": "keivergalvan66@gmail.com",
            "contraseña": "123456"
        }
    ]

;


    console.log(typeof usuario);



    const jsonData = JSON.parse(usuario);
    console.log(typeof jsonData);



    const email, contraseña = jsonData.filter(
        (usuario, email, contraseña)
    );

    console.log(usuario, email, contraseña);



    const usuario = JSON.stringify(usuario);
    console.log(usuario, email, contraseña);

    const fs = require(´fs´);


    