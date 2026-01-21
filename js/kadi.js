const headerNav = document.querySelectorAll(".header");
const Honetext = document.querySelectorAll("h1");
const pragraph = document.querySelectorAll("p");
const kadiboxesall = document.querySelectorAll("div");
const btnanimation = document.querySelectorAll("button");
const spanel = document.querySelectorAll("span");
const Htwo = document.querySelectorAll("h2");
const Hfour = document.querySelectorAll("h4");
const Hfive = document.querySelectorAll("h5");
const imgel = document.querySelectorAll("img");
const options = {
  root: null,
  // threshold: 0.3,
  rootMargin: `50px`,
};
const observer = new IntersectionObserver((entries) => {
  entries.forEach((el) => {
    if (el.isIntersecting) {
      el.target.classList.add("animate");
    } else {
      el.target.classList.remove("animate");
    }
  });
}, options);
headerNav.forEach((header) => {
  observer.observe(header);
});
Honetext.forEach((h1) => {
  observer.observe(h1);
});
pragraph.forEach((p) => {
  observer.observe(p);
});
kadiboxesall.forEach((div) => {
  observer.observe(div);
});
btnanimation.forEach((button) => {
  observer.observe(button);
});
spanel.forEach((span) => {
  observer.observe(span);
});
Htwo.forEach((h2) => {
  observer.observe(h2);
});
Hfour.forEach((h4) => {
  observer.observe(h4);
});
Hfive.forEach((h5) => {
  observer.observe(h5);
});
imgel.forEach((img) => {
  observer.observe(img);
});
const langKadi = {
  en: {
    linkAbout: "About",
    linkFeatures: "Features",
    linkProviders: "Service Providers",
    linkFAQ: "FAQ",
    responsiveSocialText: "Follow us on social media",
    btntextdownload: "Download App",

    menutext: "Menu",
    linkabout: "About",
    linkfeatures: "Features",
    linkservices: "Service Providers",
    linkfaq: "FAQ",
    labellanguage: "Language",
    optionen: "EN",
    optionar: "AR",
    hometitle: "Choose, Book, and Renew Your Look with Kadi Beauty",
    homeparagraph:
      "Browse Kadi Beauty services to find the best salons and beauty experts. Book easily and get ready for a new look combining elegance and luxury.",
    btntextinstall: "Install App",
    heroTitle: "Why wait in line Book your appointment now",
    heroDescription:
      "Kadi Beauty app is your first guide that brings together the best salons and spas along with a wide range of home services delivered right to your door Browse and book your appointment easily in just three steps",
    serviceHair: "Hair",
    serviceMakeup: "Makeup",
    serviceMassage: "Massage",
    serviceHandCare: "Hand Care",
    serviceSpa: "Spa",
    serviceMore: "And More",
    homeTwoTitle: "How to enjoy your first experience the best way",
    homeTwoDesc:
      "It is easy to enjoy your first experience the best way Here are simple tips to ensure a great experience from start to finish",
    stepOneTitle: "Choose",
    stepOneDesc:
      "Choose your first suitable service from salons and service providers.",
    stepTwoTitle: "Schedule",
    stepTwoDesc:
      "Choose the time date location and payment method that suits you and your friends.",
    stepThreeTitle: "Get Ready",
    stepThreeDesc:
      "Get ready for your booked service and enjoy the best moments at your favorite salon.",
    adminTitle:
      "Managing your salon is now easier with one complete system for service providers",
    adminDesc:
      "At Kadi, we focus on developing beauty centers by offering innovative solutions and competitive services that ensure growth and higher quality in your business Discover system features",

    tabBookingText: "Appointment Scheduling",
    tabBookingText_short: "A.s",
    tabReportsText: "Reports & Analytics",
    tabReportsText_short: "R.a",
    tabInvoicesText: "Electronic Invoices",
    tabInvoicesText_short: "E.i",

    bookingTitle: "Appointment Scheduling",
    bookingSubTitle:
      "Use an integrated calendar to manage bookings with full control",
    bookingDesc:
      "A flexible and easy to use calendar tool that allows you to connect incoming bookings control your profile and create special offers easily.",
    bookingBtn: "Download App",

    invoiceTitle: "Electronic Invoices",
    invoiceSubTitle: "Manage customer orders and issue invoices",
    invoiceDesc:
      "Kadi system for managing customer orders allows you to view all order details and electronic invoices and download them with one tap.",
    invoiceBtn: "Download App",

    invoiceCardTitle: "Kadi Salon",
    invoiceStatus: "Paid",
    invoiceService: "Hair Color",
    invoiceServicePrice: "750 SAR",
    invoiceCoupon: "Coupon",
    invoiceCouponPrice: "-100 SAR",
    invoiceTotal: "Total",
    invoiceTotalPrice: "1400 SAR",

    reportsTitle: "Reports and Analytics",
    reportsSubTitle: "Make data driven decisions with reports and insights",
    reportsDesc:
      "Use your statistics to make better business decisions and expand your reach through dashboards and financial reports.",
    reportsBtn: "Download App",

    revenueLabel: "Total Revenue",
    revenueStatus: "Increase",
    revenuePercent: "14%",
    accordionTitle: "Frequently Asked Questions",
    accordionDesc:
      "Quick answers to the most common questions about using the app.",

    q1Title: "How can I book a service?",
    q1Content:
      "You can book a service by selecting the appropriate service provider, then choosing the required service, date, and time, and finally confirming the booking.",

    q2Title: "Can I modify or cancel my booking?",
    q2Content:
      "Yes, you can modify or cancel your booking from the 'My Bookings' page before the service time according to the cancellation policy.",

    q3Title: "How do I know if my booking is confirmed?",
    q3Content:
      "Once the booking is completed, you will receive a confirmation message via the app, and you can also track your booking status from 'My Bookings'.",

    q4Title: "What happens if the provider cancels my appointment?",
    q4Content:
      "If the provider cancels the appointment, you will be notified immediately, and you can rebook with the same provider or choose another provider at a suitable time.",

    q5Title: "Can I book an appointment for someone else?",
    q5Content:
      "Yes, you can book an appointment for another person easily. During the booking process, you can enter the beneficiary's details instead of your own.",

    q6Title: "How can I view upcoming appointments?",
    q6Content:
      "You can view all your upcoming appointments in the 'My Bookings' section within the app, where full details for each appointment are displayed.",
    footerContactTitle: "Contact Us",
    footerPhone: "16781",
    footerEmail: "contact_us@valu.com.eg",
    footerAddress: "Arkan Square, Sheikh Zayed City, 1st Floor, Unit AW-0154",
    footerCopy: "©  Copyright 2020-2024. All rights reserved. Kadi Beauty App.",
    footerSocialTitle: "Follow us on social media",
    footerPrivacy: "Privacy",
    footerTerms: "Terms",

    bokingtitle: "Your Upcoming Bookings",
    time1: "28 Dec. 4:30 PM",
    time2: "28 Dec. 5:30 PM",
    time3: "28 Dec. 6:00 PM",
    time4: "28 Dec. 8:30 PM",
    name1: "Aya Ali",
    name2: "Mahmoud",
    name3: "Asmaa",
    name4: "Hashim",
  },
  ar: {
    linkAbout: "حول",
    linkFeatures: "الميزات",
    linkProviders: "مزودي الخدمات",
    linkFAQ: "الأسئلة الشائعة",
    responsiveSocialText: "تابعونا علي وسائل التواصل الأجتماعي",
    btntextdownload: "تحميل التطبيق",
    menutext: "القائمة",
    
    linkabout: "حول",
    linkfeatures: "الميزات",
    linkservices: "مزودي الخدمات",
    linkfaq: "الأسئلة الشائعة",
    labellanguage: "اللغة",
    optionen: "EN",
    optionar: "AR",
    hometitle: "اختر، احجز، وجدد إطلالتك مع كادي بيوتي",
    homeparagraph:
      "تصفح خدمات كادي بيوتي للوصول إلى أفضل صالونات وخبراء التجميل. احجز بكل سهولة واستعد لإطلالة جديدة تجمع بين الأناقة والفخامة.",
    btntextinstall: `تثبيت التطبيق`,
    heroTitle: "ليش تنتظر بالدور، احجز موعدك الآن!",
    heroDescription:
      "تطبيق كادي بيوتي هو دليلك الأول الذي يجمع أفضل الصالونات ومراكز السبا، بالإضافة إلى مجموعة واسعة من الخدمات المنزلية التي تأتيكِ حتى باب بيتك! الآن، تصفح واحجز موعدكِ بسهولة في ثلاث خطوات فقط!",
    serviceHair: "شعر",
    serviceMakeup: "مكياج",
    serviceMassage: "مساج",
    serviceHandCare: "عناية باليدين",
    serviceSpa: "سبا",
    serviceMore: "وأكثر",
    homeTwoTitle: "كيف تستمتع بتجربتك الأولى بأفضل شكل",
    homeTwoDesc:
      "ما أسهل إنك تستمتع بتجربتك الأولى بأفضل شكل! هنا نصايح بسيطة عشان تضمن تجربة مميزة من البداية للنهاية.",
    stepOneTitle: "أختار",
    stepOneDesc: "اختار خدمتك الأولى المناسبة لك من الصالونات ومزودي الخدمات.",
    stepTwoTitle: "حدد",
    stepTwoDesc:
      "حدد الوقت والتاريخ و المكان و طريقة الدفع اللي تناسبك وتناسب أصحابك.",
    stepThreeTitle: "اجهز",
    stepThreeDesc:
      "اجهز لموعد خدمتك المحجوز واستمتع بأجمل اللحظات في صالونك المفضل.",
    adminTitle:
      "إدارة صالونك أصبحت أسهل مع نظام شامل منزودي الخدمات مكان واحد!",
    adminDesc:
      "في كادي، نحرص على تطوير مراكز التجميل من خلال تقديم حلول مبتكرة وخدمات تنافسية تضمن لك نموًا وجودة أعلى في عملك. اكتشف مميزات النظام",

    tabBookingText: "جدولة المواعيد",
    tabBookingText_short: "ج.م",
    tabReportsText: "إعداد التقارير والتحليلات",
    tabReportsText_short: "ت.ق",
    tabInvoicesText: "الفواتير الإلكترونية",
    tabInvoicesText_short: "ف.و",
    bookingTitle: "جدولة المواعيد",
    bookingSubTitle: "استخدم تقويمًا متكاملاً لإدارة الحجوزات والتحكم الكامل",
    bookingDesc:
      "أداة تقويم مرنة وسهلة الاستخدام تيح لك ربط الحجوزات الواردة، والتحكم الكامل في ملفك الشخصي، وإنشاء العروض الخاصة بمرونة.",
    bookingBtn: "تحميل التطبيق",

    invoiceTitle: "الفواتير الإلكترونية",
    invoiceSubTitle: "أدر طلبات العملاء وأصدر الفواتير",
    invoiceDesc:
      "نظام كادي لإدارة طلبات العملاء يمنحك ميزة الاطلاع على جميع تفاصيل الطلبات والفواتير الإلكترونية و تحميلها بلمسة واحدة..",
    invoiceBtn: "تحميل التطبيق",

    invoiceCardTitle: "Kadi Salon",
    invoiceStatus: "مدفوع",
    invoiceService: "تلوين الشعر",
    invoiceServicePrice: "750 ر.س",
    invoiceCoupon: "كوبون",
    invoiceCouponPrice: "-100 ر.س",
    invoiceTotal: "الإجمالي",
    invoiceTotalPrice: "1400 ر.س",

    reportsTitle: "إعداد التقارير والتحليلات",
    reportsSubTitle: "اتخذ قرارات مدعومة بالإحصائيات والتقارير",
    reportsDesc:
      "استخدام إحصائياتك لاتخاذ قرارات عمل أفضل و المساعدة في انتشارية أكبر من خلال لوحة المعلومات والتقارير المالية.",
    reportsBtn: "تحميل التطبيق",

    revenueLabel: "إجمالي الايرادات",
    revenueStatus: "إرتفاع",
    revenuePercent: "14%",
    accordionTitle: "الأسئلة الشائعة",
    accordionDesc: "أجوبة سريعة لأكثر الأسئلة شيوعاً حول استخدام التطبيق.",

    q1Title: "كيف أقدر أحجز خدمة؟",
    q1Content:
      "تقدر تحجز الخدمة عن طريق اختيار مقدم الخدمة المناسب، ثم تحديد الخدمة المطلوبة واختيار التاريخ والوقت المناسبين، وبعدها تأكيد الحجز.",

    q2Title: "هل أقدر أعدل أو ألغي الحجز؟",
    q2Content:
      "نعم، يمكنك تعديل أو إلغاء الحجز من صفحة حجوزاتي قبل موعد الخدمة بوقت كافٍ، وفق سياسة الإلغاء المعتمدة.",

    q3Title: "كيف أعرف إذا تم تأكيد الحجز؟",
    q3Content:
      "بعد إتمام الحجز، ستصلك رسالة تأكيد عبر التطبيق، كما يمكنك متابعة حالة الحجز من خلال صفحة حجوزاتي.",

    q4Title: "وش يصير إذا ألغى مقدم الخدمة موعدي؟",
    q4Content:
      "في حال قام مقدم الخدمة بإلغاء الموعد، سيتم إشعارك فورًا، ويمكنك إعادة الحجز مع نفس المقدم أو اختيار مقدم خدمة آخر في الوقت المناسب لك.",

    q5Title: "هل أقدر أحجز موعد لشخص ثاني؟",
    q5Content:
      "نعم، تقدر تحجز موعد لشخص آخر بكل سهولة. أثناء عملية الحجز يمكنك إدخال بيانات الشخص المستفيد من الخدمة بدلًا من بياناتك.",

    q6Title: "كيف أشوف المواعيد القادمة؟",
    q6Content:
      "تقدر تشوف جميع مواعيدك القادمة من خلال قسم حجوزاتي داخل التطبيق، حيث يتم عرض التفاصيل الكاملة لكل موعد.",
    footerContactTitle: "اتصل بنا",
    footerPhone: "16781",
    footerEmail: "contact_us@valu.com.eg",
    footerAddress: "ميدان أركان، مدينة الشيخ زايد، الطابق الأول وحدة AW-0154",
    footerCopy:
      "©  حقوق النشر 2020-2024. جميع الحقوق محفوظة. Kadi Beauty, تطبيق كادي بيوتي.",
    footerSocialTitle: "تابعونا علي وسائل التواصل الأجتماعي",
    footerPrivacy: "الخصوصية",
    footerTerms: "البنود",
    bookingtitle: "حجوزاتك القادمة",
    title: "حجوزاتك القادمة",
    time1: "28 ديسمبر، 4:30 م",
    time2: "28 ديسمبر، 5:30 م",
    time3: "28 ديسمبر، 6:00 م",
    time4: "28 ديسمبر، 8:30 م",
    name1: "Aya Ali",
    name2: "Mahmoud",
    name3: "Asmaa",
    name4: "Hashim",
  },
};
function updateLanguage(lang) {
    document.getElementById('tabBookingText').textContent = translations[lang].tabBookingText;
    document.getElementById('tabBookingText_short').textContent = translations[lang].tabBookingText_short;
    // ... كرر لبقية العناصر
}
let selectLangKadi = document.getElementById("selectkadilang");
selectLangKadi.addEventListener("change", updateKadiLang);

document.addEventListener("DOMContentLoaded", () => {
  selectLangKadi.addEventListener("change", () => {
    localStorage.setItem("lang", selectLangKadi.value);
    updateKadiLang();
  });
  let storedLangKadi = localStorage.getItem("lang") || "en";
  selectLangKadi.value = storedLangKadi;
  updateKadiLang();
});
function updateKadiLang() {
  let langKadiValue = selectLangKadi.value;

  for (let key in langKadi[langKadiValue]) {
    let elementKadi = document.getElementById(key);
    if (elementKadi) {
      elementKadi.innerHTML = langKadi[langKadiValue][key];
    }
  }
  document.documentElement.dir = langKadiValue === "ar" ? "rtl" : "ltr";
  document.documentElement.lang = langKadiValue === "ar" ? "ar" : "en";
}
updateKadiLang();

// scroll up
let up = document.getElementById(`up`);

window.onscroll = function () {
  if (scrollY >= 400) {
    up.style.display = `block`;
  } else {
    up.style.display = `none`;
  }
};
up.onclick = function () {
  scroll({
    left: 0,
    top: 0,
    behavior: "smooth",
  });
};

let tabs = document.querySelector(".tabs");
let tabButtons = tabs.querySelectorAll(".tab");

let boxSocial = document.getElementById("box-social");

let pages = {
  one: document.getElementById("page-one"),
  two: document.getElementById("page-two"),
  three: document.getElementById("page-three"),
};

tabButtons.forEach((button) => {
  button.addEventListener("click", () => {
    tabButtons.forEach((btn) => btn.classList.remove("active"));

    Object.values(pages).forEach((page) => {
      if (page) page.style.display = "none";
    });
    let addActive = button.classList.add("active");
    if (addActive) {
    }
    let targetPage = pages[button.id];
    if (targetPage) {
      targetPage.style.display = "flex";
    }
  });
});

function iconsupdate() {
  if (addActive == "active") {
    iContab.style.display = "flex";
  } else {
    iContab.style.display = "none";
  }
}

pages.one.style.display = "none";
pages.two.style.display = "none";
pages.three.style.display = "flex";

// navRESPONSIVe

let opeen = document.getElementById("open");
let closee = document.getElementById("close");
let containerMenu = document.getElementById("responsive-nav-bar-page");
let navbarRes = document.querySelector(".nav-bar-kadi");
let linkNavv = document.querySelectorAll(".linknavbaerresponsive");

const body = document.body;
containerMenu.style.maxHeight = "0px";

closee.addEventListener("click", () => {
  containerMenu.classList.remove("active");
  containerMenu.style.maxHeight = "0px";
  navbarRes.style.display = "block";
  body.classList.remove("noscroll");
  themeSwitch.style.display = "flex";
});
linkNavv.forEach((link) => {
  link.addEventListener("click", () => {
    body.classList.remove("noscroll");
    containerMenu.style.maxHeight = "0px";
    navbarRes.style.display = "block";
    containerMenu.classList.add("active");
    themeSwitch.style.display = "flex";
  });
});
function toggleMenu() {
  if (containerMenu.style.maxHeight == "0px") {
    containerMenu.classList.add("active");
    containerMenu.style.maxHeight = "100vh";
    navbarRes.style.display = "none";
    themeSwitch.style.display = "none";
    body.classList.add("noscroll");
  } else {
    containerMenu.style.maxHeight = "0px";
    navbarRes.style.display = "block";
    themeSwitch.style.display = "flex";
    body.classList.remove("noscroll");
  }
}

let panel = document.getElementsByClassName(`panel`);

function Updateaccor() {
  for (let i = 0; i < panel.length; i++) {
    panel[i].addEventListener(`click`, function () {
      for (let i = 0; i < panel.length; i++) {
        if (panel[i] != this) {
          panel[i].classList.remove(`active`);
        } else {
          this.classList.toggle(`active`);
        }
      }
    });
  }
}
Updateaccor();
(function checkAuth() {
  let isLoggedIn = localStorage.getItem("isLoggedIn");

  if (isLoggedIn !== "true") {
    window.location.href = "index.html";
  }
})();
// // let DarkMode = document.getElementById(`darkmode`);
let KadiHome = document.querySelector(".kadi-home");
// let ligHt = document.querySelectorAll(".light-mode-icon");
// let Dark = document.querySelectorAll(".dark-mode-icon");
// let btnmode = document.querySelector(".dark-toggle");
// // document.querySelector(".accordion-boxes").style.transition = "all 0,2s";

// body.classList.remove("dark");
// KadiHome.classList.add("kadi-home");
// function modeUpdate() {
//   if ((ligHt.style.display = "block")) {
//     Dark.style.display = "none";
//   } else {
//     ligHt.style.display = "none";
//     Dark.style.display = "flex";
//   }
// }
// modeUpdate();
let darkmode = localStorage.getItem(`darkmode`);
let themeSwitch = document.getElementById(`theme-switch`);

const enableDarkmode = () => {
  document.body.classList.add(`darkmode`);
  KadiHome.classList.remove("kadi-home");
  KadiHome.classList.add("kadi-home-dark-mode");
  localStorage.setItem(`darkmode`, `active`);
};
const disableDarkmode = () => {
  document.body.classList.remove(`darkmode`);
  KadiHome.classList.add("kadi-home");
  KadiHome.classList.remove("kadi-home-dark-mode");
  localStorage.setItem(`darkmode`, null);
};
if (darkmode === "active") enableDarkmode();

themeSwitch.addEventListener("click", () => {
  darkmode = localStorage.getItem(`darkmode`);
  darkmode !== "active" ? enableDarkmode() : disableDarkmode();
});
document
  .getElementById("btndownloadapp")
  .addEventListener("click", function () {
    document.getElementById("appkadi").scrollIntoView({ behavior: "smooth" });
  });
document.getElementById("bookingBtn").addEventListener("click", function () {
  document
    .getElementById("container-kadi")
    .scrollIntoView({ behavior: "smooth" });
});

document.getElementById("invoiceBtn").addEventListener("click", function () {
  document
    .getElementById("container-kadi")
    .scrollIntoView({ behavior: "smooth" });
});
document.getElementById("reportsBtn").addEventListener("click", function () {
  document
    .getElementById("container-kadi")
    .scrollIntoView({ behavior: "smooth" });
});
document.getElementById("btn-install-app").addEventListener("click", function () {
  document
    .getElementById("tabReportsText")
    .scrollIntoView({ behavior: "smooth" });
});
// // اللغة الحالية (تقدر تغيّرها ديناميكي حسب موقعك)
// let currentLang = 'ar';

// function updateTabText() {
//   const screenWidth = window.innerWidth;

//   // نجيب العناصر عن طريق id
//   const tabBooking = document.getElementById("tabBookingText");
//   const tabReports = document.getElementById("tabReportsText");
//   const tabInvoices = document.getElementById("tabInvoicesText");

//   if (screenWidth < 600) {
//     tabBooking.textContent = tabTexts[currentLang].tabBookingText_short;
//     tabReports.textContent = tabTexts[currentLang].tabReportsText_short;
//     tabInvoices.textContent = tabTexts[currentLang].tabInvoicesText_short;
//   } else {
//     tabBooking.textContent = tabTexts[currentLang].tabBookingText;
//     tabReports.textContent = tabTexts[currentLang].tabReportsText;
//     tabInvoices.textContent = tabTexts[currentLang].tabInvoicesText;
//   }
// }

// // ننفذ عند تحميل الصفحة
// updateTabText();

// // نحدث النصوص عند تغيير حجم الشاشة
// window.addEventListener("resize", updateTabText);
