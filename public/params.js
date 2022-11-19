const myKeysValues = window.location.search;

const urlParams = new URLSearchParams(myKeysValues);

const paramto = urlParams.get("to");

const nama_tamu = document.querySelector(".nama-tamu");

nama_tamu.textContent = paramto;
