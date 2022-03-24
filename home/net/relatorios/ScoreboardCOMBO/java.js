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

function alert() {
    Swal.fire({
        position: 'top-end',
        icon: 'warning',
        title: 'Relatorio está sendo Adaptado',
        showConfirmButton: false,
        timer: 2200
    })
}