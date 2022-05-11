alert(
  "Привет. Не успел доделать. Буду благодарен, если повременишь с проверкой. Спасибо за понимание :)"
);

let qBody = document.querySelector("body");
console.log(qBody);

const keyboard = document.createElement("section");
keyboard.classList.add('wrapper');
keyboard.innerHTML = `
<div class="row">
    <div class="key"></div>
    <div class="key"></div>
    <div class="key"></div>
    <div class="key"></div>
    <div class="key"></div>
    <div class="key"></div>
    <div class="key"></div>
    <div class="key"></div>
    <div class="key"></div>
    <div class="key"></div>
    <div class="key"></div>
    <div class="key"></div>
    <div class="key"></div>
    <div class="key"></div>
</div>
<div class="row">
    <div class="key"></div>
    <div class="key"></div>
    <div class="key"></div>
    <div class="key"></div>
    <div class="key"></div>
    <div class="key"></div>
    <div class="key"></div>
    <div class="key"></div>
    <div class="key"></div>
    <div class="key"></div>
    <div class="key"></div>
    <div class="key"></div>
    <div class="key"></div>
    <div class="key"></div>
</div>
<div class="row">
    <div class="key"></div>
    <div class="key"></div>
    <div class="key"></div>
    <div class="key"></div>
    <div class="key"></div>
    <div class="key"></div>
    <div class="key"></div>
    <div class="key"></div>
    <div class="key"></div>
    <div class="key"></div>
    <div class="key"></div>
    <div class="key"></div>
    <div class="key"></div>
    <div class="key"></div>
</div>
<div class="row">
    <div class="key"></div>
    <div class="key"></div>
    <div class="key"></div>
    <div class="key"></div>
    <div class="key"></div>
    <div class="key"></div>
    <div class="key"></div>
    <div class="key"></div>
    <div class="key"></div>
    <div class="key"></div>
    <div class="key"></div>
    <div class="key"></div>
    <div class="key"></div>
    <div class="key"></div>
</div>
<div class="row">
    <div class="key"></div>
    <div class="key"></div>
    <div class="key"></div>
    <div class="key"></div>
    <div class="key"></div>
    <div class="key"></div>
    <div class="key"></div>
    <div class="key"></div>
    <div class="key"></div>
    <div class="key"></div>
    <div class="key"></div>
    <div class="key"></div>
    <div class="key"></div>
    <div class="key"></div>
</div>
`;



document.body.appendChild(keyboard);
