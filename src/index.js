import express from 'express';

const app = express();
app.get('/', async (req, res) => res.send('Hello express'));

const port = 3000;
app.listen(port, () => {
  console.log(`Server is listening on port :${port}`);
});
