import './style.css';

const TAB_BAR = document.createElement('div');
TAB_BAR.id = 'tab-bar';

const CONTENT = document.createElement('div');
CONTENT.id = 'content';



const HOME = document.createElement('button');
HOME.innerText = 'Home';
HOME.classList.add('tab-btn');
const MENU = document.createElement('button');
MENU.innerText = 'Menu';
MENU.classList.add('tab-btn');
const CONTACT = document.createElement('button');
CONTACT.innerText = 'Contact';
CONTACT.classList.add('tab-btn');

TAB_BAR.append(HOME, MENU, CONTACT);
document.body.append(TAB_BAR, CONTENT);
