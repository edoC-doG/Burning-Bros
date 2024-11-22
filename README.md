<div align="center">
  <div>
    <img src="https://img.shields.io/badge/-React_JS-black?style=for-the-badge&logoColor=white&logo=react&color=61DAFB" alt="react.js" />
    <img src="https://img.shields.io/badge/-Tailwind_CSS-black?style=for-the-badge&logoColor=white&logo=tailwindcss&color=06B6D4" alt="tailwindcss" />
  </div>

  <h3 align="center">Product App</h3>

</div>

## 📋 <a name="table">Table of Contents</a>

1. 🤖 [Introduction](#introduction)
2. ⚙️ [Tech Stack](#tech-stack)
3. 🔋 [Features](#features)
4. 🤸 [Quick Start](#quick-start)

## 🚨 Tutorial
If you prefer visual learning, this is the perfect resource for you. Follow our tutorial to learn how to build projects like these step-by-step in a beginner-friendly manner!
## <a name="introduction">🤖 Introduction</a>
This product app is built with React.js, Next.js, Tailwind CSS, and Redux Toolkit, offering a seamless user experience with fast performance. Formik and Yup manage forms and validation for product searches, while Redux Toolkit handles global state and persistence for smooth data retention.

Next.js enables server-side rendering (SSR) for optimized performance, and infinite scrolling loads products dynamically as users scroll

With a scalable design and modern tech stack, this app is ideal for managing and browsing products efficiently.
## <a name="tech-stack">⚙️ Tech Stack</a>
- Next.JS
- Tailwind CSS
- Redux, Redux Persist, Redux ToolKit
- Fomik, Yub
## <a name="features">🔋 Features</a>

👉 **State Management with Redux Toolkit and Persist**: Utilize Redux Toolkit for efficient state management of product data, including details like product_id, title, description, and category, with Redux Persist ensuring state retention across page reloads.

👉 **Fast and Optimized Development with Next.js**: Build and optimize your app with Next.js, leveraging server-side rendering (SSR) for fast load times and improved SEO, while offering dynamic routing and API integration for scalability.

👉 **Infinite Scroll for Enhanced UX**: Improve user experience with infinite scrolling, dynamically loading products as users scroll through the page, creating a smooth and engaging browsing experience.

👉 **Modular Code Architecture**: Maintain clean, reusable, and modular code architecture, making it easier to scale and update your app in the future while keeping it maintainable and efficient.

## <a name="quick-start">🤸 Quick Start</a>

Follow these steps to set up the project locally on your machine.

**Prerequisites**

Make sure you have the following installed on your machine:

- [Git](https://git-scm.com/)
- [Node.js](https://nodejs.org/en)
- [npm](https://www.npmjs.com/) (Node Package Manager)

**Cloning the Repository**

```bash
git clone 
```

**Installation**

Install the project dependencies using npm:

```bash
npm install
```

**Running the Project**

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to view the project.

## <a name="snippets">🕸️ Snippets</a>

<details>
<summary><code>tailwind.config.js</code></summary>

```javascript
import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
    },
  },
  plugins: [
    require('@tailwindcss/line-clamp'),
  ],
} satisfies Config;


<br />
<br />
