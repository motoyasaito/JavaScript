//問1
const no1 = 100;
const no2 = 80;
const no3 = 75;
const no4 = 70;
const no5 = 80;
const result1 = no1 + no2 + no3 + no4 + no5;
console.log(result1);
//問2
const no6 = 100000;
const no7 = 80000;
const result2 = no6 + no7;
console.log(result2);
//問3
const no8 = 32;
const no9 = 64;
const result3 = no8 * no9;
console.log(result3);
//問4
const no10 = 10;
const no11 = 2;
const result4 = no10 / no11;
console.log(result4);
//問5
let num1 = 3;
num1++;
console.log(num1);
//問6
let num2 = 0;
num2--;
console.log(num2);
//問7
const akun = 8000;
const bkun = 12000;
if (akun > bkun) {
  console.log("A君のが多い");
} else {
  console.log("B君のが多い");
}
//問8
const ckun = 3000;
if (akun > bkun && akun > ckun) {
  console.log("A君が一番多い");
} else if (bkun >  akun && bkun > ckun) {
  console.log("B君が一番多い");
} else {
  console.log("C君が一番多い");
}
//問9
const rnum = Math.floor(Math.random() * 100);
const button = document.getElementById("mybutton");
button.addEventListener("click", () => {
  if (rnum >= 100) {
    alert(rnum + "点。" + "満点！！");
  } else if (rnum > 80 && rnum < 99) {
    alert(rnum + "点。" + "合格です");
  } else if (rnum > 30 && rnum < 79) {
    alert(rnum + "点。" + "赤点です");
  } else {
    alert(rnum + "点。" + "不合格です");
  }
});
//問10
const ip = document.getElementById("text");
ip.addEventListener("input", (event) => {
  const jp = event.target.value;
  switch (jp) {
    case "saitama":
      console.log("埼玉");
      break;
    case "tokyo":
      console.log("東京");
      break;
    case "kanagawa":
      console.log("神奈川");
    default:
      console.log("未確認");
  }
});
//問11
const rnum2 = Math.floor(Math.random() * 10);
console.log(rnum2);
//問12
const nummax = Math.max(1,4,6);
console.log(nummax);
//問13
const nummin = Math.min(1,4,6);
console.log(nummin);
//問14
for (let i = 0; i < 10; i++) {
  console.log("実行");
}
//問15
const fruits = ['apple', 'banana', 'cat'];
for (const fruit of fruits) {
  console.log(fruit);
}
//問16
const no123 = [1,2,3];
let sum = 0;
for (let t = 0; t < no123.length; t++) {
  sum += no123[t];
};
console.log(sum);
//問17
const A = [1, 'hoge', 2, 'huga', 3, 'piyo'];
const texta = [];
const numbera = [];
for (let b =  0; b < A.length; b++) {
  const item = A[b];
  if(typeof item === "string") {
    texta.push(item);
  } else if  (typeof item === "number") {
    numbera.push(item);
  }
}
console.log(texta);
console.log(numbera);
//問18
let sum2 = 0;
for (let k = 1; k <= 100; k++) {
  if (k % 2 !== 0) {
    sum2 += k;
  };
};
console.log(sum2);
//問19
fruits.forEach((fruits) => {
  console.log(fruits);
});
//問20
let r = 0;
while (r < 10) {
  console.log("実行");
  r++;
};
//問21
//for文　各教科の合計点数表示↓
const score = [90,65,45,70,100];
let total = 0;
for (let s = 0; s < score.length; s++) {
  total += score[s];
};
console.log("５教科の合計点数は" + total + "点です");
//foreach 特定の名前をコンソール上に表示↓
const member =["佐藤","田中","橋本","齊藤","田中"];
const target = "田中";
member.forEach((names) => {
  if (names === target) {
    console.log(names);
  }
});
//while カウントが１５になるまでループする
let count = 1;
while (count <= 15) {
  console.log(count);
  count++;
};
//問22
const mp = [2,4,6,8];
let total2 = mp.map((value) => {
  return value *2;
}) ;
console.log(total2);
//問23
const sm = [2,4,6,7];
const oddnumber = sm.some(Element => Element % 2 !== 0);
console.log(oddnumber);
//問23
const ev = [
    { id: 2, hasSubmitted: true },
    { id: 3, hasSubmitted: false },
    { id: 4, hasSubmitted: true },
  ];
const result5 = ev.every((value) => {
  return value = "hasSubmitted";
});
console.log(result5);
//問24
const fi = [
    { id: 2, hasSubmitted: true },
    { id: 3, hasSubmitted: false },
    { id: 4, hasSubmitted: true },
  ];
  const result6 = fi.filter(item => item.hasSubmitted);
  console.log(result6);
//問25
const st = [
  { id: 323, hasSubmitted: true },
  { id: 111, hasSubmitted: false },
  { id: 268, hasSubmitted: true },
];
st.sort((a,b) => a.id - b.id);
console.log(st);
