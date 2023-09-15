var cantidadDeGatos = 10;
var cantidadDePasos = 4;
var emojis = ["🐈🐈", "🐈"];

for (var i = 1; i <= cantidadDeGatos; i++) {
    var emoji = emojis[i % 2];
    var paso = "🐾".repeat(cantidadDePasos);
    console.log("Gato #" + i + ": " + emoji + " " + paso);
}