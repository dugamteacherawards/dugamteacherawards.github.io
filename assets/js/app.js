function showSlide(target){
   $('#myTab button[data-bs-target="'+ target +'"]').tab('show');
}

$(document).ready(function(){
  $("#thisInput").change(function(){
    console.log($("#thisInput").val());
    const username = $("#thisInput").val();
    $("#thisName").html(username);
  });
});

const scriptURL = 'https://script.google.com/macros/s/AKfycbwYRgTIuIpElni10PoEEIEIogA5S5VKJ1zrz62LyV71BiMjaAjFV8jkv_GvuUQtoXojYA/exec'
const form = document.forms['dta-form']

form.addEventListener('submit', e => {
  e.preventDefault()
  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
  .then(response => {
     swal("Success!", "Vote Anda Berhasil!", "success");
     setTimeout(function () { 
        location.reload();
     }, 3 * 1000);
  })
  .catch(error => {
     swal("Gagal!", "Maaf, Vote Anda Gagal!", "error");
     setTimeout(function () { 
        location.reload();
     }, 3 * 1000);
  })
})