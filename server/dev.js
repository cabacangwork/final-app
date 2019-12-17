const express = require('express');
const app = express();
const path = require('path');

app.use(express.static('dist'));

app.get('/*', (req, res) => {
  res.sendFile(path.resolve('dist', './index.html'));
});

const PORT = 5000;

app.listen(PORT, () => {
    console.log(`app listening on port ${PORT}`);
});
