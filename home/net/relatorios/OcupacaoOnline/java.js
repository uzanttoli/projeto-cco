document.getElementById("confirmado").addEventListener("click", exibeMensagem);

function exibeMensagem() {
    Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: 'Download realizado com sucesso!',
        showConfirmButton: false,
        timer: 2000
    })
}