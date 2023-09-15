var cantidadDeGatos = 10;
var emojis = ["😺", "😸", "😹"];

for (var i = 1; i <= cantidadDeGatos; i++) {
    var emoji = emojis[(i - 1) % 3];
    console.log("Gato #" + i + ": " + emoji);
}







