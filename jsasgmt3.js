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
const submitbtn = document.getElementById("submitbtn");
form.addEventListener("submit",(Event) => {
  Event.prevenrDefault();
});
//名前
const nameinput = document.getElementById("nameInput");
const nameerror = document.getElementById("nameError");
const fullwidth = /^[^ -~｡-ﾟ]+$/;
submitbtn.addEventListener("click", () => {
  nameerror.textContent="";
  const namevalue = nameinput.value.trim();
  if (namevalue === "" ) {
    nameerror.textContent = "正しい名前を入力してください";
  } else if (!fullwidth.test(namevalue)) {
    nameerror.textContent = "正しい名前を入力してください";
  }
});
//年齢
const ageInput = document.getElementById("ageInput");
const ageError = document.getElementById("ageError");
const number = /^[0-9]+$/;
submitbtn.addEventListener("click", () => {
  ageError.textContent = "";
  const agevalue = ageInput.value.trim();
  if (agevalue === "") {
    ageError.textContent = "正しい年齢を入力してください";
  } else if (!number.test(agevalue)) {
    ageError.textContent = "正しい年齢を入力してください";
  }
});
//e-mail
const emailInput = document.getElementById("emailInput");
const emailError = document.getElementById("emailError");
const email = /^[\w.\-]+@[\w\-]+\.[\w.\-]+$/;
submitbtn.addEventListener("click", () => {
  emailError.textContent = "";
  const emailvalue = emailInput.value.trim();
  if (emailvalue === "") {
    emailError.textContent = "正しいメールアドレスを入力してください";
  } else if (!email.test(emailvalue)) {
    emailError.textContent = "正しいメールアドレスを入力してください";
  }
});
//電話番号
const phoneInput = document.getElementById("phoneInput");
const phoneError = document.getElementById("phoneError");
const phone = /^\d{11}$/;
submitbtn.addEventListener("click", () => {
  phoneError.textContent = ""
  const phonevalue = phoneInput.value.trim();
  if (phonevalue === "") {
    phoneError.textContent = "正しい電話番号を入力してください";
  } else if (!phone.test(phonevalue)) {
    phoneError.textContent = "正しい電話番号を入力してください"
  }
});


