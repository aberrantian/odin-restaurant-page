import BAR_SRC from './assets/bar.png';
import WATER_SRC from './assets/water.png';

export function createMenu() {
  function createMenuItem(image, name, description, price) {
    const MENU_ITEM_CONTAINER = document.createElement('div');
    MENU_ITEM_CONTAINER.classList.add("menu-item-container");

    const MENU_ITEM_IMAGE = new Image();
    MENU_ITEM_IMAGE.src = image;

    const MENU_ITEM_NAME = document.createElement("p");
    MENU_ITEM_NAME.innerText = name;
    MENU_ITEM_NAME.classList.add("menu-item-name");

    const MENU_ITEM_DESCRIPTION = document.createElement("p");
    MENU_ITEM_DESCRIPTION.innerText = description;
    MENU_ITEM_DESCRIPTION.classList.add("menu-item-description");

    const MENU_ITEM_PRICE = document.createElement("p");
    MENU_ITEM_PRICE.innerText = price;

    MENU_ITEM_CONTAINER.append(MENU_ITEM_IMAGE, MENU_ITEM_NAME, MENU_ITEM_DESCRIPTION, MENU_ITEM_PRICE);

    return MENU_ITEM_CONTAINER;
  }

  const SUSTENANCE_BAR = createMenuItem(BAR_SRC, "Sustenance Bar", "A tasty sustenance bar containing all the calories and macronutrients required to keep humanity alive!", "100€$");

  const WATER = createMenuItem(WATER_SRC, "Water", "Simply H20, sourced from the top water recycling plants still operating in the 21st century!", "250€$");

  const FOOTNOTE = document.createElement("p");
  FOOTNOTE.id = "menu-footnote";
  FOOTNOTE.innerHTML = "Images were generated with AI available from Perchance.org, products will not appear as they do in the generated images";

  return [SUSTENANCE_BAR, WATER, FOOTNOTE];
}
