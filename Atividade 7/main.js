

var usuario = parseFloat(prompt("\n(1)= Pedra.\n(2)= Papel.\n(3)= Tesoura."));
var computador = Math.random();

if (computador <= 0.33) {
    computador = 1;
} else if (0.33 < computador <= 0.66) {
    computador = 2;
} else {
    computador = 3;
}

if (usuario === 1) {
    if (computador === 2) {
        alert("Você jogou pedra e o computador jogou Papel.")
    } else if (computador === 3) {
        alert("Você jogou pedra e o computador jogou Tesoura.")
    } else {
        alert("Você jogou pedra e o computador jogou pedra.")
    }
} else if (usuario === 2) {
    if (computador === 1) {
        alert("Você jogou Papel e o computador jogou Pedra.")
    } else if (computador === 3) {
        alert("Você jogou Papel e o computador jogou Tesoura.")
    } else {
        alert("Você jogou Papel e o computador jogou Papel.")
    }
} else {
    if (computador === 1) {
        alert("Você jogou Tesoura e o computador jogou Pedra.")
    } else if (computador === 2) {
        alert("Você jogou Tesoura e o computador jogou Papel.")
    } else {
        alert("Você jogou Tesoura e o computador jogou Tesoura.")
    }
}