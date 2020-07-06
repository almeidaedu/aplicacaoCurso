import swaggerJSDoc from 'swagger-jsdoc';
import swaggerUi from 'swagger-ui-express';
import app from './app';

app.listen(3333);

const swaggerDefinition = {
  info: {
    title: 'API de teste para implementar o swagger',
    version: '1.0.0',
    description: 'Qualquer coisa que você queira colocar aqui',
  },
  host: 'localhost:3333',
  basePath: '/',
  securityDefinitions: {
    bearerAuth: {
      type: 'apiKey',
      name: 'Authorization',
      scheme: 'bearer',
      in: 'header',
    },
  },
};

const options = {
  swaggerDefinition,
  apis: ['src/app/models/User.js', 'src/app/controllers/*.js'],
};

const swaggerSpec = swaggerJSDoc(options);
app.get('/swagger.json', function(req, res) {
  res.setHeader('Content-Type', 'application/json');
  res.send(swaggerSpec);
});

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));
