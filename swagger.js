const swaggerAutogen = require('swagger-autogen')();

const doc = {
  info: {
    title: 'My Bucket List API',
    description: 'My API'
  },
  host: 'cse341-prj2.herokuapp.com',
  schemes: ['https']
};

const outputFile = './swagger.json';
const endpointsFiles = ['./routes/b-lists.js'];

// generate swagger.json
swaggerAutogen(outputFile, endpointsFiles, doc);

// Run server after it gets generated
// swaggerAutogen(outputFile, endpointsFiles, doc).then(async () => {
//   await import('./index.js');
// });