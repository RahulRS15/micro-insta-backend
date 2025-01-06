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
