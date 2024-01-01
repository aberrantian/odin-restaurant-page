import LOGO_SRC from './assets/logo.png';

export function createHome() {
  const LOGO = new Image();
  LOGO.src = LOGO_SRC;
  LOGO.id = "home-logo";

  const HEADLINE = document.createElement('h1');
  HEADLINE.innerText = "SUSTENANCE from BIG CORP!"

  const DESCRIPTION = document.createElement('p');
  DESCRIPTION.innerText = 'Fully compliant with the Human Extinction Prevention Act of 2077 and approved by BIG ROBOT and its subsidiary BIG FOOD';

  return [LOGO, HEADLINE, DESCRIPTION];
}
