import * as PopUp from "./PopUp";
export function tab(panel: string): void {
  const wrap = document.getElementById(panel);
  const tabs = wrap?.querySelectorAll('[role="tab"]');

  const click = (event: Event): void => {
    const section = event.currentTarget as HTMLButtonElement;
    const targetPanel = section.getAttribute("aria-controls");
    const activeTab = wrap?.querySelector('[aria-selected="true"]');
    const activeSection = wrap?.querySelector('[aria-hidden="false"]');

    activeTab!.setAttribute("aria-selected", "false");
    activeTab!.setAttribute("tabindex", "-1");
    section!.setAttribute("aria-selected", "true");
    section!.setAttribute("tabindex", "0");

    activeSection!.setAttribute("aria-hidden", "true");
    wrap
      ?.querySelector(`#${targetPanel || "null"}`)
      ?.setAttribute("aria-hidden", "false");
  };

  tabs!.forEach((t) => {
    t.addEventListener("click", click);
  });
}

export function showSection(i: Number, source: String): void {
  PopUp.closePopUp(source);
  let elements = [1, 2, 3];
  const navList = document.getElementById("navList");
  let listItem = navList!.getElementsByTagName("li");

  elements.forEach((el) => {
    if (el === i) {
      document.getElementById(`toggle${el}`)!.style.display = "block";
      listItem[el - 1].classList.add("active");
    } else {
      document.getElementById(`toggle${el}`)!.style.display = "none";
      listItem[el - 1]!.classList.remove("active");
    }
  });
}
