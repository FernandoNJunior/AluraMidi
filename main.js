function tocaSom(seletorAudio) {
   const elemento = document.querySelector(seletorAudio);

   if (elemento && elemento.localName === 'audio') {
            elemento.play()
   }
   else {
    console.log('Elemento ou Seletor inválido não encontrado')
   }
}

const listaDeTeclas = document.querySelectorAll('.tecla');

//para
for (contador = 0; contador < listaDeTeclas.length; contador ++) {

    const tecla = listaDeTeclas[contador];
    const instrumentos = tecla.classList[1];
    const idAudio = `#som_${instrumentos}`; //template string

    tecla.onclick = function() {
        tocaSom(idAudio);
    }

    tecla.onkeydown = function (evento) {
        console.log(evento.code == 'Space' )

        if (evento.code === 'Space' || evento.code === 'Enter') {
            tecla.classList.add('ativa');
        }
    }

    tecla.onkeyup = function () {
        tecla.classList.remove('ativa');
    }

}