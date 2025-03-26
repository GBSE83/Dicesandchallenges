const express = require('express');
const helmet = require('helmet');
const path = require('path');
const { ExpressPeerServer } = require('peer');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(helmet());
app.use(express.static(path.join(__dirname, 'public')));

// Configura PeerJS Server
const server = app.listen(PORT, () => {
  console.log(`Servidor en http://localhost:${PORT}`);
});

const peerServer = ExpressPeerServer(server, {
  path: '/peerjs',
  proxied: true
});

const peerConfig = {
    host: 'https://dicesandchallenges.onrender.com',
    path: '/peerjs',
    secure: true,
    port: 443
};

app.use('/peerjs', peerServer);

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'landing.html'));
});