/* Import the modules. */
const chalk = require('chalk');
const express = require('express');

/* Absolute Path to HTML file. */
const indexFile = `${ __dirname }/index.html`;

/**
 * [1] Create and instantiate the Node server.
 * [2] The callback function will act like a Listener, it will execute each time
 *     a request is done.
 */
const app = express();

app.get('/', (request, response) => {
  response.send('It works!');
});

/**
 * Run and listen the server on an specific port.
 */

app.listen(3000, () => {
  const formatedMessage = chalk.green('Express server running on PORT: 3000')

  console.log(formatedMessage);
});
