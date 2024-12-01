const express = require('express');
const fs = require('fs');
const app = express();
const port = 3000;

app.use(express.json());

// Save data to file
app.post('/collect', (req, res) => {
    const { data } = req.body;
    fs.appendFileSync('collected_data.txt', `Data: ${JSON.stringify(data)}\n`);
    res.send('Data collected!');
});

app.get('/', (req, res) => {
    res.send(`
        <h1>Spyware Test</h1>
        <script>
            function sendData() {
                fetch('/collect', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({ data: 'Sample Data' })
                }).then(() => alert('Data sent!'));
            }
        </script>
        <button onclick="sendData()">Send Data</button>
    `);
});

app.listen(port, () => console.log(`Spyware running at http://localhost:${port}`));
