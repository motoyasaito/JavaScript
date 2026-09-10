// ボタンをクリックしたときにアラートを表示する
document.getElementById("myButton").addEventListener("click", function() {
  alert("ボタンがクリックされました！");
});
// 2つの数値を足し算して結果を表示
let num1 = 5;
let num2 = 10;
let result = num1 + num2;

console.log("計算結果:", result);
// ユーザーに年齢を入力してもらい、結果を表示
let age = prompt("あなたの年齢を教えてください:");

if (age >= 18) {
  alert("あなたは成人です！");
} else {
  alert("あなたは未成年です！");
}
// 1から5までの数字を表示
for (let i = 1; i <= 5; i++) {
  console.log("カウント:", i);
}
const fruits = ["ばなな","りんご","きうい"];
fruits.push("なし");
console.log(fruits[1]);
const names = ["jin","mike","kei","ai","tom","may"]
console.log(names);
names.sort();
console.log(names);
const a123 = 25 + 5 * 20 - 2;
console.log(a123);
let number = 4;
if (number % 2 === 0) {
  console.log("偶数です");
} else {
  console.log("奇数です");
}
const temperature = 30;

if (temperature < 0) {
  console.log("氷点下です");
} else if (temperature <= 25) {
  console.log("快適な温度です");
} else {
  console.log("暑いです");
}
const numbers = 21;
if (numbers > 0) {
  console.log("正の数です")
} else if (numbers < 0) {
  console.log("負の数です");
} else {
  console.log("0です")
}