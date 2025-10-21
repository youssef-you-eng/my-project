/* script.js — Task 3
   يحتوي على الأكواد الكاملة (HTML + CSS + JS)
*/

// ---------------------------
// 1️⃣ إنشاء الـCSS وإضافته
// ---------------------------
const css = `
  body {
    margin: 0;
    font-family: "Times New Roman", serif;
    background-color: #e78bf0;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    min-height: 100vh;
  }

  h1 {
    color: #1a70e0;
    text-align: center;
    font-size: 32px;
    margin-top: 30px;
    margin-bottom: 40px;
    text-transform: lowercase;
  }

  .projects-container {
    display: grid;
    grid-template-columns: repeat(6, 1fr);
    gap: 25px;
    justify-items: center;
    max-width: 1100px;
  }

  .card {
    background-color: white;
    width: 160px;
    height: 100px;
    border-radius: 10px;
    box-shadow: 0 6px 15px rgba(0, 0, 0, 0.3);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    transition: all 0.3s ease;
  }

  .card:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 25px rgba(0, 0, 0, 0.35);
  }

  .card h2 {
    color: purple;
    font-size: 20px;
    margin: 0;
    font-weight: bold;
  }

  .card p {
    color: purple;
    font-size: 16px;
    margin: 6px 0 0;
    font-weight: 500;
  }

  /* استجابة للشاشات الصغيرة */
  @media (max-width: 900px) {
    .projects-container {
      grid-template-columns: repeat(3, 1fr);
    }
  }

  @media (max-width: 600px) {
    .projects-container {
      grid-template-columns: repeat(2, 1fr);
    }
  }
`;

const style = document.createElement("style");
style.textContent = css;
document.head.appendChild(style);

// ---------------------------
// 2️⃣ إنشاء الـHTML ديناميكيًا
// ---------------------------
const title = document.createElement("h1");
title.textContent = "projects";

const container = document.createElement("div");
container.className = "projects-container";

for (let i = 1; i <= 18; i++) {
  const card = document.createElement("div");
  card.className = "card";

  const h2 = document.createElement("h2");
  h2.textContent = `project ${i}`;

  const p = document.createElement("p");
  p.textContent = "youssef";

  card.appendChild(h2);
  card.appendChild(p);
  container.appendChild(card);
}

document.body.appendChild(title);
document.body.appendChild(container);

// ---------------------------
// 3️⃣ إضافة حركة بسيطة عند النقر (اختياري)
// ---------------------------
container.addEventListener("click", (e) => {
  const card = e.target.closest(".card");
  if (card) {
    const name = card.querySelector("h2").textContent;
    alert(`You clicked on ${name}`);
  }
});
