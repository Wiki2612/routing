const express = require('express');
const config = require('./etc/config');
const apiRoutes = require('./roots/api');

const app = express();
const port = process.env.PORT || config.port;

app.use('/api', apiRoutes);

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
    console.log(`App name: ${config.name}`);
});
