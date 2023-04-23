import store from '@/store';

var deleteMe = ""
export function toBeDeleted(contact:any){
 return deleteMe = contact;
}

var editMe = ""
export function toBeEdited(contact:any){
 return editMe = contact;
}

export function deleteContact() {
  const loader = document.getElementById("loader");
  const verify = document.getElementById("verify");
  const verified = document.getElementById("verified");
  const btns = document.getElementById("btns-action")
  verify!.style.display = "none";

  store.dispatch('deleteContact', deleteMe)

if(store.state.deleteInPrgs == true){
  loader!.style.display = "block";
}

if(store.state.deleteInPrgs == false){
  btns!.style.display = "none";
  loader!.style.display = "none";
  verified!.style.display = 'block'
}

}

export function validateEmail(mail:any){
  const expression: RegExp = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
  const result: boolean = expression.test(mail);

  return result 
}
