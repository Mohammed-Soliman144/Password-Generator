# Password Generator

A lightweight and customizable password generator built with **HTML5, CSS3, and Vanilla JavaScript**. Generate random passwords by choosing your preferred length and character types, evaluate password length through a visual indicator, and copy generated passwords directly to your clipboard.

## 🚀 Live Demo

[View Password Generator](https://mohammed-soliman144.github.io/Password-Generator/)

## ✨ Features

- **Customizable Password Length:** Adjust the password length from 6 to 24 characters.
- **Character Selection:** Choose which character types to include:
  - Uppercase letters (A–Z)
  - Lowercase letters (a–z)
  - Numbers (0–9)
  - Special characters (!@#$%^&*...)
- **Password Generation:** Generate random passwords based on selected preferences.
- **Copy to Clipboard:** Copy generated passwords with a single click using the Clipboard API.
- **Password Length Indicator:** View a visual indicator representing the generated password's length category.
- **Input Validation:** Prevent generation when the length or character selection is invalid.
- **Responsive Interface:** Use the application across different screen sizes.

## 🛠️ Technologies Used

- HTML5
- CSS3
- JavaScript (ES6+)
- DOM Manipulation
- Browser Clipboard API
- CSS Variables
- Regular Expressions

## 📂 Project Structure

```text
Password-Generator/
│
├── index.html
│
└── src/
    ├── js/
    │   └── main.js
    │
    └── styles/
        └── globals.css
        └── reset.css
        └── tokens.css
        └── utilities.css
```

## ⚙️ Getting Started

### Prerequisites

- A modern web browser.
- Git installed on your machine (optional).

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/Mohammed-Soliman144/Password-Generator.git
   ```

2. Navigate to the project directory:

   ```bash
   cd Password-Generator
   ```

3. Open `index.html` in your browser.

Alternatively, use the Live Server extension in Visual Studio Code.

## 🧠 Key Concepts Practiced

- DOM selection and manipulation.
- JavaScript functions and parameter handling.
- Event handling and user interactions.
- Array creation and iteration.
- Conditional logic and input validation.
- Regular expressions for character classification.
- Browser Clipboard API.
- Dynamic UI updates and visual feedback.

## 🔒 Security Note

This project is a learning-focused password generator. Its current implementation uses JavaScript's `Math.random()` for password generation, which is not cryptographically secure.

The length-based indicator is also a simplified visual estimate, not a comprehensive password-strength assessment.

For generating passwords intended for sensitive accounts, a cryptographically secure random number generator such as the Web Crypto API (`crypto.getRandomValues()`) should be implemented.

## 👨‍💻 Author

**Muhammed Soliman**

- GitHub: [@Mohammed-Soliman144](https://github.com/Mohammed-Soliman144)
- LinkedIn: [Muhammad Soliman](https://www.linkedin.com/in/muhammad-soliman144/)
- Portfolio: [Visit Portfolio](https://muhammed-soliman-portfolio.vercel.app/)

---

If you find this project useful, consider giving it a ⭐ on GitHub!