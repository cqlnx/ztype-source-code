const express = require('express');
const path = require('path');

const app = express();

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'ztype.html'));
});

app.get('/i_said_it_dont_work', (req, res) => {
    res.sendFile(path.join(__dirname, 'itdoesntwork.html'));
});

app.use((req, res, next) => {
    res.status(404).sendFile(path.join(__dirname, 'doesntexist.html'));
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
