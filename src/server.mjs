import express from 'express';
import path from 'path';

const __dirname = path.dirname(new URL(import.meta.url).pathname);

const app = express();
const port = 5500;

// -----------------------------------------------------
// Static files
// -----------------------------------------------------
app.use(express.static(path.join(__dirname, 'assets')));


// -----------------------------------------------------
// Routes
// -----------------------------------------------------
app.get('/', async (req, res) => {
    const response = await fetch("http://localhost:3000/account/check-login");
    const isLoggedin = await response.json();
    console.log(isLoggedin);
    if (isLoggedin.user_id != null) {
        res.redirect('/game');
    } else {
        res.sendFile(path.join(__dirname, '.', 'index.html'));
    }
});

app.get('/login', (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'login.html'));
})

app.get('/game', (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'game-view.html'));
})


// Start the server
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
