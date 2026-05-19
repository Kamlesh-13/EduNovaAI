export interface WebTech {
  id: string;
  title: string;
  subtitle: string;
  icon: string;
  color: string;
  level: 'beginner' | 'intermediate' | 'advanced';
  lessons: Lesson[];
  interviewQuestions: InterviewQ[];
}

export interface Lesson {
  id: string;
  title: string;
  content: string;
  codeExample?: string;
  language?: string;
  keyPoints: string[];
}

export interface InterviewQ {
  q: string;
  a: string;
  difficulty: 'easy' | 'medium' | 'hard';
}

export const WEB_TECHNOLOGIES: WebTech[] = [
  {
    id: 'html',
    title: 'HTML',
    subtitle: 'HyperText Markup Language',
    icon: '🌐',
    color: '#E34F26',
    level: 'beginner',
    lessons: [
      {
        id: 'html-1',
        title: 'HTML Structure',
        content: 'HTML is the backbone of every web page. It defines the structure and meaning of web content using elements represented by tags.',
        codeExample: `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width">
    <title>My Page</title>
  </head>
  <body>
    <h1>Hello World!</h1>
    <p>This is a paragraph.</p>
  </body>
</html>`,
        language: 'html',
        keyPoints: [
          '<!DOCTYPE html> declares HTML5 document',
          '<html> is the root element',
          '<head> contains metadata (not visible)',
          '<body> contains visible content',
          'Tags usually come in pairs: <tag> ... </tag>',
        ],
      },
      {
        id: 'html-2',
        title: 'Semantic HTML',
        content: 'Semantic HTML uses meaningful tags that describe the purpose of content, improving accessibility and SEO.',
        codeExample: `<header>
  <nav>
    <a href="/">Home</a>
    <a href="/about">About</a>
  </nav>
</header>
<main>
  <article>
    <h2>Article Title</h2>
    <p>Content here...</p>
  </article>
  <aside>Related links</aside>
</main>
<footer>Copyright 2024</footer>`,
        language: 'html',
        keyPoints: [
          '<header>, <footer>, <main> define page regions',
          '<article> for independent content',
          '<section> for thematic grouping',
          '<aside> for sidebars',
          '<nav> for navigation links',
        ],
      },
    ],
    interviewQuestions: [
      { q: 'What is the difference between <div> and <span>?', a: '<div> is a block-level element that takes full width. <span> is an inline element that only takes needed space. Use <div> for layout sections, <span> for styling text portions.', difficulty: 'easy' },
      { q: 'What are data attributes in HTML5?', a: 'data-* attributes allow storing extra information on standard HTML elements. Example: <div data-user-id="123">. Accessed via JS with element.dataset.userId.', difficulty: 'medium' },
      { q: 'What is the purpose of alt attribute in images?', a: 'The alt attribute provides alternative text for images if they cannot be displayed. It is crucial for accessibility (screen readers) and SEO. Always include meaningful alt text.', difficulty: 'easy' },
      { q: 'What is the difference between id and class attributes?', a: 'id is unique — only ONE element per page can have a specific id. Used for unique elements like #header, #logo. class can be shared by MULTIPLE elements. Used for reusable styles like .card, .btn. In CSS: id uses # selector, class uses . selector.', difficulty: 'easy' },
      { q: 'What are meta tags and why are they important?', a: 'Meta tags provide metadata about the HTML document. Key ones: <meta charset="UTF-8"> sets character encoding; <meta name="viewport"> controls mobile scaling; <meta name="description"> for SEO; <meta property="og:..." > for social media previews. They appear in <head> and are not visible to users.', difficulty: 'medium' },
      { q: 'What is the difference between GET and POST methods in HTML forms?', a: 'GET: data sent in URL query string (visible, bookmarkable, cached). Use for searches/filters. POST: data sent in request body (hidden, not bookmarkable). Use for sensitive data like passwords, or large data. GET has URL length limit (~2000 chars), POST has no practical limit.', difficulty: 'medium' },
    ],
  },
  {
    id: 'css',
    title: 'CSS',
    subtitle: 'Cascading Style Sheets',
    icon: '🎨',
    color: '#1572B6',
    level: 'beginner',
    lessons: [
      {
        id: 'css-1',
        title: 'CSS Flexbox',
        content: 'Flexbox is a one-dimensional layout system that makes it easy to arrange items in rows or columns with powerful alignment options.',
        codeExample: `.container {
  display: flex;
  justify-content: center;  /* horizontal */
  align-items: center;      /* vertical */
  gap: 16px;
  flex-wrap: wrap;
}

.card {
  flex: 1;
  min-width: 200px;
  padding: 20px;
}`,
        language: 'css',
        keyPoints: [
          'justify-content: main axis alignment (row = horizontal)',
          'align-items: cross axis alignment (row = vertical)',
          'flex: 1 makes items share space equally',
          'flex-wrap: wrap allows items to wrap to next line',
          'gap replaces margin hacks for spacing',
        ],
      },
      {
        id: 'css-2',
        title: 'CSS Grid',
        content: 'CSS Grid is a two-dimensional layout system, allowing you to create complex layouts easily with rows and columns.',
        codeExample: `.grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: auto;
  gap: 20px;
}

.span-2 {
  grid-column: span 2;
}`,
        language: 'css',
        keyPoints: [
          'repeat(3, 1fr) creates 3 equal columns',
          '1fr = 1 fraction of available space',
          'grid-column: span 2 makes element span 2 columns',
          'grid-template-areas for named layout regions',
          'Grid vs Flex: Grid is 2D, Flex is 1D',
        ],
      },
    ],
    interviewQuestions: [
      { q: 'What is the CSS Box Model?', a: 'Every element has: Content → Padding → Border → Margin. box-sizing: border-box includes padding+border in width. box-sizing: content-box (default) adds padding+border on top of width.', difficulty: 'easy' },
      { q: 'Difference between position: absolute and relative?', a: 'relative: positions relative to its normal position. absolute: positions relative to its nearest positioned ancestor. Use them together: parent=relative, child=absolute.', difficulty: 'medium' },
      { q: 'What is the difference between display:none and visibility:hidden?', a: 'display:none removes the element completely from the layout — it takes up NO space. visibility:hidden makes the element invisible but it STILL occupies space in the layout. Use display:none to toggle show/hide, visibility:hidden when you want to preserve layout space.', difficulty: 'easy' },
      { q: 'What are CSS pseudo-classes? Give examples.', a: 'Pseudo-classes select elements based on their state or position. Examples: :hover (mouse over), :focus (focused input), :first-child (first in parent), :nth-child(n) (nth element), :active (being clicked), :visited (visited link). Syntax: selector:pseudo-class { styles }', difficulty: 'medium' },
      { q: 'Explain CSS specificity.', a: 'Specificity determines which CSS rule wins when multiple rules apply. Order (highest to lowest): !important > inline styles > id (#) > class/pseudo-class (.) > element (tag). Calculate: inline=1000pts, id=100pts, class=10pts, element=1pt. The rule with higher specificity score wins.', difficulty: 'hard' },
    ],
  },
  {
    id: 'javascript',
    title: 'JavaScript',
    subtitle: 'Dynamic Programming Language',
    icon: '⚡',
    color: '#F7DF1E',
    level: 'intermediate',
    lessons: [
      {
        id: 'js-1',
        title: 'ES6+ Features',
        content: 'Modern JavaScript (ES6+) introduced many powerful features that make code cleaner and more efficient.',
        codeExample: `// Arrow functions
const add = (a, b) => a + b;

// Destructuring
const { name, age } = user;
const [first, ...rest] = array;

// Template literals
const msg = \`Hello, \${name}!\`;

// Spread operator
const merged = { ...obj1, ...obj2 };

// Optional chaining
const city = user?.address?.city;

// Async/Await
const data = await fetchUser(id);`,
        language: 'javascript',
        keyPoints: [
          'Arrow functions have no own "this"',
          'Destructuring extracts values from objects/arrays',
          'Template literals allow embedded expressions with ${...}',
          'Spread ... copies object/array properties',
          'Optional chaining ?. prevents "cannot read property" errors',
        ],
      },
      {
        id: 'js-2',
        title: 'Promises & Async/Await',
        content: 'Asynchronous JavaScript handles operations that take time (like API calls) without blocking the program.',
        codeExample: `// Promise chain
fetch('/api/user')
  .then(res => res.json())
  .then(user => console.log(user))
  .catch(err => console.error(err));

// Async/Await (cleaner)
async function getUser() {
  try {
    const res = await fetch('/api/user');
    const user = await res.json();
    return user;
  } catch (err) {
    console.error(err);
  }
}`,
        language: 'javascript',
        keyPoints: [
          'async function always returns a Promise',
          'await pauses execution until Promise resolves',
          'try/catch handles async errors',
          'Promise.all() runs multiple promises in parallel',
          '.then().catch() is the older Promise chain syntax',
        ],
      },
    ],
    interviewQuestions: [
      { q: 'What is closure in JavaScript?', a: 'A closure is a function that remembers its outer variables even after the outer function has returned. Example: function counter() { let count=0; return () => ++count; } Each call to counter() creates a new closure with its own count.', difficulty: 'medium' },
      { q: 'Explain event delegation', a: 'Instead of adding event listeners to each child, add one listener to the parent. Events bubble up from child to parent. Use event.target to identify which child was clicked. More efficient for dynamic lists.', difficulty: 'medium' },
      { q: 'What is the difference between == and ===?', a: '== (loose equality) does type coercion: "5" == 5 is true. === (strict equality) checks type AND value: "5" === 5 is false. Always use === to avoid unexpected bugs.', difficulty: 'easy' },
      { q: 'What is hoisting in JavaScript?', a: 'Hoisting moves variable and function declarations to the top of their scope before execution. var declarations are hoisted and initialized as undefined. let/const are hoisted but NOT initialized (temporal dead zone — accessing them before declaration throws ReferenceError). Function declarations are fully hoisted (can be called before they appear in code). Function expressions (const fn = () => {}) are NOT hoisted.', difficulty: 'medium' },
      { q: 'What is the difference between let, var, and const?', a: 'var: function-scoped, hoisted, can be re-declared and reassigned. let: block-scoped, not re-declarable, can be reassigned. const: block-scoped, not re-declarable, NOT reassignable (but object properties can change). Best practice: use const by default, let when reassignment needed, avoid var.', difficulty: 'easy' },
      { q: 'Explain the concept of "this" in JavaScript.', a: '"this" refers to the object calling the function. In a method: this = the object. In a regular function: this = window (sloppy) or undefined (strict). In arrow function: this = inherited from outer scope (lexical this). In event handler: this = the element. Use .bind(), .call(), or .apply() to explicitly set this.', difficulty: 'hard' },
      { q: 'What is the difference between map, filter, and reduce?', a: 'map(): transforms each element, returns same-length array. [1,2,3].map(x=>x*2) → [2,4,6]. filter(): keeps elements matching condition, may return shorter array. [1,2,3].filter(x=>x>1) → [2,3]. reduce(): reduces array to single value. [1,2,3].reduce((acc,x)=>acc+x,0) → 6. All return new arrays (do not mutate original).', difficulty: 'medium' },
    ],
  },
  {
    id: 'react',
    title: 'React',
    subtitle: 'UI Library by Facebook',
    icon: '⚛️',
    color: '#61DAFB',
    level: 'intermediate',
    lessons: [
      {
        id: 'react-1',
        title: 'React Hooks',
        content: 'Hooks let you use state and other React features in function components. They replaced the need for class components.',
        codeExample: `import { useState, useEffect, useCallback } from 'react';

function UserProfile({ userId }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchUser(userId).then(data => {
      setUser(data);
      setLoading(false);
    });
  }, [userId]); // Re-run when userId changes

  const handleUpdate = useCallback(() => {
    // stable function reference
  }, []);

  if (loading) return <p>Loading...</p>;
  return <h1>{user.name}</h1>;
}`,
        language: 'javascript',
        keyPoints: [
          'useState for local component state',
          'useEffect for side effects (API calls, subscriptions)',
          'useCallback memoizes functions to prevent re-renders',
          'useMemo memoizes expensive calculations',
          'Hooks must be called at top level, not in conditions',
        ],
      },
    ],
    interviewQuestions: [
      { q: 'What is the Virtual DOM?', a: 'React creates an in-memory representation of the real DOM. When state changes, React compares (diffs) the new Virtual DOM with the previous one, then updates only the changed parts in the real DOM. This is more efficient than re-rendering everything.', difficulty: 'medium' },
      { q: 'What is prop drilling and how to avoid it?', a: 'Prop drilling is passing props through many nested components that do not need them. Solutions: React Context API for global state, or state management libraries like Redux/Zustand.', difficulty: 'medium' },
      { q: 'What is the difference between controlled and uncontrolled components?', a: 'Controlled: form data is handled by React state. Input value is always set from state, onChange updates state. You control every keystroke. Uncontrolled: form data handled by the DOM itself. Use ref to access values. Better for file inputs or integrating with non-React code.', difficulty: 'medium' },
      { q: 'When should you use useEffect?', a: 'useEffect runs after render and is used for side effects: API calls, subscriptions, DOM manipulation, timers. Dependency array controls when it runs: [] = run once on mount; [dep] = run when dep changes; no array = run on every render. Return a cleanup function to prevent memory leaks (clear timers, unsubscribe).', difficulty: 'medium' },
      { q: 'What is React.memo and when should you use it?', a: 'React.memo is a HOC that memoizes a component — it re-renders only when props change (shallow comparison). Use it for pure functional components that render frequently with the same props. Pair with useCallback for event handler props to avoid breaking memo optimization.', difficulty: 'hard' },
    ],
  },
  {
    id: 'nodejs',
    title: 'Node.js',
    subtitle: 'JavaScript on the Server',
    icon: '🟢',
    color: '#339933',
    level: 'intermediate',
    lessons: [
      {
        id: 'node-1',
        title: 'Express.js Basics',
        content: 'Express is a minimal and flexible Node.js web application framework that provides a set of features for web and mobile applications.',
        codeExample: `const express = require('express');
const app = express();
app.use(express.json());

// GET endpoint
app.get('/users', async (req, res) => {
  const users = await User.findAll();
  res.json(users);
});

// POST endpoint  
app.post('/users', async (req, res) => {
  const { name, email } = req.body;
  const user = await User.create({ name, email });
  res.status(201).json(user);
});

app.listen(3000, () => {
  console.log('Server running on port 3000');
});`,
        language: 'javascript',
        keyPoints: [
          'app.get/post/put/delete for HTTP methods',
          'req.body for POST data (needs express.json())',
          'req.params for URL parameters (/user/:id)',
          'req.query for query strings (?page=1)',
          'res.json() sends JSON response',
        ],
      },
    ],
    interviewQuestions: [
      { q: 'What is middleware in Express?', a: 'Middleware functions have access to req, res, and next(). They execute in sequence between the request and response. Used for logging, authentication, error handling, body parsing. Call next() to pass to the next middleware.', difficulty: 'medium' },
      { q: 'What is the difference between SQL and NoSQL databases?', a: 'SQL (relational): fixed schema, tables with rows/columns, uses structured query language. Best for complex queries and relationships (MySQL, PostgreSQL). NoSQL: flexible schema, document/key-value/graph stores, horizontally scalable. Best for large-scale/unstructured data (MongoDB, Redis, DynamoDB). For most web apps, SQL is preferred for reliability.', difficulty: 'medium' },
      { q: 'What is REST API? What are the main HTTP methods?', a: 'REST (Representational State Transfer) is an architectural style for APIs using HTTP. Main methods: GET (read), POST (create), PUT (update entire resource), PATCH (partial update), DELETE (remove). REST APIs are stateless, use resource URLs (/users/123), return JSON data, and use HTTP status codes (200=OK, 201=Created, 400=Bad Request, 404=Not Found, 500=Server Error).', difficulty: 'easy' },
      { q: 'What is async/await in Node.js and why is it better than callbacks?', a: 'async/await is syntactic sugar over Promises making async code look synchronous. Callbacks cause "callback hell" (nested pyramids). Promises flatten the chain but .then().catch() can get verbose. async/await: write await asyncOperation() instead of chaining. Use try/catch for errors. Much more readable and maintainable for sequential async operations.', difficulty: 'medium' },
    ],
  },
];
