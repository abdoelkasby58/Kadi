const translationForget = {
  en: {
    en: "English",
    ar: "Arabic",
    h1forget: "Forgot password?",
    pforget: "Enter your email to reset password",
    btnforget: "Log In",
    emailforget: "Email",
    placeholder: {
      loginEmail: "Enter new email",
    },
    emailerrorfor: `Please enter a valid email`,
  },
  ar: {
    en: "الإنجليزي",
    ar: "العربية",
    h1forget: "هل نسيت كلمة المرور؟",
    pforget: "أدخل بريدك الإلكتروني لإعادة تعيين كلمة المرور",
    btnforget: "تسجيل الدخول",
    emailforget: "البريد الالكتروني",
    placeholder: {
      loginEmail: "أدخل البريد الإلكتروني الجديد",
    },
    emailerrorfor: `يرجى إدخال بريد إلكتروني صحيح`,
  },
};

let select = document.getElementById("language-selector");
select.addEventListener("change", updateLanguage);

document.addEventListener("DOMContentLoaded", () => {
  select.addEventListener("change", () => {
    localStorage.setItem("lang", select.value);
    updateLanguage();
  });
  const storedLang = localStorage.getItem("lang") || "en";
  select.value = storedLang;

  updateLanguage();
});

function updateLanguage() {
  let language = select.value;

  for (let key in translationForget[language]) {
    if (key === "placeholder") continue;

    let element = document.getElementById(key);
    if (element) {
      element.innerHTML = translationForget[language][key];
    }
  }

  for (let key in translationForget[language].placeholder) {
    let input = document.getElementById(key);
    if (input) {
      input.placeholder = translationForget[language].placeholder[key];
    }
  }

  document.documentElement.dir = language === "ar" ? "rtl" : "ltr";
  document.documentElement.lang = language === "ar" ? "ar" : "en";
}

updateLanguage();
let btnforget = document.getElementById(`btnforget`);
let Loginform = document.getElementById(`loginForm`);
let emailError = document.getElementById(`emailerrorfor`);
let EmailForget = document.getElementById(`loginEmail`);
window.onload = function () {
  EmailForget.focus();
};
const emailRegexFotget =
  /^(?!.*\.\.)(?!.*\.$)(?!^\.)[a-zA-Z0-9]+([._-]?[a-zA-Z0-9]+)*@[a-zA-Z0-9-]+(\.[a-zA-Z]{2,})+$/;
const allowedDomainsForgrt = [
  "gmail.com",
  "yahoo.com",
  "hotmail.com",
  "outlook.com",
];

let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

EmailForget.addEventListener(`input`, () => {
  emailError.style.display = `none`;
});
Loginform.addEventListener("submit", function (e) {
  e.preventDefault();

  let EmailForgetValue = EmailForget.value.trim();
  let emailForget = EmailForgetValue.toLowerCase();
  let domainForget = emailForget.split("@")[1];
  let Stop = false;
  if (EmailForgetValue === `` || !emailPattern.test(EmailForgetValue)) {
    emailError.style.display = `block`;
    Stop = true;
  }
  if (
    !emailRegexFotget.test(emailForget) ||
    !allowedDomainsForgrt.includes(domainForget)
  ) {
    emailError.style.display = "block";
    Stop = true;
  }
  if (Stop) return;

  let savedEmail = localStorage.getItem("userEmail");


if (!savedEmail || savedEmail !== EmailForgetValue) {
  emailError.style.display = "block";
  alert("هذا البريد غير مسجل. الرجاء إنشاء حساب أولاً.");
  return; 
}


localStorage.setItem("tempEmail", EmailForgetValue);
window.location.href = "confirmpassword.html";

});