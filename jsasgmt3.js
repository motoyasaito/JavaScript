//問1
const json1 = '{"name":"Taro", "age":42, "gender": "male"}';
const jsonobject1 = JSON.parse(json1);
console.log(jsonobject1.name);
console .log(jsonobject1.age);
console.log(jsonobject1.gender);
//問2
const json2 = { name: "Taro", Age: 13, gender: "male" };
const jsonstringfly1 = JSON.stringify(json2);
console.log(jsonstringfly1);
//フォームバリデーション課題
const form = document.getElementById("myForm");
const submitBtn = document.getElementById("submitbtn");
form.addEventListener("submit",(Event) => {
  Event.prevenrDefault();
});

const nameRegex = /^[^ -~｡-ﾟ]+$/;
const numberRegex = /^[0-9]+$/;
const emailRegex = /^[\w.\-]+@[\w\-]+\.[\w.\-]+$/;
const phoneRegex = /^\d{11}$/;

const validiconCheck = (inputID,errorID,regex,errorMessage) => {
  const getInputID = document.getElementById(inputID);
  const getErrorID = document.getElementById(errorID);
  getErrorID.textContent = "";
  const getValue = getInputID.value.trim();
  if (getValue === "") {
    getErrorID.textContent = errorMessage;
    } else if (!regex.test(getValue)) {
    getErrorID.textContent = errorMessage;
  }
};
const errorContent = (Content1) => {
  return `正しい${Content1}を入力してください`;
};


submitBtn.addEventListener("click", () => {
  validiconCheck("nameInput","nameError",nameRegex,errorContent("名前"));
  validiconCheck("ageInput","ageError",numberRegex,errorContent("年齢"));
  validiconCheck("emailInput","emailError",emailRegex,errorContent("メールアドレス"));
  validiconCheck("phoneInput","phoneError",phoneRegex,errorContent("電話番号"));
});

