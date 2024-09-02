const express = require('express');
const sequelize = require('./config/connection');  // Sequelize connection
const routes = require('./routes');  // Import your routes

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(routes);  // Use your defined routes

// Sync Sequelize models with the database
sequelize.sync({ force: false }).then(() => {
    console.log('Database synced');
    app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
});
