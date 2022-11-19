function norekOki() {
  // Get the text field
  var copyText = document.getElementsByClassName("norek");

  // Copy the text inside the text field
  navigator.clipboard.writeText(copyText[0].textContent).then(() => {
    alert("Berhasil menyalin nomor rekening Oki Riayati - Mandiri");
  });
}

function norekYasinBca() {
  // Get the text field
  var copyText = document.getElementsByClassName("norek");

  // Copy the text inside the text field
  navigator.clipboard.writeText(copyText[1].textContent).then(() => {
    alert("Berhasil menyalin nomor rekening Muhammad Yasin - BCA");
  });
}

function norekYasinBsi() {
  // Get the text field
  var copyText = document.getElementsByClassName("norek");

  // Copy the text inside the text field
  navigator.clipboard.writeText(copyText[2].textContent).then(() => {
    alert("Berhasil menyalin nomor rekening Muhammad Yasin - BSI");
  });
}

function alamat() {
  // Get the text field
  var copyText = document.getElementsByClassName("alamat");

  // Copy the text inside the text field
  navigator.clipboard.writeText(copyText[0].textContent).then(() => {
    alert("Berhasil menyalin alamat");
  });
}
