const cratelan = {
  en: {
    h1create: `Create Your Account`,
    pcreate: `Just your email and password, and you’re ready to go`,
    Emailindexcreate: `Email`,
    emailerrorcreate: `Please enter a valid email`,
    labelpasscreate: `Password`,
    toopasscreate: `Password Confirm`,
    placeholder: {
      emailFiledcreate: `Enter new email`,
      passwordcreate: `Enter new password`,
      passwordConfirmtoocreate: "Enter confirm new password",
    },
    passworderrorcreate: `Double-check your password and try again`,
    passworderrortoocreate: `Double-check your password and try again`,
    btncreate: `Log in`,
  },
  ar: {
    h1create: `إنشاء حسابك`,
    pcreate: `فقط بريدك الإلكتروني وكلمة المرور، وستكون مستعدًا للبدء`,
    Emailindexcreate: `البريد الإلكتروني`,
    emailerrorcreate: `يرجى إدخال بريد إلكتروني صالح`,
    labelpasscreate: `كلمة المرور`,
    toopasscreate: `تأكيد كلمة المرور`,
    placeholder: {
      emailFiledcreate: `أدخل البريد الإلكتروني الجديد`,
      passwordcreate: `أدخل كلمة المرور الجديدة`,
      passwordConfirmtoocreate: "أدخل تأكيد كلمة المرور الجديدة",
    },
    passworderrorcreate: `تحقق مرة أخرى من كلمة المرور وحاول مرة أخرى`,
    passworderrortoocreate: `تحقق مرة أخرى من كلمة المرور وحاول مرة أخرى`,
    btncreate: `تسجيل الدخول`,
  },
};
let langselectorcreate = document.getElementById("language-selector-create");
langselectorcreate.addEventListener("change", Updatecreate);

document.addEventListener("DOMContentLoaded", () => {
  langselectorcreate.addEventListener("change", () => {
    localStorage.setItem("lang-create", langselectorcreate.value);
    Updatecreate();
    hideLangcreate();
  });
  let storedLangCreate = localStorage.getItem("lang-create") || "en";
  langselectorcreate.value = storedLangCreate;
  Updatecreate();
  hideLangcreate();
});
function Updatecreate() {
  let createLang = langselectorcreate.value;
  for (let key in cratelan[createLang]) {
    if (key === "placeholder") continue;
    let elementcreate = document.getElementById(key);
    if (elementcreate) {
      elementcreate.textContent = cratelan[createLang][key];
    }
  }
  for (let key in cratelan[createLang].placeholder) {
    let inputcreate = document.getElementById(key);
    if (inputcreate) {
      inputcreate.placeholder = cratelan[createLang].placeholder[key];
    }
  }
  document.documentElement.dir = createLang === "ar" ? "rtl" : "ltr";
  document.documentElement.lang = createLang === "ar" ? "ar" : "en";
}
Updatecreate();
function hideLangcreate() {
  if (langselectorcreate.value === "ar") {
    document.body.classList.add("rtl");
    document.documentElement.setAttribute("dir", "rtl");
  } else {
    document.body.classList.remove("rtl");
    document.documentElement.setAttribute("dir", "ltr");
  }
}
hideLangcreate();
// let Btncreate = document.getElementById("btncreate");
// Btncreate.addEventListener("click", () => {
//   window.location.href = `index.html`;
// });
let Formcreate = document.getElementById("formconfirm");
let EmailFiledcreate = document.getElementById("emailFiledcreate");
let Emailerorrcreate = document.getElementById("emailerrorcreate");
let PasswordCreate = document.getElementById("passwordcreate");
let PasswordErrorcreate = document.getElementById("passworderrorcreate");
let PasswordConfirmtoocreate = document.getElementById(
  "passwordConfirmtoocreate",
);
let PasswordErrortoocreate = document.getElementById("passworderrortoocreate");
let BtnCreate = document.getElementById("btncreate");

const emailRegexcreate = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
const passwordRegexcreate = /^[a-zA-Z0-9!@#$%^&*]{6,16}$/;
const allowedDomainscreate = [
  "email.com",
  "gmail.com",
  "yahoo.com",
  "hotmail.com",
  "outlook.com",
];

BtnCreate.addEventListener("click", (e) => {
  e.preventDefault();
    let emailValuecreate = EmailFiledcreate.value.trim();
    let passwordValuecreate = PasswordCreate.value.trim();
    let passwordConfirmValuecreate = PasswordConfirmtoocreate.value.trim();
    let domaincreate = emailValuecreate.split("@")[1];
    let stopcreate = false;
    if (emailValuecreate === "" || !emailRegexcreate.test(emailValuecreate)) {
      Emailerorrcreate.style.display = "block";
      stopcreate = true;
    }
    if (
      !emailRegexcreate.test(emailValuecreate) ||
      !allowedDomainscreate.includes(domaincreate)
    ) {
      Emailerorrcreate.style.display = "block";
      stopcreate = true;
    }
    if (!passwordRegexcreate.test(passwordValuecreate)) {
      PasswordErrorcreate.style.display = "block";
      stopcreate = true;
    }
    if (passwordValuecreate !== passwordConfirmValuecreate) {
      PasswordErrortoocreate.style.display = "block";
      stopcreate = true;
    }
    if (passwordConfirmValuecreate === "") {
      PasswordErrortoocreate.style.display = "block";
      stopcreate = true;
    }
    if(passwordValuecreate !== passwordConfirmValuecreate){
      PasswordErrortoocreate.style.display = "block";
      stopcreate = true;
    }
    if (stopcreate) return; 
    localStorage.setItem("userEmail", emailValuecreate); 
    localStorage.setItem("userpassword", passwordValuecreate);
    localStorage.setItem("isLoggedIn", "false");
    alert("تم إنشاء الحساب بنجاح");
    window.location.href = `index.html`;
});




//  End of Create an account page code
let visibilityCreateOff = document.getElementById("visibility-create-off");
let visibilityCreate = document.getElementById("visibility-create");

visibilityCreateOff.addEventListener("click", () => {
  PasswordCreate.type = "password";
  visibilityCreateOff.style.display = "none";
  visibilityCreate.style.display = "block";
});
visibilityCreate.addEventListener("click", () => {
  PasswordCreate.type = "text";
  visibilityCreateOff.style.display = "block";
  visibilityCreate.style.display = "none";
});
let visibilityConfirmCreateOff = document.getElementById(
  "visibility-confirm-create-off",
);
let visibilityConfirmCreate = document.getElementById(
  "visibilityconfirmcreate",
);

visibilityConfirmCreateOff.addEventListener("click", () => {
  PasswordConfirmtoocreate.type = "password";
  visibilityConfirmCreateOff.style.display = "none";
  visibilityConfirmCreate.style.display = "block";
});
visibilityConfirmCreate.addEventListener("click", () => {
  PasswordConfirmtoocreate.type = "text";
  visibilityConfirmCreate.style.display = "none";
  visibilityConfirmCreateOff.style.display = "block";
});
window.onload = function () {
  EmailFiledcreate.focus();
};
EmailFiledcreate.addEventListener("input", () => {
  Emailerorrcreate.style.display = "none";
});
PasswordCreate.addEventListener("input", () => {
  PasswordErrorcreate.style.display = "none";
});
PasswordConfirmtoocreate.addEventListener("input", () => {
  PasswordErrortoocreate.style.display = "none";
});
