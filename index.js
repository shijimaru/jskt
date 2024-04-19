const express = require('express');
const app = express();
const path = require('path');

app.listen(4000, () => {
  console.log('Server is running on http://localhost:4000');
});

app.use(express.static(path.join(__dirname, 'front')));

app.get ((req, res) =>{
  res.sendFile(path.join(__dirname, 'index.html'));
});
