
# **Overview**
As a software engineer exploring modern web development and TypeScript, I built a Recursive Fibonacci Calculator that demonstrates recursion and dynamic user interaction on a web page. This project represents my hands-on journey to understand how to integrate TypeScript logic with a browser interface using HTML, DOM manipulation, and Bootstrap for styling.

The application calculates Fibonacci numbers recursively and displays the full sequence up to a user-specified number. Users interact through a simple web form, and results are displayed dynamically without page reload.

# **Purpose**
I created this software to practice recursion in TypeScript, strengthen my understanding of type safety, and explore DOM manipulation in a browser environment.

What excites me most is seeing the recursion in action: the program computes each Fibonacci number from the ground up and dynamically generates the sequence. This project also allowed me to practice proper input validation, error handling, and responsive front-end integration with TypeScript code.

This project isn’t just about making the calculator work—it’s about building it properly, with maintainable, type-safe, and scalable TypeScript code.

# **Development Environment**
I developed this software using the following tools and technologies:
- Node.js – JavaScript runtime environment
- TypeScript – Typed superset of JavaScript for better development experience
- Visual Studio Code – Code editor with TypeScript support
- HTTP-Server – Local development server for testing the web interface
- Bootstrap 5 – CSS framework for styling the web form

# **Programming Language**
The programming language used is TypeScript, providing strong typing, improved tooling, and better maintainability compared to plain JavaScript.

# **Useful Websites**
- [TypeScript Documentation](https://www.typescriptlang.org/docs/)
- [MDN Web Docs – DOM](https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model)
- [Bootstrap Documentation](https://getbootstrap.com/docs/5.3/getting-started/introduction/)

# **Notes**
The Fibonacci logic is implemented using recursion, fulfilling the module requirement.
- Users input a number in the web form, and the Fibonacci sequence is displayed dynamically in a Bootstrap alert box.
- Input is validated to ensure only non-negative numbers are accepted.
This project serves as a foundation for future extensions, such as optimizing recursion with memoization, adding asynchronous computation, or integrating with a backend API.

# **Test Project**
Start the HTTP server in your project folder:
*npx http-server*

Open in your browser:
*http://127.0.0.1:8080*

Enter a number in the input form and click Calculate. The Fibonacci sequence will be displayed below the form.

# **Project Structure**
recursive-fibonacci/
│   ├── dist/
│   │   ├── Employee.js
│   │   ├── Person.js
│   │   ├── asyncFunctions.js
│   │   ├── classes.js
│   │   ├── exceptions.js
│   │   ├── fibonacci.js
│   │   ├── index.js
│   │   ├── lists.js
│   │   ├── recursion.js
│   │   └── web.js
│   ├── src/
│   │   ├── Employee.ts
│   │   ├── Person.ts
│   │   ├── asyncFunctions.ts
│   │   ├── classes.ts
│   │   ├── exceptions.ts
│   │   ├── fibonacci.ts
│   │   ├── index.ts
│   │   ├── lists.ts
│   │   ├── recursion.ts
│   │   └── web.ts
│   ├── README.md
│   ├── index.html
│   ├── jest.config.js
│   ├── package.json
│   ├── tsconfig.json
│   └── tslint.json
