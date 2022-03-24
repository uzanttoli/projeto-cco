function exibeMensagem() {
    Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: 'Download realizado com sucesso!',
        showConfirmButton: false,
        timer: 2500
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

function MensagemManutenção() {
    Swal.fire({
        position: 'top-end',
        icon: 'warning',
        title: 'Seu Download não foi realizado!',
        showConfirmButton: false,
        timer: 2500
    })
}

function MensagemIndisponivel() {
    Swal.fire({
        icon: 'warning',
        title: 'Relatorio Descontinuado!',
        showConfirmButton: true,
    })
}