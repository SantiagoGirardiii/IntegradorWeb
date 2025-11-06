const botonesComida = document.querySelectorAll('.botonComida');
        
        botonesComida.forEach(boton => {

            
                boton.addEventListener('click', () => {
                    const contenedorPadre = boton.parentElement;
                    const infoAdicional = contenedorPadre.querySelector('.infoAdicional');
    

                    infoAdicional.classList.toggle('mostrar');
    

                    if (infoAdicional.classList.contains('mostrar')) {
                        boton.textContent = 'Ver menos';
                    } else {
                        boton.textContent = 'Ver mas';
                    }
                });
        });        