const express = require('express');
const app = express();
const path = require('path');

const publicPath = path.resolve(__dirname, "../dist");

app.use(express.static(publicPath));

app.get('/*', (req, res) => {
  res.sendFile(path.resolve(publicPath, './index.html'));
});

const PORT = 3000;

app.listen(PORT, () => {
    console.log(`app listening on port ${PORT}`);
});
