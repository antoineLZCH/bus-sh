const express = require('express');
const helmet = require('helmet');
const morgan = require('morgan');
const cors = require('cors');
const yup = require('yup');

const app = express();

app.use(helmet());
app.use(morgan('tiny'));
app.use(cors());
app.use(express.json());
app.use(express.static('./public'));

app.get('/url/:id', (req, res) => {
  // TODO : Get Short URL by Id
});

app.get('/:id', (req, res) => {
  // TODO : Redirect to URL
});

app.post('/:id', (req, res) => {
  // TODO : Create short URL
});

const port = process.env.PORT || 1337;
app.listen(port, () => {
  console.log(`Listening on ${port}`);
})