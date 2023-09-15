var cantidadDeGatos = 5;
var cantidadDePasos = 3;

for (var i = 1; i <= cantidadDeGatos; i++) {
    var paso = "🐾".repeat(cantidadDePasos);
    console.log("Gato #" + i + ": 🐈 " + paso);
}

//Si se utilizan otros valores en las variables, el resultado en la consola se adaptará