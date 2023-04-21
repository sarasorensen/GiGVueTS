export function openPopUp() {
  const window = document.getElementById("popUp");
  window!.style.display = "block";
}

export function closePopUp() {
  const window = document.getElementById("popUp");
  const edit = document.getElementById("popUpEdit");
  const verify = document.getElementById("verify");
  const verified = document.getElementById("verified");
  const btns = document.getElementById("btns-action");

  window!.style.display = "none";
  edit!.style.display = "none";
  verify!.style.display = "block";
  btns!.style.display = "block";
  verified!.style.display = 'none'
}
