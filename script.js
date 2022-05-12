alert(
  "Привет. Не успел доделать. Буду благодарен, если повременишь с проверкой. До 18:00 (по МСК) закончу. Спасибо за понимание :)"
);

// Перед стартом подгружу мои массивы соответствующие клавишам на клавиатуре
import enLang from './enkeys.js';
import ruLang from './rukeys.js';

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

// Для начала привязываю массив с данными клавиш английской раскладки к переменной keys.
let keys = enLang;

// Создаю цикл, который сперва будет перебирать массив по элементам (оно же i)
for (let i = 0; i < keys.length; i += 1) {
  // Задаю условие создание новых блоков с классом "row" после прохождения каждого i
  const row = document.createElement('div');
  row.classList.add('row');
  //  Внутрь цикла размещаю ещё один цикл, который внутри i-ых элементов массива будет перебирать элементы вложенных в них массивов (они же j) 
  for (let j = 0; j < keys[i].length; j += 1) {
    // Задаю условие создания button внутри row после прохождения каждого j с добавлением класса (по ключу class извлекаю значение), с добавлением текста внутрь button (по ключу name извлекаю значение) и с добавлением в button своего id (по ключу code извлекаю значение)
    const button = document.createElement('button');
    button.classList.add(...keys[i][j].class.split(' '));
    button.innerHTML = keys[i][j].name;
    button.id = keys[i][j].code;
    row.appendChild(button);
  }
  keyboard.appendChild(row);
}


const virtKeyboard = document.querySelector('.keyboard');
const virtBackspace = document.querySelector('#Key_Backspace');
const virtEnter = document.querySelector('#Key_Enter');
const virtTab = document.querySelector('#Key_Tab');
const virtDel = document.querySelector('#Key_Delete');
const virtShiftL = document.querySelector('#Key_Shift_Left');
const virtShiftR = document.querySelector('#Key_Shift_Right');
const virtCtrlL = document.querySelector('#Key_Ctrl_Left');
const virtCtrlR = document.querySelector('#Key_Ctrl_Right');
const virtAltL = document.querySelector('#Key_Alt_Left');
const virtAltR = document.querySelector('#Key_Alt_Right');
const virtSpace = document.querySelector('#Key_Space');

//
// Сейчас выводятся в клавиши только значения ключа key из массива enkeys.js. 
// Нужно задать смену этих значений при зажатии клавиши Shift и при смене языка Alt+Shift  
//

// Для начала выведем в отдельный массив те клавиши, которые подвержены изменению с классом shortkey
const virtSymbols = document.querySelectorAll('button.shortkey');

// Добавим переменные ShiftStatus означающий нажатие кнопки Shift, а также altStatus означающий нажатие кнопки Alt
let shiftStatus = 0;
let altStatus = 0;

// Нужна функция по совпадению использованной клавиши с тем, что реализовано в массиве
function findKey(code) {
  // Для начала создаю цикл, который сперва будет перебирать массив по элементам (оно же i)
  for (let i = 0; i < keys.length; i += 1) {
    //  Внутрь цикла размещаю ещё один цикл, который внутри i-ых элементов массива будет перебирать элементы вложенных в них массивов (они же j) 
    for (let j = 0; j < keys[i].length; j += 1) {
      // Добавляю условие для перебора всего массива на совпадение, что если значение ключа code из массива равно тому значению, что использовано, то возвращать его данные 
      if (keys[i][j].code === code) return keys[i][j];
    }
  }
  // Если нет, то возвращать null;
  return null;
}

// Создаём функцию по смене языка клавиш
function translate() {
  // Для начала для каждого элемента массива обычных клавиш с классом shortkey применю функцию 
  virtSymbols.forEach((el) => {
    // Задам переменную по вводимому элементу
    const virtElement = el;
    // К функции. Если Shift не нажат, то используется обычная клавиша Key
    if (shiftStatus === 0) {
      // И на место элемента вставляется тот code, что был найден в предыдущей функции по поиску совпадения
      virtElement.innerHTML = findKey(virtElement.id).key;
    } else {
      // Иначе на место элемента подставляется из массива значение шифтовой клавиши shiftKey
      virtElement.innerHTML = findKey(virtElement.id).shiftKey;
    }
  });
}

// Добавляю функцию с switch (сравнивает выражение с случаем, перечисленным внутри него)
function setLanguage(language) {
  switch (language) {
    case 'en':
      keys = enLang;
      break;
    case 'ru':
      keys = ruLang;
      break;

    default:
      break;
  }
  translate();
}

/*
// Просто фича, которую можно сделать для удобства
// Создадим переменную с произвольным значением 'en'
let lang = 'en';

// Можно сделать сохранение выбранного языка в веб-хранилище localStorage 
// он позволяет сохранить ключ lang с значением в виде переменной lang в браузере 
// после обновления страницы и даже перезапуска браузера 
function setLocalStorage() {
  localStorage.setItem('lang', lang);
}

// Если пользователь покидает страницу (событие beforeunload), то сохраняем значения за счёт этой функции
window.addEventListener('beforeunload', setLocalStorage);

// Когда пользователь вернётся, то мы подгружаем выбранный язык
function getLocalStorage() {
  // Передавая ключ lang в качестве параметра, то метод вернёт значение, лежащее в хранилище localStorage по указанному ключу.
  if (localStorage.getItem('lang')) {
    lang = localStorage.getItem('lang');
    setLanguage(lang);
  }
}
window.addEventListener('load', getLocalStorage);

*/
// Зададим переменную по полю для ввода текста
const virtTextarea = document.querySelector('textarea');

// Зададим функцию позиционирования
function cursorPosition() {
  // Пускай переменная обозначающая позицию по-умолчанию будет 0
  let position = 0;
  // Если позиция начала выделения элемента textarea не null и не undefined, то возвращаем его значение 
  if ((virtTextarea.selectionStart != null) && (virtTextarea.selectionStart !== undefined)) {
    position = virtTextarea.selectionStart;
  }
  return position;
}
// Фича про выделение текста
// Добавляю функцию вставить символы в textarea
function insertSymbols(str) {
  const position = cursorPosition();
  // Левая часть - возврат подстроки между индексом 0 и значением position из ранее описанной функции cursorPosition()
  const leftPart = virtTextarea.value.substring(0, position);
  // Правая часть - возврат подстроки по индексу значения position из ранее описанной функции cursorPosition()
  const rightPart = virtTextarea.value.substring(position);
  // Для удобства добавлю переменную выражающую длину строки str
  let strLen = str.length;
  // Если str равен переносу строки, то длина будет равна 1
  if (str === '\r\n') strLen = 1;
  // Атрибут value
  virtTextarea.value = leftPart + str + rightPart;
  // Сфокусированный элемент — по умолчанию будет получать события клавиатуры и подобные события.
  virtTextarea.focus();
  // Устанавим начальное и конечное положение выделения текста в элементе <textarea>
  virtTextarea.setSelectionRange(position + strLen, position + strLen);
}


// Создаём функцию, которая определяет нажатую кнопку
function btnsClicked(event) {
  // Определяем переменную которая будет равняться элементу в котором происходит событие
  const { id } = event.currentTarget;
  if (findKey(id).location > 0) return;
  if (id === 'Enter' || id === 'Tab' || id === 'Space') return;
  insertSymbols(event.currentTarget.innerHTML);
}

// Функция нажатия на enter подразумивает добавление символов \r\n в textarea
function enterClicked() {
  insertSymbols('\r\n');
}

// Функция нажатия на tab подразумивает добавление      в textarea
function tabClicked() {
  insertSymbols('    ');
}

// Функция нажатия на space подразумивает добавление   в textarea
function spaceClicked() {
  insertSymbols(' ');
}

// Функция нажатия на delete в textarea
function delClicked() {
  // определяем текущую позицию курсора (мигающего знака строки между символами)
  const position = cursorPosition();
  virtTextarea.value = virtTextarea.value.substring(0, position)
    + virtTextarea.value.substring(position + 1);
    virtTextarea.focus();
    virtTextarea.setSelectionRange(position, position);
}


// Функция нажатия на backspace в textarea
function backspaceClicked() {
  const position = cursorPosition();
  if (position > 0) {
    virtTextarea.value = virtTextarea.value.substring(0, position - 1)
    + virtTextarea.value.substring(position);
    virtTextarea.focus();
    virtTextarea.setSelectionRange(position - 1, position - 1);
  }
}

// Функция нажатия на capslock в textarea
const virtCapsLock = document.querySelector('#Key_Caps');
function capslockClicked() { 
  // Нужно учесть что при capslock, shift выполняют обратную функцию
  if (shiftStatus === 0) shiftStatus = 1;
  else shiftStatus = 0;
  translate();
  virtCapsLock.classList.toggle('active');
}

// Смена языка. Пусть первичное значение переменной - false, что действие по смене не было произведено
let languagechange = false;
function shiftClicked() {
  if (languagechange) return; // для предотвращения многократного изменения языка
  // если альт нажат, 
  if (altStatus === 1) {
    languagechange = true;
    switch (lang) {
      case 'en':
        lang = 'ru';
        break;
      case 'ru':
        lang = 'en';
        break;

      default:
        break;
    }
    setLanguage(lang);
  } else {
    if (shiftStatus === 0) shiftStatus = 1;
    else shiftStatus = 0;
    translate();
  }
}
function shiftUp() {
  if (languagechange) {
    languagechange = false;
    return;
  }
  if (shiftStatus === 0) shiftStatus = 1;
  else shiftStatus = 0;
  translate();
}

// Ctrl пуст т.к. не влияет на выводимый текст
function ctrlClicked() {

}

// Функция нажатия alt
function altClicked() {
  altStatus = 1;
}

// Функция отжатого alt
function altUp() {
  altStatus = 0;
}


//
// Переходим к созданию переменных для клавиш с префиксом virt
//



function keyDown(event) {
  event.preventDefault();
  const k = findKey(event.code);
  if (k === null) return;
  if (k.key !== 'CapsLock') document.querySelector(`#${event.code}`).classList.add('active');
  if (k.property !== 'printable') {
    let s;
    if (shiftStatus === 0) s = k.name;
    else s = k.nameShift;
    insertSymbols(s);
  } else {
    switch (k.key) {
      case 'Shift':
        if (!event.repeat) shiftClicked();
        break;
      case 'Alt':
        if (!event.repeat) altClicked();
        break;
      case 'CapsLock':
        if (!event.repeat) capslockClicked();
        break;
      case ' ':
        spaceClicked();
        break;
      case 'Enter':
        enterClicked();
        break;
      case 'Delete':
        delClicked();
        break;
      case 'Backspace':
        backspaceClicked();
        break;
      case 'Tab':
        tabClicked();
        break;

      default:
        break;
    }
  }
}



function keyUp(event) {
  event.preventDefault();
  const k = findKey(event.code);
  if (k === null) return;
  if (k.key !== 'CapsLock') document.querySelector(`#${event.code}`).classList.remove('active');
  if (k.property !== 'printable') {
    switch (k.key) {
      case 'Shift':
        shiftUp();
        break;
      case 'Alt':
        altUp();
        break;

      default:
        break;
    }
  }
}

virtTextarea.addEventListener('keydown', keyDown);
virtTextarea.addEventListener('keyup', keyUp);
virtKeyboard.addEventListener('keydown', keyDown);
virtKeyboard.addEventListener('keyup', keyUp);
virtEnter.addEventListener('click', enterClicked);
virtTab.addEventListener('click', tabClicked);
virtDel.addEventListener('click', delClicked);
virtBackspace.addEventListener('click', backspaceClicked);
virtCapsLock.addEventListener('click', capslockClicked);
virtShiftL.addEventListener('mousedown', shiftClicked);
virtShiftL.addEventListener('mouseup', shiftUp);
virtShiftR.addEventListener('mousedown', shiftClicked);
virtShiftR.addEventListener('mouseup', shiftUp);
virtCtrlL.addEventListener('click', ctrlClicked);
virtCtrlR.addEventListener('click', ctrlClicked);
virtAltL.addEventListener('mousedown', altClicked);
virtAltR.addEventListener('mousedown', altClicked);
virtAltL.addEventListener('mouseup', altUp);
virtAltR.addEventListener('mouseup', altUp);
virtSpace.addEventListener('click', spaceClicked);
virtSymbols.forEach((el) => el.addEventListener('click', btnsClicked));