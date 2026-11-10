## Reflection Questions

### 1. What is the difference between `res.send()` and `res.sendFile()`? When would you use one over the other?

`res.send()` sends content directly to the client, such as text or HTML, while `res.sendFile()` sends an existing file. I would use `res.send()` for a simple response and `res.sendFile()` when serving an HTML page because the file can be updated without changing the server code.

### 2. Why is the `path` module necessary when serving files? What could go wrong if you just used a relative path like `'public/index.html'`?

The `path` module helps create reliable file paths regardless of the operating system. Using `path.join()` with `__dirname` creates an absolute path to the HTML file. If I used a relative path, the server might look in the wrong directory, causing an error or preventing the page from loading.

### 3. How would you add a third page (e.g., a menu page) to this server? What steps would you take?

To add a third page, I would create a `menu.html` file inside the `public` folder. Then I would add a new GET route in `server.js` using `app.get('/menu', ...)` and `res.sendFile()` with `path.join()` to serve the file. Finally, I would test the route by visiting `http://localhost:3000/menu` in my browser.