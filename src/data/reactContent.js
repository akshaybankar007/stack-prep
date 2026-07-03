export const reactContent = {
  1: {
    title: "Introduction to React",
    sections: [
      {
        heading: "What is React?",
        text: "React is a declarative, efficient, and flexible JavaScript library for building user interfaces, developed by Facebook. It allows you to compose complex UIs from small and isolated pieces of code called 'components'."
      },
      {
        heading: "Declarative vs Imperative UI",
        text: "In imperative programming (like vanilla JS DOM manipulation), you describe exactly HOW to change the UI step-by-step (e.g., 'find this element, create a child, add a class, append it'). In declarative programming (React), you describe WHAT the UI should look like based on the current data state. When the state changes, React efficiently updates and renders just the right components."
      }
    ]
  },
  2: {
    title: "Single Page Applications (SPA)",
    sections: [
      {
        heading: "The SPA Architecture",
        text: "A Single Page Application loads a single HTML document on the initial request. As the user navigates, the page does not reload. Instead, JavaScript intercepts the navigation, fetches necessary data (usually via JSON APIs), and dynamically rewrites the current web page."
      },
      {
        heading: "SPA vs Multi-Page Applications (MPA)",
        text: "MPAs request a fully rendered HTML page from the server for every link clicked, which can be slow and jarring. SPAs provide a seamless, app-like experience with faster subsequent load times, though they can suffer from slower initial loads and harder SEO optimization without Server-Side Rendering (SSR)."
      }
    ]
  },
  3: {
    title: "JSX vs HTML",
    sections: [
      {
        heading: "Syntax Extension for JavaScript",
        text: "JSX (JavaScript XML) is a syntax extension that looks like HTML but lives inside JavaScript. Under the hood, Babel compiles JSX down to `React.createElement()` calls. It is not required to use React, but it makes writing components vastly more readable."
      },
      {
        heading: "Crucial Differences from HTML",
        text: "1. class becomes className (because class is a reserved JS keyword).\n2. for becomes htmlFor.\n3. All tags must be strictly closed (e.g., `<br />`, `<img />`).\n4. Inline styles accept JS objects with camelCased properties, not strings.\n5. You can embed JavaScript expressions directly inside JSX using curly braces `{}`.",
        code: `const element = (
  <div className="container" style={{ backgroundColor: 'blue', marginTop: '10px' }}>
    <img src="logo.png" alt="Logo" />
    <h1>Hello, {user.name}!</h1>
  </div>
);`
      }
    ]
  },
  4: {
    title: "Functional vs Class Components",
    sections: [
      {
        heading: "Class Components (The Old Way)",
        text: "Before React 16.8, if a component needed to manage state or utilize lifecycle methods, it had to be written as an ES6 Class extending `React.Component`. They require a `render()` method and heavily rely on the `this` keyword."
      },
      {
        heading: "Functional Components (The Modern Standard)",
        text: "Functional components are plain JavaScript functions that accept props and return JSX. With the introduction of Hooks in 16.8, functional components can now manage state and side effects, entirely replacing the need for classes. They are cleaner, easier to test, and lack the confusion of `this` binding.",
        code: `// Class Component
class Welcome extends React.Component {
  render() {
    return <h1>Hello, {this.props.name}</h1>;
  }
}

// Functional Component
const Welcome = (props) => {
  return <h1>Hello, {props.name}</h1>;
};`
      }
    ]
  },
  5: {
    title: "Stateless vs Stateful Components",
    sections: [
      {
        heading: "Stateful (Smart) Components",
        text: "These components manage their own internal state (using `useState` or `useReducer`). They dictate how things work, fetch data, and contain business logic."
      },
      {
        heading: "Stateless (Dumb/Presentational) Components",
        text: "These components do not have any internal state. They receive data and callbacks exclusively via props and are only concerned with how things look. Separating smart and dumb components makes your codebase highly reusable."
      }
    ]
  },
  6: {
    title: "Props and Data Passing",
    sections: [
      {
        heading: "Unidirectional Data Flow",
        text: "In React, data flows strictly in one direction: downwards, from parent to child. You pass data to a child component using custom attributes called 'props' (properties)."
      },
      {
        heading: "Props are Read-Only",
        text: "A component must never modify its own props. Whether you declare a component as a function or a class, it must act like a pure function with respect to its props.",
        code: `// Parent Component
function App() {
  return <UserProfile name="Akshay" role="Software Engineer" />;
}

// Child Component (Destructuring props directly)
function UserProfile({ name, role }) {
  // name = "Pranav"; // Error! Props cannot be mutated.
  return (
    <div className="card">
      <h2>{name}</h2>
      <p>{role}</p>
    </div>
  );
}`
      }
    ]
  },
  7: {
    title: "State vs Props",
    sections: [
      {
        heading: "Core Differences",
        text: "- Props: Injected into the component by its parent. Immutable (read-only) from the perspective of the receiving component.\n- State: Local to the component. Mutable via setter functions. When state changes, the component re-renders to reflect the new data."
      },
      {
        heading: "Lifting State Up",
        text: "If two sibling components need to share the same state, you must move that state up to their closest common parent. The parent then passes the state down to the children via props."
      }
    ]
  },
  8: {
    title: "Key Attribute in Lists",
    sections: [
      {
        heading: "Why Keys are Mandatory",
        text: "When rendering lists of elements via `.map()`, React requires a unique `key` prop for each item. Keys help React identify which items have changed, been added, or been removed. This optimizes the Reconciliation process (React's diffing algorithm) so it doesn't re-render the entire list unnecessarily."
      },
      {
        heading: "The Danger of Array Indexes as Keys",
        text: "Never use the array `index` as a key if the list items can be reordered, inserted, or deleted. If an item is deleted from the middle, the indexes of all subsequent items shift. React will misidentify the elements, leading to severe UI bugs and lost state.",
        code: `const users = [{ id: 101, name: "Devi" }, { id: 102, name: "Pranav" }];

// Correct usage: using a stable, unique ID
const userList = users.map(user => (
  <li key={user.id}>{user.name}</li>
));`
      }
    ]
  },
  9: {
    title: "Controlled vs Uncontrolled Components",
    sections: [
      {
        heading: "Controlled Components",
        text: "A form element whose value is entirely controlled by React state. The `value` prop is tied to a state variable, and an `onChange` handler updates that state on every keystroke. This provides instantaneous validation and a single source of truth."
      },
      {
        heading: "Uncontrolled Components",
        text: "A form element where the DOM itself maintains the internal state. You use a React `ref` to pull the value from the DOM only when needed (e.g., upon form submission).",
        code: `// Controlled Component
function ControlledInput() {
  const [text, setText] = useState("");
  return (
    <input 
      type="text" 
      value={text} 
      onChange={(e) => setText(e.target.value)} 
    />
  );
}`
      }
    ]
  },
  10: {
    title: "Component Lifecycle & useEffect",
    sections: [
      {
        heading: "The Three Phases",
        text: "Every React component goes through three main phases:\n1. Mounting: Created and inserted into the DOM.\n2. Updating: Re-rendered due to state or prop changes.\n3. Unmounting: Removed from the DOM."
      },
      {
        heading: "Mapping to Functional Components",
        text: "In Class components, these phases were handled by `componentDidMount`, `componentDidUpdate`, and `componentWillUnmount`. In modern functional components, the `useEffect` hook handles all three paradigms based on its dependency array."
      }
    ]
  },
  11: {
    title: "Event Handling & Conditional Rendering",
    sections: [
      {
        heading: "Synthetic Events",
        text: "React wraps native browser events in its own 'SyntheticEvent' object to ensure cross-browser compatibility. Event handlers are passed as camelCased props (e.g., `onClick`, `onSubmit`) rather than lowercase strings."
      },
      {
        heading: "Conditional Rendering Techniques",
        text: "You cannot use standard `if/else` statements inside JSX. Instead, use:\n1. Ternary Operator (`condition ? true : false`) for either/or logic.\n2. Logical AND (`condition && JSX`) to render something only if true.",
        code: `function Dashboard({ isLoggedIn, userRole }) {
  return (
    <div>
      {/* Logical AND */}
      {isLoggedIn && <h1>Welcome back!</h1>}
      
      {/* Ternary */}
      {userRole === "admin" ? <AdminPanel /> : <UserPanel />}
    </div>
  );
}`
      }
    ]
  },
  12: {
    title: "Forms in React",
    sections: [
      {
        heading: "Handling Submission",
        text: "In traditional HTML, a form submission navigates to a new page. In a React SPA, you must prevent this default behavior to handle the data locally or send it via an API call."
      },
      {
        heading: "The onSubmit Handler",
        text: "Attach the `onSubmit` event to the `<form>` tag, not the submit button. Inside the handler, immediately call `e.preventDefault()`.",
        code: `function LoginForm() {
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault(); // Stops page reload
    console.log("Submitting:", email);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input value={email} onChange={e => setEmail(e.target.value)} />
      <button type="submit">Login</button>
    </form>
  );
}`
      }
    ]
  },
  13: {
    title: "useState Hook",
    sections: [
      {
        heading: "Initializing State",
        text: "`useState` returns an array with exactly two elements: the current state value, and a function to update it. We use array destructuring to assign them variables."
      },
      {
        heading: "Updater Functions and Asynchronicity",
        text: "State updates in React are asynchronous. If you need to update a state based on its previous value (e.g., a counter), you MUST pass an updater function to the setter, rather than the raw value. This guarantees you are working with the most recent state.",
        code: `const [count, setCount] = useState(0);

// Bad (Might batch and fail if called rapidly)
const handleBadClick = () => setCount(count + 1);

// Good (Uses previous state safely)
const handleGoodClick = () => setCount(prevCount => prevCount + 1);`
      }
    ]
  },
  14: {
    title: "useEffect Hook",
    sections: [
      {
        heading: "Handling Side Effects",
        text: "Side effects are operations that reach outside the component (fetching data, DOM manipulation, timers). `useEffect` accepts a callback function and an optional Dependency Array."
      },
      {
        heading: "The Dependency Array Rules",
        text: "- No array: Runs on EVERY render (rarely what you want).\n- Empty array `[]`: Runs exactly ONCE on mount.\n- Array with variables `[data, id]`: Runs on mount AND whenever `data` or `id` change."
      },
      {
        heading: "Cleanup Function",
        text: "If your effect sets up a subscription, timer, or event listener, it must return a cleanup function to prevent memory leaks when the component unmounts or before the effect re-runs.",
        code: `useEffect(() => {
  const timer = setInterval(() => {
    console.log("Tick");
  }, 1000);

  // Cleanup function runs on unmount
  return () => clearInterval(timer);
}, []); // Empty array = Mount only`
      }
    ]
  },
  15: {
    title: "Props Drilling",
    sections: [
      {
        heading: "The Problem",
        text: "Props drilling occurs when you need to pass data from a high-level parent component down to a deeply nested child component. You end up passing the prop through multiple intermediate components that do not actually need the data, but only serve as a conduit."
      },
      {
        heading: "The Symptoms",
        text: "Code becomes brittle and hard to refactor. If you rename a prop, you must change it in 5 different files. The solution to props drilling is either React Context API (`useContext`) or state management libraries like Redux."
      },
      16: {
    title: "Context API & useContext",
    sections: [
      {
        heading: "Global State Management",
        text: "The Context API provides a way to share values like user authentication, themes, or preferred language across the entire component tree without passing props down manually at every level."
      },
      {
        heading: "Provider and Consumer",
        text: "You create a context using `createContext()`. The `Provider` component wraps your application and accepts a `value` prop. Any nested component can then read that value using the `useContext` hook.",
        code: `import { createContext, useContext, useState } from 'react';

const ThemeContext = createContext();

export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState('dark');
  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

// Deeply nested child component
function ThemedButton() {
  const { theme, setTheme } = useContext(ThemeContext);
  return (
    <button onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}>
      Current Theme: {theme}
    </button>
  );
}`
      }
    ]
  },
  17: {
    title: "useRef Hook",
    sections: [
      {
        heading: "Persisting Values Without Re-rendering",
        text: "`useRef` returns a mutable ref object whose `.current` property is initialized to the passed argument. Crucially, updating `.current` does NOT trigger a component re-render (unlike `useState`). This makes it perfect for storing mutable values that don't affect the visual output."
      },
      {
        heading: "Accessing DOM Elements",
        text: "The most common use case is directly accessing a DOM node (e.g., to manage focus, text selection, or media playback).",
        code: `function TextInputWithFocusButton() {
  const inputEl = useRef(null);

  const onButtonClick = () => {
    // Directly accesses the DOM node and focuses it
    inputEl.current.focus();
  };

  return (
    <>
      <input ref={inputEl} type="text" />
      <button onClick={onButtonClick}>Focus the input</button>
    </>
  );
}`
      }
    ]
  },
  18: {
    title: "Custom Hooks",
    sections: [
      {
        heading: "Extracting Component Logic",
        text: "Custom Hooks are standard JavaScript functions whose names start with 'use' and that call other Hooks. They allow you to extract stateful logic from a component so it can be independently tested and reused across your application."
      },
      {
        heading: "Example: useWindowSize",
        text: "Instead of writing resize event listeners in every component, abstract it into a custom hook.",
        code: `function useWindowSize() {
  const [size, setSize] = useState({ width: window.innerWidth, height: window.innerHeight });

  useEffect(() => {
    const handleResize = () => setSize({ width: window.innerWidth, height: window.innerHeight });
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return size;
}`
      }
    ]
  },
  19: {
    title: "API Calls & Async Operations",
    sections: [
      {
        heading: "Fetching Data in React",
        text: "API calls should generally be placed inside a `useEffect` hook with an empty dependency array to ensure they only fetch data once when the component mounts."
      },
      {
        heading: "Handling UI States",
        text: "A robust data-fetching component must handle three states: Loading, Error, and Success. Never assume an API call will succeed instantly.",
        code: `function UserList() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(res => res.json())
      .then(data => { setUsers(data); setLoading(false); })
      .catch(err => { setError(err.message); setLoading(false); });
  }, []);

  if (loading) return <p>Loading users...</p>;
  if (error) return <p>Error: {error}</p>;
  
  return <ul>{users.map(u => <li key={u.id}>{u.name}</li>)}</ul>;
}`
      }
    ]
  },
  20: {
    title: "React Router (Navigation, Dynamic & Protected Routes)",
    sections: [
      {
        heading: "Client-Side Routing",
        text: "React Router enables client-side routing, meaning navigation updates the URL and renders different components without requesting a new HTML document from the server. Use the `<Link>` or `<NavLink>` components instead of standard `<a>` tags to prevent full page reloads."
      },
      {
        heading: "Dynamic Routing",
        text: "Routes can accept dynamic parameters (e.g., `/users/:id`). You extract these parameters inside the component using the `useParams` hook.",
        code: `import { Routes, Route, useParams } from 'react-router-dom';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/user/:userId" element={<UserProfile />} />
    </Routes>
  );
}

function UserProfile() {
  const { userId } = useParams();
  return <h1>Viewing profile for User {userId}</h1>;
}`
      }
    ]
  },
  21: {
    title: "Virtual DOM",
    sections: [
      {
        heading: "The Performance Bottleneck",
        text: "Directly manipulating the real browser DOM is extremely slow and computationally expensive because it triggers style recalculations and layout repaints."
      },
      {
        heading: "React's Solution: The Virtual DOM",
        text: "The Virtual DOM is a lightweight JavaScript representation of the actual DOM. When state changes, React creates a new Virtual DOM tree. It then compares this new tree with the previous Virtual DOM tree (a process called Diffing) to calculate the absolute minimum number of changes required. Finally, it updates the real DOM in one bulk operation."
      }
    ]
  },
  22: {
    title: "Reconciliation & React Rendering",
    sections: [
      {
        heading: "The Diffing Algorithm",
        text: "Reconciliation is the process through which React updates the DOM. Comparing two full trees is mathematically an O(n^3) operation. React optimizes this to O(n) using two heuristics:\n1. Two elements of different types will produce different trees (React will destroy the old and build the new).\n2. The developer can hint at which child elements may be stable across different renders using a `key` prop."
      },
      {
        heading: "Component Re-rendering",
        text: "By default, when a parent component's state changes, React will recursively re-render all of its nested child components, regardless of whether their specific props changed."
      }
    ]
  },
  23: {
    title: "Performance Optimization (React.memo, useMemo, useCallback)",
    sections: [
      {
        heading: "React.memo",
        text: "A Higher-Order Component that wraps functional components. It memoizes the rendered output, preventing the component from re-rendering if its props have not changed."
      },
      {
        heading: "useMemo and useCallback",
        text: "- `useMemo`: Caches the RESULT of an expensive calculation between renders so it doesn't recalculate unless dependencies change.\n- `useCallback`: Caches a FUNCTION DEFINITION between renders. This is crucial when passing callback functions down to `React.memo` wrapped child components, otherwise, a new function reference is created on every parent render, breaking the memoization.",
        code: `const ExpensiveComponent = React.memo(({ data, onClick }) => {
  /* Only re-renders if data or onClick reference changes */
});

function Parent() {
  const [count, setCount] = useState(0);
  const data = useMemo(() => [1, 2, 3], []); // Reference stays stable
  const handleClick = useCallback(() => console.log('Clicked'), []); // Reference stays stable

  return <ExpensiveComponent data={data} onClick={handleClick} />;
}`
      }
    ]
  },
  24: {
    title: "useReducer Hook",
    sections: [
      {
        heading: "Managing Complex State",
        text: "`useReducer` is an alternative to `useState`. It is preferable when you have complex state logic that involves multiple sub-values, or when the next state depends heavily on the previous one. It uses a Redux-style reducer function `(state, action) => newState`."
      },
      {
        heading: "Implementation",
        text: "You dispatch action objects (typically containing a `type` and a `payload`). The reducer interprets the action type and returns the updated state.",
        code: `const initialState = { count: 0 };

function reducer(state, action) {
  switch (action.type) {
    case 'increment': return { count: state.count + 1 };
    case 'decrement': return { count: state.count - 1 };
    default: throw new Error();
  }
}

function Counter() {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <>
      <button onClick={() => dispatch({ type: 'decrement' })}>-</button>
      <span>{state.count}</span>
      <button onClick={() => dispatch({ type: 'increment' })}>+</button>
    </>
  );
}`
      }
    ]
  },
  25: {
    title: "Redux Toolkit (Basics)",
    sections: [
      {
        heading: "Global State Container",
        text: "Redux is a predictable state container. Redux Toolkit (RTK) is the official, modern way to write Redux, eliminating boilerplate. The core concepts are the Store (the single source of truth), Actions (events describing something happened), and Reducers (functions that update the state based on the action)."
      },
      {
        heading: "Slices",
        text: "RTK introduces 'Slices' (`createSlice`), which automatically generate action creators and action types based on your reducer logic. RTK also integrates Immer under the hood, allowing you to write 'mutating' logic safely.",
        code: `import { createSlice, configureStore } from '@reduxjs/toolkit';

const counterSlice = createSlice({
  name: 'counter',
  initialState: { value: 0 },
  reducers: {
    increment: state => { state.value += 1 }, // Immer handles immutability
  }
});

export const store = configureStore({
  reducer: { counter: counterSlice.reducer }
});`
      }
    ]
  },
  26: {
    title: "Lazy Loading & Code Splitting",
    sections: [
      {
        heading: "Reducing Initial Load Time",
        text: "Code splitting allows you to split your bundle into smaller chunks that can be loaded on demand. `React.lazy` lets you render a dynamic import as a regular component. `Suspense` lets you specify the loading indicator while the lazy component loads."
      },
      {
        heading: "Route-Based Splitting",
        text: "The most common place to introduce code splitting is at the route level.",
        code: `import { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';

const AdminDashboard = lazy(() => import('./AdminDashboard'));

function App() {
  return (
    <Suspense fallback={<div>Loading Page...</div>}>
      <Routes>
        <Route path="/admin" element={<AdminDashboard />} />
      </Routes>
    </Suspense>
  );
}`
      }
    ]
  },
  27: {
    title: "Server-Side Rendering (SSR) vs Client-Side Rendering (CSR)",
    sections: [
      {
        heading: "Client-Side Rendering (CSR)",
        text: "In standard React (CSR), the server sends a nearly empty HTML file and a massive JS bundle. The browser downloads the JS and executes React to build the UI. Pros: fast post-load navigation. Cons: slow initial load, poor SEO."
      },
      {
        heading: "Server-Side Rendering (SSR)",
        text: "In SSR (often handled via frameworks like Next.js), the server executes the React code and sends fully populated HTML to the browser. The browser displays the HTML immediately, and then React 'hydrates' the page to make it interactive. Pros: Excellent SEO, fast First Contentful Paint."
      }
    ]
  },
  28: {
    title: "React Strict Mode",
    sections: [
      {
        heading: "Development Tool",
        text: "`<React.StrictMode>` is a tool for highlighting potential problems in an application. It does not render any visible UI. It activates additional checks and warnings for its descendants."
      },
      {
        heading: "Double Invocation",
        text: "In development mode only, Strict Mode intentionally invokes functional component bodies, `useState` initializers, and `useEffect` hooks twice. This is explicitly designed to help you detect unintended side effects and ensure your components are pure."
      }
    ]
  },
  29: {
    title: "Higher-Order Components (HOC)",
    sections: [
      {
        heading: "Pattern for Component Logic Reuse",
        text: "An HOC is an advanced technique in React for reusing component logic. It is a function that takes a component and returns a new component, injecting additional props or wrapping it in context. Though largely replaced by Custom Hooks, HOCs are still common in older codebases or specific routing guards.",
        code: `function withAuth(WrappedComponent) {
  return function EnhancedComponent(props) {
    const isAuthenticated = checkAuthStatus();
    
    if (!isAuthenticated) {
      return <Redirect to="/login" />;
    }
    return <WrappedComponent {...props} />;
  };
}`
      }
    ]
  },
  30: {
    title: "React Portals",
    sections: [
      {
        heading: "Breaking Out of the DOM Hierarchy",
        text: "Portals provide a first-class way to render children into a DOM node that exists outside the DOM hierarchy of the parent component. This is critical for Modals, Tooltips, and Dropdowns to bypass `overflow: hidden` or `z-index` stacking context constraints from parent containers."
      },
      {
        heading: "Implementation",
        text: "You use `createPortal(child, container)`. Even though a portal can be anywhere in the DOM tree, it behaves like a normal React child in every other way (e.g., event bubbling still propagates up the React tree).",
        code: `import { createPortal } from 'react-dom';

function Modal({ children, isOpen }) {
  if (!isOpen) return null;

  return createPortal(
    <div className="modal-overlay">
      <div className="modal-content">{children}</div>
    </div>,
    document.getElementById('modal-root') // Must exist in index.html
  );
}`
      }
    ]
  }
};