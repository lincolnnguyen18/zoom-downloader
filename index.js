import express from 'express';
const app = express();
app.use(express.static('public'));
// start listening at port 3000
const port = 3000;
app.listen(port, () => console.log(`Listening on port ${port}`));