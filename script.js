/* eslint-disable linebreak-style */
/* eslint-disable import/extensions */
import enLang from './enkeys.js';

let enKey = enLang;
const body = document.querySelector('body');
const wrapper = document.createElement('div');
wrapper.classList.add('wrapper');

const section1 = document.createElement('section');
section1.classList.add('header');
section1.id = 'header';

const h1 = document.createElement('h1');
h1.classList.add('title');
section1.appendChild(h1);
h1.textContent = 'RSS Виртуальная клавиатура';

wrapper.appendChild(section1);

const section2 = document.createElement('section');
section2.classList.add('input');
section2.id = 'input';

const textarea = document.createElement('textarea');
textarea.classList.add('input-area');
section2.appendChild(textarea);

wrapper.appendChild(section2);

const section3 = document.createElement('section');
section3.classList.add('keyboard');
section3.id = 'keyboard';

const div1 = document.createElement('div');
div1.classList.add('keyboard-body');

section3.appendChild(div1);

const div2 = document.createElement('div');
div2.classList.add('keyboard-buttons');

div1.appendChild(div2);
