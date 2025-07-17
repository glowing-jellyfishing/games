
const express = require('express');
const path = require('path');
const { Low, JSONFile } = require('lowdb');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json());

// Persistent user storage with lowdb
const dbFile = path.join(__dirname, 'users.json');
const adapter = new JSONFile(dbFile);
const db = new Low(adapter);

async function initDB() {
  await db.read();
  db.data = db.data || { users: {} };
  await db.write();
}
initDB();

// Mock game data
const games = [
  {
    title: 'Brookhaven 🏡RP',
    creator: 'Wolfpaq',
    thumbnail: 'https://tr.rbxcdn.com/1b1e1e1e1e1e1e1e1e1e1e1e1e1e1e1e/420/420/Image/Png',
  },
  {
    title: 'Blox Fruits',
    creator: 'Gamer Robot Inc',
    thumbnail: 'https://tr.rbxcdn.com/2b2e2e2e2e2e2e2e2e2e2e2e2e2e2e2e/420/420/Image/Png',
  },
  {
    title: 'Adopt Me!',
    creator: 'DreamCraft',
    thumbnail: 'https://tr.rbxcdn.com/3b3e3e3e3e3e3e3e3e3e3e3e3e3e3e3e/420/420/Image/Png',
  },
  {
    title: 'Pet Simulator X!',
    creator: 'BIG Games Simulators',
    thumbnail: 'https://tr.rbxcdn.com/4b4e4e4e4e4e4e4e4e4e4e4e4e4e4e4e/420/420/Image/Png',
  },
  {
    title: 'Murder Mystery 2',
    creator: 'Nikilis',
    thumbnail: 'https://tr.rbxcdn.com/5b5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e/420/420/Image/Png',
  },
];

// API endpoint for games
app.get('/api/games', (req, res) => {
  res.json(games);
});


// Signup endpoint
app.post('/api/signup', async (req, res) => {
  const { username, password } = req.body;
  await db.read();
  if (!username || !password) {
    return res.json({ success: false, message: 'Username and password required.' });
  }
  if (db.data.users[username]) {
    return res.json({ success: false, message: 'Username already exists.' });
  }
  db.data.users[username] = { password };
  await db.write();
  res.json({ success: true });
});

// Login endpoint
app.post('/api/login', async (req, res) => {
  const { username, password } = req.body;
  await db.read();
  if (!username || !password) {
    return res.json({ success: false, message: 'Username and password required.' });
  }
  if (!db.data.users[username] || db.data.users[username].password !== password) {
    return res.json({ success: false, message: 'Invalid username or password.' });
  }
  res.json({ success: true });
});

// Fallback to index.html for SPA, but allow direct access to login/signup
app.get(['/', '/index.html'], (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});
app.get('/login.html', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'login.html'));
});
app.get('/signup.html', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'signup.html'));
});

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.listen(PORT, () => {
  console.log(`Roblox homepage server running at http://localhost:${PORT}`);
});
