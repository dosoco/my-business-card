# CODE ALONG: "PERSONAL BUSINESS CARD WITH REACT & VITE"
## Week 1, Day 1 - Your First React Component

Welcome to modern React development! Today you'll create your very first React project and build an interactive digital business card that you can actually use to showcase your new skills.

**What we're building today:** A professional, interactive digital business card with hover effects and contact information

---

## 🎯 Learning Objectives
By the end of this lesson, you will:
- Set up a React project using Vite (2025 industry standard)
- Understand the modern React project structure
- Learn JSX syntax and how it differs from HTML
- Create your first functional React component
- Style components with CSS and understand className vs class
- Build a complete, professional-looking business card

---

## 🚀 PART 1: SETTING UP YOUR DEVELOPMENT ENVIRONMENT

### Step 1: Prerequisites Check
Let's make sure you have everything you need installed:

```bash
# Check Node.js version (you need 18 or higher for 2025)
node --version

# Check npm version
npm --version
```

**Expected Output:**
- Node.js: v18.0.0 or higher
- npm: 8.0.0 or higher

**📸 CHECKPOINT:** Take a screenshot of your terminal showing these version numbers.

**If you need Node.js:** Visit [nodejs.org](https://nodejs.org) and download the LTS (Long Term Support) version.

---

## 🏗️ PART 2: CREATE YOUR REACT PROJECT

### Step 2: Initialize Your Project

Open your terminal/command prompt and run these commands **one at a time**:

```bash
# Create a new React project using Vite
npm create vite@latest my-business-card -- --template react
```

**What just happened?** 
- `npm create vite@latest` uses the newest Vite tool (think of it as a super-fast project builder)
- `my-business-card` is your project name (you can change this to your actual name)
- `--template react` tells Vite we want a React project specifically

**📸 CHECKPOINT:** You should see Vite asking you to confirm the project name and template. Take a screenshot.

### Step 3: Navigate and Install Dependencies

```bash
# Move into your project folder
cd my-business-card

# Install all the packages your project needs
npm install
```

**🧠 Think of npm install like:** Going to the store and buying all the ingredients listed in a recipe. Your project has a "recipe" (package.json) that lists everything it needs.

**📸 CHECKPOINT:** Wait for the installation to complete (you'll see a progress bar). Screenshot when it says "packages installed."

### Step 4: Start Your Development Server

```bash
# Start the development server
npm run dev
```

**Expected Output:** You should see something like:
```
  VITE v5.x.x  ready in xxx ms

  ➜  Local:   http://localhost:5173/
  ➜  Network: use --host to expose
```

**📸 CHECKPOINT:** 
1. Screenshot your terminal showing the server running
2. Open your browser to `http://localhost:5173/`
3. Screenshot the default Vite + React page with spinning logos

---

## 📁 PART 3: UNDERSTANDING YOUR PROJECT STRUCTURE

### Step 5: Open Your Project in VS Code

1. Open Visual Studio Code
2. File → Open Folder → Select your `my-business-card` folder
3. Click "Yes, I trust the authors" if prompted

**Your project structure should look like this:**

```
my-business-card/
├── index.html          ← The single HTML file (entry point)
├── package.json        ← Project info and dependencies list
├── vite.config.js      ← Vite settings (don't worry about this now)
├── src/                ← ALL your React code goes here
│   ├── main.jsx        ← Where React starts up (the engine)
│   ├── App.jsx         ← Your main component (the main room)
│   ├── App.css         ← Styles for App component
│   ├── index.css       ← Global styles for whole app
│   └── assets/         ← Images and other files
└── public/             ← Static files (favicon, etc.)
```

**🧠 House Analogy:**
- `index.html` = The foundation of your house
- `main.jsx` = The electrical system that powers everything  
- `App.jsx` = The main living room where everything happens
- `src/` folder = Where you build all your rooms (components)

**📸 CHECKPOINT:** Take a screenshot of your VS Code showing the file explorer with all these files visible.

---

## 🔍 PART 4: UNDERSTANDING THE CODE FLOW

### Step 6: Examine the Entry Points

**Let's look at how everything connects:**

#### File 1: `index.html` (The Foundation)
Click on `index.html` in VS Code:

```html
<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <link rel="icon" type="image/svg+xml" href="/vite.svg" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Vite + React</title>
  </head>
  <body>
    <!-- This empty div is where ALL your React components will live -->
    <div id="root"></div>
    <!-- Vite automatically injects your JavaScript here -->
    <script type="module" src="/src/main.jsx"></script>
  </body>
</html>
```

**Key Points:**
- This is the ONLY HTML file in your entire project
- The `<div id="root">` is where React will put everything
- Everything else gets built by JavaScript

#### File 2: `main.jsx` (The Engine)
Click on `src/main.jsx`:

```jsx
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

// This line connects React to your HTML and starts everything
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
```

**🧠 Breaking it down:**
- **Lines 1-4:** Import all the tools we need (like gathering cooking ingredients)
- **Line 6:** Find the 'root' div in HTML and connect React to it
- **Line 7-9:** Put our `App` component inside that div
- **React.StrictMode:** A helper that catches mistakes during development

---

## 🧹 PART 5: CLEAN UP FOR OUR PROJECT

### Step 7: Simplify App.jsx

Currently, `App.jsx` has demo content. Let's replace it with our business card foundation.

**Replace everything in `src/App.jsx` with:**

```jsx
import './App.css'

function App() {
  return (
    <div className="app">
      <h1>My Digital Business Card</h1>
      <p>Coming soon: A professional business card built with React!</p>
    </div>
  )
}

export default App
```

**🔍 Key Differences from HTML:**
- `className` instead of `class` (because `class` is reserved in JavaScript)
- Everything is inside a `function App()` 
- We `return` JSX (looks like HTML, but it's JavaScript)
- We `export default App` so other files can use this component

**📸 CHECKPOINT:** Save the file and check your browser - it should automatically update to show your new content!

---

## 👤 PART 6: BUILD THE BUSINESS CARD COMPONENT

### Step 8: Create the Components Folder

1. Right-click on the `src` folder in VS Code
2. Select "New Folder"
3. Name it `components`

### Step 9: Create BusinessCard Component

1. Right-click on the `components` folder
2. Select "New File"  
3. Name it `BusinessCard.jsx`

**Add this code to `src/components/BusinessCard.jsx`:**

```jsx
import React from 'react'

function BusinessCard() {
  // This is where our component's logic would go
  // For now, we're just returning some JSX

  return (
    <div className="business-card">
      {/* Header section with name and title */}
      <div className="card-header">
        <h2 className="name">Your Name Here</h2>
        <p className="title">React Developer in Training</p>
      </div>

      {/* Contact information section */}
      <div className="contact-info">
        <div className="contact-item">
          <span className="label">Email:</span>
          <span className="value">your.email@example.com</span>
        </div>
        
        <div className="contact-item">
          <span className="label">Phone:</span>
          <span className="value">(555) 123-4567</span>
        </div>
        
        <div className="contact-item">
          <span className="label">Location:</span>
          <span className="value">Your City, State</span>
        </div>
      </div>

      {/* Skills section */}
      <div className="skills-section">
        <h3 className="section-title">Skills</h3>
        <div className="skills-list">
          <span className="skill">HTML</span>
          <span className="skill">CSS</span>
          <span className="skill">JavaScript</span>
          <span className="skill">React</span>
        </div>
      </div>

      {/* Social links section */}
      <div className="social-section">
        <h3 className="section-title">Connect</h3>
        <div className="social-links">
          <a href="#" className="social-link">LinkedIn</a>
          <a href="#" className="social-link">GitHub</a>
          <a href="#" className="social-link">Portfolio</a>
        </div>
      </div>
    </div>
  )
}

// Always export your component so other files can use it
export default BusinessCard
```

**🧠 What's happening here:**
- We created a `function BusinessCard()` (this is a React component)
- Everything inside `return()` is JSX - it looks like HTML but it's JavaScript
- `{/* comments */}` - this is how we write comments in JSX
- All tags must be closed (notice `<span>` has a closing `</span>`)
- We use `className` instead of `class`

**📸 CHECKPOINT:** Save the file. Nothing should change in your browser yet because we haven't used this component.

---

## 🎨 PART 7: STYLE THE BUSINESS CARD

### Step 10: Create Styles Folder and CSS File

1. Right-click on `src` folder → New Folder → name it `styles`
2. Right-click on `styles` folder → New File → name it `BusinessCard.css`

**Add this CSS to `src/styles/BusinessCard.css`:**

```css
/* Business Card Component Styles */

.business-card {
  /* Card container styling */
  max-width: 400px;                    /* Limits card width */
  margin: 2rem auto;                   /* Centers the card and adds top/bottom space */
  padding: 2rem;                       /* Internal spacing */
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);  /* Beautiful gradient background */
  border-radius: 15px;                 /* Rounded corners */
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);  /* Drop shadow for depth */
  color: white;                        /* White text on dark background */
  font-family: 'Arial', sans-serif;    /* Clean, professional font */
  transition: transform 0.3s ease;     /* Smooth animation for hover effect */
}

/* Hover effect - card lifts up slightly when you hover over it */
.business-card:hover {
  transform: translateY(-5px);         /* Moves card up 5 pixels */
  box-shadow: 0 15px 40px rgba(0, 0, 0, 0.4);  /* Stronger shadow when hovered */
}

/* Header section with name and title */
.card-header {
  text-align: center;                  /* Centers the text */
  margin-bottom: 1.5rem;               /* Space below header */
  border-bottom: 2px solid rgba(255, 255, 255, 0.3);  /* Subtle divider line */
  padding-bottom: 1rem;                /* Space above the divider line */
}

.name {
  font-size: 2rem;                     /* Large text for name */
  margin: 0 0 0.5rem 0;                /* Removes default margin, adds small bottom margin */
  font-weight: bold;                   /* Makes text bold */
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);  /* Subtle text shadow for depth */
}

.title {
  font-size: 1.1rem;                   /* Slightly larger than normal text */
  margin: 0;                           /* Removes default paragraph margin */
  opacity: 0.9;                        /* Slightly transparent for hierarchy */
  font-style: italic;                  /* Italicized job title */
}

/* Contact information styling */
.contact-info {
  margin-bottom: 1.5rem;               /* Space below contact section */
}

.contact-item {
  display: flex;                       /* Makes label and value sit side by side */
  justify-content: space-between;      /* Pushes label left, value right */
  margin-bottom: 0.5rem;               /* Space between each contact item */
  padding: 0.3rem 0;                   /* Small vertical padding */
}

.label {
  font-weight: bold;                   /* Makes labels (Email:, Phone:) bold */
  opacity: 0.8;                        /* Slightly faded for visual hierarchy */
}

.value {
  text-align: right;                   /* Right-aligns the contact values */
}

/* Skills section styling */
.skills-section {
  margin-bottom: 1.5rem;               /* Space below skills section */
}

.section-title {
  font-size: 1.2rem;                   /* Section heading size */
  margin: 0 0 0.8rem 0;                /* Space below section titles */
  color: rgba(255, 255, 255, 0.9);     /* Slightly transparent white */
  border-left: 3px solid #fff;         /* White left border accent */
  padding-left: 0.5rem;                /* Space between border and text */
}

.skills-list {
  display: flex;                       /* Arranges skills horizontally */
  flex-wrap: wrap;                     /* Allows skills to wrap to next line if needed */
  gap: 0.5rem;                         /* Space between skill tags */
}

.skill {
  background: rgba(255, 255, 255, 0.2); /* Semi-transparent white background */
  padding: 0.3rem 0.8rem;              /* Internal spacing for skill tags */
  border-radius: 20px;                 /* Rounded pill shape */
  font-size: 0.9rem;                   /* Slightly smaller text */
  border: 1px solid rgba(255, 255, 255, 0.3);  /* Subtle border */
  transition: background 0.3s ease;    /* Smooth hover transition */
}

/* Skill hover effect */
.skill:hover {
  background: rgba(255, 255, 255, 0.3); /* Brighter background on hover */
  cursor: default;                     /* Shows this isn't clickable */
}

/* Social links section */
.social-section {
  margin-top: 1.5rem;                  /* Space above social section */
}

.social-links {
  display: flex;                       /* Arranges links horizontally */
  justify-content: space-around;       /* Evenly distributes links */
  margin-top: 0.8rem;                  /* Space above links */
}

.social-link {
  color: white;                        /* White text color */
  text-decoration: none;               /* Removes underline */
  padding: 0.5rem 1rem;                /* Internal spacing */
  border: 2px solid rgba(255, 255, 255, 0.3);  /* Border around each link */
  border-radius: 25px;                 /* Rounded button shape */
  transition: all 0.3s ease;           /* Smooth transition for all properties */
  font-weight: 500;                    /* Medium font weight */
}

/* Social link hover effects */
.social-link:hover {
  background: rgba(255, 255, 255, 0.2); /* Background color on hover */
  border-color: white;                 /* Solid white border on hover */
  transform: translateY(-2px);         /* Slight upward movement */
}
```

**🧠 CSS Concepts Explained:**
- **Flexbox:** `display: flex` makes items line up horizontally
- **Gradients:** `linear-gradient()` creates smooth color transitions
- **Transitions:** `transition` makes hover effects smooth
- **Box-shadow:** Creates depth and shadow effects
- **Transform:** `translateY()` moves elements up/down

---

## 🔗 PART 8: CONNECT EVERYTHING TOGETHER

### Step 11: Import CSS into BusinessCard Component

**Update `src/components/BusinessCard.jsx` to import the CSS:**

```jsx
import React from 'react'
// Import our CSS file
import '../styles/BusinessCard.css'

function BusinessCard() {
  // ... rest of component stays exactly the same
  return (
    <div className="business-card">
      {/* All the JSX stays the same */}
      <div className="card-header">
        <h2 className="name">Your Name Here</h2>
        <p className="title">React Developer in Training</p>
      </div>

      <div className="contact-info">
        <div className="contact-item">
          <span className="label">Email:</span>
          <span className="value">your.email@example.com</span>
        </div>
        
        <div className="contact-item">
          <span className="label">Phone:</span>
          <span className="value">(555) 123-4567</span>
        </div>
        
        <div className="contact-item">
          <span className="label">Location:</span>
          <span className="value">Your City, State</span>
        </div>
      </div>

      <div className="skills-section">
        <h3 className="section-title">Skills</h3>
        <div className="skills-list">
          <span className="skill">HTML</span>
          <span className="skill">CSS</span>
          <span className="skill">JavaScript</span>
          <span className="skill">React</span>
        </div>
      </div>

      <div className="social-section">
        <h3 className="section-title">Connect</h3>
        <div className="social-links">
          <a href="#" className="social-link">LinkedIn</a>
          <a href="#" className="social-link">GitHub</a>
          <a href="#" className="social-link">Portfolio</a>
        </div>
      </div>
    </div>
  )
}

export default BusinessCard
```

### Step 12: Use BusinessCard in App Component

**Update `src/App.jsx`:**

```jsx
import './App.css'
// Import our BusinessCard component
import BusinessCard from './components/BusinessCard'

function App() {
  return (
    <div className="app">
      {/* Use our BusinessCard component */}
      <BusinessCard />
    </div>
  )
}

export default App
```

### Step 13: Update Global Styles

**Replace everything in `src/App.css` with:**

```css
/* Global App Styles */

* {
  margin: 0;                           /* Removes default margins from all elements */
  padding: 0;                          /* Removes default padding from all elements */
  box-sizing: border-box;              /* Makes padding and borders count inside element width */
}

body {
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;  /* Modern, clean fonts */
  background: linear-gradient(135deg, #74b9ff 0%, #0984e3 100%);  /* Blue gradient background */
  min-height: 100vh;                   /* Full viewport height */
  display: flex;                       /* Flexbox for centering */
  align-items: center;                 /* Centers content vertically */
  justify-content: center;             /* Centers content horizontally */
}

.app {
  width: 100%;                         /* Full width container */
  display: flex;                       /* Flexbox for centering business card */
  justify-content: center;             /* Centers the business card */
  align-items: center;                 /* Centers the business card vertically */
  min-height: 100vh;                   /* Full height */
  padding: 1rem;                       /* Small padding for mobile devices */
}

/* Responsive design for smaller screens */
@media (max-width: 768px) {
  .app {
    padding: 0.5rem;                   /* Less padding on mobile */
  }
}
```

**📸 CHECKPOINT:** Save all files and check your browser. You should now see a beautiful, styled business card with a gradient background and hover effects!

---

## 🎨 PART 9: PERSONALIZE YOUR BUSINESS CARD

### Step 14: Make It Yours!

Now it's time to customize the business card with YOUR information:

**In `src/components/BusinessCard.jsx`, update these sections:**

```jsx
{/* Replace with YOUR information */}
<div className="card-header">
  <h2 className="name">John Doe</h2>  {/* ← Put your name here */}
  <p className="title">Frontend Developer</p>  {/* ← Put your desired title */}
</div>

<div className="contact-info">
  <div className="contact-item">
    <span className="label">Email:</span>
    <span className="value">john.doe@email.com</span>  {/* ← Your email */}
  </div>
  
  <div className="contact-item">
    <span className="label">Phone:</span>
    <span className="value">(555) 123-4567</span>  {/* ← Your phone */}
  </div>
  
  <div className="contact-item">
    <span className="label">Location:</span>
    <span className="value">New York, NY</span>  {/* ← Your location */}
  </div>
</div>
```

**Update your skills to match what you know or are learning:**

```jsx
<div className="skills-list">
  <span className="skill">HTML5</span>
  <span className="skill">CSS3</span>
  <span className="skill">JavaScript</span>
  <span className="skill">React</span>
  <span className="skill">Git</span>  {/* ← Add more skills if you want */}
</div>
```

**📸 CHECKPOINT:** Save and see your personalized business card in the browser!

---

## 🎉 PART 10: UNDERSTANDING WHAT WE BUILT

### Key React Concepts We Used Today:

1. **Components:** `BusinessCard` is a reusable piece of UI
2. **JSX:** HTML-like syntax inside JavaScript functions
3. **Props:** We'll learn about these tomorrow (data passing between components)
4. **Imports/Exports:** How different files share code with each other

### Key Differences Between HTML and JSX:

| HTML | JSX | Why? |
|------|-----|------|
| `class="card"` | `className="card"` | `class` is a reserved word in JavaScript |
| `<img src="pic.jpg">` | `<img src="pic.jpg" />` | All JSX tags must be closed |
| `<!-- comment -->` | `{/* comment */}` | JSX uses JavaScript comment syntax |
| `<div>` content `<div>` | Must have closing `</div>` | All JSX elements must be properly closed |

### Project Structure We Created:

```
src/
├── components/
│   └── BusinessCard.jsx    ← Our main component
├── styles/
│   └── BusinessCard.css    ← Component-specific styles
├── App.jsx                 ← Main app component
├── App.css                 ← Global styles
└── main.jsx                ← React startup file
```

---

## 🚀 WRAP-UP & NEXT STEPS

### What You Accomplished Today:
- ✅ Set up a modern React development environment with Vite
- ✅ Created your first React functional component
- ✅ Learned JSX syntax and how it differs from HTML
- ✅ Applied CSS styling with hover effects and responsive design
- ✅ Built a complete, professional-looking business card
- ✅ Understood React project structure and file organization

### Tomorrow's Preview:
Tomorrow we'll build an **Interactive Recipe Card** where you'll learn:
- **useState hook** - Making your components interactive
- **Event handling** - Responding to clicks and user actions
- **Conditional rendering** - Showing/hiding content based on state

### Optional Homework:
1. **Experiment with colors:** Try changing the gradient colors in the CSS
2. **Add more skills:** Add technologies you're learning or want to learn
3. **Try different fonts:** Change the `font-family` in the CSS
4. **Share your card:** Take a screenshot and share with friends/family!

### Resources for Continued Learning:
- [React Official Documentation](https://react.dev/learn)
- [Vite Guide](https://vite.dev/guide/)
- [MDN Web Docs - CSS](https://developer.mozilla.org/en-US/docs/Web/CSS)

---

## 🏆 Final Project Showcase

**📸 FINAL CHECKPOINT:** Take a screenshot of your completed business card showing:
1. Your personalized information
2. The hover effects working (try hovering over the card and social links)
3. The responsive design (try resizing your browser window)

**Congratulations!** You've successfully built your first React application using modern 2025 development practices. This business card is now part of your growing portfolio and demonstrates your understanding of:

- Modern React setup with Vite
- Component-based architecture
- JSX syntax and best practices  
- CSS styling and animations
- Professional development workflow

Tomorrow we'll make things interactive with React state management!