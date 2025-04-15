// server.js
import express from 'express';
import cors from 'cors';
const app = express();
const PORT = 5000;

app.use(cors());
app.get('/', (req, res) => {
  res.send('Hello, Express!!!!!!!!!! 😃 😃 😃');
});
app.get('/healthcheck', (req, res) => {
  res.send('Uptick Hubspot!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!');
});

app.listen(PORT, () => {
  console.log(`Express server is running at http://localhost:${PORT}/`);
});
