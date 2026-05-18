# 🚗 Car Explorer – Portfolio Project

![Project Type](https://img.shields.io/badge/Project-Frontend-blue) ![Status](https://img.shields.io/badge/Status-Completed-green) ![Vanilla JS](https://img.shields.io/badge/JavaScript-Vanilla-yellow)

---

## 📌 Overview

Car Explorer is a responsive front-end web application that allows users to browse car manufacturers and explore their models in an interactive and visual way.

The project integrates external APIs to fetch real vehicle data and images, and uses Local Storage to persist user preferences such as favorites and cart items.

---

## ✨ Key Features

- 🔎 Browse car manufacturers from the NHTSA Vehicle API
- 🚘 View models per manufacturer dynamically
- 🖼️ Auto-fetch car images using Pexels API
- ❤️ Add/remove favorites with persistent storage
- 🛒 Add/remove cars to a shopping cart system
- 📊 Live counters for favorites and cart
- 💾 Data persistence using Local Storage
- ⚡ Fully dynamic UI with Vanilla JavaScript

---

## 🧱 Tech Stack

- HTML5
- CSS3 (Inline styling + basic layout)
- JavaScript (ES6+ Vanilla JS)
- Fetch API (Async/Await)
- Local Storage API
- NHTSA Vehicle API
- Pexels Image API

---

## 🏗️ Architecture & Logic

The application is built using a modular JavaScript structure:

- `getCars()` → Loads vehicle manufacturers
- `getModels()` → Loads models for selected manufacturer
- `addToFavorites()` → Saves favorite cars to Local Storage
- `addToCart()` → Manages cart state
- `showFavorites()` / `showCart()` → Renders UI views dynamically

State management is handled entirely on the client side using in-memory arrays synced with Local Storage.

---

## 🔐 Environment Notes

⚠️ The project currently includes a public Pexels API key inside the code.

For production use, it is recommended to:

- Move API keys to a secure backend
- Use environment variables (.env)

---

## 📦 Installation & Usage

```bash
git clone <repository-url>
cd car-explorer
```

Then open:

```
index.html
```

Or use **Live Server** in VS Code for best experience.

---

## 📁 Project Structure

```
car-explorer/
├── index.html
├── style.css
├── script.js
└── README.md
```

---

## ⚙️ How It Works

1. Fetch car manufacturers on page load
2. User selects a manufacturer
3. Models are fetched dynamically
4. Images are retrieved from Pexels API
5. Users can save cars to favorites or cart
6. Data persists using Local Storage

---

## 🚀 Possible Improvements

- Add backend (Node.js / Express)
- User authentication system
- Checkout / payment flow
- Pagination for models
- Better UI design with frameworks (React / Vue)
- Replace inline styles with CSS architecture

---

## 📸 Screenshots

_(Add screenshots of your UI here for portfolio presentation)_

---

## 👨‍💻 Author

**Name:** Elior Cohen
**Email:** [Eliorco32@gmail.com](mailto:Eliorco32@gmail.com)

---

## 📝 License

This project is open for educational and portfolio use.

---

## ⭐ Final Note

This project demonstrates working with external APIs, dynamic DOM manipulation, and client-side state management using Vanilla JavaScript.

# 🚗 Car Explorer – פרויקט פורטפוליו

![סוג פרויקט](https://img.shields.io/badge/Project-Frontend-blue) ![סטטוס](https://img.shields.io/badge/Status-Completed-green) ![JavaScript](https://img.shields.io/badge/JavaScript-Vanilla-yellow)

---

## 📌 סקירה כללית

Car Explorer הוא פרויקט Front-End אינטראקטיבי שמאפשר למשתמשים לגלוש בין יצרני רכב, לצפות בדגמים שונים ולחקור אותם בצורה ויזואלית ונוחה.

הפרויקט משתמש ב־API חיצוניים כדי לשלוף נתוני רכבים ותמונות בזמן אמת, ומשתמש ב־Local Storage כדי לשמור מועדפים ועגלת קניות.

---

## ✨ פיצ׳רים עיקריים

- 🔎 הצגת יצרני רכב באמצעות NHTSA Vehicle API
- 🚘 צפייה בדגמי רכב לפי יצרן
- 🖼️ טעינת תמונות רכבים מ־Pexels API
- ❤️ הוספה והסרה ממועדפים עם שמירה קבועה
- 🛒 הוספה והסרה מעגלת קניות
- 📊 מונים חיים למועדפים ולעגלה
- 💾 שמירת נתונים ב־Local Storage
- ⚡ ממשק דינמי ב־Vanilla JavaScript

---

## 🧱 טכנולוגיות בשימוש

- HTML5
- CSS3 (עיצוב בסיסי + inline)
- JavaScript (ES6+)
- Fetch API (Async/Await)
- Local Storage
- NHTSA Vehicle API
- Pexels Image API

---

## 🏗️ ארכיטקטורה ולוגיקה

הפרויקט בנוי בצורה מודולרית יחסית:

- `getCars()` → טעינת יצרני רכב
- `getModels()` → טעינת דגמים לפי יצרן
- `addToFavorites()` → שמירת מועדפים
- `addToCart()` → ניהול עגלת קניות
- `showFavorites()` / `showCart()` → הצגת תצוגות דינמיות

ניהול המצב מתבצע בצד הלקוח באמצעות מערכים בזיכרון המסונכרנים עם Local Storage.

---

## 🔐 הערות אבטחה

⚠️ בקוד קיים מפתח API גלוי של Pexels.

להפקה (Production) מומלץ:

- להעביר מפתחות API לשרת Backend
- להשתמש בקובץ סביבה (.env)

---

## 📦 התקנה והרצה

```bash
git clone <repository-url>
cd car-explorer
```

לאחר מכן לפתוח:

```
index.html
```

או להשתמש ב־Live Server ב־VS Code.

---

## 📁 מבנה הפרויקט

```
car-explorer/
├── index.html
├── style.css
├── script.js
└── README.md
```

---

## ⚙️ איך זה עובד

1. בעת טעינת האתר נטענים יצרני רכב מה־API
2. לחיצה על יצרן מציגה דגמים
3. לכל דגם נטענת תמונה מ־Pexels
4. ניתן להוסיף רכבים למועדפים או לעגלה
5. הנתונים נשמרים אוטומטית ב־Local Storage

---

## 🚀 שיפורים אפשריים בעתיד

- הוספת Backend (Node.js / Express)
- מערכת משתמשים והרשמה
- תהליך קנייה מלא (Checkout)
- חלוקה לעמודים (Pagination)
- שדרוג UI עם React או Vue
- הפרדת CSS לקבצים מסודרים

---

## 📸 תמונות מהפרויקט

_(כאן ניתן להוסיף צילומי מסך של המערכת לצורך פורטפוליו)_

---

## 👨‍💻 יוצר הפרויקט

**שם:** אליאור כהן
**אימייל:** [Eliorco32@gmail.com](mailto:Eliorco32@gmail.com)

---

## 📝 רישיון

פרויקט זה מיועד ללמידה ולפורטפוליו אישי.

---

## ⭐ הערה לסיום

הפרויקט מדגים עבודה עם API חיצוניים, מניפולציה של DOM, וניהול מצב בצד הלקוח באמצעות JavaScript נקי (Vanilla JS).
