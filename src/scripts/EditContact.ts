export function deleteContact() {

  const loader = document.getElementById("loader");
  const verify = document.getElementById("verify");
  const verified = document.getElementById("verified");
  const btns = document.getElementById("btns-action")
  verify!.style.display = "none";

  let inProgress = true;
  loader!.style.display = "block";

  setTimeout(() => {
    inProgress = false;
    btns!.style.display = "none";
    loader!.style.display = "none";
    verified!.style.display = 'block'
  }, 1500);

}
export function clearForm(){
    console.log('clearForm')
}

export function edit(){
  console.log('edit')
}

export function validateEmail(mail:any){
  const expression: RegExp = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
  const result: boolean = expression.test(mail);

  return result 
}
export function addContact(contact:any){
  
}