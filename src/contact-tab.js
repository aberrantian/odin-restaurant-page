import BIG_CORP_IMG from './assets/big_corp.png';
import BIG_ROBOT_IMG from './assets/big_robot.png';
import BIG_FOOD_IMG from './assets/big_food.png';

export function createContact() {
  function createContactItem(image, name) {
    const CONTAINER = document.createElement('div');
    const IMAGE = new Image();
    IMAGE.src = image;

    const NAME = document.createElement('p');
    NAME.innerText = name;

    const NUMBER = document.createElement('p');
    NUMBER.innerText = 'Phone Number: unavailable';

    const EMAIL = document.createElement('p');
    EMAIL.innerText = 'Email: unavailable';

    const DESCRIPTION = document.createElement('p');
    DESCRIPTION.innerText = 'Description: unavailable';

    CONTAINER.append(IMAGE, NAME, NUMBER, EMAIL, DESCRIPTION);

    return CONTAINER;
  }

  const BIG_CORP_ITEM = createContactItem(BIG_CORP_IMG, 'BIG CORP');
  const BIG_ROBOT_ITEM = createContactItem(BIG_ROBOT_IMG, 'BIG ROBOT');
  const BIG_FOOD_ITEM = createContactItem(BIG_FOOD_IMG, 'BIG FOOD');

  return [BIG_CORP_ITEM, BIG_ROBOT_ITEM, BIG_FOOD_ITEM];
}
