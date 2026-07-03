export const nodeContent = {
  1: {
    title: "Introduction to Node.js",
    sections: [
      {
        heading: "What is Node.js?",
        text: "Node.js is an open-source, cross-platform JavaScript runtime environment built on Chrome's V8 JavaScript engine. It allows developers to execute JavaScript on the server side, outside of a web browser. Node.js uses an event-driven, non-blocking I/O model that makes it lightweight and highly efficient for data-intensive real-time applications."
      }
    ]
  },
  2: {
    title: "Node.js vs JavaScript",
    sections: [
      {
        heading: "Environment Differences",
        text: "JavaScript is the programming language, originally restricted to the browser to manipulate the DOM (`window`, `document`). Node.js is a C++ program that embeds the V8 engine to run JavaScript on the OS. Node.js lacks browser APIs but provides server-specific APIs like `fs` (file system), `http`, and `process`."
      }
    ]
  },
  3: {
    title: "Working of Node.js",
    sections: [
      {
        heading: "V8 Engine and libuv",
        text: "Node.js relies on two main dependencies: the V8 engine (which compiles JS into machine code) and libuv (a C library that implements the Node.js event loop and asynchronous I/O). When you run a script, V8 executes the synchronous code, while libuv handles asynchronous operations by offloading them to the OS or a thread pool."
      }
    ]
  },
  4: {
    title: "Node.js Architecture",
    sections: [
      {
        heading: "Single Thread + Thread Pool",
        text: "Node.js operates on a Single-Threaded Event Loop architecture. However, it is not strictly single-threaded. While your JavaScript code executes on a single main thread, libuv maintains a hidden Thread Pool (default 4 threads) to handle heavy tasks like file system operations, cryptography, and DNS lookups in the background without blocking the main thread."
      }
    ]
  },
  5: {
    title: "Why Node.js is Single-Threaded",
    sections: [
      {
        heading: "Efficiency over Concurrency",
        text: "Traditional web servers (like Apache) spawn a new thread for every incoming request, consuming significant RAM (context switching). Node's single thread handles thousands of concurrent requests by delegating I/O tasks to the OS asynchronously. It is highly efficient for I/O-bound tasks but terrible for CPU-bound tasks (like video encoding), which will block the single thread."
      }
    ]
  },
  6: {
    title: "npm and package.json",
    sections: [
      {
        heading: "Package Management",
        text: "NPM (Node Package Manager) is the default registry for Node.js. `package.json` is the manifest file containing metadata, scripts, and dependency trees. \n- `dependencies`: Required for the app to run in production.\n- `devDependencies`: Only needed for local development and testing (e.g., Jest, Nodemon)."
      }
    ]
  },
  7: {
    title: "CommonJS vs ES Modules",
    sections: [
      {
        heading: "Module Systems",
        text: "Historically, Node.js used CommonJS (`require()` and `module.exports`), which is synchronous. Modern Node supports standard ES Modules (`import` and `export`), which are asynchronous and statically analyzed. To use ES Modules in Node, you must add `\"type\": \"module\"` in your `package.json`.",
        code: `// CommonJS
const fs = require('fs');
module.exports = { myFunc };

// ES Modules
import fs from 'fs';
export const myFunc = () => {};`
      }
    ]
  },
  8: {
    title: "Synchronous vs Asynchronous Programming",
    sections: [
      {
        heading: "Execution Flow",
        text: "Synchronous code executes line-by-line; if one line takes 5 seconds, the entire application freezes for 5 seconds (Blocking). Asynchronous code initiates a task and registers a callback/promise. Node continues executing subsequent lines immediately (Non-blocking) and handles the async result once it completes."
      }
    ]
  },
  9: {
    title: "Non-Blocking I/O",
    sections: [
      {
        heading: "The Core Philosophy",
        text: "I/O refers to Input/Output (reading files, querying databases, network requests). In Node, I/O is non-blocking. When Node queries a database, it does not wait for the response. It moves to the next request. When the database responds, the event loop picks up the callback and executes it."
      }
    ]
  },
  10: {
    title: "Event Loop and libuv",
    sections: [
      {
        heading: "The Heart of Node.js",
        text: "The Event Loop continuously checks if there are pending tasks. It has distinct phases, executed in order:\n1. Timers: Executes `setTimeout` and `setInterval` callbacks.\n2. Pending Callbacks: Executes I/O callbacks deferred to the next loop iteration.\n3. Poll: Retrieves new I/O events and executes their callbacks.\n4. Check: Executes `setImmediate` callbacks.\n5. Close Callbacks: Executes close events (e.g., `socket.on('close')`)."
      }
    ]
  },
  11: {
    title: "Callbacks, Promises, and Async/Await",
    sections: [
      {
        heading: "Evolution of Async Patterns",
        text: "Node originally relied entirely on callbacks (passing a function to be executed later). This led to unreadable code. Promises were introduced to represent future values, allowing chaining (`.then()`). Async/Await is syntax sugar over promises, making async code read sequentially.",
        code: `// Async/Await (Modern)
async function readData() {
  try {
    const data = await fs.promises.readFile('file.txt', 'utf8');
    console.log(data);
  } catch (err) {
    console.error(err);
  }
}`
      }
    ]
  },
  12: {
    title: "Callback Hell and How to Avoid It",
    sections: [
      {
        heading: "The Pyramid of Doom",
        text: "Callback hell occurs when multiple asynchronous operations depend on each other, resulting in deeply nested, unmaintainable code shaped like a pyramid. It is avoided by returning Promises or using Async/Await, which flattens the execution structure."
      }
    ]
  },
  13: {
    title: "Event-Driven Programming",
    sections: [
      {
        heading: "The Observer Pattern",
        text: "Node heavily utilizes the Observer design pattern. Objects (Emitters) periodically emit named events that cause function objects (Listeners) to be called. For example, a web server emits a 'request' event every time a user hits the endpoint."
      }
    ]
  },
  14: {
    title: "EventEmitter and Events Module",
    sections: [
      {
        heading: "Creating Custom Events",
        text: "The core `events` module provides the `EventEmitter` class. You can instantiate it, listen for events using `.on()`, and trigger them using `.emit()`.",
        code: `const EventEmitter = require('events');
const myEmitter = new EventEmitter();

myEmitter.on('userJoined', (name) => {
  console.log(\`Welcome, \${name}!\`);
});

myEmitter.emit('userJoined', 'Akshay');`
      }
    ]
  },
  15: {
    title: "Built-in Modules Overview",
    sections: [
      {
        heading: "Core Modules",
        text: "Node ships with modules that don't require NPM installation. \n- `fs`: File system interactions.\n- `path`: Cross-platform file path manipulation.\n- `http`: Building web servers.\n- `crypto`: Hashing and encryption.\n- `os`: Operating system data (memory, CPUs)."
      }
    ]
  },
  16: {
    title: "File System (fs) Module",
    sections: [
      {
        heading: "Reading and Writing Files",
        text: "The `fs` module provides both synchronous (`readFileSync`) and asynchronous (`readFile`) methods. NEVER use sync methods in a web server context, as they block the main thread for all users.",
        code: `const fs = require('fs').promises;

async function processFile() {
  await fs.writeFile('log.txt', 'Server started');
  const content = await fs.readFile('log.txt', 'utf8');
  console.log(content);
}`
      }
    ]
  },
  17: {
    title: "Path Module",
    sections: [
      {
        heading: "Handling Directory Paths",
        text: "Mac/Linux use forward slashes (`/`), Windows uses backslashes (`\\`). The `path` module resolves this. `path.join()` connects strings into a safe path. `__dirname` provides the absolute path to the current executing directory."
      }
    ]
  },
  18: {
    title: "HTTP Module and createServer()",
    sections: [
      {
        heading: "Building a Raw Server",
        text: "The `http` module allows Node to transfer data over HTTP. `createServer` takes a callback with `request` and `response` objects. (Express.js is built entirely on top of this module).",
        code: `const http = require('http');

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello World\\n');
});

server.listen(3000, () => console.log('Server running'));`
      }
    ]
  },
  19: {
    title: "Process Object and Environment Variables",
    sections: [
      {
        heading: "Accessing Execution Context",
        text: "The global `process` object provides information about, and control over, the current Node.js process. `process.env` is used to access environment variables (like Database URIs or API keys) keeping sensitive data out of source code."
      }
    ]
  },
  20: {
    title: "Module Exports",
    sections: [
      {
        heading: "Encapsulation",
        text: "Every file in Node is treated as a separate module. Variables and functions are completely private to that file unless explicitly assigned to `module.exports`. When another file calls `require()`, it receives exactly what was exported."
      }
    ]
  },
  21: {
    title: "Streams and Buffers",
    sections: [
      {
        heading: "Handling Massive Data",
        text: "Reading a 5GB video file into memory using `fs.readFile` will crash your server (RAM exhaustion). Streams solve this by reading data chunk by chunk (Buffer). Types of streams: Readable, Writable, Duplex (both), Transform (modifies data as it passes).",
        code: `const fs = require('fs');
// Reads chunk by chunk, extremely memory efficient
const readStream = fs.createReadStream('massive-video.mp4');
const writeStream = fs.createWriteStream('copy.mp4');
readStream.pipe(writeStream);`
      }
    ]
  },
  22: {
    title: "Error Handling in Node.js",
    sections: [
      {
        heading: "Preventing Server Crashes",
        text: "Synchronous errors are caught with `try/catch`. Asynchronous errors must be caught in `.catch()` or the error-first callback pattern `(err, data)`. Unhandled promise rejections will eventually crash the Node process. Use `process.on('uncaughtException')` as an absolute last resort to log errors before exiting."
      }
    ]
  },
  23: {
    title: "REST API Basics",
    sections: [
      {
        heading: "Representational State Transfer",
        text: "An architectural style for APIs. Uses standard HTTP verbs: GET (read), POST (create), PUT (update entire resource), PATCH (update partial resource), DELETE (remove). APIs must be stateless (no client context stored on server between requests)."
      }
    ]
  },
  24: {
    title: "process.nextTick() vs setImmediate()",
    sections: [
      {
        heading: "Microtasks vs Check Phase",
        text: "`process.nextTick()` adds a callback to the Microtask Queue, meaning it executes IMMEDIATELY after the current operation finishes, before the Event Loop continues. `setImmediate()` places a callback in the Check phase of the Event Loop, executing after the current Poll phase completes."
      }
    ]
  },
  25: {
    title: "setImmediate() vs setTimeout()",
    sections: [
      {
        heading: "Execution Order Nuance",
        text: "If both are called in the main module, the execution order is non-deterministic depending on machine performance. However, if both are called inside an I/O cycle (like an `fs.readFile` callback), `setImmediate()` is GUARANTEED to execute first because the Event Loop moves directly from the Poll phase to the Check phase."
      }
    ]
  },
  26: {
    title: "Child Processes, Clusters, and Worker Threads",
    sections: [
      {
        heading: "Scaling Node.js",
        text: "Because Node is single-threaded, it normally utilizes only 1 CPU core. \n- Child Processes: Spawn entirely new OS processes (e.g., running a python script).\n- Cluster: Forks the main Node process to utilize all CPU cores, sharing the same server port.\n- Worker Threads: Best for CPU-intensive tasks, allows executing JS in parallel threads sharing memory (ArrayBuffers)."
      }
    ]
  },
  27: {
    title: "Memory Management and Garbage Collection",
    sections: [
      {
        heading: "V8 Heap Constraints",
        text: "V8 strictly limits memory usage (historically ~1.5GB on 64-bit systems). If an app leaks memory (e.g., storing items endlessly in a global array), it throws a `Fatal error: CALL_AND_RETRY_LAST Allocation failed - JavaScript heap out of memory`. Garbage collection automatically reclaims memory by finding unreferenced objects."
      }
    ]
  },
  28: {
    title: "Performance Optimization",
    sections: [
      {
        heading: "Best Practices",
        text: "1. Always use asynchronous, non-blocking APIs. \n2. Use Streams for large payloads. \n3. Enable gzip compression (via Express middleware). \n4. Implement caching (Redis). \n5. Run Node behind a Reverse Proxy (Nginx) to handle static files and SSL termination."
      }
    ]
  },
  29: {
    title: "Caching (Redis Basics)",
    sections: [
      {
        heading: "Reducing Database Load",
        text: "Redis is an in-memory key-value store. Instead of querying MongoDB for a user's profile on every request, Node fetches it once, stores it in Redis with an expiration time (TTL), and serves subsequent requests directly from RAM (milliseconds vs seconds)."
      }
    ]
  },
  30: {
    title: "Commonly Used Node.js Libraries",
    sections: [
      {
        heading: "The Backend Ecosystem",
        text: "- Express/Fastify: Web frameworks.\n- Mongoose/Prisma: Database ORMs.\n- Bcrypt/Argon2: Password hashing.\n- JsonWebToken (JWT): Stateless authentication.\n- Dotenv: Environment variable injection.\n- Multer: Handling multipart/form-data (file uploads).\n- Winston/Morgan: Server logging."
      }
    ]
  }
};