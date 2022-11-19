function norekOki() {
  // Get the text field
  var copyText = document.getElementsByClassName("norek");

  // Copy the text inside the text field
  navigator.clipboard.writeText(copyText[0].textContent);

  // Alert the copied text
  alert("Berhasil menyalin nomor rekening Oki Riayati");
}

function norekYasin() {
  // Get the text field
  var copyText = document.getElementsByClassName("norek");

  // Copy the text inside the text field
  navigator.clipboard.writeText(copyText[1].textContent);

  // Alert the copied text
  alert("Berhasil menyalin nomor rekening Muhammad Yasin");
}

function alamat() {
  // Get the text field
  var copyText = document.getElementsByClassName("alamat");

  // Copy the text inside the text field
  navigator.clipboard.writeText(copyText[0].textContent);

  // Alert the copied text
  alert("Berhasil menyalin alamat");
}
