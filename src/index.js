// DON'T FORGET TO READ WEBPACK CODE SPLITTING GUIDE
import ICON from './assets/icon.png';

const HTML = document.getElementById('html');
HTML.style.margin = '0px';
HTML.style.height = '100%';
HTML.style.width = '100%';
const BODY = document.getElementById('body');
BODY.style.margin = '0px';
BODY.style.height = '100%';
BODY.style.width = '100%';
const CONTENT = document.getElementById('content');
CONTENT.style.margin = '0px';
CONTENT.style.height = '100%';
CONTENT.style.width = '100%';

const LOGO_SIZE = '500px';
const LOGO = new Image();
LOGO.src = ICON;

const HEADLINE = document.createElement('h1');
HEADLINE.innerText = 'SUSTENANCE from BIG CORP!';

const DESCRIPTION = document.createElement('p');
DESCRIPTION.innerText = 'Fully compliant with the Human Extinction Prevention Act of 2077 and approved by BIG ROBOT and its subsidiary BIG FOOD';

CONTENT.append(LOGO, HEADLINE, DESCRIPTION);
