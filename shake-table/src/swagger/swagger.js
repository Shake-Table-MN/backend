const swaggerUi = require('swagger-ui-express');
const swaggereJsdoc = require('swagger-jsdoc');
const options = {
    swaggerDefinition: {
        info: {
            title: "Shake-Table-Swagger API Documentation",
            version: '1.0.0',
            description: "earth-quake API Documentation",
        },
        host: 'localhost:3000',
        basePath: '/'
    },
    apis: ['src/routes/*.js', 'src/swagger/*']
};

const specs = swaggereJsdoc(options);

module.exports = {
    swaggerUi,
    specs
};