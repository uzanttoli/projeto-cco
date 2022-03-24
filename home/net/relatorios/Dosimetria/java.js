document.getElementById("confirmado").addEventListener("click", exibeMensagem);
// export default {
//   let caminho = {\\se0001et0612\cco\RELATORIOS\}
// };
function exibeMensagem() {
  Swal.fire({
    position: "top-end",
    icon: "success",
    title: "Download realizado com sucesso!",
    showConfirmButton: false,
    timer: 2200,
  });
}
