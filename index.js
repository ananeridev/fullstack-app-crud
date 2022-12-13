const express = require('express');
const cors = require('cors');
const app = express();
const  {graphqlHTTP}  = require('express-graphql');
const { setupDB } = require('./config/databaseConnection')

;(async () => {

await setupDB()
console.log('connected')
const schema = {
  // add later
};

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
