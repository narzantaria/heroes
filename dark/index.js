const express = require('express');
const mongoose = require('mongoose');
// const path = require('path');
require('dotenv/config');
const graphQLHTTP = require('express-graphql');
const { GraphQLSchema } = require('graphql');

const Query = require('./query');
const Mutation = require('./mutation');

const schema = new GraphQLSchema({
  query: Query,
  mutation: Mutation
});

let app = express();

const cors = require('cors');
app.use(cors());

// app.use(express.static(path.join(__dirname, 'build')));

app.use(
  "/graphql",
  graphQLHTTP({
    schema,
    graphiql: true
  })
);

// app.get('/', async (req, res) => {
//   try {
//     res.sendFile(path.join(__dirname + '/build/index.html'));
//   } catch (err) {
//     res.json({ message: err });
//   }
// });

mongoose.connect(
  "mongodb://localhost/heroes", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false
}
).then(() => {
  console.log('Connection to database established...')
  app.listen(5000);
}).catch(err => {
  console.log(err);
});