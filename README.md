# heroes
This is a full-stack GraphQL app based on Node, Express, React, Relay, MongoDB. The application demonstrates the basics of GraphQL and Relay both server and client side, such as: 
[Object Identification](https://github.com/graphql/graphql-relay-js#object-identification), 
[Connections](https://github.com/graphql/graphql-relay-js#connections),
[GraphQL Server Specification](https://relay.dev/docs/en/graphql-server-specification), 
[Relay Environment](https://relay.dev/docs/en/relay-environment), 
[QueryRenderer](https://relay.dev/docs/en/query-renderer), 
[Mutations](https://relay.dev/docs/en/mutations), 
[Fragments](https://graphql.org/learn/queries/#fragments), 
[Pagination Container](https://relay.dev/docs/en/pagination-container),
and more.

## We have two models:

### Hero
### Skill

A Hero may have many skills (or nothing). Allowed operations: create, read, update, delete. Removing Hero will remove all related skills.

## 📝 Features
- [x] Create hero
- [x] See the list of heroes
- [x] Update hero
- [x] Delete hero
- [x] Add Hero skill
- [x] Update, delete skill

> Server is placed at *dark* folder, client - at *light*.
The server is configured with Mongodb cloud connection, so you can configure your own settings in ```.env``` file.

# Used technologies

<div>
  <img src="/light/src/img/node.png" alt="Node.js" height="100" width="100"><span>&nbsp;&nbsp;&nbsp;&nbsp;</span>
  <img src="/light/src/img/express.png" alt="Express.js" height="100" width="100"><span>&nbsp;&nbsp;&nbsp;&nbsp;</span>
  <img src="/light/src/img/graphql.png" alt="GraphQL" height="100" width="100"><span>&nbsp;&nbsp;&nbsp;&nbsp;</span>
  <img src="/light/src/img/relay.png" alt="Relay.js" height="100" width="100"><span>&nbsp;&nbsp;&nbsp;&nbsp;</span>
  <img src="/light/src/img/react.png" alt="React.js" height="100" width="100"><span>&nbsp;&nbsp;&nbsp;&nbsp;</span>
  <img src="/light/src/img/mongodb.png" alt="MongoDB" height="100" width="100"><span>&nbsp;&nbsp;&nbsp;&nbsp;</span>
  <img src="/light/src/img/antd.png" alt="Ant design" height="100" width="100">
</div>


## :hammer: Features list

[Node.js](https://nodejs.org/en/) - Node.js is an open-source, cross-platform, JavaScript runtime environment that executes JavaScript code outside of a browser.

[Express](http://expressjs.com/) - Express, is a web application framework for Node.js, released as free and open-source software under the MIT License.

[GraphQL](https://graphql.org/learn/) - GraphQL is an open-source data query and manipulation language for APIs, and a runtime for fulfilling queries with existing data.

[Relay](https://relay.dev/en/) - Relay was designed to be performant from the ground up, and to support scaling your application to thousands of components, while keeping management of data fetching sane, and fast iteration speeds as your application grows and changes.

[React](https://reactjs.org/) - a JavaScript library for building user interfaces. React is developed and maintained by Facebook, Instagram, and the community of developers and corporations.

[MongoDB](https://www.mongodb.com/) - MongoDB is a cross-platform document-oriented database program.

[Mongoose](https://mongoosejs.com/) - Mongoose is a MongoDB object modeling tool designed to work in an asynchronous environment.

[Ant design](https://ant.design/) - A design system for enterprise-level products. Create an efficient and enjoyable work experience.