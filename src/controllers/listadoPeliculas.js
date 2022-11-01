let peliculas=[
    {
        nombres:"EL CATACLISMO",
        duracion:120,
        poster:"https://firebasestorage.googleapis.com/v0/b/cinemajuan-74604.appspot.com/o/10_EL%20CATACLISMO.jpg?alt=media&token=d3537f36-427e-4e7d-964a-90ec5178a1aa"
    },

    {
        nombres:"JEEPERS CREEPERS",
        duracion:90,
        poster:"https://firebasestorage.googleapis.com/v0/b/cinemajuan-74604.appspot.com/o/11_%20JEEPERS%20CREEPERS.jpg?alt=media&token=60ffae97-5782-4369-8aa1-4c9b7754e785"
    },

    {
        nombres:"HALLOWEEN LA NOCHE FINAL",
        duracion:100,
        poster:"https://firebasestorage.googleapis.com/v0/b/cinemajuan-74604.appspot.com/o/12_HALLOWEEN%20LA%20NOCHE%20FINAL.jpg?alt=media&token=c3b8d243-ea11-42ae-8afc-5649b44f9a53"
    },

    {
        nombres:"ONE PIECE",
        duracion:130,
        poster:"https://firebasestorage.googleapis.com/v0/b/cinemajuan-74604.appspot.com/o/1_one%20piece.jpg?alt=media&token=03625afd-eb2d-473f-9c3c-034ad6ca149d"
    },

    {
        nombres:"LOS REYES DEL MUNDO",
        duracion:80,
        poster:"https://firebasestorage.googleapis.com/v0/b/cinemajuan-74604.appspot.com/o/2_los%20reyes%20del%20mundo.jpg?alt=media&token=330c0738-89fe-4309-aba5-1efd0cb3602f"
    },

    {
        nombres:"AMSTERDAM",
        duracion:85,
        poster:"https://firebasestorage.googleapis.com/v0/b/cinemajuan-74604.appspot.com/o/3_%C3%81MSTERDAM.jpg?alt=media&token=25ad2ad5-ed9e-44a5-8c59-98849a3afb6e"
    },

    {
        nombres:"LA MUJER REY",
        duracion:120,
        poster:"https://firebasestorage.googleapis.com/v0/b/cinemajuan-74604.appspot.com/o/4_la%20mujer%20rey.jpg?alt=media&token=cb26cad1-709e-4d1f-b3d4-b757637ad7a4"
    },

    {
        nombres:"MINIONS 2",
        duracion:110,
        poster:"https://firebasestorage.googleapis.com/v0/b/cinemajuan-74604.appspot.com/o/6_%20MINIONS%202.jpg?alt=media&token=fd89581a-01f1-4941-a2df-35316266ec36"
    },
    
    {
        nombres:"MINIONS 2",
        duracion:110,
        poster:"https://firebasestorage.googleapis.com/v0/b/cinemajuan-74604.appspot.com/o/6_%20MINIONS%202.jpg?alt=media&token=fd89581a-01f1-4941-a2df-35316266ec36"
    },
    {
        nombres:"MINIONS 2",
        duracion:110,
        poster:"https://firebasestorage.googleapis.com/v0/b/cinemajuan-74604.appspot.com/o/6_%20MINIONS%202.jpg?alt=media&token=fd89581a-01f1-4941-a2df-35316266ec36"
    },
    {
        nombres:"MINIONS 2",
        duracion:110,
        poster:"https://firebasestorage.googleapis.com/v0/b/cinemajuan-74604.appspot.com/o/6_%20MINIONS%202.jpg?alt=media&token=fd89581a-01f1-4941-a2df-35316266ec36"
    },
    {
        nombres:"MINIONS 2",
        duracion:110,
        poster:"https://firebasestorage.googleapis.com/v0/b/cinemajuan-74604.appspot.com/o/6_%20MINIONS%202.jpg?alt=media&token=fd89581a-01f1-4941-a2df-35316266ec36"
    },
    {
        nombres:"MINIONS 2",
        duracion:110,
        poster:"https://firebasestorage.googleapis.com/v0/b/cinemajuan-74604.appspot.com/o/6_%20MINIONS%202.jpg?alt=media&token=fd89581a-01f1-4941-a2df-35316266ec36"
    }
]

let fila=document.getElementById("fila")

peliculas.forEach(function(pelicula){
    console.log(pelicula.poster)

    let foto=document.createElement("img")
    foto.src=pelicula.poster
    foto.classList.add("img-fluid","w-100",)

    fila.appendChild(foto)

})