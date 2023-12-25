import './style.css';
import { createHome } from './home-tab.js';
import { createMenu } from './menu-tab.js';
import { createContact } from './contact-tab.js';


const TAB_BAR = document.createElement('div');
TAB_BAR.id = 'tab-bar';
const CONTENT = document.createElement('div');
CONTENT.id = 'content';


const HOME = document.createElement('button');
HOME.innerText = 'Home';
HOME.classList.add('tab-btn');
HOME.addEventListener('click', () => {
  setContent(createHome());
})
const MENU = document.createElement('button');
MENU.innerText = 'Menu';
MENU.classList.add('tab-btn');
MENU.addEventListener('click', () => {
  setContent(createMenu());
})
const CONTACT = document.createElement('button');
CONTACT.innerText = 'Contact';
CONTACT.classList.add('tab-btn');
CONTACT.addEventListener('click', () => {
  setContent(createContact());
})


function setContent(content) {
  CONTENT.innerHTML = '';
  CONTENT.appendChild(content);
}


TAB_BAR.append(HOME, MENU, CONTACT);
document.body.append(TAB_BAR, CONTENT);
