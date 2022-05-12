alert(
  "Привет. Не успел доделать. Буду благодарен, если повременишь с проверкой. До 18:00 (по МСК) закончу. Спасибо за понимание :)"
);

// Перед стартом подгружу мои массивы соответствующие клавишам на клавиатуре
import enLang from './enkeys.js';

// 
// Для начала задам структуру header, main, footer 
//

// Добавляю header, где будет размещен заголовок
const header = document.createElement('header');
header.classList.add('animation');
document.body.appendChild(header);

// Добавляю main, где будет размещена вся структура клавиатуры с полем вывода текста
const main = document.createElement('main');
document.body.appendChild(main);

// Добавляю footer, где будет размещена информация по смене языка
const footer = document.createElement('footer');
footer.classList.add('animation');
document.body.appendChild(footer);

//
// Контент для header
//

// Добавляю заголовок h1 с текстом в header
const h1 = document.createElement('h1');
header.appendChild(h1);
h1.textContent = 'Virtual Keyboard by Andrei Chaika';

//
// Контент для footer
//

// Добавляю подпись p с текстом в footer
const p = document.createElement('p');
footer.appendChild(p);
p.textContent = 'Клавиатура создана для Операционной системы Windows Переключение языка осуществляется через комбинацию Alt + Shift';





// Теперь начинается основа разработки 

//
// Структура для main
//

// Добавляю секцию с классом "input", где будет размещаться поле для вывода текста с клавиатуры
const input = document.createElement('section');
input.classList.add('input', 'animation');
main.appendChild(input);
// Размещаю поле для вывода текста с клавиатуры
const textarea = document.createElement('textarea');
textarea.classList.add('textarea');
input.appendChild(textarea);

// Добавляю секцию с классом "keyboard", где будет размещаться сама виртуальная клавиатура
const keyboard = document.createElement('section');
keyboard.classList.add('keyboard', 'animation');
main.appendChild(keyboard);

// Для начала привязываю массив с данными клавиш английской раскладки к переменной.
let keys = enLang;

// Создаю цикл, который сперва будет перебирать массив по элементам (оно же i)
for (let i = 0; i < keys.length; i += 1) {
  // Задаю условие создание новых блоков с классом "row" после прохождения каждого i
  const row = document.createElement('div');
  row.classList.add('row');
  //  Внутрь цикла размещаю ещё один цикл, который внутри i-ых элементов массива будет перебирать элементы вложенных в них массивов (они же j) 
  for (let j = 0; j < keys[i].length; j += 1) {
    // Задаю условие создания button внутри row поосле прохождения каждого j с добавлением класса (по ключу class извлекаю значение), с добавлением текста внутрь button (по ключу name извлекаю значение) и с добавлением в button своего id (по ключу code извлекаю значение)
    const button = document.createElement('button');
    button.classList.add(...keys[i][j].class.split(' '));
    button.innerHTML = keys[i][j].name;
    button.id = keys[i][j].code;
    row.appendChild(button);
  }
  keyboard.appendChild(row);
}