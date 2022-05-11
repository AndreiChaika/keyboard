alert(
  "Привет. Не успел доделать. Буду благодарен, если повременишь с проверкой. Спасибо за понимание :)"
);

// 
// Для начала задам структуру header, main, footer 
//

// Добавляю header, где будет размещен заголовок
const header = document.createElement('header');
document.body.appendChild(header);

// Добавляю main, где будет размещена вся структура клавиатуры с полем вывода текста
const main = document.createElement('main');
document.body.appendChild(main);

// Добавляю footer, где будет размещена информация по смене языка
const footer = document.createElement('footer');
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
p.textContent = 'Клавиатура создана для ОС Windows. Переключение языка осуществляется через комбинацию Alt + Shift';