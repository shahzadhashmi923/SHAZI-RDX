const express = require("express");
const pino = require("pino");
const {
  default: makeWASocket,
  useMultiFileAuthState,
  DisconnectReason
} = require("@whiskeysockets/baileys");

const app = express();
app.use(express.json());

const PORT = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.send(`
    <html>
      <head>
        <title>SHAZI XMD</title>
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <style>
          body {
            background: #101019;
            color: white;
            font-family: Arial, sans-serif;
            text-align: center;
            padding: 50px 15px;
          }
          .card {
            background: #24212b;
            border: 1px solid #ec91bd;
            border-radius: 20px;
            padding: 30px 15px;
            max-width: 420px;
            margin: auto;
          }
          h1 { color: #f49bc5; }
          p { color: #ccc; }
        </style>
      </head>
      <body>
        <div class="card">
          <h1>⚡ SHAZI XMD</h1>
          <p>WhatsApp Pairing Dashboard</p>
          <p>Server Status: Online</p>
          <p>Pairing service setup in progress.</p>
        </div>
      </body>
    </html>
  `);
});

app.listen(PORT, () => {
  console.log(`SHAZI XMD server running on port ${PORT}`);
});
