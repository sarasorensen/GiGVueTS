import * as PopUp from "./PopUp";
export function tab(panel: string): void {
  const element = document.getElementById(panel);
  const tabButtonList = element?.querySelectorAll('[role="tab"]');
  const tabArrayList = [].slice.call(tabButtonList);

  // Initialize tabFocus
  const activeTab = element?.querySelector(
    '[aria-selected="true"]'
  ) as HTMLButtonElement;
  const indexNum = (tabArrayList as HTMLButtonElement[]).indexOf(activeTab);
  let tabFocus = indexNum || 0;

  // Toggle function
  const toggleTab = (event: Event): void => {
    const eventTarget = event.currentTarget as HTMLButtonElement;
    const targetPanel = eventTarget.getAttribute("aria-controls");
    const activeTab = element?.querySelector('[aria-selected="true"]');
    const activeContent = element?.querySelector('[aria-hidden="false"]');

    // Toggle tab's aria-selected
    activeTab?.setAttribute("aria-selected", "false");
    activeTab?.setAttribute("tabindex", "-1");
    eventTarget?.setAttribute("aria-selected", "true");
    eventTarget?.setAttribute("tabindex", "0");
    const indexNum = (tabArrayList as HTMLButtonElement[]).indexOf(eventTarget);
    tabFocus = indexNum;

    // Toggle content's aria-hidden
    activeContent?.setAttribute("aria-hidden", "true");
    element
      ?.querySelector(`#${targetPanel || "not-supplied"}`)
      ?.setAttribute("aria-hidden", "false");
    event.preventDefault();
  };

  // Tab click EventListener
  tabButtonList?.forEach((item) => {
    item.addEventListener("click", toggleTab);
  });
}

export function showSection(i: any, source:any): void {
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
