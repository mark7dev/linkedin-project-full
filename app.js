/* Import the modules. */
const chalk = require('chalk');
const express = require('express');
const logger = require('morgan');

/* Absolute Path to HTML file. */
const indexFile = `${ __dirname }/index.html`;


/**
 * [1] Create and instantiate the Node server.
 * [2] The callback function will act like a Listener, it will execute each time
 *     a request is done.
 */
const app = express();

// Change PORT to "xxxx" (jason) if this port is occuped then run on 3000
const PORT = process.env.PORT || 3000;

// Middleware
app.use(logger('dev'));


// Route
app.get('/', (request, response) => {
  response.sendFile(indexFile);
});


//Error 404
/**
 * [4] 404 Not Found
 * Catch the error.
 *
 * `app.use` it’s called every time a request is sent to the
 * server.
 */
app.use((request, response) => {
  const ERROR = {
    message: '404. Not Found.'
  };

  response.json(ERROR)
  .status(404);
});
// OTHER WAY
// app.use((request, response, next) => {
//   const ERROR_404 = {
//     error: {
//       message: 'The requested resource is not defined.',
//       status: 404
//     }
//   };

//   next(ERROR_404);
// });



/**
 * [5] 500 Internal Error Server
 * Catch the error.
 *
 * `app.use` it’s called every time a request is sent to the
 * server.
 */
app.use((error, request, response, next) => {
  const body = error.error;
  const STATUS_CODE = body.status || 500;
  const ERROR_505 = body.message || '500. Internal Server Error :(';

  const formatedMessage = JSON.stringify(error, null, 2);

  response
    .status(STATUS_CODE)
    .json({
      error: {
        message: ERROR_505,
        status: STATUS_CODE
      }
    });

  console.log(chalk.red(formatedMessage));
});


// OTHER WAY
// app.use((request, response) => {
//   const ERROR = {
//     message: '500. Internal problem.'
//   };

//   response.json(ERROR)
//   .status(500);
// });


/**
 * Run and listen the server on an specific port.
 */

app.listen(PORT, () => {
  const formatedMessage = chalk.green(`Express server running on PORT: ${ PORT }`);

  console.log(formatedMessage);
});
