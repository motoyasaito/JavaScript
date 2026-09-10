//問1
const no1 = "hoge";
//問2
const no2 = 69;
//問3
const no3 = false;
//問4
let no4;
//問5
const no5 = null;
//問6
const no6 = ["田中","佐藤","久保田","鈴木","河本"];
//問7
const no7 = {
  id: 1,
  name: 'yourName',
  age: 20
}
//問8
console.log(no1);
console.log(no2);
console.log(no3);
console.log(no4);
console.log(no5);
console.log(no6);
//問9
function no9() {
}
//問10
const no10 = () => {
}
 //問11
function no11(test) {
  console.log(test)
}
//問12
const add = (test1,test2) => {
  return test1 + test2;
}
console.log(add(5,8));
//問13
const first = "齊藤";
const second = first.concat("元弥");
console.log(second);
//問14
const myButton = document.getElementById("myButton");
//問15
const mytext = document.querySelector(".text");
//問16
const ptest = document.createElement("p");
//問17
ptest.textContent = "追加要素p";
ptest.className = "testp";
myButton.appendChild(ptest);
//問18
const addBtn = document.getElementById("addBtn");
addBtn.addEventListener("click", () => {
  console.log("ボタンがクリックされました");
});
//問19
window.addEventListener("scroll", () => {
  console.log("scroll");
});
//問20
const container = document.getElementById("container");
addBtn.addEventListener("click", () => {
  const newtext = document.createElement("p");
  newtext.textContent = "子要素が追加されました";
  newtext.classList.add("testclass-p");
  container.appendChild(newtext);
});
