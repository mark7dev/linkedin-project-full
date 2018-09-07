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

// Change PORT to 8000 (jason) if this port is occuped then run on 3000
const PORT = process.env.PORT || 3000;

app.get('/', (request, response) => {
  response.sendFile(indexFile);
});

/**
 * Run and listen the server on an specific port.
 */

app.listen(PORT, () => {
  const formatedMessage = chalk.green(`Node server running on PORT: ${ PORT }`);

  console.log(formatedMessage);
});
