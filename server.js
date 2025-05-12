const express = require('express');
const app = express();
const path = require('path');

app.use(express.static('public'));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public/index.html'));
});

// Export app for testing
if (require.main === module) {
  const PORT = process.env.PORT || 3000;
  app.listen(PORT, () => {
    console.log(`App running at http://localhost:${PORT}`);
  });
} else {
  module.exports = app;
}
