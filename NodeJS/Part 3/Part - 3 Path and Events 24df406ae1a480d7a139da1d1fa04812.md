# Part - 3 Path and Events

## **Part - 3   ———-   Path And Events**

# **Path**

## 🧠 What is the `path` Module?

- The `path` module provides utilities for working with **file and directory paths**.
- It automatically handles platform-specific path delimiters:
    - `/` on POSIX (Linux/macOS)
    - `\\` on Windows

---

## ✅ How to Import

```jsx
const path = require('path');

```

---

## 📚 Common Methods in `path`

| Method | Description |
| --- | --- |
| `path.basename()` | Gets the file name from a path |
| `path.dirname()` | Gets the directory name |
| `path.extname()` | Gets the file extension |
| `path.join()` | Joins all arguments into a single path |
| `path.resolve()` | Resolves a sequence of paths into an absolute path |
| `path.isAbsolute()` | Checks if a path is absolute |
| `path.relative()` | Gets relative path from one path to another |
| `path.normalize()` | Normalizes path (removes `..`, `.`) |
| `path.parse()` | Returns an object with root, dir, base, ext, name |
| `path.format()` | Reconstructs a path from an object (reverse of `parse`) |
| `path.sep` | Path segment separator (`/` or `\\`) |
| `path.delimiter` | Path delimiter (`:` on UNIX, `;` on Windows) |

---

## 🔧 Detailed Method Examples

---

### 1. `path.basename(path, [ext])`

Returns the **filename** from a full path. Optionally, remove the extension.

```jsx
console.log(path.basename('/users/docs/file.txt')); // 'file.txt'
console.log(path.basename('/users/docs/file.txt', '.txt')); // 'file'

```

---

### 2. `path.dirname(path)`

Returns the **directory name** of the path.

```jsx
console.log(path.dirname('/users/docs/file.txt')); // '/users/docs'

```

---

### 3. `path.extname(path)`

Returns the **extension** of the file.

```jsx
console.log(path.extname('index.html')); // '.html'
console.log(path.extname('/foo/bar.js')); // '.js'

```

---

### 4. `path.join([...paths])`

Joins all arguments into a **single normalized path**.

```jsx
const fullPath = path.join('/users', 'admin', 'file.txt');
console.log(fullPath); // '/users/admin/file.txt'

```

Handles `..` and `.` and removes redundant slashes:

```jsx
console.log(path.join('/foo', '..', 'bar')); // '/bar'

```

---

### 5. `path.resolve([...paths])`

Resolves paths to an **absolute path** starting from right to left.

```jsx
console.log(path.resolve('docs', 'file.txt'));
// '/Users/you/current-folder/docs/file.txt'

console.log(path.resolve('/foo', 'bar', 'baz'));
// '/foo/bar/baz'

```

Key difference from `join`:
`resolve()` treats any absolute path in the list as the new root.

---

### 6. `path.isAbsolute(path)`

Checks if a given path is **absolute**.

```jsx
console.log(path.isAbsolute('/foo/bar')); // true
console.log(path.isAbsolute('bar')); // false

```

---

### 7. `path.relative(from, to)`

Returns the **relative path** from one location to another.

```jsx
console.log(path.relative('/data/user/docs', '/data/user/photos'));
// '../../photos'

```

---

### 8. `path.normalize(path)`

Normalizes the path string by resolving `..`, `.`, and redundant slashes.

```jsx
console.log(path.normalize('/foo/bar//baz/../qux'));
// '/foo/bar/qux'

```

---

### 9. `path.parse(path)`

Returns an **object** with the root, dir, base, ext, and name.

```jsx
console.log(path.parse('/home/user/file.txt'));
/*
{
  root: '/',
  dir: '/home/user',
  base: 'file.txt',
  ext: '.txt',
  name: 'file'
}
*/

```

---

### 10. `path.format(pathObject)`

Builds a path string from an object — reverse of `path.parse`.

```jsx
const obj = {
  dir: '/home/user',
  name: 'index',
  ext: '.js'
};
console.log(path.format(obj)); // '/home/user/index.js'

```

---

### 11. `path.sep` and `path.delimiter`

- `path.sep`: OS-specific path separator (`'/'` on POSIX, `'\\\\'` on Windows)
- `path.delimiter`: Used in PATH variables (`':'` POSIX, `';'` Windows)

```jsx
console.log('Path Separator:', path.sep);
console.log('Path Delimiter:', path.delimiter);

```

---

## 🧪 Practical Example

```jsx
const path = require('path');

const filePath = '/home/user/docs/tutorial.txt';

console.log('Dir name:', path.dirname(filePath));
console.log('Base name:', path.basename(filePath));
console.log('Extension:', path.extname(filePath));

const fullPath = path.join(__dirname, 'uploads', 'image.png');
console.log('Joined Path:', fullPath);

const resolvedPath = path.resolve('src', 'index.js');
console.log('Resolved Path:', resolvedPath);

console.log('Parsed:', path.parse(filePath));
console.log('Formatted:', path.format({
  dir: '/public/assets',
  name: 'logo',
  ext: '.svg'
}));

```

---

## 🧑‍💻 Real-World Use Cases

- 🔍 **Building file paths dynamically** (e.g., saving uploaded files)
- 📦 **Reading config or JSON files** using relative or absolute paths
- 🔐 **Normalizing paths** to prevent directory traversal attacks
- 🌐 **Cross-platform development** to ensure consistent path usage
- 🔄 **Converting between file path formats** for logs, displays, or references

# **            Events**

## 🎯 What are Events in Node.js?

- Node.js is **event-driven** — it uses an **event loop** and **callback architecture**.
- The core of this system is the **`EventEmitter`** class, found in the **`events` module**.
- It allows **one part of your app to emit an event**, and **other parts to listen and react** to that event.

---

## ✅ Importing and Using `EventEmitter`

```jsx
const EventEmitter = require('events');
const emitter = new EventEmitter();

```

Once you've created an `emitter`, you can:

- **Listen** for events using `.on()`
- **Emit** events using `.emit()`

---

## 📌 `.on(eventName, callback)`

- **Listens** for a specific event.
- When the event is emitted, it runs the provided **callback**.
- You can attach **multiple listeners** to the same event.

---

## 📌 `.emit(eventName, [...args])`

- **Emits/triggers** an event.
- You can pass any number of arguments to be received by the listeners.

---

## 💡 Basic Example

```jsx
const EventEmitter = require('events');
const emitter = new EventEmitter();

// Listen for 'greet' event
emitter.on('greet', (name) => {
  console.log(`Hello, ${name}!`);
});

// Emit 'greet' event
emitter.emit('greet', 'Code Snippet');

```

🟢 **Output:**

```
Hello, Code Snippet!

```

---

## ⚙️ Real-World Style Example: File Upload Tracker

```jsx
const EventEmitter = require('events');
const uploader = new EventEmitter();

// Listener for 'start'
uploader.on('start', (fileName) => {
  console.log(`📤 Upload started: ${fileName}`);
});

// Listener for 'progress'
uploader.on('progress', (percent) => {
  console.log(`⏳ Upload progress: ${percent}%`);
});

// Listener for 'end'
uploader.on('end', () => {
  console.log('✅ Upload complete!');
});

// Simulate an upload
uploader.emit('start', 'image.png');
uploader.emit('progress', 20);
uploader.emit('progress', 60);
uploader.emit('progress', 100);
uploader.emit('end');

```

🟢 **Output:**

```
📤 Upload started: image.png
⏳ Upload progress: 20%
⏳ Upload progress: 60%
⏳ Upload progress: 100%
✅ Upload complete!

```

---

## 📍 Key Notes:

### 🔁 Multiple Listeners

You can add multiple `.on()` listeners for the **same event**:

```jsx
emitter.on('ping', () => console.log('ping 1'));
emitter.on('ping', () => console.log('ping 2'));

emitter.emit('ping');

```

🟢 Output:

```
ping 1
ping 2

```

### ❌ If no listeners are attached?

If you `emit()` an event with **no listeners**, nothing happens (no error, just silent).

---

## 🧠 Summary

| Method | Purpose |
| --- | --- |
| `emitter.on(event, callback)` | Register a listener function for an event |
| `emitter.emit(event, [...args])` | Emit/trigger the event and pass arguments to listeners |