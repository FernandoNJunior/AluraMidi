function tocaSom(idElementAudio) {
    document.querySelector(idElementAudio).play();
}

const listaDeTeclas = document.querySelectorAll('.tecla');

let contador = 0;

//enquanto
while (contador < listaDeTeclas.length) {

    const tecla = listaDeTeclas[contador];
    const instrumentos = tecla.classList[1];
    console.log(instrumentos);

    const idAudio = `#som_${instrumentos}`;

    tecla.onclick = function() {
        tocaSom(idAudio);
    }

    contador = contador + 1;

    console.log(contador)
}