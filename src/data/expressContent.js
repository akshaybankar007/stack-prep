export const expressContent = {
  1: {
    title: "What is Express.js and why is it used?",
    sections: [{ heading: "The De Facto Node Framework", text: "Express is a fast, unopinionated, minimalist web framework for Node.js. Raw Node.js `http` modules require manually parsing URLs, handling headers, and writing complex routing logic. Express abstracts this away, providing a robust set of features for web and mobile applications, making API development significantly faster." }]
  },
  2: {
    title: "Express.js vs Node.js",
    sections: [{ heading: "Framework vs Runtime", text: "Node.js is the runtime environment that executes JavaScript on the server. Express.js is a library (framework) built *on top of* Node.js. You can build a server with just Node.js, but Express provides the routing architecture, middleware support, and simplified request/response handling that raw Node lacks." }]
  },
  3: {
    title: "Creating an Express Server",
    sections: [{ heading: "Initialization", text: "A basic Express server requires importing the module, initializing the `app` object, defining at least one route, and calling `app.listen()` to bind it to a port.", code: `const express = require('express');\nconst app = express();\n\napp.get('/', (req, res) => {\n  res.send('Hello World!');\n});\n\napp.listen(3000, () => console.log('Server running on port 3000'));` }]
  },
  4: {
    title: "Routing Basics",
    sections: [{ heading: "HTTP Methods", text: "Routing refers to determining how an application responds to a client request to a particular endpoint. Express maps directly to HTTP verbs: `app.get()` for reading, `app.post()` for creating, `app.put()` for updating, and `app.delete()` for removing data." }]
  },
  5: {
    title: "Express Router",
    sections: [{ heading: "Modularizing Routes", text: "As apps grow, putting all routes in `server.js` becomes unmaintainable. `express.Router()` creates modular, mountable route handlers.", code: `// userRoutes.js\nconst express = require('express');\nconst router = express.Router();\n\nrouter.get('/profile', (req, res) => res.send('Profile'));\nmodule.exports = router;\n\n// server.js\nconst userRoutes = require('./userRoutes');\napp.use('/users', userRoutes); // Mounts router at /users/profile` }]
  },
  6: {
    title: "Request and Response Objects",
    sections: [{ heading: "req and res", text: "The `req` object represents the HTTP request and has properties for the query string, parameters, body, and headers. The `res` object represents the HTTP response. Use `res.send()` for plain text/HTML, `res.json()` for formatting JSON APIs, and `res.status(404)` to set HTTP status codes." }]
  },
  7: {
    title: "Route Parameters (req.params)",
    sections: [{ heading: "Dynamic URL Segments", text: "Route parameters are named URL segments used to capture values at specific positions. They are prefixed with a colon (`:`).", code: `app.get('/users/:userId/books/:bookId', (req, res) => {\n  // GET /users/34/books/8989\n  res.json({ user: req.params.userId, book: req.params.bookId });\n});` }]
  },
  8: {
    title: "Query Parameters (req.query)",
    sections: [{ heading: "URL Query Strings", text: "Query strings appear after the `?` in a URL and are used for filtering, sorting, or pagination (e.g., `/search?keyword=express&sort=asc`). Express automatically parses these into the `req.query` object.", code: `app.get('/search', (req, res) => {\n  const { keyword, sort } = req.query;\n  res.send(\`Searching for \${keyword} sorted \${sort}\`);\n});` }]
  },
  9: {
    title: "Request Body (req.body)",
    sections: [{ heading: "Parsing Payloads", text: "To handle POST/PUT requests containing JSON or form data, you must explicitly use middleware to parse the body. Without it, `req.body` will be `undefined`.", code: `app.use(express.json()); // Parses application/json\napp.use(express.urlencoded({ extended: true })); // Parses form data\n\napp.post('/login', (req, res) => {\n  console.log(req.body.email, req.body.password);\n});` }]
  },
  10: {
    title: "Middleware Concept",
    sections: [{ heading: "The Core of Express", text: "Middleware functions are functions that have access to the request object (`req`), the response object (`res`), and the `next` function in the application's request-response cycle. They can execute code, modify req/res, end the cycle, or call `next()` to pass control to the next middleware." }]
  },
  11: {
    title: "Types of Middleware",
    sections: [{ heading: "Categorization", text: "1. Application-level: Bound to `app` using `app.use()`. Runs on every request.\n2. Router-level: Bound to an `express.Router()` instance.\n3. Error-handling: Takes 4 arguments `(err, req, res, next)`.\n4. Built-in: Provided by Express (e.g., `express.json`).\n5. Third-party: npm packages (e.g., `cors`)." }]
  },
  12: {
    title: "Built-in Middleware",
    sections: [{ heading: "Static Files and Parsing", text: "`express.static('public')` serves static files (images, CSS files, JS files) directly from a directory without needing custom routes. `express.json()` parses incoming JSON payloads." }]
  },
  13: {
    title: "Third-party Middleware",
    sections: [{ heading: "Security and Logging", text: "- `cors`: Enables Cross-Origin Resource Sharing.\n- `morgan`: HTTP request logger (great for debugging).\n- `helmet`: Secures Express apps by setting various HTTP headers.\n- `compression`: Compresses response bodies for faster load times." }]
  },
  14: {
    title: "Custom Middleware",
    sections: [{ heading: "Creating Your Own", text: "You can write middleware to verify authentication or log data. If you don't call `next()`, the request will hang indefinitely.", code: `const requestLogger = (req, res, next) => {\n  console.log(\`\${req.method} request to \${req.url}\`);\n  next(); // Crucial: passes control to the next function\n};\napp.use(requestLogger);` }]
  },
  15: {
    title: "Error Handling Middleware",
    sections: [{ heading: "Centralized Error Catching", text: "Error handling middleware is defined uniquely with four arguments. It should be placed at the very end of your middleware stack. If you pass an argument to `next(err)`, Express will skip all remaining normal middleware and jump straight to the error handler.", code: `app.use((err, req, res, next) => {\n  console.error(err.stack);\n  res.status(500).json({ error: 'Something broke!' });\n});` }]
  },
  16: {
    title: "REST API Design Principles",
    sections: [{ heading: "Best Practices", text: "1. Use nouns, not verbs in URLs (`/users`, not `/getUsers`).\n2. Use standard HTTP methods accurately (GET to read, POST to create).\n3. Use plural nouns (`/books/123`, not `/book/123`).\n4. Return proper HTTP status codes (201 Created, 400 Bad Request, 401 Unauthorized, 404 Not Found, 500 Server Error)." }]
  },
  17: {
    title: "Connecting Express with MongoDB",
    sections: [{ heading: "Mongoose Integration", text: "Mongoose is an ODM (Object Data Modeling) library. You connect to it once in your server setup.", code: `const mongoose = require('mongoose');\nmongoose.connect(process.env.MONGO_URI, {\n  useNewUrlParser: true,\n  useUnifiedTopology: true\n}).then(() => console.log('MongoDB Connected'))\n  .catch(err => console.log(err));` }]
  },
  18: {
    title: "Validation and Sanitization",
    sections: [{ heading: "Express-Validator", text: "Never trust client data. `express-validator` allows you to validate inputs directly in your route definition before hitting the controller logic.", code: `const { body, validationResult } = require('express-validator');\n\napp.post('/register', [\n  body('email').isEmail().normalizeEmail(),\n  body('password').isLength({ min: 6 })\n], (req, res) => {\n  const errors = validationResult(req);\n  if (!errors.isEmpty()) return res.status(400).json({ errors: errors.array() });\n  // Proceed with registration...\n});` }]
  },
  19: {
    title: "File Uploads with Multer",
    sections: [{ heading: "Handling Multipart Data", text: "Express cannot parse `multipart/form-data` natively. Multer is a middleware specifically designed for this, saving files to disk or memory.", code: `const multer = require('multer');\nconst upload = multer({ dest: 'uploads/' });\n\n// Expects a field named 'avatar' in the form data\napp.post('/profile', upload.single('avatar'), (req, res) => {\n  res.json({ fileInfo: req.file });\n});` }]
  },
  20: {
    title: "Authentication and Authorization",
    sections: [{ heading: "JWT Middleware", text: "Authentication verifies WHO the user is. Authorization verifies WHAT they can access. You protect routes by creating middleware that verifies a JSON Web Token (JWT) sent in the HTTP headers.", code: `const jwt = require('jsonwebtoken');\n\nconst protect = (req, res, next) => {\n  const token = req.header('Authorization')?.split(' ')[1];\n  if (!token) return res.status(401).json({ msg: 'No token provided' });\n  \n  try {\n    req.user = jwt.verify(token, process.env.JWT_SECRET);\n    next();\n  } catch (err) {\n    res.status(401).json({ msg: 'Invalid Token' });\n  }\n};` }]
  },
  21: {
    title: "Environment Variables and Project Structure",
    sections: [{ heading: "MVC Architecture", text: "For scalability, use the Model-View-Controller (MVC) pattern. Separate your files into `/routes` (endpoints), `/controllers` (business logic), `/models` (database schemas), and `/middleware` (custom functions). Use `dotenv` to keep secrets out of source code." }]
  },
  22: {
    title: "CORS (Cross-Origin Resource Sharing)",
    sections: [{ heading: "Browser Security Policy", text: "By default, browsers block frontend applications (e.g., React on port 5173) from requesting APIs on a different origin (e.g., Express on port 3000). You must install the `cors` package and use it as middleware to whitelist your frontend URL." }]
  }
};