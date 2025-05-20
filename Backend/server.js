const http = require('http');
const app = require('./app');
const connectToDb = require('./db/db');

const port = process.env.PORT || 3000;
const server = http.createServer(app);

connectToDb()
  .then(() => {
    console.log('Connected to MongoDB');
    server.listen(port, () => {
      console.log(`Server is listening at Port: ${port}`);
    });
  })
  .catch(err => {
    console.error(' Failed to connect to DB:', err);
    process.exit(1); 
  });
