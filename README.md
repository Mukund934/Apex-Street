**
---

# 🛍️ Apex Street – A Stylish and Modern E-Commerce UI

🛒 A fully functional e-commerce frontend built with **React**, **TypeScript**, and **Tailwind CSS** — featuring authentication, cart management, category browsing, product filtering, and mobile responsiveness.

---

## 📖 Overview

**Apex Street** is a clean, high-performance e-commerce UI that showcases modern design principles and smooth user experience. It features dynamic product display, category-wise filtering, cart functionality, and responsive layouts for all screen sizes.

This project allowed me to deepen my skills in reusable UI components, state management, routing, animations, and seamless interactions, all while focusing on scalability and real-world UX.

---

## 🌟 Features

### 🛍️ Category-Based Shopping

Filter and browse products by categories like clothing, shoes, accessories, and more.

### 🔍 Smart Product Search

Instant search experience using debounced inputs and keyword matching to filter available products in real-time.

### 🛒 Cart Management

Add, remove, and update quantities of products. Live total updates with smooth animations and toast notifications.

### 🔐 Authentication Flows

Includes placeholder signup, login, OTP, and forgot password flows for a complete auth experience (no backend required).

### 📱 Mobile Responsive

Fully responsive for phones, tablets, and desktops with sticky navigation, grid layouts, and optimized touch UX.

### 🎨 Clean UI Design

Modern typography, smooth hover animations, shadow effects, and interactive product cards using **Tailwind CSS**.

---

## 🚀 Live Project

🔗 [Visit Apex Street →](https://apexstreet.vercel.app](https://apex-street-git-main-mukund-thakurs-projects.vercel.app/)

---

## 🛠️ Tech Stack

### ⚛️ Frontend

* **React 18 + TypeScript**
* **Tailwind CSS** for utility-first styling
* **React Router DOM** for client-side navigation
* **Framer Motion** for smooth UI animations
* **Lucide Icons** for clean, open-source icons
* **ShadCN UI** for accessible, customizable components

### 🧠 Architecture & Concepts Used

| Concept               | Description                                                 |
| --------------------- | ----------------------------------------------------------- |
| `Product Cards`       | Reusable and animated cards for product display             |
| `Toast Notifications` | Feedback on user actions like adding/removing from cart     |
| `Sticky Navbar`       | Always-visible header with links, cart icon, and logo       |
| `Search Debounce`     | Reduces API/filter calls while typing using debounce logic  |
| `Routing`             | Pages for Home, Categories, Product Details, Auth, and Cart |
| `Responsive Grid`     | Tailored product layouts for mobile, tablet, and desktop    |

---

## 📁 Project Structure

```
apex-street/
├── public/
│   └── images/                ← Product and banner images
├── src/
│   ├── components/            ← Reusable UI blocks (navbar, card, button, etc.)
│   ├── pages/                 ← Route pages (Home, Category, Product, Cart, Auth)
│   ├── data/                  ← Product and category data (JSON format)
│   ├── utils/                 ← Helper functions like debounce, formatPrice, etc.
│   ├── App.tsx                ← Root app layout and routes
│   └── main.tsx               ← Entry point with Router and global styles
├── tailwind.config.js         ← Theme and plugin setup
├── postcss.config.js          ← Tailwind + autoprefixer
└── index.html                 ← Root HTML with title and meta
```

---

## 🏗️ Local Setup

### ⚙️ Prerequisites

* Node.js ≥ 18
* npm or yarn

### 🔧 Installation

```bash
git clone https://github.com/your-username/apex-street.git
cd apex-street
npm install
```

### ▶️ Start Dev Server

```bash
npm run dev
```

Visit `http://localhost:5173` to explore.

---

## 🧑‍💻 What I Learned

✅ Building e-commerce experiences using component-based design
✅ Implementing a dynamic cart with state sync
✅ Applying real-time search filtering with debounce
✅ Handling responsive design with Tailwind CSS
✅ Animating transitions using Framer Motion
✅ Designing accessible UI using ShadCN components
✅ Route-based navigation using React Router DOM
✅ Structuring folders for scalable UI projects

---

## 📦 Deployment

Deployed via **Vercel** for fast CDN delivery and automatic builds from the main branch.

---

## 🎯 Future Improvements

* 🔐 Add backend support for authentication
* 💳 Integrate Stripe or Razorpay for real payments
* 🧠 Add filtering by price range, rating, and more
* 📝 Add product reviews and testimonials
* 🔍 Implement SEO metadata for better search visibility
* 📦 Add wishlist and order history tracking

---

## 🤝 Contributing

Have ideas or want to extend this project? Contributions are welcome!
**Fork → Code → Commit → PR 🚀**

---

## 📜 License

Licensed under the **MIT License**.
View the [LICENSE](./LICENSE) for full details.

---

## 📬 Contact

👨‍💻 Created by [Mukund Thakur](https://github.com/Mukund934)
📩 Email: `mukund.th04@gmail.com`
🔗 GitHub: [Mukund934](https://github.com/Mukund934)

---

**
