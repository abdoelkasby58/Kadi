const translationkasby = {
  ENG: {
    engconfirm: "EN",
    arbconfirm: "AR",
    h1confirm: "Welcome Back",
    pconfirm:
      "Set the new password for your account so you can login and access all features.",
    btnconfirm: "Log in",
    labelconfirmm: "Enter new password",
    labelconfirmmm: "Confirm password",
    placeholder: {
      passwordconfirm: "Enter new password",
      passwordConfirmtoo: "Enter confirm new password",
    },
    passworderrorconfirm: `Incorrect password`,
    passworderrorconfirmtoo: `Incorrect new password`,
  },
  ARB: {
    engconfirm: "EN",
    arbconfirm: "AR",
    h1confirm: "مرحبا بعودتك",
    pconfirm:
      "قم بتعيين كلمة المرور الجديدة لحسابك حتى تتمكن من تسجيل الدخول والوصول إلى جميع الميزات.",
    btnconfirm: "تسجيل الدخول",
    labelconfirmm: "أدخل كلمة المرور الجديدة",
    labelconfirmmm: "تأكيد كلمة المرور",
    placeholder: {
      passwordconfirm: "أدخل كلمة المرور الجديدة",
      passwordConfirmtoo: "أدخل تأكيد كلمة المرور الجديدة",
    },
    passworderrorconfirm: `خطا ف كلمه المرور`,
    passworderrorconfirmtoo: `حطأ في كلمه المرور الجديده`,
  },
};
window.onload = function () {
  PasswordConfirm.focus();
};
let selector = document.getElementById("language-confirm");
selector.addEventListener("change", Uppdate);

document.addEventListener("DOMContentLoaded", () => {
  selector.addEventListener("change", () => {
    localStorage.setItem("langg", selector.value);
    Uppdate();
  });
  let srtoredCon = localStorage.getItem("langg") || "ENG";
  selector.value = srtoredCon;

  Uppdate();
});
function Uppdate() {
  let langaugeee = selector.value;
  console.log(langaugeee);
  for (let key in translationkasby[langaugeee]) {
    if (key === "placeholder") continue;
    let elementt = document.getElementById(key);
    if (elementt) {
      elementt.innerHTML = translationkasby[langaugeee][key];
    }
  }
  for (let key in translationkasby[langaugeee].placeholder) {
    let inputCon = document.getElementById(key);
    if (inputCon) {
      inputCon.placeholder = translationkasby[langaugeee].placeholder[key];
    }
  }
  document.documentElement.dir = langaugeee === "ARB" ? "rtl" : "ltr";
  document.documentElement.lang = langaugeee === "ARB" ? "ar" : "en";
}
Uppdate();
function hideconfirm() {}
let FormConfirm = document.getElementById(`formconfirm`);
let PasswordConfirm = document.getElementById(`passwordconfirm`);
let PasswordConfirmtoo = document.getElementById(`passwordConfirmtoo`);
let ErrorPass = document.getElementById(`passworderrorconfirm`);
let ErrorPasstoo = document.getElementById(`passworderrorconfirmtoo`);
const passwordRegexcon = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,15}$/;
window.onload = function () {
  PasswordConfirm.focus();
};
PasswordConfirm.addEventListener(`input`, () => {
  ErrorPass.style.display = `none`;
});
PasswordConfirmtoo.addEventListener(`input`, () => {
  ErrorPasstoo.style.display = `none`;
});

let visibilityoffnewconfirm = document.getElementById(
  "visibility-offnewconfirm"
);
let visibilitynewconfirm = document.getElementById("visibilitynewconfirm");

visibilityoffnewconfirm.addEventListener("click", () => {
  PasswordConfirm.type = "password";
  visibilityoffnewconfirm.style.display = "none";
  visibilitynewconfirm.style.display = "block";
});

visibilitynewconfirm.addEventListener("click", () => {
  PasswordConfirm.type = "text";
  visibilityoffnewconfirm.style.display = "block";
  visibilitynewconfirm.style.display = "none";
});
let visibilityoffconfirm = document.getElementById("visibility-offconfirm");
let visibilityconfirm = document.getElementById("visibilityconfirm");

visibilityoffconfirm.addEventListener("click", () => {
  PasswordConfirmtoo.type = "password";
  visibilityoffconfirm.style.display = "none";
  visibilityconfirm.style.display = "block";
});
visibilityconfirm.addEventListener("click", () => {
  PasswordConfirmtoo.type = "text";
  visibilityconfirm.style.display = "none";
  visibilityoffconfirm.style.display = "block";
});

FormConfirm.addEventListener(`submit`, function (event) {
  event.preventDefault();
  let Valuepass = PasswordConfirm.value.trim();
  let Valuepasstoo = PasswordConfirmtoo.value.trim();
  let errorConfirm = false;

  if (Valuepass.length > 15 || Valuepass.length < 6) {
    ErrorPass.style.display = `block`;
    errorConfirm = true;
  }
  if (Valuepasstoo.length > 15 || Valuepasstoo.length < 6) {
    ErrorPasstoo.style.display = `block`;
    errorConfirm = true;
  }
  if (Valuepass !== Valuepasstoo) {
    ErrorPasstoo.style.display = `block`;
    return;
  }
  Passregex = false;
  if (
    !passwordRegexcon.test(Valuepasstoo) &&
    !passwordRegexcon.test(Valuepass)
  ) {
    ErrorPass.style.display = `block`;
    ErrorPasstoo.style.display = `display`;
    Passregex = true;
  }
  if (errorConfirm) return;
  localStorage.setItem("passwordnew", Valuepass);
  localStorage.setItem("passwordconfirm", Valuepasstoo);
  if (Passregex) return;
  window.location.href = `index.html`;

  let email = localStorage.getItem("tempEmail");

  if (!email) {
    emailError.style.display = "block";
    window.location.href = "forgetemail.html";
    return;
  }

  localStorage.setItem("Email", email);
  localStorage.setItem("Password", Valuepasstoo);

  localStorage.removeItem("tempEmail");

  alert("تم إنشاء الحساب بنجاح");
  window.location.href = "index.html";
});
