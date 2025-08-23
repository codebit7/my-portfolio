# 🌟 Personal Portfolio Website

<div align="center">

[![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)](https://reactjs.org/)
[![Firebase](https://img.shields.io/badge/Firebase-039BE5?style=for-the-badge&logo=Firebase&logoColor=white)](https://firebase.google.com/)
[![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)](https://www.w3.org/Style/CSS/Overview.en.html)
[![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)

**A modern, responsive portfolio website built with React and Firebase**
</div>

---

## 📋 Table of Contents

- [✨ Features](#-features)
- [🛠️ Tech Stack](#️-tech-stack)
- [🚀 Quick Start](#-quick-start)
- [📁 Project Structure](#-project-structure)
- [🎨 Components Overview](#-components-overview)
- [🔧 Configuration](#-configuration)
- [📱 Responsive Design](#-responsive-design)
- [🌐 Deployment](#-deployment)
- [🤝 Contributing](#-contributing)
- [📄 License](#-license)
- [👤 Contact](#-contact)

---

## ✨ Features

### 🎯 Core Features
- **Modern Design**: Clean, professional UI with smooth animations
- **Fully Responsive**: Optimized for all devices and screen sizes
- **Dynamic Content**: Real-time data fetching from Firebase Realtime Database
- **Interactive Animations**: AOS (Animate On Scroll) library integration
- **Contact Form**: Functional contact form with EmailJS integration
- **Resume Download**: Direct resume download functionality
- **Social Integration**: Links to GitHub, LinkedIn, and other platforms

### 🎨 Design Features
- **Dark Theme**: Professional dark color scheme
- **Smooth Scrolling**: Seamless navigation between sections
- **Typing Animation**: Dynamic typing effect for profession titles
- **Hover Effects**: Interactive elements with smooth transitions
- **Loading Screen**: Custom loading animation
- **Toast Notifications**: User feedback for form submissions

### 📱 Responsive Features
- **Mobile-First**: Optimized for mobile devices
- **Tablet Support**: Perfect rendering on tablets
- **Desktop Optimized**: Full-featured desktop experience
- **Cross-Browser**: Compatible with all modern browsers

---

## 🛠️ Tech Stack

### Frontend
- **React 18**: Modern React with hooks and functional components
- **CSS3**: Custom CSS with advanced features and animations
- **AOS**: Animate On Scroll library for smooth animations
- **React Icons**: Icon library for consistent iconography
- **React Spinners**: Loading animations
- **React Toastify**: Toast notifications

### Backend & Services
- **Firebase**: Realtime Database for dynamic content
- **EmailJS**: Email service for contact form functionality
- **Google Drive**: Resume hosting and direct download

### Build Tools
- **Vite**: Fast build tool and development server
- **ESLint**: Code linting and formatting

---

## 🚀 Quick Start

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn package manager
- Firebase account
- EmailJS account

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/portfolio.git
   cd portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Set up environment variables**
   ```bash
   # Create .env file in root directory
   VITE_FIREBASE_API_KEY=your_firebase_api_key
   VITE_FIREBASE_AUTH_DOMAIN=your_firebase_auth_domain
   VITE_FIREBASE_DATABASE_URL=your_firebase_database_url
   VITE_FIREBASE_PROJECT_ID=your_firebase_project_id
   VITE_FIREBASE_STORAGE_BUCKET=your_firebase_storage_bucket
   VITE_FIREBASE_MESSAGING_SENDER_ID=your_firebase_messaging_sender_id
   VITE_FIREBASE_APP_ID=your_firebase_app_id
   
   VITE_EMAILJS_SERVICE_ID=your_emailjs_service_id
   VITE_EMAILJS_TEMPLATE_ID=your_emailjs_template_id
   VITE_EMAILJS_PUBLIC_KEY=your_emailjs_public_key
   VITE_TO_EMAIL=your_email@example.com
   ```

4. **Start development server**
   ```bash
   npm run dev
   # or
   yarn dev
   ```

5. **Open your browser**
   ```
   Navigate to http://localhost:5173
   ```

---

## 📁 Project Structure

```
portfolio/
├── public/
│   ├── dots-effect.png          # Background animation asset
│   └── index.html
├── src/
│   ├── assets/
│   │   └── profile-remove-bg.png
│   ├── components/
│   │   ├── About/
│   │   │   ├── About.jsx
│   │   │   └── About.css
│   │   ├── Contact/
│   │   │   ├── Contact.jsx
│   │   │   └── Contact.css
│   │   ├── Experience/
│   │   │   ├── Experience.jsx
│   │   │   └── Experience.css
│   │   ├── Footer/
│   │   │   ├── Footer.jsx
│   │   │   └── Footer.css
│   │   ├── Home/
│   │   │   ├── Home.jsx
│   │   │   └── Home.css
│   │   ├── Loader/
│   │   │   ├── Loader.jsx
│   │   │   └── Loader.css
│   │   ├── Projects/
│   │   │   ├── Projects.jsx
│   │   │   └── Projects.css
│   │   ├── Services/
│   │   │   ├── Services.jsx
│   │   │   └── Services.css
│   │   └── navbar/
│   │       ├── Navbar.jsx
│   │       └── Navbar.css
│   ├── services/
│   │   ├── FirebaseConfig.js
│   │   └── firebaseDatabaseService.js
│   ├── App.jsx
│   └── main.jsx
├── .env
├── package.json
└── README.md
```

---

## 🎨 Components Overview

### 🏠 Home Component
- **Hero section** with animated typing effect
- **Profile image** with custom shape design
- **Social links** integration
- **Resume download** functionality
- **Responsive design** for all devices

### 👤 About Component
- **Personal introduction** with dynamic content
- **Skills showcase** with animated tags
- **Technologies** and **tools** display
- **Work process** visualization

### 💼 Experience Component
- **Professional timeline** with detailed descriptions
- **Company information** and **role details**
- **Key projects** highlighting
- **Responsive cards** design

### 🛠️ Services Component
- **Service offerings** with icons
- **Interactive cards** with hover effects
- **Professional descriptions**
- **Grid layout** for optimal viewing

### 🚀 Projects Component
- **Project showcase** with images
- **Live demo** and **source code** links
- **Project descriptions** and features
- **Hover animations** and interactions

### 📞 Contact Component
- **Contact form** with validation
- **Email integration** via EmailJS
- **Social media** links
- **Google Maps** integration
- **Toast notifications** for user feedback

### 🧭 Navbar Component
- **Smooth scrolling** navigation
- **Active section** highlighting
- **Mobile hamburger** menu
- **Responsive design**

---

## 🔧 Configuration

### Firebase Setup

1. **Create a Firebase project**
2. **Enable Realtime Database**
3. **Configure database rules**:
   ```json
   {
     "rules": {
       ".read": true,
       ".write": false
     }
   }
   ```

4. **Database structure**:
   ```json
   {
     "portfolio": {
       "about": {
         "aboutMe": { "paragraphs": ["...", "..."] },
         "Technologies": { "title": "Technologies", "items": ["React", "Node.js", "..."] },
         "Tools": { "title": "Tools & Software", "items": ["VS Code", "Git", "..."] },
         "WorkProcess": { "title": "My Process", "steps": ["Planning", "Development", "..."] }
       },
       "experience": [
         {
           "company": "Company Name",
           "position": "Position Title",
           "dateRange": "Date Range",
           "responsibilities": ["...", "..."],
           "keyProjects": ["...", "..."]
         }
       ],
       "services": [
         {
           "title": "Service Title",
           "description": "Service Description",
           "icon": "<svg>...</svg>",
           "featured": false
         }
       ],
       "projects": [
         {
           "title": "Project Title",
           "description": "Project Description",
           "image": "image-url",
           "liveDemo": "demo-url",
           "sourceCode": "github-url"
         }
       ]
     }
   }
   ```

### EmailJS Setup

1. **Create EmailJS account**
2. **Set up email service**
3. **Create email template**
4. **Get service ID, template ID, and public key**

---

## 📱 Responsive Design

The portfolio is built with a **mobile-first** approach and includes:

- **320px+**: Extra small mobile devices
- **480px+**: Small mobile devices
- **768px+**: Tablets
- **1024px+**: Desktop and larger screens

### Key Responsive Features:
- Flexible grid layouts
- Scalable typography
- Touch-friendly interactions
- Optimized images
- Collapsible navigation

## 🤝 Contributing

We welcome contributions! Please follow these steps:

1. **Fork the repository**
2. **Create a feature branch**
   ```bash
   git checkout -b feature/amazing-feature
   ```
3. **Commit your changes**
   ```bash
   git commit -m 'Add some amazing feature'
   ```
4. **Push to the branch**
   ```bash
   git push origin feature/amazing-feature
   ```
5. **Open a Pull Request**

## 👤 Contact

**Wamiq Rahim**

- 📧 Email: wamiqrahim@gmail.com
- 📱 Phone: +923030170314
- 🔗 LinkedIn: [linkedin.com/in/wamiq-rahim-05a83222b](https://www.linkedin.com/in/wamiq-rahim-05a83222b)
- 🐱 GitHub: [github.com/codebit7](https://github.com/codebit7)

---

<div align="center">

### 🌟 Show your support

Give a ⭐️ if this project helped you!

**Made with ❤️ by Wamiq Rahim**

</div>
