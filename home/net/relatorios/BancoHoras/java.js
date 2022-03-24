document.getElementById("confirmado").addEventListener("click", exibeMensagem);

function exibeMensagem() {
  var res = document.getElementById("att");
  res.innerHTML = "SEU DOWNLOAD FOI INICIADO";
  Swal.fire({
    position: "top-end",
    icon: "success",
    title: "Download realizado com sucesso!",
    showConfirmButton: false,
    timer: 2200,
  });
}

if (window.File && window.FileReader && window.FileList && window.Blob) {
  // Great success! All the File APIs are supported.
} else {
  alert("The File APIs are not fully supported in this browser.");
}
