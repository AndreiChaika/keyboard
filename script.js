alert(
  "Привет. Не успел доделать. Буду благодарен, если повременишь с проверкой. Спасибо за понимание :)"
);

// В body размещаю базовый div с class="wrapper"
const qBody = document.querySelector('body');
const keyboard = document.createElement('div');
keyboard.classList.add('wrapper');
document.body.appendChild(keyboard);

// Добавляю section с class="header" и id="header"
const section1 = document.createElement('section');
section1.classList.add('header');
section1.id = 'header';
wrapper.appendChild(section1);

// Добавляю заголовок h1 с class="title" с текстом RSS Виртуальная клавиатура
const h1 = document.createElement('h1');
h1.classList.add('title');
section1.appendChild(h1);
h1.textContent = 'Virtual Keyboard by Andrei Chaika';

// Добавляю ещё одну section с class="input" и id="input"
const section2 = document.createElement('section');
section2.classList.add('input');
section2.id = 'input';

// Добавляю поле для ввода текста textarea с классом input-area. Далее применяю его в секцию и базовый div
const textarea = document.createElement('textarea');
textarea.classList.add('input-area');
section2.appendChild(textarea);
wrapper.appendChild(section2);

// Добавляю ещё одну section с class="keyboard" и id="keyboard"
const section3 = document.createElement('section');
section3.classList.add('keyboard');
section3.id = 'keyboard';