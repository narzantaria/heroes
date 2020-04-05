const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
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

app.use(express.static(path.join(__dirname, 'build')));

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
  `mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PASSWORD}@cluster0-vuauc.mongodb.net/${process.env.MONGO_DB}?retryWrites=true&w=majority`,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true
  }
).then(() => {
  console.log('Connection to database established...')
  app.listen(process.env.APP_PORT);
}).catch(err => {
  console.log(err);
});