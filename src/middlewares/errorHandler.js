const express = require('express');
const bodyParser = require('body-parser');
const { sequelize } = require('./models');
const userRoutes = require('./routes/userRoutes');
const postRoutes = require('./routes/postRoutes');
const errorHandler = require('./middlewares/errorHandler');

const app = express();
app.use(bodyParser.json());

app.use('/users', userRoutes);
app.use('/posts', postRoutes);

app.use(errorHandler);

const startServer = async () => {
  try {
    await sequelize.sync({ force: true }); 
    console.log('Database synced successfully');
    app.listen(3000, () => console.log('Server running on http://localhost:3000'));
  } catch (err) {
    console.error('Error starting server:', err);
  }
};

startServer();
