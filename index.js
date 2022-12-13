const express = require('express');
const cors = require('cors');
const schema = require('./graphql/schema');
const { graphqlHTTP }  = require('express-graphql');
const { setupDB } = require('./config/databaseConnection')

;(async () => {

const app = express();
await setupDB()
console.log('DB OK')

app.use(cors());
app.use(
  '/graphql',
  graphqlHTTP({
    schema,
    graphiql: true,
    pretty: true
  })
);

app.listen(4000 , () => console.log('SERVER OK'));

})();
