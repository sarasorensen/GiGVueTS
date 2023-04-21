export function openPopUp(source: any) {
  const window = document.getElementById(source);
  window!.setAttribute("key", source);
  window!.style.display = "block";
}

export function closePopUp(source: any) {
  if (source !== "null") {
    const window = document.getElementById(source);
    const verify = document.getElementById("verify");
    const verified = document.getElementById("verified");
    const btns = document.getElementById("btns-action");

    verify!.style.display = "block";
    btns!.style.display = "block";
    window!.style.display = "none";
    verified!.style.display = "none";
    window!.style.display = "none";
    window!.style.display = "none";
  }
}
