
# The Daily Grind — Express.js Server

A basic web server built with Node.js and Express.js for a fictional coffee shop, The Daily Grind.

This project was completed as part of Lab 12.1 to practice setting up an Express server, handling GET requests, and serving static HTML files.

## Technologies Used

- Node.js
- Express.js
- HTML5

## Features

- Express server running on port 3000
- Homepage served at `/`
- Contact page served at `/contact`
- Static HTML files served using `res.sendFile()`
- File paths managed using Node.js `path` module

## Project Structure

```text
daily-grind-server/
├── public/
│   ├── index.html
│   └── contact.html
├── server.js
├── package.json
├── package-lock.json
├── reflection.md
└── README.md
```

## Installation

1. Clone the repository.
2. Navigate to the project directory.
3. Install dependencies:

```bash
npm install
```

4. Start the server:

```bash
node server.js
```

5. Open the following URLs in your browser:

- Homepage: http://localhost:3000/
- Contact Page: http://localhost:3000/contact

## Reflection

Answers to the lab's three reflection questions are available in [reflection.md](./reflection.md).

## Author

[Ebony Mitchell](https://github.com/ebonymitchell)
