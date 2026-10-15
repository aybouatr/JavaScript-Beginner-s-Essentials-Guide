

## 📚 Table of Contents

**Part 1: How JavaScript Runs**
- [1.1 What is JavaScript?](#11-what-is-javascript)
- [1.2 History and Versions](#12-history-and-versions-ecmascript)
- [1.3 Where JavaScript Runs + Engines](#13-where-javascript-runs-and-engines)
- [1.4 Compiled or Interpreted? (JIT)](#14-compiled-or-interpreted-jit)
- [1.5 Adding JavaScript to a Page (`defer`, `async`, `module`)](#15-adding-javascript-to-a-page)

**Part 2: Language Fundamentals**
- [2.1 Syntax, Blocks, `"use strict"`](#21-syntax-code-blocks-and-use-strict)
- [2.2 Variables: `var`, `let`, `const`](#22-variables-var-let-const)
- [2.3 Data Types (Primitive vs Reference)](#23-data-types-primitive-vs-reference)
- [2.4 Type Coercion and Equality](#24-type-coercion-and-equality)
- [2.5 Operators: Logical Assignment, `??`, `?.`, Template Literals](#25-operators-logical-assignment----optional-chaining-template-literals)
- [2.6 Loops: `for`, `for…in`, `for…of`, `forEach`, `map`](#26-loops-for-forin-forof-foreach-map)

**Part 3: Behind the Scenes**
- [3.1 Execution Context and the Call Stack](#31-execution-context-and-the-call-stack)
- [3.2 Scope, Lexical Environment, Scope Chain](#32-scope-lexical-environment-and-scope-chain)
- [3.3 Hoisting (deep dive)](#33-hoisting-deep-dive)
- [3.4 Memory Management and Garbage Collection](#34-memory-management-and-garbage-collection)

**Part 4: Functions**
- [4.1 First-Class Functions and Callbacks](#41-first-class-functions-callbacks-higher-order-functions)
- [4.2 Closures](#42-closures)
- [4.3 IIFE](#43-iife-immediately-invoked-function-expression)
- [4.4 `this`, `call`, `apply`, `bind`](#44-this-call-apply-bind)

**Part 5: Objects and OOP**
- [5.1 Prototypes and the Prototype Chain](#51-prototypes-and-the-prototype-chain)
- [5.2 Classes and Encapsulation](#52-classes-and-encapsulation)

**Part 6: Asynchronous JavaScript**
- [6.1 Event Loop, Tasks and Microtasks](#61-event-loop-call-stack-tasks-and-microtasks)
- [6.2 Timing Functions](#62-timing-functions)
- [6.3 Promises, `async/await`, Combinators](#63-promises-asyncawait-and-combinators)
- [6.4 `fetch` and HTTP Errors](#64-fetch-and-http-errors)

**Part 7: The Browser Environment**
- [7.1 Window, BOM, DOM](#71-window-bom-and-dom)
- [7.2 Dialogs, `window.open`, Window Control](#72-dialogs-windowopen-and-window-control)
- [7.3 Scrolling](#73-scrolling)
- [7.4 `location`, `history`, `navigator`, `screen`](#74-location-history-navigator-screen)
- [7.5 Events: `onclick` vs `addEventListener`](#75-events-onclick-vs-addeventlistener)

**Part 8: Browser Storage**
- [8.1 `localStorage` and `sessionStorage`](#81-localstorage-and-sessionstorage)
- [8.2 Cookies](#82-cookies)
- [8.3 IndexedDB](#83-indexeddb)

**Part 9: Data Handling**
- [9.1 JSON](#91-json)
- [9.2 The `Date` Object](#92-the-date-object)

**Part 10: Node.js**
- [10.1 What Node.js Is](#101-what-nodejs-is)
- [10.2 Native Addons (C/C++)](#102-native-addons-cc)
- [10.3 Limitations of Node.js](#103-limitations-of-nodejs)

**Part 11: Important Missing Topics (➕ added)**
- [11.1 Error Handling](#111-error-handling)
- [11.2 Destructuring, Spread, Rest](#112-destructuring-spread-rest)
- [11.3 Modules (`import`/`export`)](#113-modules-importexport)
- [11.4 Array Methods You Must Know](#114-array-methods-you-must-know)
- [11.5 Iterators and Generators](#115-iterators-and-generators)
- [11.6 `Map`, `Set`, `WeakMap`, `WeakSet`](#116-map-set-weakmap-weakset)

**Part 12: Review Tools**
- [12.1 Master Interview Q&A](#121-master-interview-qa)
- [12.2 Output-Prediction Practice](#122-output-prediction-practice)
- [12.3 Guided Deep Explanations](#123-guided-deep-explanations-trace-the-program-not-the-slogan)
- [12.4 Study Roadmap](#124-study-roadmap)
- [12.5 One-Page Cheat Sheet](#125-one-page-cheat-sheet)

---

# PART 1: How JavaScript Runs

## 1.1 What is JavaScript?

📝 *From my notes, expanded.*

### A. What is it?
JavaScript (JS) is a **high-level, dynamically typed, multi-paradigm programming language** (procedural, object-oriented via prototypes, functional). It is the language of the web: every browser runs it without any installation. With **Node.js** it also runs outside the browser.

### B. Why does it exist?
Early web pages were static documents. JS was created so a page could **react** (validate a form *without* a server round trip, update parts of a page, respond to clicks).

What it gives us:

| Capability | Examples |
|---|---|
| 🖱️ Interactivity | Click events, menus, sliders, form validation |
| 🔄 Dynamic content | Update the page without reloading (`fetch`, AJAX) |
| 🎨 Rich UI | Animations, drag-and-drop, responsive behavior |
| ⚙️ Full apps | Gmail, Google Maps, Netflix UI |
| 🌍 Full-stack | One language for frontend and backend (Node.js) |
| 📦 Ecosystem | React, Angular, Vue, D3.js, Three.js, npm |
| 🌐 Ubiquity | Browsers, servers, desktop, mobile, IoT |

### C. How does it work internally?
Short version (details in later sections):
1. An **engine** (e.g., V8) parses your source into an AST, produces bytecode, and runs it.
2. Hot code is optimized into machine code by a **JIT compiler**.
3. In a typical browser page there is a **main JavaScript thread** and an **event loop**; additional JavaScript agents can execute in **Web Workers**. Async I/O can complete without blocking the main JS thread.

### Where JS is used today 📝
- 🌐 Web (front-end and back-end)
- 📱 Mobile (React Native, Ionic, NativeScript)
- 💻 Desktop (Electron, NW.js; 🔧 Tauri uses a Rust backend with a web UI)
- 🎮 Games (Phaser, Three.js, Babylon.js)
- 🔌 IoT (Johnny-Five, Node-RED, Espruino)

### Pros and Cons 📝 (cleaned up)

| ✅ Strengths | ❌ Limitations |
|---|---|
| Runs in every browser, no install | Security: XSS, injection if you trust user input |
| Simple syntax, easy to start | Browser differences (less now than before) |
| Fast thanks to JIT engines like V8 | Single-threaded: CPU-heavy code blocks (use Workers) |
| Full-stack with Node.js | Loose typing → surprising coercion bugs (use TypeScript/linting) |
| Massive ecosystem (npm) | Fast-changing ecosystem, framework churn |
| Event-driven model is great for I/O | Not ideal for heavy number crunching vs C++/Rust (use WebAssembly) |
| Huge community | Errors can surface late (runtime), not at compile time |

### The famous "problems" from my notes 📝🔧
```javascript
console.log(0 == '0');    // true   ('0' is converted to number 0)
console.log(0 === '0');   // false  (different types, no conversion)
console.log(null == 0);   // false  (null only == undefined)
console.log(null >= 0);   // true   (>= converts null to 0)   <- 🔧 completed

let x = "5";
x = x * 2;   // 10   -> number (multiplication forces numeric conversion)
x = x + 2;   // 12   -> 🔧 NOT "102": x is now the number 10, so 10 + 2 = 12

// The real "unexpected concatenation" example:
let y = "5";
y = y + 2;   // "52" -> string + number = string concatenation
```
*Why:* `+` has two jobs (add numbers **or** join strings). If either side is a string, it joins. `-`, `*`, `/` do numeric operations (Number or BigInt); they do not concatenate strings.

### I. Quick revision
- JS = dynamically typed; modern engines usually use interpretation and JIT optimization. A JS agent runs jobs sequentially, with workers enabling additional agents.
- Runs in browsers and Node.js. One language, front and back.
- Weak spots: type coercion, single thread for CPU work.

---

## 1.2 History and Versions (ECMAScript)

📝 *From my notes, with corrected/added details.*

### A. What is it?
- Created in **1995** by **Brendan Eich** at **Netscape** (reportedly in about 10 days). Names: **Mocha → LiveScript → JavaScript**.
- **ECMAScript (ES)** is the official **standard/specification** (maintained by Ecma TC39). **JavaScript is an implementation** of that standard. Engines implement the spec.

### B. Why does it exist?
Different browsers were implementing different versions of the language. A standard makes code behave the same everywhere.

### Milestones

| Version | Year | Highlights |
|---|---|---|
| ES1 / ES2 | 1997 / 1998 | First standard |
| ES3 | 1999 | Regular expressions, `try/catch` |
| ES5 | 2009 | Strict mode, JSON support, `forEach/map/filter` |
| **ES6 / ES2015** | 2015 | **Biggest update:** `let`/`const`, arrow functions, template literals, default/rest params, classes, modules, Promises, destructuring, spread |
| ES2017 | 2017 | `async/await`, `Object.entries/values` |
| ES2020 | 2020 | Optional chaining `?.`, nullish coalescing `??`, `BigInt`, dynamic `import()` |
| ES2022 | 2022 | Private class fields `#x`, top-level `await`, `Array.at()` |
| ES2023+ | yearly | `toSorted()`, `toReversed()`, `Object.groupBy()`, etc. ➕ |

> Since ES2015 a new version is released **every year**.

### Why it matters 📝
- ES6+ is the industry standard; modern code uses it everywhere.
- You still must **read** older code (`var`, IIFEs, `function` constructors) for legacy projects.
- ➕ Browsers don't all ship features on day one. Tools like **Babel** transpile new syntax to older syntax, and **polyfills** add missing methods.

### I. Quick revision
ECMAScript = the rulebook. JavaScript = the language that follows it. ES6 (2015) changed everything. Learn ES6+, recognize ES5.

---

## 1.3 Where JavaScript Runs and Engines

📝 *From my notes.*

### A. What is it?
JS needs a **host environment** to run:

| Host | What it adds beyond the language |
|---|---|
| **Browser** | `window`, DOM, `fetch`, `setTimeout`, storage, events |
| **Node.js** | `fs`, `http`, `process`, `Buffer`, `require`/modules |
| Others | Deno, Bun, Electron, Cloudflare Workers… ➕ |

> ⭐ **Important distinction:** `setTimeout`, `fetch`, `document`, `localStorage` are **NOT part of the JavaScript language**. They are **Web APIs** provided by the browser (Node.js provides its own versions of some). The language itself (ECMAScript) has `Array`, `Promise`, `Map`, `JSON`, `Math`, etc.

### B. JavaScript engines
An engine is the program that **executes JS**. It turns human-readable JS into something the CPU can run.

| Engine | Used by |
|---|---|
| **V8** | Chrome, **Edge (modern)**, Node.js, Deno, Opera |
| **SpiderMonkey** | Firefox (the very first JS engine) |
| **JavaScriptCore (Nitro)** | Safari, Bun |
| ~~Chakra~~ | Legacy Edge only 🔧 |

### I. Quick revision
Engine = executes the language. Browser/Node = give extra APIs. Don't confuse language features with environment features.

---

## 1.4 Compiled or Interpreted? (JIT)

📝 *Expanded; my note said "hybrid, interpreted and JIT". That is correct.*

### A. What is it?
- **Interpreted:** run code line by line (simple, slower).
- **Compiled:** translate everything to machine code first (fast, slower startup).
- **JIT (Just-In-Time):** start by interpreting, watch what runs often ("hot" code), and compile only that to optimized machine code **while the program runs**.

### B. Why does it exist?
Web pages must **start instantly** (so interpret immediately) but heavy apps must be **fast** (so optimize hot paths).

### C. How it works internally (V8 simplified) ➕
```text
Source code
   │  1. Parse
   ▼
 AST (Abstract Syntax Tree)
   │  2. Ignition (interpreter) generates bytecode
   ▼
 Bytecode  ──runs immediately──►  Result
   │  3. Profiler notices "hot" functions
   ▼
 TurboFan (optimizing JIT) → optimized machine code
   │  4. If an assumption breaks (e.g., a number suddenly becomes a string)
   ▼
 DEOPTIMIZE → back to bytecode
```
(Newer V8 versions add extra tiers like Sparkplug/Maglev between these. The concept is the same.)

### G. Common mistakes
- Changing the "shape"/type of values often (`x` is sometimes number, sometimes string) prevents optimization. Keep types consistent in hot code.
- Saying "JS is interpreted" in an interview: the better answer is "**interpreted + JIT-compiled**".

### H. Interview questions
**Q: Is JavaScript compiled or interpreted?** Both. Modern engines parse to bytecode, interpret it, then JIT-compile hot code to machine code.
**Q: What is JIT?** Compiling code to machine code at runtime, only for frequently-used code.

### I. Quick revision
JS source → AST → bytecode → (hot) optimized machine code → deopt if assumptions break.

---

## 1.5 Adding JavaScript to a Page

📝 *From my notes (the `defer` reminder), expanded.*

### A. What is it?
How the browser loads and runs a `<script>`.

### B. Why does it exist?
HTML is parsed top-to-bottom. A normal script **stops parsing** until it is downloaded and executed. If the script touches an element that is not parsed yet, you get an error (`null`).

### C. The four ways ➕

| Syntax | Download | Executes | Order kept? | Use for |
|---|---|---|---|---|
| `<script src>` (in head) | Blocks parsing | Immediately | Yes | ❌ avoid |
| `<script src>` at **end of `<body>`** 📝 | After HTML parsed | Immediately | Yes | Simple pages |
| `<script defer src>` in `<head>` 📝 | In parallel with parsing | **After HTML fully parsed**, before `DOMContentLoaded` | **Yes** | ✅ Best default |
| `<script async src>` | In parallel | **As soon as downloaded** (may interrupt parsing) | **No** | Independent scripts (analytics) |
| `<script type="module">` ➕ | In parallel | Deferred by default | Yes | Modern ES modules |

> ⚠️ `defer` only works on **external** scripts (with `src`).
> 📝 *Reminder to myself:* **never forget `defer`** when using `<script>` in `<head>`.

### D. Example
```html
<head>
  <script src="app.js" defer></script>
</head>
<body>
  <button id="btn">Click</button>
</body>
```
```javascript
// app.js: safe, DOM is already parsed when this runs
document.getElementById("btn").addEventListener("click", () => alert("Hi"));
```

### E. Step-by-step
1. Browser starts parsing HTML, sees `<script defer>`.
2. It **downloads app.js in the background** and keeps parsing.
3. HTML parsing finishes → DOM is ready.
4. `app.js` executes. Then `DOMContentLoaded` fires.

### G. Common mistake
```html
<head><script src="app.js"></script></head>  <!-- no defer -->
<body><button id="btn"></button></body>
```
```javascript
document.getElementById("btn").addEventListener("click", f);
// ❌ TypeError: Cannot read properties of null (the button doesn't exist yet)
```

### H. Interview questions
**Q: `defer` vs `async`?** Both download in parallel. `defer` runs after parsing, in order. `async` runs immediately when downloaded, in any order.

### I. Quick revision
Use `<script src defer>` in the head, or put the script at the end of body. Use `async` only for independent scripts.

---

# PART 2: Language Fundamentals

## 2.1 Syntax, Code Blocks, and `"use strict"`

📝 *My notes had headings only ("Case Sensitivity", "Code Blocks", "use strict"). Completed below.*

### A. What is it?
- **Case sensitive:** `name`, `Name`, `NAME` are three different identifiers. Keywords must be lowercase (`function`, not `Function`).
- **Code block** `{ }`: groups statements. Used in `if`, loops, functions, `try/catch`.
- **`"use strict"`:** opt-in mode that turns silent mistakes into errors.

### B. Why does it exist?
- Blocks give **scope** (limit where a variable lives).
- Strict mode was added in ES5 to fix old "sloppy" behaviors without breaking old websites (so it's opt-in).

### C. Internally
- `let`/`const` are tracked by a block lexical environment. This environment **may outlive the block** if captured by a closure; it is not necessarily destroyed immediately.
- `var` ignores blocks (function-scoped).
- Strict mode changes how the engine treats certain operations: assigning to undeclared variables throws, `this` in plain function calls is `undefined` (not `window`), duplicate parameter names are errors, writing to read-only properties throws.

### D. Example
```javascript
"use strict";

{
  let a = 1;
  const b = 2;
  var c = 3;
}
console.log(c); // 3  (var ignores the block)
// console.log(a);      // ❌ ReferenceError if executed: block-scoped

// undeclared = 10;    // ❌ ReferenceError in strict mode
```

### F. When to use
Always. 🧠 Modern **ES modules** and **classes** are automatically strict, and frameworks/bundlers usually emit modules.

### G. Common mistakes
- Forgetting `let/const` → accidental global (in sloppy mode).
- Putting `"use strict"` after other statements (it must be the first statement of the script/function).

### I. Quick revision
Case-sensitive. `{}` = scope for `let/const`. Use strict mode (modules/classes already are).

---

## 2.2 Variables: `var`, `let`, `const`

📝 *From my notes, corrected and expanded.*

### A. What is it?
Named containers for values.

| | `var` | `let` | `const` |
|---|---|---|---|
| Scope | **Function** | **Block** | **Block** |
| Re-assign | ✅ | ✅ | ❌ |
| Re-declare in same scope | ✅ (bug-prone) | ❌ | ❌ |
| Hoisted | Yes, initialized to `undefined` | Yes, but in **TDZ** | Yes, but in **TDZ** |
| Becomes `window` property (global) | ✅ | ❌ | ❌ |
| Must be initialized at declaration | No | No | **Yes** |

### B. Why does it exist?
`var` (original) had confusing scoping. ES6 added `let`/`const` for predictable, block-based scoping.

### C. Internally
- `const` protects the **binding** (the variable name can't point somewhere else), **not the value**. Objects/arrays declared with `const` can still be mutated.
- **TDZ (Temporal Dead Zone):** the time between entering the scope and the line where `let/const` is declared. Accessing it throws a `ReferenceError`.

### D. Example
```javascript
const user = { name: "Ali" };
user.name = "Omar";     // ✅ allowed: mutating the object
// user = {};            // ❌ TypeError if executed: assignment to constant

console.log(a);  // undefined (var hoisted)
var a = 5;

// console.log(b);     // ❌ ReferenceError if executed (TDZ)
let b = 5;
```

### E. Step-by-step (`console.log(a); var a = 5;`)
1. **Creation phase:** engine scans the scope, finds `var a`, creates it with value `undefined`.
2. **Execution phase:** `console.log(a)` → prints `undefined`. Then `a = 5` runs.

### F. When to use
**Default to `const`.** Use `let` only if you must re-assign. Avoid `var`. 

### G. Common mistakes
```javascript
for (var i = 0; i < 3; i++) setTimeout(() => console.log(i));
// prints 3, 3, 3  (one shared `i`, loop already finished)

for (let i = 0; i < 3; i++) setTimeout(() => console.log(i));
// prints 0, 1, 2  (each iteration gets its own `i`)
```
Also: In a **classic browser script**, top-level `var` creates a global-object property; in an **ES module** (and Node modules), a top-level `var` is module-scoped. `let` does not become a `window` property.

**Naming rules** 📝: letters, digits, `_`, `$`; can't start with a digit; no reserved words; use `camelCase`; descriptive names (`userCount`, not `x`).

### H. Interview questions
**Q: Difference between `var`, `let`, `const`?** See table: scope, TDZ, re-assignment.
**Q: Does `const` make objects immutable?** No, only the binding. Use `Object.freeze()` for shallow immutability.

### I. Quick revision
Use `const` by default, `let` for reassignment; `var` mainly matters when reading legacy code. `const` ≠ immutable value.

---

## 2.3 Data Types (Primitive vs Reference)

📝 *From my notes, expanded.*

### A. What is it?
JavaScript has **7 primitive types** and **objects** (everything else).

**Primitives (immutable values, copied by value):**

| Type | Example | Notes |
|---|---|---|
| `string` | `"hi"` | Immutable text |
| `number` | `42`, `3.14`, `NaN`, `Infinity` | One type (64-bit float) for ints and decimals |
| `boolean` | `true` | |
| `null` | `null` | "Empty **on purpose**" |
| `undefined` | `undefined` | "No value **assigned**" |
| `symbol` | `Symbol("id")` | Unique key, hidden from normal loops |
| `bigint` | `123n` | Integers beyond `Number.MAX_SAFE_INTEGER` |

**Objects (reference semantics):** `Object`, `Array`, `Function`, `Map`, `Set`, `Date`, `RegExp`, `Error`, `Promise`…

### B. Why does it matter?
Copy-by-value vs copy-by-reference is behind a large share of JS bugs.

### C. Internally
- Primitives: **assignment copies the value**. Variables can later hold another value; an existing string primitive cannot be mutated.
- Objects: variables hold a **reference** (think of a link, not a publicly accessible memory address). Two variables can refer to the **same object**.
- 🔧 Primitives "have no properties" 📝, yet `"abc".length` works. Property access on most primitives uses language-defined coercion and prototype lookup; implementations do **not have to allocate** a temporary wrapper object.

### D. Example
```javascript
// Primitives: copied
let a = 10;
let b = a;
b = 20;
console.log(a, b);      // 10 20

// Objects: shared reference
const p1 = { age: 20 };
const p2 = p1;          // copies the REFERENCE
p2.age = 30;
console.log(p1.age);    // 30  (same object!)

// Real copy:
const p3 = { ...p1 };              // shallow copy
const p4 = structuredClone(p1);    // deep copy of supported structured-clone types
```

### E. Step-by-step (`p2 = p1`)
1. `{age:20}` is created in memory (heap).
2. `p1` holds a reference to it.
3. `p2 = p1` copies the **reference**, not the object.
4. `p2.age = 30` follows the reference and changes the one shared object.

### G. Common mistakes & important facts 📝
```javascript
console.log(NaN === NaN);         // false (only value not equal to itself) 📝
Number.isNaN(NaN);                // true  (use this to check NaN)
console.log(typeof null);         // "object" (historic bug, can't be fixed) ➕
console.log(0.1 + 0.2);           // 0.30000000000000004 (binary floating point) ➕
console.log(0.1 + 0.2 === 0.3);   // false ➕
console.log([1,2] == [1,2]);      // false (different references) ➕
```
- `null` vs `undefined`: `undefined` = JS gave it (uninitialized variable, missing property); `null` = *you* say "nothing here".

### Reference types summary 📝
Objects have **reference semantics**; a heap allocation is a useful mental model, but exact storage (heap, stack, registers, scalar replacement) is implementation-specific.
- Arrays/objects/functions = containers of structured data.
- `Map`/`Set` = special collections (any-type keys / unique values).
- `RegExp` = patterns for validation. `Date` = time.
- Updating through one reference changes it for every reference to that object.

### H. Interview questions
**Q: Primitive types?** string, number, boolean, null, undefined, symbol, bigint.
**Q: Why is `typeof null` "object"?** A bug from the first JS implementation, kept for backward compatibility.
**Q: Shallow vs deep copy?** Shallow copies top-level only (nested objects are still shared). Deep copy duplicates supported nested data (`structuredClone`), **not functions, DOM nodes, or arbitrary class behavior**.

### I. Quick revision
7 primitives = by value, immutable. Objects = by reference. `typeof null === "object"`. `NaN !== NaN`. Floating point is imprecise.

---

## 2.4 Type Coercion and Equality

📝 *My notes had `typeof`, `instanceof`, `===` and "Implicit & Explicit" as headings with only conclusions. Completed below.*

### A. What is it?
- **Type coercion:** automatic or manual conversion of a value from one type to another.
  - **Implicit:** JS does it for you (`"5" * 2`).
  - **Explicit:** you do it (`Number("5")`).
- **`typeof`:** returns a string with the kind of a value.
- **`instanceof`:** checks if an object was created by a constructor/class (looks through the prototype chain).
- **`==` (loose)** converts types before comparing. **`===` (strict)** does not.

### B. Why does it exist?
JS is dynamically typed, so operators must decide what to do with mixed types. Coercion rules fill that gap (sometimes surprisingly).

### C. Internally: the main rules ➕
- `+`: if **either** operand is a string (after converting objects to primitives) → **concatenation**. Otherwise → numeric addition.
- `- * / %`: use numeric operations (Number or BigInt, depending on operands); mixing BigInt and Number generally throws.
- `==`: if types differ, converts using the spec's algorithm. Special case: `null == undefined` is `true` and `null`/`undefined` equal **nothing else**.
- Relational `< > <= >=`: **when both converted primitive operands are strings**, compare lexicographically; otherwise numeric comparison is used (with BigInt/string special cases). Thus `null >= 0` is `true` but `"11" < "2"` is also `true`.
- **Falsy values** (convert to `false`): `false`, `0`, `-0`, `0n`, `""`, `null`, `undefined`, `NaN`. **Everything else is truthy** (including `"0"`, `[]`, `{}`, `"false"`).

### D. Example
```javascript
console.log(typeof "a");           // "string"
console.log(typeof 1);             // "number"
console.log(typeof undefined);     // "undefined"
console.log(typeof null);          // "object"  ← quirk
console.log(typeof [] );           // "object"  ← use Array.isArray([])
console.log(typeof function(){});  // "function"

class Car {}
const c = new Car();
console.log(c instanceof Car);     // true
console.log(c instanceof Object);  // true (prototype chain)

console.log("5" + 2);    // "52"
console.log("5" - 2);    // 3
console.log("5" * "2");  // 10
console.log(true + 1);   // 2
console.log([] + []);    // ""
console.log(null == undefined);  // true
console.log(null == 0);          // false
console.log(null >= 0);          // true
console.log("11" < "2");           // true (two strings → lexicographic comparison)
console.log(NaN == NaN);         // false
```

### E. Step-by-step (`"5" - 2`)
1. `-` is arithmetic only → convert both operands to numbers.
2. `"5"` → `5`.
3. `5 - 2` → `3`.

### F. When to use
- **Always `===`.** The exception people accept: `x == null` to check "null or undefined".
- Explicit conversion: `Number(x)`, `String(x)`, `Boolean(x)` (or `!!x`), `parseInt(x, 10)`, `parseFloat(x)`.

### G. Common mistakes
```javascript
if ("0") {}                // runs! "0" is truthy
Number("");                // 0   (empty string → 0)
Number("12px");            // NaN
parseInt("12px");          // 12  (parses until invalid char)
[10, 9, 1].sort();         // [1, 10, 9] (sorts as STRINGS by default!)
```

### H. Interview questions
**Q: `==` vs `===`?** `==` coerces types; `===` requires same type and value.
**Q: How to reliably check an array?** `Array.isArray(x)`.
**Q: What does `[] == ![]` return?** `true` (classic trick: `![]` is `false` → `0`; `[]` → `""` → `0`).

### I. Quick revision
Use `===`. `+` concatenates if any side is a string. `- * /` perform numeric operations (may use `BigInt`); comparisons of two strings can be lexicographic. Know the 8 falsy values. `typeof null` is `"object"`.

---

## 2.5 Operators: Logical Assignment, `??`, `?.`, Template Literals

📝 *Logical assignment from my notes; string operators section was empty → completed.*

### A. What is it?

**Logical assignment** 📝: assign only if a condition passes.

| Operator | Assigns when the left side is… | Equivalent to |
|---|---|---|
| `a \|\|= b` | **falsy** | `a \|\| (a = b)` |
| `a &&= b` | **truthy** | `a && (a = b)` |
| `a ??= b` | **`null` or `undefined`** | `a ?? (a = b)` |

**Related operators ➕**
- `??` (nullish coalescing): default only for `null/undefined`.
- `?.` (optional chaining): stop safely if something is `null/undefined`.
- Template literals: backtick strings with `${}`.

### B. Why does it exist?
`||` treats `0` and `""` as "missing", which is often wrong. `??` fixes that. `?.` removes long `if (a && a.b && a.b.c)` chains.

### D. Example
```javascript
let count = 0;
count ||= 10;   // 10  ← 0 is falsy, so replaced (often a bug!)

let count2 = 0;
count2 ??= 10;  // 0   ← 0 is NOT null/undefined, kept ✅

let user = { name: "Ali" };
user.role ??= "guest";
console.log(user);  // { name: "Ali", role: "guest" }

console.log(user.address?.city);       // undefined (no error)
console.log(user.address?.city ?? "N/A"); // "N/A"

// String operators & template literals
const first = "Sara", age = 22;
console.log("Hi " + first);                         // concatenation
console.log(`Hi ${first}, next year you're ${age + 1}`); // template literal
console.log(`line 1
line 2`);                                           // multi-line works
```

### E. Step-by-step (`count2 ??= 10`)
1. Evaluate left side: `0`.
2. Is it `null` or `undefined`? No.
3. Short-circuit: **do not** evaluate/assign the right side. Result stays `0`.

### F. When to use
- `??` / `??=` for defaults where `0`, `""`, `false` are valid.
- `||=` when any falsy value should be replaced.
- `?.` for API data that may be missing.

### G. Common mistake
```javascript
const port = userPort || 3000;  // ❌ if userPort is 0 → 3000
const port2 = userPort ?? 3000; // ✅ only if null/undefined
```

### H. Interview question
**Q: `||` vs `??`?** `||` falls back on any falsy value; `??` only on `null`/`undefined`.

### I. Quick revision
`||=` falsy · `&&=` truthy · `??=` null/undefined. Prefer `??` for defaults. Use backticks for strings with variables.

---

## 2.6 Loops: `for`, `for…in`, `for…of`, `forEach`, `map`

📝 *From my notes, corrected.*

### A. What is it?

| Tool | Gives you | Works on | Can `break`? | Returns |
|---|---|---|---|---|
| `for (let i…)` | index | anything | ✅ | – |
| `for…in` | **property names (keys)** (including inherited enumerable ones) | objects | ✅ | – |
| `for…of` | **values** | iterables: Array, String, Map, Set, NodeList, generators | ✅ | – |
| `arr.forEach(fn)` | each value | arrays | ❌ (throw to exit) | `undefined` |
| `arr.map(fn)` | each value | arrays | ❌ | **new array** |

### B. Why do we need so many?
Different jobs: transform data (`map`), run side effects (`forEach`), exit early (`for…of`), inspect keys (`for…in`).

### C. Internally
- `for…of` uses the **iterator protocol**: it calls `obj[Symbol.iterator]()` and repeatedly calls `.next()`. Plain objects are **not iterable**, so `for (x of {a:1})` throws `TypeError`.
- `for…in` walks the object **and its prototype chain** for enumerable string keys.

### D. Example
```javascript
const arr = ["a", "b"];
const obj = { x: 1, y: 2 };

for (const v of arr) console.log(v);      // a, b
for (const i in arr) console.log(i);      // "0", "1"  (strings! indexes as keys)
for (const k in obj) console.log(k);      // x, y

// 🔧 Better way to loop over objects:
for (const [key, value] of Object.entries(obj)) console.log(key, value);

const doubled = [1, 2, 3].map(n => n * 2);  // [2, 4, 6]
[1, 2, 3].forEach(n => console.log(n));      // side effects only
```

### G. Common mistakes
```javascript
// 1) for...in on arrays: gets inherited/extra properties and string indexes
Array.prototype.custom = 1;
for (const i in [10, 20]) console.log(i);  // "0", "1", "custom"  ← surprise

// 2) Using map when you ignore the result
arr.map(x => console.log(x)); // works but wrong tool, use forEach

// 3) ⚠️ ASYNC PITFALL 📝: await does NOT work inside forEach
async function bad() {
  [1, 2, 3].forEach(async (n) => {
    await sleep(100);
    console.log(n);
  });
  console.log("done"); // prints BEFORE the numbers
}
// forEach ignores returned promises, so the outer function does not wait.

// ✅ sequential:
async function good() {
  for (const n of [1, 2, 3]) { await sleep(100); console.log(n); }
  console.log("done");
}
// ✅ parallel:
await Promise.all([1, 2, 3].map(async (n) => { await sleep(100); console.log(n); }));
```

### H. Interview questions
**Q: `for…in` vs `for…of`?** `in` → keys (inherited too), `of` → values of iterables.
**Q: Why doesn't `await` work in `forEach`?** `forEach` calls the callback and ignores the returned promise; it doesn't wait.
**Q: `map` vs `forEach`?** `map` returns a new array; `forEach` returns `undefined`.

### I. Quick revision
Arrays → `for…of` / array methods. Objects → `Object.entries()` + `for…of`. Need `await` in order → `for…of`. Transform → `map`. Side effect → `forEach`.

---

# PART 3: Behind the Scenes

> 🎯 This is the foundation for closures, `this`, hoisting and the event loop. Take your time here.

## 3.1 Execution Context and the Call Stack

📝 *Call Stack from my notes; Execution Context from my "search about this" list. Now explained.*

### A. What is it?
- **Execution Context (EC):** the "environment" the engine creates to run a piece of code. It holds: the variables available, the value of `this`, and a link to the outer scope.
- **Call Stack:** a **LIFO** (last in, first out) stack of execution contexts. The top is what's running **right now**.

Types of EC: **Global** (created once at start), **Function** (created on *every call*), and Eval (ignore).

### B. Why does it exist?
JS needs to know *where it is*: which function is running, where to return when it finishes, and which variables are visible.

### C. How it works internally
Each EC has two phases:

**1. Creation phase**
- Create the **Lexical Environment** (variables/functions of this scope).
- `var` → `undefined`. `let/const` → uninitialized (TDZ). Function declarations → stored fully (**this is hoisting**).
- Determine `this`.
- Set the **outer environment reference** (for the scope chain).

**2. Execution phase**
- Run line by line, assign values, call other functions (pushing new ECs).

> One JS agent has an execution-context stack and runs JavaScript jobs to completion; workers can run concurrently.

### D. Example
```javascript
function multiply(a, b) { return a * b; }
function square(n)      { return multiply(n, n); }
function printSquare(n) { console.log(square(n)); }

printSquare(4);
```

### E. Step-by-step (stack over time)
```text
1. [Global]
2. [Global, printSquare(4)]
3. [Global, printSquare, square(4)]
4. [Global, printSquare, square, multiply(4,4)]   ← returns 16, popped
5. [Global, printSquare, square]                   ← returns 16, popped
6. [Global, printSquare, console.log(16)]          ← prints 16
7. [Global]                                        ← all finished
```

### G. Common mistakes
```javascript
function forever() { forever(); }
forever(); // ❌ RangeError: Maximum call stack size exceeded (stack overflow)
```
- Recursion without a base case.
- Blocking the stack with a long synchronous loop → page freezes (no events, no rendering).

### H. Interview questions
**Q: What is the call stack?** A LIFO structure tracking active function calls.
**Q: What causes "Maximum call stack size exceeded"?** Too-deep or infinite recursion.
**Q: What are the two phases of an execution context?** Creation (memory setup/hoisting) and execution.

### I. Quick revision
EC = environment for running code. Stack = list of active ECs (LIFO). Creation phase makes hoisting happen. Each JS agent processes one job at a time; other agents/workers can run concurrently.

---

## 3.2 Scope, Lexical Environment and Scope Chain

📝 *From my notes (scope types, shadowing) + my "search" list. Expanded.*

### A. What is it?
- **Scope:** the region of code where a variable is accessible.
  - **Global scope**: accessible everywhere.
  - **Function scope**: only inside the function.
  - **Block scope** `{}`: only inside braces (for `let`/`const`).
- **Lexical scoping:** scope is decided by **where the code is written**, not where it's called from.
- **Lexical Environment:** the internal structure `{ environmentRecord (variables), outer (reference to parent) }`.
- **Scope chain:** the linked list of lexical environments through `outer`.
- **Shadowing** 📝: an inner variable with the same name **hides** the outer one.

### B. Why does it exist?
Prevents name collisions, enables privacy, and makes code predictable: you can understand variable access by *reading* the code.

### C. Internally (identifier resolution)
When the engine meets a variable name:
1. Look in the **current** lexical environment.
2. Not found? Follow `outer` to the parent.
3. Continue to **global**.
4. Still not found → `ReferenceError`.

### D. Example
```javascript
const globalVar = "global";

function outer() {
  const outerVar = "outer";

  function inner() {
    const innerVar = "inner";
    console.log(innerVar, outerVar, globalVar); // inner outer global
  }
  inner();
  // console.log(innerVar); ❌ ReferenceError
}
outer();

// Shadowing
let x = "outer";
{
  let x = "inner";
  console.log(x); // "inner"
}
console.log(x);   // "outer"
```

### E. Step-by-step (lexical vs dynamic)
```javascript
const name = "global";
function show() { console.log(name); }
function test() {
  const name = "local";
  show();
}
test(); // "global"
```
1. `show` was **written** in the global scope, so its `outer` is global.
2. `test` calls `show`, but that doesn't change `show`'s `outer`.
3. `name` is looked up: `show` scope → global → `"global"`.

### G. Common mistakes
- Thinking scope depends on *where a function is called* (that's dynamic scoping, which JS doesn't use).
- Accidental globals (assigning without `let/const`).
- Too much shadowing makes code confusing, so use clear names 📝.

### H. Interview questions
**Q: What is lexical scope?** Scope is determined by where functions/variables are written in the source code.
**Q: What is the scope chain?** The chain of outer references used to look up variables.

### I. Quick revision
Look inside → look outward → global → ReferenceError. Scope is fixed at **write time**. Use `let/const` to avoid leaks.

---

## 3.3 Hoisting (deep dive)

📝 *"Hoisting" appears in my variables notes. Full explanation added.*

### A. What is it?
The effect of the **creation phase**: declarations are registered in memory *before* the code runs, so they appear to be "moved to the top".  (Nothing is physically moved.)

### C. Internally
| Declaration | Behavior before its line |
|---|---|
| `function foo(){}` | Fully hoisted: callable early ✅ |
| `var x` | Hoisted, value `undefined` |
| `let` / `const` / `class` | Hoisted but in **TDZ** → `ReferenceError` |
| Function expression `const f = function(){}` / arrow | Follows the variable rule (`var` → `undefined` → "not a function"; `const` → TDZ) |

### D. Example
```javascript
sayHi();                 // "Hi" ✅
function sayHi() { console.log("Hi"); }

// sayBye();           // ❌ TypeError if executed (var is undefined)
var sayBye = function () { console.log("Bye"); };

// sayHello();         // ❌ ReferenceError if executed (TDZ)
const sayHello = () => console.log("Hello");
```

### G. Common mistakes
Relying on hoisting for readability. **Declare before use.**

### H. Interview question
**Q: Is `let` hoisted?** Yes, but it is not initialized until its declaration line (TDZ), so accessing it earlier throws.

### I. Quick revision
Function declarations: usable early. `var`: `undefined`. `let/const/class`: TDZ error.

---

## 3.4 Memory Management and Garbage Collection

📝 *From my notes (Mark-and-Sweep, best practices, interconnections), corrected.*

### A. What is it?
JavaScript manages memory **automatically**: it allocates when you create things and frees memory when it's no longer needed (**Garbage Collection, GC**).

### B. Why does it exist?
In C/C++ you free memory manually (and forget → leaks, or free too early → crashes). JS removes that burden.

### C. Internally
**Lifecycle:** 1) **Allocate** → 2) **Use** → 3) **Release** (GC).

**Mental model 📝🔧** (simplified, engines optimize):
- **Stack (mental model)**: call frames and some temporaries; engines optimize how individual values are represented.
- **Heap (mental model)**: many long-lived objects and collections; storage decisions remain implementation-specific.

**How does GC decide something is garbage? → Reachability.**
- Start from **roots** (global object, current call stack variables, etc.).
- **Mark** everything reachable from roots.
- **Sweep** everything not marked → freed.

> Old approach "reference counting" fails with circular references; **mark-and-sweep** handles them, since unreachable cycles are still unreachable.

**V8 specifics ➕:** a *generational* GC. Most objects die young, so the **young generation** is collected often and quickly (Scavenger), and survivors move to the **old generation** (Mark-Compact, with incremental/concurrent work to avoid long pauses).

### D. Example
```javascript
let user = { name: "Ali" };  // object A is reachable via `user`
user = null;                 // nothing points to A → eligible for GC

// Circular references are fine:
function make() {
  const a = {}; const b = {};
  a.b = b; b.a = a;
}
make(); // after return, a and b are unreachable → collected
```

### E. Step-by-step
1. `{name:"Ali"}` allocated on the heap; `user` references it.
2. `user = null` removes the only reference.
3. At some later time the GC marks reachable objects from roots; our object isn't reached.
4. The sweep frees it (**you can't control exactly when**).

### G. Common mistakes: memory leaks 📝
A leak = memory that **stays reachable** even though you no longer need it.

```javascript
// 1) Forgotten timers
const id = setInterval(() => {/* uses big data */}, 1000);
// ✅ clearInterval(id) when done

// 2) Forgotten event listeners
btn.addEventListener("click", handler);
// ✅ btn.removeEventListener("click", handler) / use { once: true }

// 3) Accidental globals
function f() { leaked = new Array(1e6); }  // no let/const → global forever

// 4) Closures holding big data you don't need
// 5) Detached DOM nodes still referenced from a variable
// 6) Ever-growing caches/arrays → use WeakMap / WeakSet / size limits
```

**Best practices 📝**
- Declare with `let`/`const`; avoid globals.
- `clearTimeout` / `clearInterval`.
- `removeEventListener` when not needed.
- Set references to `null` when they truly must be released (rarely needed).
- Use `WeakMap` / `WeakSet`: they hold keys **weakly**, so entries disappear when the key object is unreachable.

### H. Interview questions
**Q: How does GC work in JS?** Reachability-based mark-and-sweep from roots.
**Q: How can closures cause leaks?** A closure retains the environments/values that its body may need; engines can optimize storage of unused variables.
**Q: What is a WeakMap for?** Associate data with objects without preventing their garbage collection.

### I. Quick revision
Allocate → use → GC frees **unreachable** memory. Leaks = unwanted references (timers, listeners, globals, caches). `WeakMap`/`WeakSet` help.

---

# PART 4: Functions

## 4.1 First-Class Functions, Callbacks, Higher-Order Functions

📝 *Heading only in my notes. Completed.*

### A. What is it?
- **First-class functions:** functions are *values*. You can store them in variables, pass them as arguments, return them from functions, and put them in objects/arrays.
- **Callback:** a function passed to another function to be called later.
- **Higher-order function (HOF):** a function that takes and/or returns a function (`map`, `filter`, `reduce`, `addEventListener`, `setTimeout`).

### B. Why does it exist?
It lets you pass **behavior** around, enabling reusable, composable code (and is the basis of async JS and closures).

### C. Internally
A function is an **object** (callable) stored on the heap. A variable holds a reference to it. When created, it captures a reference to its **lexical environment** (that's what makes closures possible).

### D. Example
```javascript
// Function declaration, expression, arrow
function add(a, b) { return a + b; }
const sub = function (a, b) { return a - b; };
const mul = (a, b) => a * b;

// Higher-order function
function calculate(a, b, operation) { return operation(a, b); }
console.log(calculate(2, 3, add));  // 5
console.log(calculate(2, 3, mul));  // 6

// Returns a function
const multiplyBy = (factor) => (n) => n * factor;
const double = multiplyBy(2);
console.log(double(10)); // 20

// Callbacks in async
setTimeout(() => console.log("later"), 1000);
[1, 2, 3, 4].filter(n => n % 2 === 0); // [2, 4]
```

### G. Common mistakes
```javascript
setTimeout(greet(), 1000);   // ❌ calls greet NOW, passes its result
setTimeout(greet, 1000);     // ✅ passes the function itself
button.onclick = handle();   // ❌ same problem
```
- "Callback hell" (deep nesting) → use Promises/`async-await`.

### H. Interview question
**Q: What does "functions are first-class citizens" mean?** They can be assigned, passed, and returned like any other value.

### I. Quick revision
Functions = values. Pass `fn`, not `fn()`. HOF takes/returns functions.

---

## 4.2 Closures

📝 *"Closures" heading in my notes. Full explanation.*

### A. What is it?
A **closure** is a function **together with** the lexical environment where it was created. It *remembers* the variables from its outer scope **even after the outer function has finished**.

### B. Why does it exist?
- **Private state** (no classes needed).
- **Function factories** (configured functions).
- **Callbacks that remember context** (event handlers, timers).
- Module pattern, memoization, partial application, debounce/throttle.

### C. How it works internally
1. Every function object stores a hidden reference to the lexical environment where it was **defined** (spec: `[[Environment]]`).
2. When the outer function returns, its EC is popped off the call stack, **but its variable environment is not destroyed** if an inner function still references it. The GC keeps it alive because it's still *reachable*.
3. When the inner function runs, scope-chain lookup finds the variable in that preserved environment.

### D. Example
```javascript
function counter() {
  let count = 0;           // private variable

  return function () {
    count++;
    return count;
  };
}

const increment = counter();
console.log(increment()); // 1
console.log(increment()); // 2

const other = counter();   // a NEW, independent environment
console.log(other());      // 1
console.log(increment());  // 3
```

**Advanced: data privacy + multiple methods**
```javascript
function createBankAccount(initial) {
  let balance = initial;                 // can't be accessed directly
  return {
    deposit(n)  { balance += n; return balance; },
    withdraw(n) {
      if (n > balance) throw new Error("Insufficient funds");
      balance -= n; return balance;
    },
    getBalance() { return balance; },
  };
}
const acc = createBankAccount(100);
acc.deposit(50);                // 150
console.log(acc.getBalance());  // 150
console.log(acc.balance);       // undefined (private)
```

### E. Step-by-step (first example)
1. `counter()` called → new EC with `count = 0`.
2. The inner function is created and remembers this environment.
3. `counter` returns the inner function and its EC is popped from the stack.
4. `count` **survives** because the inner function (`increment`) still references that environment.
5. `increment()` → creates its own EC whose `outer` is that preserved environment → `count++` modifies the *shared* variable → returns 1.
6. Next call → same environment → returns 2.

### F. When to use
Private state, factories (`makeCounter`, `multiplyBy`), event handlers with context, `once()`, memoization, debounce.

### G. Common mistakes
```javascript
// The classic loop trap
var fns = [];
for (var i = 0; i < 3; i++) fns.push(() => i);
console.log(fns.map(f => f()));  // [3, 3, 3]  all share one `i`

// ✅ Fix 1: let (one binding per iteration)
// ✅ Fix 2: IIFE that captures the current value
for (var i = 0; i < 3; i++) fns.push(((j) => () => j)(i));
```
- **Memory:** a closure keeps the *scope* alive; don't capture huge objects you don't need.
- Closures capture **variables**, not values: if the variable changes later, the closure sees the new value.

### H. Interview questions
**Q: What is a closure?** A function bundled with its lexical environment, giving access to outer variables after the outer function returned.
**Q: Closure use cases?** Private variables, factories, memoization, callbacks, partial application.
**Q: Output of the `var` loop with `setTimeout`?** `3 3 3`. Use `let` to get `0 1 2`.

### I. Quick revision
Closure = function + remembered scope. Created on **every** function creation. Keeps outer variables alive (GC can't free them while reachable). Variables are captured by reference.

---

## 4.3 IIFE (Immediately Invoked Function Expression)

📝 *From my notes, expanded.*

### A. What is it?
A function that is **defined and executed at the same moment**.

### B. Why does it exist?
Before `let/const` and modules, a common way to create a private scope (and avoid polluting the global scope) was a function; older syntax also included `catch` bindings and other scoped constructs.

### C. Internally
The parentheses turn a function *declaration* into a function *expression* (declarations can't be called immediately), then `()` calls it. A function execution context is created; captured variables **can remain alive** after it returns.

### D. Example
```javascript
(function () {
  const secret = "hidden";
  console.log("runs immediately");
})();

(() => { console.log("arrow IIFE"); })();

// Module pattern
const Counter = (function () {
  let count = 0;                       // private
  return { inc: () => ++count, get: () => count };
})();
Counter.inc();
console.log(Counter.get()); // 1

// Modern use: top-level await in old environments
(async () => {
  const res = await fetch("/api");
  console.log(res.ok);
})();
```

### F. When to use
One-time setup, isolated logic, async wrapper where top-level `await` isn't available, legacy libraries. ES modules replaced most uses 📝.

### G. Common mistake
```javascript
// function () {}();   // ❌ SyntaxError if uncommented
(function () {})();    // ✅
```
Missing semicolon before an IIFE on the previous line can merge two statements.

### I. Quick revision
`(function(){ ... })();` = create private scope + run now. Interview favorite and common in legacy code.

---

## 4.4 `this`, `call`, `apply`, `bind`

📝 *Heading only ("controlling this"). Completed.*

### A. What is it?
`this` is a special keyword whose value for a **regular function** is primarily decided **by how it is called**, not where it was written. The surrounding global/module context matters too. Exception: **arrow functions** have no own `this`; they use the `this` of the surrounding (lexical) scope.

### B. Why does it exist?
It lets one function work with different objects (method reuse).

### C. The 5 rules (priority high → low) ➕
1. **`new` binding:** `new Foo()` → `this` is the newly created object.
2. **Explicit binding:** `call/apply/bind` → `this` is what you pass.
3. **Implicit binding:** `obj.method()` → `this` is `obj` (the object left of the dot at call time).
4. **Default binding:** plain call `fn()` → `window`/`globalThis` (sloppy) or **`undefined`** (strict mode / modules).
5. **Arrow functions:** ignore all the above, use outer `this`.

### D. Example
```javascript
const user = {
  name: "Ali",
  regular() { return this.name; },
  arrow: () => typeof this,   // `this` here is NOT user (outer scope)
};

console.log(user.regular());    // "Ali"  (rule 3)

const detached = user.regular;
// The method is in a non-strict classic script here, so a standalone call
// normally uses globalThis; it returns undefined only if globalThis.name is undefined.
// In strict mode / ES modules, detached() THROWS when reading this.name.
// console.log(detached());        // environment-dependent; avoid this call

// Explicit binding
function greet(greeting, punct) { return `${greeting}, ${this.name}${punct}`; }
const p = { name: "Sara" };
console.log(greet.call(p, "Hello", "!"));    // "Hello, Sara!"  (args one by one)
console.log(greet.apply(p, ["Hi", "?"]));    // "Hi, Sara?"     (args as array)
const bound = greet.bind(p, "Hey");          // returns a NEW function
console.log(bound("."));                     // "Hey, Sara."
```

| Method | Calls now? | Args | Returns |
|---|---|---|---|
| `call(thisArg, a, b)` | ✅ | individually | function result |
| `apply(thisArg, [a, b])` | ✅ | as array | function result |
| `bind(thisArg, a)` | ❌ | individually (partial) | **new function** |

### E. Step-by-step (`detached()`)
1. `user.regular` is just a function value; we copy it to `detached`.
2. We call `detached()`: no object before the dot → default binding.
3. In a strict function it is `undefined` (reading `this.name` throws). In sloppy mode it is usually `globalThis`, whose `.name` value is environment-dependent.

### G. Common mistakes
```javascript
// Losing `this` in callbacks
class Timer {
  constructor() { this.seconds = 0; }
  start() {
    setInterval(function () { this.seconds++; }, 1000); // ❌ `this` isn't the Timer
    setInterval(() => { this.seconds++; }, 1000);       // ✅ arrow keeps `this`
  }
}
button.addEventListener("click", obj.method);            // ❌ `this` = the button
button.addEventListener("click", obj.method.bind(obj));  // ✅
```
- Arrow functions as **object methods** or **constructors** (they can't be `new`'d).

### H. Interview questions
**Q: How is `this` determined?** Regular functions: `new`, explicit binding, method call, or default rules; bound functions and arrow functions have their own special behavior. This is a teaching order, not a universal priority algorithm.
**Q: `call` vs `apply` vs `bind`?** See table.
**Q: Why do arrow functions not work as methods when you need `this`?** They don't have their own `this`.

### I. Quick revision
Regular-function `this` depends on invocation (and strictness); arrow functions inherit lexical `this`. `call/apply` run now; `bind` returns a new function.

---

# PART 5: Objects and OOP

## 5.1 Prototypes and the Prototype Chain

📝 *From my notes (prototype section), expanded.*

### A. What is it?
Every object has a hidden link (`[[Prototype]]`) to another object, its **prototype**. If a property isn't found on the object, JS looks on its prototype, then the prototype's prototype… until `null`. This is the **prototype chain**. 📝 *A prototype is a fallback object that other objects borrow properties and methods from.*

### B. Why does it exist?
**Memory efficiency** 📝: instead of copying a method into thousands of instances, all instances **share one function** on the prototype. It is also JavaScript's inheritance system.

### C. How it works internally
- Property lookup: **own object → its prototype → prototype's prototype → … → `null`** (returns `undefined`).
- `obj.__proto__` (legacy accessor) and `Object.getPrototypeOf(obj)` read that link.
- Functions (non-arrow) have a `.prototype` property. When you call `new Foo()`, the new object's `[[Prototype]]` is set to `Foo.prototype`.

> ⭐ **`prototype` vs `__proto__`:** `Foo.prototype` is the object that **instances will inherit from**. `instance.__proto__` (i.e., `Object.getPrototypeOf(instance)`) **is** that object.

```text
const d = new Dog("Rex")
   d ──[[Prototype]]──► Dog.prototype ──► Animal.prototype ──► Object.prototype ──► null
   (own: name)          (bark)            (eat)                (toString, ...)
```

**Key methods 📝:** `Object.create(proto)` creates a new object linked to `proto`; `Object.getPrototypeOf(obj)` reads the prototype; ➕ `Object.setPrototypeOf` (avoid, slow); `obj.hasOwnProperty(k)` / `Object.hasOwn(obj, k)` checks own properties only.

### D. Example
```javascript
// Constructor function style
function Animal(name) { this.name = name; }
Animal.prototype.eat = function () { return `${this.name} eats`; };

function Dog(name) { Animal.call(this, name); }
Dog.prototype = Object.create(Animal.prototype);
Dog.prototype.constructor = Dog;
Dog.prototype.bark = function () { return `${this.name} barks`; };

const rex = new Dog("Rex");
console.log(rex.bark());                  // "Rex barks"  (found on Dog.prototype)
console.log(rex.eat());                   // "Rex eats"   (found on Animal.prototype)
console.log(rex.toString());              // "[object Object]" (Object.prototype)
console.log(Object.getPrototypeOf(rex) === Dog.prototype); // true
console.log(rex instanceof Animal);       // true
console.log(Object.hasOwn(rex, "eat"));   // false (it's inherited)

// Simple version with Object.create
const animal = { eat() { return "eating"; } };
const cat = Object.create(animal);
cat.meow = () => "meow";
console.log(cat.eat());   // "eating"
```

### E. Step-by-step (`rex.eat()`)
1. Look for `eat` on `rex` itself → not found.
2. Look on `Dog.prototype` → not found.
3. Look on `Animal.prototype` → **found**.
4. Call it with `this = rex` (method call rule), so `this.name` is `"Rex"`.

### F. When to use
You mostly use it indirectly through `class`. Direct use: `Object.create` for lightweight inheritance, understanding library code, polyfills (adding methods to built-ins).

### G. Common mistakes
- **Modifying built-in prototypes** (`Array.prototype.x = …`) → breaks `for…in` and conflicts with future features.
- Putting methods inside the constructor (`this.bark = function(){}`) → a new copy per instance, wasting memory.
- Confusing `prototype` and `__proto__`.
- Shared **mutable** data on a prototype (e.g., an array) is shared by all instances.

### H. Interview questions
**Q: What is the prototype chain?** The lookup path through linked prototype objects until `null`.
**Q: `prototype` vs `__proto__`?** `prototype` exists on constructor functions; `__proto__` is the actual link on instances. `new F().__proto__ === F.prototype`.
**Q: What does `new` do?** Creates an empty object → links its prototype to `F.prototype` → runs `F` with `this` = that object → returns the object (unless `F` returns another object).

### I. Quick revision
Lookup goes up the chain to `null`. Methods live on prototypes (shared, memory-efficient). `class` builds on prototype inheritance and adds its own semantics. `Object.create` / `getPrototypeOf` are the key tools.

---

## 5.2 Classes and Encapsulation

📝 *From my OOP notes ("limited encapsulation, flexible, trust-based OOP"), expanded.*

### A. What is it?
`class` is a modern way to define constructors, prototype methods, inheritance, fields, and private state. **Prototype inheritance remains underneath**, but classes are **not only syntax sugar**: private fields, field initializers, strict semantics, and other rules are distinct features.

### B. Why does it exist?
Developers coming from Java/C#/Python wanted familiar, readable syntax for object blueprints and inheritance.

### C. Internally
- Methods go on `ClassName.prototype` (shared).
- `extends` links `Child.prototype` → `Parent.prototype` and also `Child` → `Parent` (for statics).
- `super(...)` calls the parent constructor (**required** before using `this` in a child constructor).
- **Private fields `#x`** (ES2022) are *truly* private (enforced by the engine, not just by convention).

### D. Example
```javascript
class Animal {
  #energy = 10;                         // private field
  static count = 0;                     // belongs to the class, not instances

  constructor(name) { this.name = name; Animal.count++; }

  eat() { this.#energy++; return `${this.name} eats (${this.#energy})`; }
  get energy() { return this.#energy; } // getter
}

class Dog extends Animal {
  constructor(name) { super(name); }    // super initializes the parent first
  bark() { return `${this.name} barks`; }
  eat() { return super.eat() + " happily"; } // method override
}

const d = new Dog("Rex");
console.log(d.eat());            // "Rex eats (11) happily"
console.log(d.energy);           // 11
// // console.log(d.#energy);      // ❌ SyntaxError if uncommented (private)
console.log(typeof Animal);      // "function"  (classes ARE functions)
console.log(Object.getPrototypeOf(Dog) === Animal); // true
```

### Encapsulation in JS 📝
- JS = **limited, flexible, "trust-based" OOP**: before `#private`, privacy was a convention (`_name`) or achieved with closures. *You* are responsible for correctness.
- Today: use `#private` fields for real privacy; closures also give privacy.

### F. When to use
Many similar objects with behavior (models, components, services). For simple data, use plain objects/functions: JS doesn't force you into classes.

### G. Common mistakes
```javascript
class A { constructor() { console.log(this); } }
// A();                // ❌ TypeError if executed

// BAD (do not execute): derived constructor uses `this` before super():
// class B extends A { constructor() { this.x = 1; super(); } }
// new B();                // ❌ ReferenceError at runtime

class C { greet() { return this; } }
const g = new C().greet;
g();                       // undefined (lost `this`; class bodies are strict)
```
Use arrow-function class fields (`greet = () => {…}`) or `.bind` if passing methods as callbacks.

### H. Interview questions
**Q: Are JS classes real classes?** They use prototype-based inheritance, with additional class semantics including truly private fields, initialization order, and strict-mode methods.
**Q: How do you make private members?** `#field` syntax (true privacy), closures, or `_` naming convention (not enforced).
**Q: Composition vs inheritance?** Prefer composition (build objects from small behaviors); deep inheritance trees are fragile.

### I. Quick revision
`class` uses prototype inheritance underneath, with extra class semantics. `extends` + `super`. `#private` is real. Methods are shared on the prototype. Beware losing `this`.

---

# PART 6: Asynchronous JavaScript

## 6.1 Event Loop, Call Stack, Tasks and Microtasks

📝 *From my "How JavaScript Works Behind the Scenes" and "Event Loop" notes, restructured.*

### A. What is it?
A **single JavaScript agent** has one execution thread and an execution-context stack. A browser page can also create **Web Workers** running JS on other threads. The event loop lets the main agent coordinate network, timers, and UI events without blocking while waiting. The **event loop** is the mechanism (provided by the host: browser or Node) that coordinates this.

📝 **The pieces:**
1. **Call Stack**: runs functions, LIFO.
2. **Heap**: memory for objects.
3. **Host APIs** (browser; Node uses its own runtime/libuv): timers, networking, DOM events. 🔧 *Not ECMAScript language features.* Their waiting/work may be handled elsewhere, but **JavaScript listeners execute on the appropriate JS agent**.
4. **Microtask Queue**: Promise callbacks (`.then/.catch/.finally`), `await` continuations, `queueMicrotask`, `MutationObserver`. **High priority**.
5. **Tasks**: timers, queued UI events, `MessageChannel`, I/O readiness (host-specific). HTML has **multiple task sources**, so treating everything as one strict FIFO queue is an approximation. `dispatchEvent()` is synchronous.
6. **Event loop**: selects runnable tasks, runs JS callbacks, performs microtask checkpoints, and gives the browser opportunities to render.

### B. Why does it exist?
If JS **waited** for a 2-second network request, the whole page would freeze. Instead, JS **delegates** the waiting to the environment and continues; when the result is ready, a callback is queued.

### C. How it works internally

```text
          ┌──────────────┐        ┌───────────────────────┐
 code ──► │  Call Stack  │ ─────► │ Web APIs / OS (timers,│
          └──────▲───────┘ delegate│ network, DOM events)  │
                 │                 └──────────┬────────────┘
                 │                     done   │ callback
                 │              ┌─────────────▼─────────────┐
                 │  1st         │ Microtask Queue (Promises)│
                 ├──────────────┤                           │
                 │  2nd         ├───────────────────────────┤
                 └──────────────┤ Task Queue (timers, events)│
        Event Loop moves them   └───────────────────────────┘
```

**Browser mental model (simplified):**
1. The event loop selects **a task** (for example, initial script execution or a timer callback).
2. JavaScript runs it until it returns (run-to-completion).
3. A **microtask checkpoint** drains promise reactions and queued microtasks, including those added by microtasks.
4. The browser **may** update rendering.
5. Another task may run. Tasks can originate from different task sources.

> 🧠 *One task → drain microtasks → possible rendering → next task.* This is a model of a browser event loop, **not a universal rule for Node.js**.

### D. Example
```javascript
console.log("1: start");

setTimeout(() => console.log("2: timeout"), 0);

Promise.resolve().then(() => console.log("3: promise"));

queueMicrotask(() => console.log("4: microtask"));

console.log("5: end");
```
**Output**
```text
1: start
5: end
3: promise
4: microtask
2: timeout
```

### E. Step-by-step
1. `console.log("1: start")` runs on the stack → prints.
2. `setTimeout(...)`: the call is handed to the timer (Web API). When the time (0 ms) elapses, its callback goes to the **task queue**. *(The call itself finished instantly.)*
3. `Promise.resolve().then(cb)`: the promise is already resolved, so `cb` is queued in the **microtask queue**.
4. `queueMicrotask(cb2)`: queued in the microtask queue behind `cb`.
5. `console.log("5: end")` → prints. **Stack is now empty.**
6. Event loop: **microtasks first** → prints `3`, then `4`.
7. Microtasks empty → take one task: the timeout callback → prints `2`.

**Why isn't `setTimeout(…, 0)` instant?** It means "run *no sooner than* 0 ms, **after** the current code and all microtasks."

### F. When does this matter?
Predicting execution order, debugging "why did this run before that?", understanding why a long loop freezes UI, and why `await` code resumes in microtasks.

### G. Common mistakes
```javascript
// 1) Blocking the loop
while (true) {}              // page freezes: nothing else can run
// heavy loop of 1e9 iterations also freezes UI → split work or use a Web Worker

// 2) Starving the event loop with infinite microtasks
function loop() { Promise.resolve().then(loop); }  // never reaches timers/rendering
loop();

// 3) Assuming setTimeout timing is exact
// It's a minimum delay, not a guarantee (busy stack = later).
```

**Harder prediction:**
```javascript
setTimeout(() => console.log("A"), 0);
Promise.resolve()
  .then(() => { console.log("B"); return Promise.resolve(); })
  .then(() => console.log("C"));
(async () => { console.log("D"); await null; console.log("E"); })();
console.log("F");
// Output: D, F, B, E, C, A
```
*Why:* `D` and `F` are sync. `await null` schedules `E` in microtasks right after `B` (queued earlier). `C` comes later (chained `.then` + extra promise tick). `A` is a macrotask → last.

### H. Interview questions
**Q: Is JavaScript single-threaded? How does it do async?** A JS agent executes one task at a time. Browsers also support workers. Async I/O can finish in the host environment; the event loop schedules JS callbacks.
**Q: Microtask vs macrotask?** Promise reactions normally run at microtask checkpoints after current synchronous work and before the next browser task; Node has additional scheduling semantics.
**Q: Why does a Promise callback run before `setTimeout(0)`?** Microtask queue has priority over the task queue.
**Q: Does `async/await` create threads?** No, it's syntax over Promises; code after `await` runs as a microtask.

### I. Quick revision
Browser mental model: task → microtask checkpoint → optional rendering → next task. Node.js uses additional phases and queues. Promises = microtasks, timers/events = macrotasks. Web APIs are not the language. Never block the stack.

---

## 6.2 Timing Functions

📝 *From my notes.*

### A. What is it?
Four functions **provided by the host** (browser/Node), not by the JS language 📝:

| Function | Purpose |
|---|---|
| `setTimeout(fn, ms)` | Run `fn` **once** after ≥ `ms` |
| `clearTimeout(id)` | Cancel a pending timeout |
| `setInterval(fn, ms)` | Run `fn` **repeatedly** every ≈ `ms` |
| `clearInterval(id)` | Stop repeating |

### C. Internally
The host's timer counts the time; when it expires, the callback goes to the **task queue**. It runs only when the call stack is free and microtasks are drained, so delays are **minimums**. ➕ Browsers clamp nested timers to ≥ 4 ms and throttle timers in background tabs.

### D. Example
```javascript
const id = setTimeout(() => console.log("never"), 1000);
clearTimeout(id);                       // cancelled

let n = 0;
const timer = setInterval(() => {
  console.log(++n);
  if (n === 3) clearInterval(timer);    // stop after 3
}, 500);

// Pass arguments
setTimeout((a, b) => console.log(a + b), 100, 2, 3); // 5
```

### G. Common mistakes
- Forgetting `clearInterval` → leak + repeated work 📝.
- `setInterval` callbacks do not execute simultaneously **on the same JS thread**, but **async operations started by them can overlap**, and timer timing can drift. For polling, wait until one operation finishes before scheduling another:
```javascript
async function poll() {
  try { await doWork(); }
  catch (err) { console.error("Polling failed", err); }
  finally { setTimeout(poll, 1000); } // schedules after this attempt ends
}
```
- Passing `fn()` instead of `fn` (see 4.1).
- For animation use `requestAnimationFrame`, not `setInterval`. ➕

### I. Quick revision
Timers are host APIs. Delay = minimum. Always clear what you start.

---

## 6.3 Promises, `async/await`, and Combinators

📝 *Heading + one line in my notes. Completed.*

### A. What is it?
A **Promise** represents the **eventual outcome** of an operation. It might already be fulfilled or rejected when you receive it. States: **pending → fulfilled** (value) **or rejected** (error). Once settled, it never changes.

`async/await` is syntax that lets you write Promise code like synchronous code.

### B. Why does it exist?
Callbacks nest into "callback hell" and make error handling messy. Promises give chaining, centralized error handling (`.catch`), and combinators.

### C. Internally
- `.then(cb)` registers `cb`; when the promise settles, `cb` is queued as a **microtask**.
- `async function` **always returns a Promise**. `await p` pauses *that function only* (its state is saved) and returns control to the caller; the rest resumes as a microtask when `p` settles. The thread is **not** blocked.

### D. Example
```javascript
const wait = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

function getUser(id) {
  return new Promise((resolve, reject) => {
    setTimeout(() => (id > 0 ? resolve({ id, name: "Ali" }) : reject(new Error("Invalid id"))), 300);
  });
}

// Promise chain
getUser(1)
  .then(user => { console.log(user); return user.name; })
  .then(name => console.log(name))
  .catch(err => console.error(err.message))
  .finally(() => console.log("done"));

// async/await (preferred)
async function main() {
  try {
    const user = await getUser(1);
    console.log(user.name);        // "Ali"
    await getUser(-1);             // throws
  } catch (err) {
    console.error("Caught:", err.message);  // "Caught: Invalid id"
  } finally {
    console.log("cleanup");
  }
}
main();
```

### Promise combinators 📝 (coordinate many promises)

| Combinator | Resolves when… | Rejects when… | Result |
|---|---|---|---|
| `Promise.all([...])` | **all** fulfill | **any** rejects (fail-fast) | array of values (same order) |
| `Promise.allSettled([...])` | **all** settle | never | array of `{status, value\|reason}` |
| `Promise.race([...])` | the **first** settles (fulfilled **or** rejected) | first settles as rejected | that one result |
| `Promise.any([...])` | the **first fulfills** | **all** reject → `AggregateError` | first fulfilled value |

```javascript
const a = wait(100).then(() => "A");
const b = wait(200).then(() => "B");
const bad = Promise.reject(new Error("fail"));

console.log(await Promise.all([a, b]));            // ["A", "B"]
console.log(await Promise.allSettled([a, bad]));   // [{status:"fulfilled",value:"A"}, {status:"rejected",reason:Error}]
console.log(await Promise.race([a, b]));           // "A"
console.log(await Promise.any([bad, b]));          // "B"
// Promise.all([a, bad]) → rejects with Error("fail")
```

### E. Step-by-step (sequential vs parallel)
```javascript
// ❌ Sequential: ~600 ms (each waits for the previous)
const x = await wait(300);
const y = await wait(300);

// ✅ Concurrent timers: ~300 ms (both timers start immediately; no extra thread is required)
const [x2, y2] = await Promise.all([wait(300), wait(300)]);
```

### F. When to use
`all` → need every result. `allSettled` → want every outcome even with failures. `race` → wait for the first outcome; **racing a timer does not cancel the losing operation**. Use `AbortController` to cancel supported requests. `any` → fastest successful mirror/source.

### G. Common mistakes
```javascript
// 1) Forgetting await
const user = getUser(1);       // Promise, not data
console.log(user.name);        // undefined

// 2) Unhandled rejection (no .catch / try-catch) → error logged / process crash in Node

// 3) async function inside forEach (see 2.6)

// 4) Not returning inside .then
p.then(v => { doSomething(v); }).then(r => console.log(r)); // undefined, forgot `return`

// 5) new Promise wrapper around something already returning a Promise
```

### H. Interview questions
**Q: States of a Promise?** pending, fulfilled, rejected.
**Q: `Promise.all` vs `allSettled`?** `all` fails fast on first rejection; `allSettled` waits for everything and never rejects.
**Q: What does `async` return?** Always a Promise.
**Q: Are Promises asynchronous? What about the executor function?** The executor runs **synchronously**; `.then` callbacks run asynchronously (microtask).

### I. Quick revision
Promise = representation of an outcome (possibly already settled). Reactions → microtasks. `await` pauses only its function. Use `Promise.all` to coordinate concurrent operations; it does not parallelize CPU work. Always handle errors.

---

## 6.4 `fetch` and HTTP Errors

📝 *My last note: "I should always check response for status code." Explained.*

### A. What is it?
`fetch(url, options)` is the browser (and Node 18+) API for HTTP requests. It returns a **Promise<Response>**.

### B. Why this matters
🔧 `fetch` **does not reject solely because of HTTP 404/500**. It rejects for network/permission errors, aborts, or invalid request setup; HTTP error responses still resolve. A **404 or 500 is still a "successful" fetch**: the promise **resolves**. If you don't check, you try to parse an error page as data.

### D. Example
```javascript
async function getUsers() {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");

    if (!response.ok) {                       // ok = status 200–299
      throw new Error(`HTTP ${response.status} ${response.statusText}`);
    }

    const data = await response.json();       // also returns a Promise!
    return data;
  } catch (err) {
    console.error("Request failed:", err.message);
    throw err;
  }
}

// POST with JSON
await fetch("/api/users", {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify({ name: "Ali" }),
});
```

### G. Common mistakes
- Not checking `response.ok` / `response.status` 📝.
- Forgetting `await response.json()` (it's async).
- Reading the body twice (`response.json()` then `.text()`): a body can be consumed **once** (use `response.clone()`).
- No timeout: use `AbortController`:
```javascript
async function fetchUsersWithTimeout() {
  const ctrl = new AbortController();
  const timeout = setTimeout(() => ctrl.abort(), 5000);
  try {
    const response = await fetch("/api/users", { signal: ctrl.signal });
    if (!response.ok) throw new Error(`HTTP ${response.status}`);
    return await response.json();
  } finally {
    clearTimeout(timeout); // do not leave a timer running
  }
}
```

### I. Quick revision
`fetch` resolves for HTTP 404/500 responses (unless another error prevents the request). **Always check `response.ok`**, then `await response.json()`, wrap in `try/catch`.

---

# PART 7: The Browser Environment

> ⚠️ Everything in Parts 7–8 is **browser-provided**, not JavaScript itself. Some APIs also exist in modern Node.js (`fetch`, `URL`, `AbortController`, `navigator` subsets), but **DOM/window/cookie storage examples require a browser**.

## 7.1 Window, BOM, and DOM

📝 *From my notes. 🔧 The hierarchy was contradictory; corrected below.*

### A. What is it?
- 🪟 **`window`**: the browser global object for a Window realm (frames can have separate Window globals). In **classic browser scripts**, top-level `var` and function declarations create global-object properties; ES modules do not. `globalThis` gives access to the global-this value in each environment (it need not be literally the same kind of object).
- 🌳 **DOM** (Document Object Model): a **tree of objects** representing the HTML page, reached via `window.document`. Defined by a standard (WHATWG DOM).
- 🌐 **BOM** (Browser Object Model): informal name for the browser-related objects on `window`: `location`, `history`, `navigator`, `screen`, timers, `localStorage`, etc. (No single official standard.)

### B. Why does it exist?
The language alone can't touch a page or a browser. These objects are the **bridge** between JS and the browser.

### C. Corrected hierarchy 🔧
```text
window  (global object)
 ├── document   ──► DOM  (page content: elements, text, attributes)
 ├── location, history, navigator, screen ──► "BOM" (browser info/control)
 ├── localStorage, sessionStorage, indexedDB ──► storage APIs
 ├── fetch, setTimeout, alert, console… ──► other Web APIs
 └── your global var/function declarations
```
📝 **DOM** is standardized. **BOM** is a loose, unofficial teaching label rather than a precisely specified tree; `window.document` exposes the DOM, and other Web APIs also hang off `window`. Avoid saying BOM and DOM are literal sibling object types.

### D. Example
```javascript
var a = 1;
let b = 2;
console.log(window.a);   // 1  (var → property of window)
console.log(window.b);   // undefined (let is not added) 📝
console.log(window === globalThis);          // true (browser)
console.log(window.document === document);   // true

// DOM basics ➕
const el = document.querySelector("#title");
if (el) {
  el.textContent = "Hello";
  el.classList.add("active");
}
const list = document.querySelector("ul");
if (list) {
  const li = document.createElement("li");
  li.textContent = "New item";
  list.append(li);
}
```

### G. Common mistakes
- Using `window`/`document` in Node.js → `ReferenceError`.
- Polluting `window` with global variables (collisions with libraries).
- Using `innerHTML` with user input → **XSS**; prefer `textContent`. ➕

### H. Interview question
**Q: Difference between window, document, DOM, BOM?** `window` = browser global object; `document` exposes the DOM; BOM is an **informal** umbrella term for browser APIs.

### I. Quick revision
`window.document` exposes the DOM; `location`/`history`/`navigator`/`screen` are other Web APIs often grouped informally as BOM. `var` goes on `window`, `let/const` don't.

---

## 7.2 Dialogs, `window.open`, and Window Control

📝 *`alert()` summary, `window.open()`, and window-control notes, reorganized.*

### Dialogs (`alert`, `confirm`, `prompt`)
| Method | Returns | Use |
|---|---|---|
| `alert(msg)` | `undefined` | Show a message |
| `confirm(msg)` | `true`/`false` | OK / Cancel |
| `prompt(msg, default)` | string or `null` | Ask for input (**always a string**) |

- They belong to `window` (global methods) 📝.
- They are **blocking**: the page and script **freeze** until dismissed 📝.
- `prompt` returns a **string** → convert: `Number(prompt("Age?"))`.
- ➕ Real apps avoid them (poor UX, can be suppressed) in favor of custom modals / `<dialog>`.

### `window.open()` 📝
```javascript
window.open(URL, name, specs);
```
| Param | Meaning |
|---|---|
| `URL` | Page to open (default: blank) |
| `name` | Target: `_blank` (new tab), `_self`, or a custom window name |
| `specs` | Features string: `"width=400,height=300,left=100,top=100"` (+ `noopener,noreferrer` ➕) |
| ~~replace~~ 🔧 | Legacy, ignored in modern browsers |

```javascript
// Prefer an ordinary link with rel="noopener". If using this popup:
window.open("https://example.com", "_blank", "noopener");
// With noopener, do not rely on a controllable popup reference.
// ⚠️ Browsers block popups not triggered by a user action (click) ➕
```

### Controlling a window 📝
If `window.open()` returns a usable `WindowProxy`, it may offer `focus`, `blur`, `moveTo`, `resizeTo`, `close`; many are restricted by browser policy and `noopener` intentionally prevents opener access.
🔧 Modern browsers only allow `moveTo`/`resizeTo` on windows **you opened with `window.open`** and (often only for popups). They don't resize the user's normal tab.

### Size & position properties 📝
```javascript
window.innerWidth  / innerHeight   // viewport (content area)
window.outerWidth  / outerHeight   // full window including toolbars
window.screenX     / screenY       // window position on the screen
```

### I. Quick revision
Dialogs are blocking `window` methods. `prompt` → string. `window.open` needs a user gesture and `noopener` for security. inner = viewport, outer = whole window.

---

## 7.3 Scrolling

📝 *From my notes.*

| API | Role |
|---|---|
| `window.scrollX` / `scrollY` | How far the page is scrolled (read) |
| `window.scrollTo(x, y)` | Scroll to an **absolute** position |
| `window.scrollBy(dx, dy)` | Scroll **relative** to the current position |
| `element.scrollIntoView()` ➕ | Scroll until an element is visible |

```javascript
window.scrollTo({ top: 0, behavior: "smooth" });      // back to top
window.scrollBy({ top: 300, behavior: "smooth" });    // down 300px
document.querySelector("#contact").scrollIntoView({ behavior: "smooth" });

window.addEventListener("scroll", () => {
  console.log(window.scrollY);
}, { passive: true });   // ➕ passive: tells browser you won't preventDefault → smoother
```
**Mistake:** heavy work inside the `scroll` handler (fires very often). Use **throttle** or `IntersectionObserver`. ➕

---

## 7.4 `location`, `history`, `navigator`, `screen`

📝 *From my notes, with the missing details filled in.*

### `location`: read/control the URL
```javascript
// https://example.com:8080/blog/post?id=5&sort=asc#comments
location.href       // full URL
location.protocol   // "https:"
location.hostname   // "example.com"
location.port       // "8080"
location.pathname   // "/blog/post"
location.search     // "?id=5&sort=asc"
location.hash       // "#comments"
location.origin     // "https://example.com:8080"

location.href = "/home";       // navigate (adds history entry)
location.assign("/home");      // same
location.replace("/home");     // navigate WITHOUT keeping current page in history (can't go back)
location.reload();             // reload

// ➕ Parse query strings properly
const params = new URLSearchParams(location.search);
console.log(params.get("id")); // "5"
```
Mistake: using `location.href =` for login redirects when you don't want "Back" to return to the login page → use `replace`.

### `history`: this tab's session history 📝
```javascript
history.back();  history.forward();  history.go(-2);
console.log(history.length);   // session-history entries; not all URLs visited
// ➕ SPA routing:
history.pushState({ page: 2 }, "", "/page/2");   // change URL without reload
window.addEventListener("popstate", (e) => console.log(e.state));
```
- **Session-based (per tab)**, does **not** expose the user's entire history, and **you can't read the URLs** (privacy/security) 📝.

### `navigator`: info about the browser/device (read-only) 📝
```javascript
navigator.userAgent;        // browser string (unreliable; avoid sniffing)
navigator.language;         // "en-US"
navigator.onLine;           // true/false
navigator.clipboard.writeText("copied!");           // needs HTTPS + user gesture
navigator.geolocation.getCurrentPosition(ok, err);  // needs permission
```
- Read-only, environment info, access to clipboard/geolocation APIs 📝.
- Sensitive features need **permissions** and a **secure context (HTTPS)**.
- Mainly browser-focused. Modern Node.js may expose a limited `navigator` object; its properties are not identical to browsers.
- It describes features and environment; navigation is generally via `location`/`history`. 📝

### `screen`: the user's **display**, not the window 📝
```javascript
screen.width / screen.height          // monitor size
screen.availWidth / availHeight       // minus taskbars
screen.colorDepth
screen.orientation.type               // "landscape-primary"
```
Use for: sizing popups, detecting high-resolution displays (`window.devicePixelRatio` ➕), multi-screen UX. For responsive layout prefer CSS media queries over `screen`.

---

## 7.5 Events: `onclick` vs `addEventListener`

📝 *From my notes, expanded.*

### A. What is it?
An **event** is something that happens (click, key press, submit, load). An **event handler/listener** is a function that runs in response.

### B. Why `addEventListener`?
| | `onclick` (property/attribute) | `addEventListener()` |
|---|---|---|
| Multiple handlers on one element | ❌ (a new assignment **overwrites**) | ✅ |
| Remove handler | `el.onclick = null` | `removeEventListener()` |
| Keeps HTML clean | ❌ if used as attribute | ✅ |
| Options (`once`, `capture`, `passive`) | ❌ | ✅ |
| Modern/recommended | ❌ | ✅ |

### C. Internally ➕
- Events travel in 3 phases: **capture** (window → target) → **target** → **bubble** (target → window).
- Browser-generated user events are commonly delivered through event-loop tasks, but **`dispatchEvent()` invokes listeners synchronously**, and event propagation itself is not a separate asynchronous queue.
- **Event delegation:** put one listener on a parent and use `event.target` (less memory, works for dynamically added children).

### D. Example
```javascript
const btn = document.querySelector("#btn");

btn.onclick = () => console.log("A");
btn.onclick = () => console.log("B");        // overwrites A → only "B"

function hello()  { console.log("hello"); }
btn.addEventListener("click", hello);
btn.addEventListener("click", () => console.log("second"));  // both run

btn.removeEventListener("click", hello);     // ✅ works because same function reference
btn.addEventListener("click", () => {}, { once: true });     // auto-removes after first run

// Delegation
document.querySelector("ul").addEventListener("click", (e) => {
  const li = e.target instanceof Element ? e.target.closest("li") : null;
  if (li && e.currentTarget.contains(li)) console.log("Clicked", li.textContent);
});
```

### Why remove listeners? 📝
- Stop a button after the first click
- Disable a feature temporarily
- Improve performance / free memory (**avoid leaks**)
- Avoid duplicated actions
- Clean up when switching screens/components

### G. Common mistakes
```javascript
btn.addEventListener("click", () => { console.log("clicked"); });
btn.removeEventListener("click", () => { console.log("clicked"); });
// ❌ different function object: the listener was NOT removed

// btn.addEventListener("click", hello());  // ❌ invokes hello immediately
```
- Forgetting `event.preventDefault()` for forms/links.
- Confusing `event.target` (original dispatch target) and `event.currentTarget` (object whose listener is running).

### I. Quick revision
Use `addEventListener`. To remove, you need the **same function reference**. Know bubbling and delegation.

---

# PART 8: Browser Storage

## 8.1 `localStorage` and `sessionStorage`

📝 *From my notes (typos fixed).*

### A. What is it?
**Web Storage** lets JS store **key/value strings** in the browser without a database or cookies.

| | `localStorage` | `sessionStorage` |
|---|---|---|
| Lifetime | **Persistent**: survives closing tab/window/browser 📝 | Cleared when the **tab/window closes** 📝 |
| Shared across tabs | Usually yes for same-origin contexts (partitioning applies) | Per top-level browsing context; a new tab with an opener may start with a copy |
| Capacity | Often about 5 MiB per origin; browsers impose quotas | Often about 5 MiB per origin; browsers impose quotas |
| Sent to server | ❌ | ❌ |

### B. Why does it exist?
Save data locally (theme, shopping cart, draft form, token cache) → **fewer server requests / reduced server load** 📝 and survive refreshes.

### C. Internally ➕
- Scoped to **origin** (protocol + domain + port).
- **Synchronous** (blocks the main thread: don't store huge data).
- Values are **always strings**: objects must be serialized with JSON.
- Readable by any script on the page → **never store secrets** (XSS can steal them).

### D. Example
```javascript
localStorage.setItem("theme", "dark");
console.log(localStorage.getItem("theme"));   // "dark"
localStorage.removeItem("theme");
localStorage.clear();

// Objects
const cart = [{ id: 1, qty: 2 }];
localStorage.setItem("cart", JSON.stringify(cart));
const saved = JSON.parse(localStorage.getItem("cart") ?? "[]");

localStorage.setItem("count", 5);
console.log(typeof localStorage.getItem("count"));  // "string" ← not number!
```

### G. Common mistakes
- Forgetting `JSON.stringify/parse` → `"[object Object]"` saved.
- Storing passwords/tokens in it (XSS-readable).
- Expecting numbers back; `getItem` of missing key returns `null`.
- Quota errors / private mode → wrap in `try/catch`.

### I. Quick revision
`local` persists across ordinary browser sessions unless cleared; `session` is associated with a tab/page session. String values, synchronous API, quotas/policies vary; neither is a secure secrets vault.

---

## 8.2 Cookies

📝 *From my notes (oldest storage mechanism), expanded.*

### A. What is it?
Small pieces of data (~4 KB each) stored by the browser and **automatically sent to the server with every matching HTTP request**. The oldest storage mechanism (older than Web Storage and IndexedDB) 📝.

### B. Why do they exist?
HTTP is stateless. Cookies let a server **recognize you** between requests: **authentication/sessions**, preferences, tracking 📝.

### C. Internally ➕
Server sends `Set-Cookie: sid=abc; HttpOnly; Secure; SameSite=Lax; Max-Age=3600` → browser stores it → attaches `Cookie: sid=abc` to later requests to that site.

| Attribute | Meaning |
|---|---|
| `Expires` / `Max-Age` | Lifetime (omitted = session cookie) |
| `Path` / `Domain` | Where it's sent |
| `Secure` | HTTPS only |
| `HttpOnly` | **`document.cookie` cannot read it** (reduces token theft via JS, but XSS can still act as the user) |
| `SameSite` (`Strict`/`Lax`/`None`) | Restricts some cross-site sending (defense in depth against CSRF; not a complete solution). `SameSite=None` also requires `Secure` in modern browsers. |

### D. Example
```javascript
document.cookie = "theme=dark; max-age=86400; path=/; SameSite=Lax";
console.log(document.cookie);   // "theme=dark; other=1"  (one string, name=value pairs)

// Delete: set expired
document.cookie = "theme=; max-age=0; path=/";
```

### F. When to use
**Authentication session IDs** (set by the server as `HttpOnly; Secure`). For nonsensitive client-only data, consider Web Storage/IndexedDB; **do not** put secrets in client-readable storage.

### G. Common mistakes
- Putting large data in cookies (sent on **every** request → slow).
- Auth tokens in non-`HttpOnly` cookies/localStorage.
- Forgetting `path`, so you can't delete it later.

### Storage comparison ➕
| | Cookies | localStorage | sessionStorage | IndexedDB |
|---|---|---|---|---|
| Size | ~4 KB per cookie (varies) | Usually ≈5 MiB | Usually ≈5 MiB | Browser/device-dependent quota |
| Sent to server | **Yes, every request** | No | No | No |
| Lifetime | Configurable | Until evicted/cleared | Page session, with restore caveats | Until evicted/cleared |
| API | Sync (string) | Sync | Sync | **Async** |
| Data | String | String | String | **Objects, files, blobs** |

---

## 8.3 IndexedDB

📝 *From my notes, expanded.*

### A. What is it?
A **NoSQL object database inside the browser** 📝:
- ✔ Asynchronous (non-blocking)
- ✔ Stores structured data (objects, arrays, Blobs/files), not just strings
- ✔ Large capacity
- ✔ Can work **offline** once data has been stored
- ✔ Indexed for fast queries, with transactions

📝 *It is per browser + same origin + same profile:* data saved in Safari will **not** appear in Chrome, or on another domain.

### B. Why does it exist?
`localStorage` is small, synchronous, and string-only. Apps (offline mail, PWAs, big caches) need a real database.

### C. Internally ➕
- Structure: **Database → Object Stores** (like tables) → records (key + value), plus **Indexes** for searching by other fields.
- All operations happen inside **transactions** (`readonly`/`readwrite`) → atomic.
- The native API is request-event-based (`onsuccess`, `onerror`), and transactions commit after pending requests finish. Request success ≠ transaction durability.

### 🌟 Cursors 📝
A **cursor** scans records **one by one** (like a SQL cursor). You can filter, skip, stop early, and page through results.

**Use cursors for:** filtering large datasets, real-time scanning, conditions indexes can't express, range queries (`IDBKeyRange`), paging/infinite scroll, in-app search, and very large stores (where `getAll()` could freeze older browsers).

**Characteristics:** record-by-record, dynamic filtering, early stop, works on stores and indexes, `IDBKeyRange` for ranges, more flexible than `get()`/`getAll()`.

**Combos:** Index + cursor = sorted search · Cursor + `IDBKeyRange` = SQL `WHERE` range · Cursor + filter logic = custom search · Cursor + UI = live lists.

### D. Example (native API)
```javascript
const req = indexedDB.open("shopDB", 1);

req.onupgradeneeded = (e) => {                      // runs once to create/upgrade schema
  const db = e.target.result;
  const store = db.createObjectStore("products", { keyPath: "id" });
  store.createIndex("price", "price");
};

req.onsuccess = (e) => {
  const db = e.target.result;
  const tx = db.transaction("products", "readwrite");
  const store = tx.objectStore("products");

  store.put({ id: 1, name: "Pen", price: 3 });
  store.put({ id: 2, name: "Book", price: 15 });

  tx.oncomplete = () => {
    // A *new readonly transaction* sees committed writes.
    const readTx = db.transaction("products", "readonly");
    const range = IDBKeyRange.bound(1, 10);
    const cursorReq = readTx.objectStore("products")
      .index("price").openCursor(range);

    cursorReq.onsuccess = () => {
      const cursor = cursorReq.result;
      if (cursor) {
        console.log(cursor.value); // { id:1, name:"Pen", price:3 }
        cursor.continue();
      }
    };
    readTx.onerror = () => console.error("Read failed", readTx.error);
  };
  tx.onerror = () => console.error("Write failed", tx.error);
};
req.onerror = () => console.error("Database open failed", req.error);
```

### Libraries 📝
| Library | Notes |
|---|---|
| 🥇 **`idb`** (by Google/Jake Archibald) | Tiny **Promise-based** wrapper, very close to native API. Great for learning + production |
| 🥈 **Dexie.js** | High-level, clean API, powerful queries, schema definitions, great docs |

```javascript
// With idb (promises + await)
import { openDB } from "idb";
const db = await openDB("shopDB", 1, {
  upgrade(db) {
    if (!db.objectStoreNames.contains("products")) {
      db.createObjectStore("products", { keyPath: "id" });
    }
  },
});
await db.put("products", { id: 1, name: "Pen" });
console.log(await db.get("products", 1));
```

### F. When to use
Offline apps/PWAs, large caches, drafts with files/images, anything bigger than ~5 MB or needing queries.

### G. Common mistakes
- Using it for tiny settings (use `localStorage`).
- Doing `await` on non-IDB promises mid-transaction → transaction auto-closes.
- Forgetting schema changes require a **version bump** (`onupgradeneeded`).

### I. Quick revision
Browser-side async NoSQL DB: large, structured, offline. Use `idb`/`Dexie`. Cursors for scanning/filtering/paging. Origin + browser + profile scoped.

---

# PART 9: Data Handling

## 9.1 JSON

📝 *Heading only in my notes. Completed.*

### A. What is it?
**JSON (JavaScript Object Notation)** is a **text format** for data exchange. It looks like a JS object literal but is **just a string** with stricter rules.

### B. Why does it exist?
A universal, language-independent, human-readable format for APIs, config files, and storage (Web Storage only stores strings).

### C. Rules ➕
- Keys **must** be in double quotes. Strings use double quotes only.
- Allowed values: object, array, string, number, `true`/`false`, `null`.
- **Not allowed:** `undefined`, functions, comments, trailing commas, `NaN/Infinity`, `Date` (becomes a string).

### D. Example
```javascript
const user = { name: "Ali", age: 25, skills: ["JS", "CSS"], active: true, extra: undefined, greet() {}, joined: new Date("2024-01-01") };

const text = JSON.stringify(user);
console.log(text);
// {"name":"Ali","age":25,"skills":["JS","CSS"],"active":true,"joined":"2024-01-01T00:00:00.000Z"}
// (undefined and functions are dropped; Date became a string)

const obj = JSON.parse(text);
console.log(obj.name);            // "Ali"
console.log(typeof obj.joined);   // "string" (not a Date anymore)

JSON.stringify(user, null, 2);    // pretty print with 2 spaces
JSON.parse('{"a":1}', (k, v) => (typeof v === "number" ? v * 2 : v));  // reviver
```

### G. Common mistakes
```javascript
// JSON.parse("{'a': 1}");  // ❌ SyntaxError if executed
// JSON.parse("");           // ❌ SyntaxError if executed
// JSON.parse(undefined);      // ❌ SyntaxError if executed

// Circular reference
const a = {}; a.self = a;
// JSON.stringify(a);          // ❌ TypeError if executed: circular data

// Poor deep clone
JSON.parse(JSON.stringify(obj)); // loses Dates, undefined, functions, Map/Set → prefer structuredClone()
```

### I. Quick revision
JSON is a **string format**. `stringify` (object → text), `parse` (text → object). Drops `undefined`/functions; wrap `parse` in `try/catch`.

---

## 9.2 The `Date` Object

📝 *From my notes (invalid dates), expanded.*

### A. What is it?
A built-in object representing a single moment in time, stored internally as **milliseconds since 1 Jan 1970 UTC** (Unix epoch).

### B. 📝 The key danger
`new Date(...)` creates a `Date` object (unless the constructor itself throws, e.g. for `Symbol`), even if the date is **invalid**. An invalid `Date` object can lead to:
- 🔹 Incorrect calculations
- 🔹 `NaN` results
- 🔹 Silent logic bugs
- 🔹 Wrong comparisons
- 🔹 Billing, booking, and scheduling errors

### D. Example
```javascript
const d1 = new Date("2025-03-15T10:30:00Z");
const bad = new Date("not a date");

console.log(bad);                 // Invalid Date
console.log(bad.getTime());       // NaN
console.log(typeof bad);          // "object"   ← still an object!
console.log(bad instanceof Date); // true        ← instanceof can't detect invalid

// ✅ Validation
const isValidDate = (d) => d instanceof Date && !Number.isNaN(d.getTime());
console.log(isValidDate(d1));   // true
console.log(isValidDate(bad));  // false

// Silent rollover
console.log(new Date(2025, 1, 31));  // Feb has 28 days → becomes March 3, 2025 (no error!)

// Months are 0-based
new Date(2025, 0, 1);  // January 1  (0 = Jan, 11 = Dec)

// Arithmetic
const diffDays = (new Date("2025-03-20") - new Date("2025-03-15")) / 86_400_000;  // 5
```

### G. Common mistakes
- **0-based months**; `getDay()` = weekday (0=Sunday), `getDate()` = day of month.
- Parsing non-ISO strings (`"03/04/2025"`: is it March 4 or April 3? Browser-dependent). Use ISO 8601: `"2025-03-04"`.
- Timezones: `"2025-03-04"` (date-only) is parsed as **UTC**, `"2025-03-04T00:00"` as **local**. Store/transmit in UTC (`toISOString()`).
- Mutating dates (`setDate` changes the same object). Copy first: `new Date(d)`.
- Comparing with `===`: compares references. Use `a.getTime() === b.getTime()`.
- ➕ For complex logic use `Intl.DateTimeFormat`, `date-fns`/`Luxon`, or `Temporal` where supported (or a polyfill); browser support must be checked.

### I. Quick revision
Date = ms since 1970 UTC. Always validate with `!isNaN(d.getTime())`. Months start at 0. Use ISO strings and UTC.

---

# PART 10: Node.js

## 10.1 What Node.js Is

📝 *From my notes, with context added.*

### A. What is it?
**Node.js** is a **runtime** that lets JavaScript run outside the browser (servers, CLI tools, scripts). It is **not a language or framework**.

### C. Internally
```text
Your JS code
   │
   ▼
 V8 (C++)  ← executes JS
 libuv (C) ← event loop, async I/O, thread pool (file system, DNS, crypto)
 + other C/C++ libs: OpenSSL, zlib, c-ares, llhttp…
```
- 📝 Node is mostly written in **C++** (with C libs): V8 → C++, libuv → C, OpenSSL → C, zlib → C, c-ares → C.
- Node has **its own event loop (libuv)**, whose phases (timers, poll, check…) differ slightly from the browser's. `process.nextTick` uses its own queue: in **CommonJS** top-level code it typically runs before Promise microtasks; in **ES modules** top-level Promise microtasks may run first. Prefer `queueMicrotask` for portable microtask behavior. ➕
- Node adds `fs`, `http`, `path`, `process`, `Buffer`, but has **no** `window`/`document`.

### F. When to use
REST/GraphQL APIs, real-time apps (WebSockets), microservices, CLI tools, build tools, SSR.

---

## 10.2 Native Addons (C/C++)

📝 *From my notes (cleaned and verified: it was accurate).*

### A. What is it?
A **native addon** is compiled native code (commonly C/C++) built as a `.node` shared library and loaded by Node.js. Other native interop options exist.

### Can Node.js run C/C++ directly?
Node does not interpret C/C++ source. It can interact with **compiled** native code via addons, subprocesses, or other integration mechanisms. A `.node` addon is one option.

### Architecture
```text
JavaScript (Node.js)
        │  calls
        ▼
 Native Addon (C/C++)
        │
        ▼
 Operating System / CPU
```

### Why use them?
When JS is too slow for CPU-intensive work, or you need an existing C/C++ library / low-level access.
- Image processing · video/audio encoding · compression · cryptography · physics simulations · AI/ML · matrix math · scientific computing

| ✅ Benefits | ❌ Drawbacks |
|---|---|
| Native speed | Harder to build/debug |
| Reuse existing C/C++ libraries | Must compile per platform/architecture |
| Heavy computation performance | Requires C/C++ knowledge |
| Reuse legacy code | Harder to maintain than pure JS |

### Node-API (N-API)
The **official, stable** C API for native addons: stable across Node versions (ABI-stable), platform-independent, recommended for new addons. (`node-addon-api` is the C++ wrapper.) ➕ Alternatives today: **WebAssembly**, or Rust via `napi-rs`.

### Can I use C instead of C++? 
Yes. Node-API itself is a **C** API. Many addons use C++ for convenient wrappers.

### When to write one
| Write a native addon | Stay with JS/TS |
|---|---|
| CPU-intensive tasks | REST APIs |
| JS is a measured bottleneck | HTTP handling |
| Integrating a C/C++ library | Database access |
| Low-level system/hardware access | Authentication, general business logic |

### Typical structure
```text
Node.js Application
├── JavaScript / TypeScript
│   ├── Express / Fastify / NestJS
│   ├── Routes · Business Logic · Database Access
└── Native Addon (C/C++)
    ├── Image Processing · AI Algorithms
    └── Compression · High-Performance Calculations
```

### Key takeaways
- Node apps are written in JS/TS.
- C/C++ can't run directly; compile it into an addon.
- Addons are for performance-critical/low-level tasks only.
- JS manages the app; C/C++ accelerates specific tasks.
- ➕ **Measure first** (profile). Most "slow Node" problems are algorithm or I/O problems, not language problems.

---

## 10.3 Limitations of Node.js

📝 *My notes had this heading empty. Filled in below.* ➕

| Limitation | Why | Workaround |
|---|---|---|
| **CPU-bound tasks block the event loop** | One main thread runs JS; a long computation stops all requests | `worker_threads`, `child_process`, clusters, native addons, offload to a queue/service |
| **Callback/async complexity** | Everything I/O is async | `async/await`, Promises |
| **Unhandled errors can crash the process** | An uncaught exception in the single process kills all connections | `try/catch`, process-level handlers, process managers (PM2), containers |
| **Dynamic typing → runtime errors** | JS | TypeScript, linting, tests |
| **Fast-changing, huge npm ecosystem** | Quality varies; dependency/security risk (supply-chain) | Audit deps, lock files, minimal dependencies |
| **Memory limits per process** (V8 heap) | Default heap size is limited | Tune `--max-old-space-size`, stream data, scale horizontally |
| **Not ideal for heavy numeric/ML workloads** | JIT is good, not C++/GPU-level | Python/C++/Rust services, WASM, native addons |
| **Not multi-threaded by default** | One JS thread per process | Cluster mode / multiple processes / workers |

> Node is **excellent** for I/O-heavy workloads (many concurrent connections, APIs), and weaker for CPU-heavy ones.

---

# PART 11: Important Missing Topics (➕ all added)

> These were missing from my notes but are essential for real projects and interviews.

## 11.1 Error Handling

### A–B. What & why
Things fail (bad input, network, bugs). **Handling errors** keeps your app alive and informative instead of crashing silently.

### C. Internally
When `throw` happens, the engine **unwinds the call stack** looking for the nearest `catch`. If none → uncaught error (browser logs it; Node may crash).

### D. Example
```javascript
try {
  const data = JSON.parse("{bad json");
} catch (err) {
  console.error(err.name, err.message);   // SyntaxError ...
} finally {
  console.log("always runs");
}

// Custom errors
class ValidationError extends Error {
  constructor(message, field) {
    super(message);
    this.name = "ValidationError";
    this.field = field;
  }
}

function validate(age) {
  if (age < 0) throw new ValidationError("Age must be positive", "age");
}
try { validate(-1); }
catch (e) {
  if (e instanceof ValidationError) console.log(e.field);   // "age"
  else throw e;                                             // rethrow unknown errors
}

// Async errors: try/catch works with await; callbacks inside setTimeout are NOT caught
try { setTimeout(() => { throw new Error("lost"); }, 0); } catch {}  // ❌ never caught here
```

### G. Common mistakes
- Empty `catch {}` (swallowing errors).
- Throwing strings (`throw "oops"`) instead of `Error` objects (no stack trace).
- Forgetting that `try/catch` can't catch errors from later async callbacks.
- Unhandled promise rejections → add `.catch` / `try-catch`; global fallback: `window.addEventListener("unhandledrejection", …)`.

### I. Quick revision
`try/catch/finally`. Throw `Error` objects. Rethrow what you can't handle. Always handle promise rejections.

---

## 11.2 Destructuring, Spread, Rest

### A. What is it?
- **Destructuring:** unpack values from arrays/objects into variables.
- **Spread `...`:** expand an iterable/object into individual items.
- **Rest `...`:** collect the remaining items into an array/object.

### D. Example
```javascript
const [a, b = 5, ...others] = [1, undefined, 3, 4];
console.log(a, b, others);         // 1 5 [3, 4]

const { name, age: years, city = "N/A", ...restProps } = { name: "Ali", age: 20, x: 1, y: 2 };
console.log(name, years, city, restProps);  // "Ali" 20 "N/A" { x: 1, y: 2 }

function sum(...nums) { return nums.reduce((s, n) => s + n, 0); }   // rest params
console.log(sum(...[1, 2, 3]));    // 6  (spread in call)

const merged = { ...{ a: 1, b: 2 }, ...{ b: 3 } };   // { a: 1, b: 3 } (later wins)
const copy = [...[1, 2, 3], 4];                      // [1, 2, 3, 4]

[a2, b2] = [b2, a2];  // swap trick (with declared vars)
```
### G. Mistakes
- Spread makes a **shallow** copy only (nested objects shared).
- Destructuring `null/undefined` throws `TypeError`.
- Same `...` symbol, opposite jobs: **spread expands, rest collects**.

---

## 11.3 Modules (`import`/`export`)

### A–B. What & why
Split code into files with private scope and explicit sharing. Replaces globals and IIFEs.

### C. Internally
- ES modules are **strict**, have their own top-level scope, are **deferred**, and are **singletons** (evaluated once, cached).
- Imports are **live read-only bindings**, not copies.
- Node also supports **CommonJS** (`require` / `module.exports`): older, synchronous. Pick one per project (`"type": "module"` in `package.json` for ESM).

### D. Example
```javascript
// math.js (its OWN file)
export const PI = 3.14;
export function add(a, b) { return a + b; }
export default function multiply(a, b) { return a * b; }
```

```javascript
// app.js (a DIFFERENT file)
import multiply, { add, PI as pi } from "./math.js";
import * as math from "./math.js";
// import("./heavy.js") is for loading another module on demand.
console.log(multiply(add(2, 3), pi));
```
```html
<script type="module" src="app.js"></script>
```
### G. Mistakes
Forgetting file extension in browsers/Node ESM; circular imports; mixing `require` and `import`; opening `type="module"` pages via `file://` (CORS) instead of a local server.

---

## 11.4 Array Methods You Must Know

| Method | Returns | Mutates? | Use |
|---|---|---|---|
| `map(fn)` | new array | ❌ | transform each item |
| `filter(fn)` | new array | ❌ | keep matches |
| `reduce(fn, init)` | single value | ❌ | accumulate |
| `find(fn)` / `findIndex` | item / index | ❌ | first match |
| `some(fn)` / `every(fn)` | boolean | ❌ | any / all match |
| `includes(x)` | boolean | ❌ | contains |
| `flat()` / `flatMap(fn)` | new array | ❌ | flatten |
| `slice(a,b)` | new array | ❌ | copy part |
| `splice(i,n,…)` | removed items | ✅ | insert/remove in place |
| `push/pop/shift/unshift` | length/item | ✅ | add/remove ends |
| `sort(fn)` | same array | ✅ | sort (⚠️ default = string order) |
| `toSorted/toReversed/with` | new array | ❌ | immutable versions (ES2023) |

```javascript
const nums = [1, 2, 3, 4, 5];
console.log(nums.map(n => n * 2));                 // [2, 4, 6, 8, 10]
console.log(nums.filter(n => n % 2));              // [1, 3, 5]
console.log(nums.reduce((sum, n) => sum + n, 0));  // 15
console.log([10, 9, 1].sort((a, b) => a - b));     // [1, 9, 10]
```
**Mistake:** `reduce` without initial value on an empty array → `TypeError`. `sort` mutates the original.

---

## 11.5 Iterators and Generators

### A. What is it?
- **Iterable:** has `[Symbol.iterator]()` returning an **iterator** (an object with `next()` → `{ value, done }`). This is what `for…of`, spread, and destructuring use.
- **Generator** (`function*` + `yield`): a function that can **pause and resume**, producing values lazily.

```javascript
function* count(max) {
  for (let i = 1; i <= max; i++) yield i;   // pauses here each time
}
const it = count(3);
console.log(it.next());   // { value: 1, done: false }
console.log([...count(3)]);  // [1, 2, 3]

// Infinite sequence, safe because lazy
function* ids() { let id = 0; while (true) yield ++id; }
```
Uses: lazy data, custom iterables, and it's the idea behind how `async/await` was designed (coroutines). `async function*` + `for await…of` handle streams of async data.

---

## 11.6 `Map`, `Set`, `WeakMap`, `WeakSet`

| | Purpose | Key difference from plain object/array |
|---|---|---|
| `Map` | key → value | **Any type** as key, keeps insertion order, has `.size` |
| `Set` | unique values | Auto-removes duplicates |
| `WeakMap` | object-keyed data | Keys are objects or **non-registered symbols**, held **weakly**; not iterable |
| `WeakSet` | weak collection | Objects and non-registered symbols can be members; not iterable |

```javascript
const m = new Map([["a", 1]]);
m.set({ id: 1 }, "object key");
console.log(m.size, m.get("a"));       // 2 1

console.log([...new Set([1, 2, 2, 3])]);   // [1, 2, 3] (dedupe)

const meta = new WeakMap();            // attach private data to an object w/o leaks
let obj = {};
meta.set(obj, { clicks: 0 });
obj = null;                            // entry becomes collectable
```

---

# PART 12: Review Tools

## 12.1 Master Interview Q&A

**1. What is the difference between `var`, `let`, and `const`?**
Scope (function vs block), hoisting behavior (`undefined` vs TDZ), and re-assignment. Prefer `const`, then `let`.

**2. What is hoisting?**
Declarations are registered during the creation phase before execution. Functions are fully available; `var` is `undefined`; `let/const` are in the TDZ.

**3. What is a closure?**
A function that remembers the lexical environment it was created in, even after the outer function returns.

**4. How does `this` work?**
Regular function invocation determines `this`; strict standalone calls use `undefined`, sloppy ones usually use the global object. Arrows inherit lexical `this`.

**5. Explain the event loop.**
Browser mental model: execute a task → drain microtasks → optionally render → choose the next task. Node.js has additional queues/phases.

**6. Microtask vs task?**
Promise reactions and `queueMicrotask` run at microtask checkpoints. Timer callbacks and queued user events run as browser tasks. Manually dispatched DOM events run synchronously.

**7. `==` vs `===`?**
`==` coerces types, `===` doesn't. Use `===`.

**8. Primitive vs reference types?**
Primitives are copied by value and immutable; objects are shared by reference.

**9. What is the prototype chain?**
When a property isn't found on an object, JS looks up its `[[Prototype]]` chain until `null`.

**10. Are classes real in JS?**
Yes. Classes build on prototypes while defining extra semantics such as `#private` fields, initializers, and strict mode.

**11. `call` vs `apply` vs `bind`?**
`call(this, a, b)` and `apply(this, [a, b])` invoke now; `bind` returns a new function with fixed `this`.

**12. What is a Promise? What does `async/await` do?**
A Promise models an eventual outcome (it may already be settled). `await` suspends an async function, not the execution thread.

**13. `Promise.all` vs `allSettled` vs `race` vs `any`?**
Fail-fast all · all outcomes · first settled · first fulfilled.

**14. Why doesn't `fetch` reject on 404?**
HTTP 404/500 responses resolve; transport errors and aborts reject. Check `response.ok`.

**15. How does garbage collection work?**
Reachability from roots; unreachable objects are freed (mark-and-sweep, generational in V8).

**16. How can you cause a memory leak?**
Uncleared timers/listeners, accidental globals, closures holding big data, detached DOM nodes, unbounded caches.

**17. `localStorage` vs `sessionStorage` vs cookies vs IndexedDB?**
See the comparison table in 8.2.

**18. Is JavaScript compiled or interpreted?**
Both: bytecode interpreter + JIT optimizing compiler.

**19. Why is `typeof null` `"object"`?**
A legacy bug preserved for compatibility.

**20. What is the temporal dead zone?**
The period between entering a scope and the `let/const` declaration line, when accessing the variable throws `ReferenceError`.

**21. Shallow vs deep copy?**
Shallow copies only the first level (`{...obj}`); deep copy duplicates nested objects (`structuredClone`).

**22. What is event delegation?**
One listener on a parent handles events from many children via bubbling and `event.target`.

**23. How would you avoid blocking the main thread?**
Break work into chunks, use Web Workers, `requestIdleCallback`, or WebAssembly; offload heavy tasks to a server.

**24. What is the difference between `null` and `undefined`?**
`undefined` is a primitive commonly used for absent/uninitialized values; `null` is usually used to mark an intentionally absent value. These are conventions, not an enforced ownership rule.

**25. What does `new` do?**
Creates an object, links its prototype to `Constructor.prototype`, runs the constructor with `this` bound to it, and returns it.

---

## 12.2 Output-Prediction Practice

Cover the answers and predict.

```javascript
// Q1
console.log(typeof null, typeof [], typeof NaN);
// → "object" "object" "number"

// Q2
console.log(0.1 + 0.2 === 0.3);
// → false

// Q3
console.log(1 + "2", "3" - 1, "3" * "4", true + true);
// → "12" 2 12 2

// Q4
var a = 1;
function f() { console.log(a); var a = 2; }
f();
// → undefined   (local `a` hoisted, shadows outer)

// Q5
for (var i = 0; i < 3; i++) setTimeout(() => console.log(i), 0);
// → 3 3 3

// Q6
console.log([] + [], [] + {}, [] == ![]);
// → "" "[object Object]" true

// Q7
const o = { x: 1, getX() { return this.x; } };
const g = o.getX;
console.log(o.getX()); // 1
// console.log(g());    // strict mode: TypeError (lost `this`); sloppy mode: global object
// → 1 then typically undefined in a sloppy global script; strict mode THROWS.
// Do not rely on the standalone call result across environments.

// Q8
console.log("start");
setTimeout(() => console.log("timeout"), 0);
Promise.resolve().then(() => console.log("promise"));
console.log("end");
// → start end promise timeout

// Q9
console.log([1, 2, 3] + 4, [10, 9, 1].sort());
// → "1,2,34" [1, 10, 9]

// Q10
console.log(null ?? "d", 0 ?? "d", 0 || "d", "" ?? "d");
// → "d" 0 "d" ""
```

---


## 12.3 Guided deep explanations: trace the program, not the slogan

These four walkthroughs teach a way to *derive* the behavior, rather than memorizing an interview answer.

### Walkthrough 1 — copying a value vs sharing an object

**Problem:** Updating one variable unexpectedly changes another.

```javascript
const studentA = { profile: { language: "English" } };
const studentB = { ...studentA }; // copies ONLY the outer object
studentB.profile.language = "French";
console.log(studentA.profile.language); // "French"
```

**Why?** `studentA` and `studentB` are different *outer objects*, but their `profile` properties contain references to the **same inner object**:

```text
studentA ─► object A ─► profile ─┐
                                  ├──► { language: "French" }
studentB ─► object B ─► profile ─┘
```

**Fix for plain serializable-like data:**

```javascript
const independent = structuredClone(studentA);
independent.profile.language = "Spanish";
console.log(studentA.profile.language); // "French", unchanged
```

`structuredClone` is **not a clone-everything function**. It supports many built-ins but not DOM nodes, functions, or arbitrary class instance behavior. Avoid relying on exact stack/heap placement; **value/reference semantics** are what your code can observe.

### Walkthrough 2 — closures and lifetime

**Problem:** How can a counter remember its state without a global variable?

```javascript
function makeCounter() {
  let count = 0;
  return () => ++count;
}
const first = makeCounter();
const second = makeCounter();
console.log(first());  // 1
console.log(first());  // 2
console.log(second()); // 1
```

1. Calling `makeCounter()` creates a new binding `count`.
2. The returned arrow refers to that binding, so the binding is kept available.
3. Every call to `first()` increments the *same* binding captured by `first`.
4. Calling `makeCounter()` again creates a **separate** binding for `second`.

**Important:** the outer function has returned, but its necessary captured state remains reachable. The engine is free to optimize how that state is stored.

### Walkthrough 3 — promises and the browser event loop

```javascript
console.log("A");
setTimeout(() => console.log("B"), 0);
Promise.resolve().then(() => console.log("C"));
console.log("D");
// A, D, C, B   (normal browser script execution)
```

- `A` prints immediately.
- `setTimeout` registers a **future task**; it does not run the callback now.
- `.then(...)` registers a **promise reaction** to be executed as a microtask.
- `D` prints before the current script ends.
- The microtask checkpoint prints `C` before the next timer task prints `B`.

**What `await` actually does:** it suspends execution of **that async function**, not the main JS thread. Other tasks can proceed while it awaits asynchronous work. It does not make CPU-heavy synchronous code run in parallel.

### Walkthrough 4 — `this` is controlled by invocation

```javascript
"use strict";
const person = {
  name: "Sara",
  getName() { return this.name; },
};
console.log(person.getName());             // "Sara"
console.log(person.getName.call({name:"Ali"})); // "Ali"
const detached = person.getName;
// detached();   // TypeError: this is undefined in strict mode
const fixed = person.getName.bind(person);
console.log(fixed());                      // "Sara"
```

1. `person.getName()` supplies `person` as `this`.
2. `.call(other)` calls the *same function* with `other` as `this`.
3. `detached()` loses its receiver; under strict mode `this` is `undefined`.
4. `.bind(person)` creates a callable with a fixed `this`.

Arrow functions are different: they **do not create their own `this`**, so they are useful for callbacks defined *inside* object methods, but unsuitable when an object-literal method must use a dynamic receiver.

### Practice: decide what happens *before* running

```javascript
// 1. Should print 2, not 1: why?
let x = 1;
const get = () => x;
x = 2;
console.log(get());

// 2. Should print 20: why?
const box = { n: 10 };
const alias = box;
alias.n = 20;
console.log(box.n);

// 3. Promise callback before timer: why?
setTimeout(() => console.log("timer"), 0);
Promise.resolve().then(() => console.log("promise"));
```

---

## 12.4 Study roadmap


📝 *From the "I should search about this" section of my notes, turned into an ordered plan. Search terms are kept.*

| # | Topic | Priority | Search terms |
|---|---|---|---|
| 1 | Execution context | ⭐⭐⭐ | `JavaScript execution context creation phase`, `global/function execution context` |
| 2 | Call stack | ⭐⭐⭐ | `JavaScript call stack`, `stack frames` |
| 3 | Lexical environment | ⭐ | `JavaScript lexical environment explained`, `environment records`, `outer environment reference` (ECMAScript spec) |
| 4 | Heap + garbage collection | ⭐⭐ | `heap vs stack`, `mark and sweep`, `reachability`, `V8 garbage collector` |
| 5 | Scope chain | ⭐⭐⭐ | `lexical scope chain`, `identifier resolution`, `variable lookup` |
| 6 | Closures | ⭐⭐⭐⭐ | `closure lexical environment`, `closures memory`, `closure garbage collection` |
| 7 | `this` | ⭐⭐⭐ | `this binding`, `arrow function this`, `call apply bind` |
| 8 | Prototypes | ⭐⭐⭐ | `prototype chain`, `__proto__ vs prototype`, `class prototype` |
| 9 | Event loop | ⭐⭐⭐⭐ | `microtask queue`, `macrotask queue`, `promises event loop` |

📺 *Video saved in my notes ("important line"):* https://www.youtube.com/watch?v=eiC58R16hb8

**Suggested practice:** after each topic, (1) draw the call stack / scope diagram by hand, (2) predict outputs before running, (3) write a tiny project that uses it (a counter, a todo app with localStorage, a fetch-based search with debounce).

**Mini-projects to apply everything:**
1. To-do app (DOM, events, localStorage, JSON)
2. Weather/Users app (fetch, async/await, error handling, `response.ok`)
3. Debounced search box (closures, timers, event delegation)
4. Offline notes app (IndexedDB with `idb`)
5. Tiny Node API (modules, async, JSON)

---

## 12.5 One-Page Cheat Sheet

```text
SCRIPT LOADING   defer (head, after parse, ordered) · async (ASAP, unordered) · module (deferred)
VARIABLES        const > let >> var     | TDZ for let/const | const ≠ immutable value
TYPES            7 primitive categories (value semantics) · objects (reference semantics) · typeof null = "object"
EQUALITY         prefer === | + concatenates with string coercion | two strings compare lexically
FALSY            false 0 -0 0n "" null undefined NaN
DEFAULTS         ?? only null/undefined | || any falsy
LOOPS            of → values · in → keys (+inherited) · Object.entries for objects · no await in forEach
CONTEXT          creation phase (hoist) → execution phase | Call stack = LIFO of contexts
SCOPE            lexical (decided where WRITTEN) · chain: inner → outer → global → ReferenceError
CLOSURE          function + captured lexical bindings | lifetime follows reachability
THIS             regular: call-site/strictness matter | arrow = lexical this | bind fixes receiver
PROTOTYPE        lookup up chain to null | classes use prototypes + extra semantics
EVENT LOOP       browser: task → microtasks → optional rendering → next task (Node differs)
PROMISES         pending → fulfilled/rejected | all(fail-fast) allSettled race any
FETCH            doesn't reject on 404/500 → check response.ok → await response.json()
GC               reachability (mark & sweep) | leaks: timers, listeners, globals, closures, caches
STORAGE          cookie ≈4KB each (conditional sending) · Web Storage quota · IndexedDB async
JSON             string format; drops undefined/functions; try/catch parse
DATE             ms since 1970 UTC · months 0-based · validate with !isNaN(d.getTime())
NODE             V8 + libuv (C++/C) · CPU-heavy blocks loop · native addons via Node-API
```

---

## ✅ How to keep using this file

1. **Read one topic**, then close the file and explain it out loud (A → I).
2. **Re-do the output predictions** (12.2) weekly.
3. When you learn something new, add it using the same A–I template and mark it with 📝 (your own note) / ➕ (added) / 🔧 (corrected).
4. Anything marked 🔧 in the corrections table at the top is worth re-reading, since those are the ideas most easily remembered wrong.

*Happy learning! 🚀*


---

## Verified references and scope notes

These sources support the rules above. Links are included so you can check platform-specific behavior or future browser changes:

- [MDN — JavaScript execution model](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Execution_model) — JavaScript jobs, agents, run-to-completion.
- [MDN — `this`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/this) — strict/default/method/arrow binding.
- [MDN — microtasks](https://developer.mozilla.org/en-US/docs/Web/API/HTML_DOM_API/Microtask_guide) — task/microtask checkpoints.
- [MDN — `dispatchEvent()`](https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/dispatchEvent) — synchronous manual dispatch.
- [MDN — structured cloning](https://developer.mozilla.org/en-US/docs/Web/API/Web_Workers_API/Structured_clone_algorithm) — supported and unsupported types.
- [MDN — script element](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/script) — `async`, `defer`, module loading.
- [MDN — storage quotas](https://developer.mozilla.org/en-US/docs/Web/API/Storage_API/Storage_quotas_and_eviction_criteria) — quota and eviction caveats.
- [MDN — IndexedDB transactions](https://developer.mozilla.org/en-US/docs/Web/API/IndexedDB_API/Basic_Terminology) — request and transaction lifetimes.
- [MDN — WeakMap](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/WeakMap) — object/non-registered-symbol keys.
- [Node.js — `process.nextTick()` vs `queueMicrotask()`](https://nodejs.org/api/process.html#when-to-use-queuemicrotask-vs-processnexttick) — CommonJS/ESM ordering caveat.
- [MDN — Temporal](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Temporal) — check current compatibility before relying on the built-in.

**Environment note:** Code marked as browser-specific must be run in a browser. Other examples assume modern JavaScript and may need splitting into independent files because lessons reuse top-level names. Output is asserted only where it follows from JavaScript semantics, not from mutable globals, time-zone settings, or cross-environment scheduling.
