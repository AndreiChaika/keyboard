alert(
  "Привет. Не успел доделать. Буду благодарен, если повременишь с проверкой. Спасибо за понимание :)"
);

let qBody = document.querySelector("body");
console.log(qBody);

const para = document.createElement("p");
para.innerText = "This is a paragraph";
document.body.appendChild(para);
