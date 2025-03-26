const express = require('express');
const path = require('path');
const app = express();
const port = process.env.PORT || 3000;

// Servir archivos estáticos
app.use(express.static(path.join(__dirname, '/')));

// Todas las rutas sirven index.html para SPA
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'game.html'));
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
