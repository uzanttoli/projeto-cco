document.getElementById("confirmado").addEventListener("click", exibeMensagem);

function exibeMensagem() {
    Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: 'Download realizado com sucesso!',
        showConfirmButton: false,
        timer: 2200
    })
}

function MensagemError() {
    Swal.fire({
        position: 'top-end',
        icon: 'error',
        title: 'Seu Download não foi realizado!',
        showConfirmButton: false,
        timer: 2500
    })
}