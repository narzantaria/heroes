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

//This is for open production client, should be stored in 'build' folder:
// app.get('/', (req, res) => {
//   res.sendFile(path.join(__dirname + '/build/index.html'));
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