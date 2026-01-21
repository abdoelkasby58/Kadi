(function resetAuth() {
  localStorage.removeItem("isLoggedIn");
})();

const content = {
  arb: {
    h1: ` مرحبًا بعودتك`,
    p: `أدخل بيانات اعتمادك للوصول إلى حسابك`,
    engindex: "En",
    arbindex: "AR",
    linkforget: `نسيت كلمة المرور؟`,
    logout: `تسجيل الدخول`,
    Emailindex: `البريد الالكتروني`,
    passwordindex: `كلمه المرور`,
    emailerror: `يرجى إدخال بريد إلكتروني صحيح`,
    passworderror: `تأكد من كلمة المرور وحاول مرة أخرى`,

    placeholder: {
      emailFiled: `أدخل البريد الإلكتروني الجديد`,
      password: `أدخل كلمة المرور الجديدة`,
    },
    createaccountp: `ليس لديك حساب؟`,
    createaccountlink: `إنشاء حساب`,
  },
  eng: {
    h1: `Welcome back`,
    p: `Enter your credentials to access your account`,
    engindex: "EN",
    arbindex: "AR",
    linkforget: `Forgot Password?`,
    logout: `Log In`,
    Emailindex: `Email`,
    passwordindex: `Password`,
    emailerror: `Please enter a valid email`,
    passworderror: `Double-check your password and try again`,
    passwordcharacters: `The password must be between 6 and 15 characters long`,
    placeholder: {
      emailFiled: `Enter new email`,
      password: `Enter new password`,
    },
    createaccountp: `Don't have an account?`,
    createaccountlink: `Create an account`,
  },
};

let langSelctor = document.getElementById(`selectindex`);
langSelctor.addEventListener("change", Updateindex, hideLang);

document.addEventListener("DOMContentLoaded", () => {
  langSelctor.addEventListener("change", () => {
    localStorage.setItem("lang", langSelctor.value);
    Updateindex();
    // hideLang();
  });
  let srtoredFor = localStorage.getItem("langg") || "eng";
  langSelctor.value = srtoredFor;
  Updateindex();
  // hideLang();
});
function Updateindex() {
  let Langindex = langSelctor.value;

  for (let key in content[Langindex]) {
    if (key === "placeholder") continue;
    let elementindex = document.getElementById(key);
    if (elementindex) {
      elementindex.innerHTML = content[Langindex][key];
    }
  }
  for (let key in content[Langindex].placeholder) {
    let inputindex = document.getElementById(key);
    if (inputindex) {
      inputindex.placeholder = content[Langindex].placeholder[key];
    }
  }

  document.documentElement.dir = Langindex === "arb" ? "rtl" : "ltr";
  document.documentElement.lang = Langindex === "arb" ? "ar" : "en";
}
Updateindex();

function hideLang() {
  if (langSelctor.value === "ar") {
    document.body.classList.add("rtl");
    document.documentElement.setAttribute("dir", "rtl");
  } else {
    document.body.classList.remove("rtl");
    document.documentElement.setAttribute("dir", "ltr");
  }
}
hideLang();

let textEmail = document.getElementById("emailFiled");
let textPass = document.getElementById("password");
let formEl = document.getElementById("form");

let emailerror = document.getElementById("emailerror");
let passerror = document.getElementById("passworderror");

let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const emailRegex =
  /^(?!.*\.\.)(?!.*\.$)(?!^\.)[a-zA-Z0-9]+([._-]?[a-zA-Z0-9]+)*@[a-zA-Z0-9-]+(\.[a-zA-Z]{2,})+$/;

const allowedDomains = ["gmail.com", "yahoo.com", "hotmail.com", "outlook.com"];
const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,15}$/;

let linkforgetlink = document.getElementById(`linkforget`);
linkforgetlink.addEventListener(`click`, () => {
  window.location.href = `forgetemail.html`;
});
window.onload = function () {
  textEmail.focus();
};
textEmail.addEventListener(`input`, () => {
  emailerror.style.display = `none`;
});
textPass.addEventListener(`input`, () => {
  passerror.style.display = `none`;
});

let visibiliTy = document.querySelector(".visibility");
let visibilityOff = document.getElementById("visibility-off");

function hideUdate() {
  visibilityOff.addEventListener("click", () => {
    textPass.type = "password";
    visibilityOff.style.display = "none";
    visibiliTy.style.display = "block";
  });

  visibiliTy.addEventListener("click", () => {
    textPass.type = "text";
    visibiliTy.style.display = "none";
    visibilityOff.style.display = "block";
  });
}
hideUdate();
formEl.addEventListener("submit", function (event) {
  event.preventDefault();

  let emailValue = textEmail.value.trim().toLowerCase();
  let passwordValue = textPass.value.trim();

  let email = emailValue.toLowerCase();
  let domain = email.split("@")[1];

  let loginkadi = false;

  if (
    emailValue === "" ||
    !emailRegex.test(emailValue) ||
    !allowedDomains.includes(domain)
  ) {
    emailerror.style.display = "block";
    loginkadi = true;
  } else {
    emailerror.style.display = "none";
    loginkadi = false;
  }
  if (passwordValue.length < 6 || passwordValue.length >= 15) {
    passerror.style.color = "red";
    passerror.style.display = "block";
    loginkadi = true;
  }
  if (!passwordRegex.test(passwordValue)) {
    passerror.style.display = "block";
    loginkadi = true;
  } else {
    passerror.style.display = "none";
  }

  let savedEmail = localStorage.getItem("userEmail");
  let savedPassword = localStorage.getItem("userpassword");

  if (emailValue === "") {
    emailerror.style.display = "block";

    loginkadi = true;
  } else {
    emailerror.style.display = "none";
    loginkadi = false;
  }

  if (emailValue === savedEmail && passwordValue === savedPassword) {
    passerror.style.display = "none";
    emailerror.style.display = "none";
    localStorage.setItem("isLoggedIn", "true");
    window.location.href = "loading.html";
    loginkadi = false;
  }
  //else {
  //   // passerror.style.color = "red";
  //   emailerror.style.display = "block";
  //   passerror.style.display = "block";
  //   loginkadi = false;
  // }

  if (loginkadi) return;
});
let logout;

let creatEaccountlink = document.getElementById("createaccountlink");
creatEaccountlink.addEventListener("click", () => {
  window.location.href = "createanaccount.html";
});
