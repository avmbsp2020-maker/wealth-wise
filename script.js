/* =====================
   DARK / LIGHT MODE
===================== */
const themeBtn = document.getElementById("themeBtn");
const themeIcon = document.getElementById("themeIcon");

if(localStorage.getItem("theme")==="dark"){
  document.body.classList.add("dark-mode");
  themeIcon.className="fa-solid fa-sun";
}

themeBtn.addEventListener("click",()=>{
  document.body.classList.toggle("dark-mode");
  const dark=document.body.classList.contains("dark-mode");
  localStorage.setItem("theme",dark?"dark":"light");
  themeIcon.className = dark?"fa-solid fa-sun":"fa-solid fa-moon";
});

/* =====================
   LANGUAGE SWITCH
===================== */
let lang="en";
const langBtn=document.getElementById("langBtn");

const text={
  en:{
    app:"WealthWise",
    hero:"Take Control of Your Financial Future",
    desc:"Get personalized investment advice and financial planning.",
    form:"Your Financial Profile",
    income:"Annual Income (₹)",
    expense:"Monthly Expenses (₹)",
    btn:"Generate Plan",
    footer:"Your trusted partner in financial planning."
  },
  hi:{
    app:"वेल्थवाइज",
    hero:"अपने वित्तीय भविष्य पर नियंत्रण लें",
    desc:"व्यक्तिगत निवेश सलाह और वित्तीय योजना प्राप्त करें।",
    form:"आपकी वित्तीय प्रोफ़ाइल",
    income:"वार्षिक आय (₹)",
    expense:"मासिक खर्च (₹)",
    btn:"योजना बनाएं",
    footer:"वित्तीय योजना में आपका भरोसेमंद साथी।"
  }
};

langBtn.addEventListener("click",()=>{
  lang = lang==="en"?"hi":"en";
  langBtn.textContent = lang==="en"?"English":"हिंदी";

  document.getElementById("appName").textContent=text[lang].app;
  document.getElementById("heroTitle").textContent=text[lang].hero;
  document.getElementById("heroDesc").textContent=text[lang].desc;
  document.getElementById("formTitle").textContent=text[lang].form;
  document.getElementById("incomeLabel").textContent=text[lang].income;
  document.getElementById("expenseLabel").textContent=text[lang].expense;
  document.getElementById("submitBtn").textContent=text[lang].btn;
  document.getElementById("footerText").textContent=text[lang].footer;
});
