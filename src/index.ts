import * as express from 'express';

const PORT= 3000;

const app =express();

app.use(express.json);

app.get('/', (req, res) => {
    res.send("hello world!");
});

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});




