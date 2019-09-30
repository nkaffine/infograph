const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;
const path = require('path');

app.use(express.static('build'));

//Configuring json pretty print
app.set('json spaces', 2);

categoryRoutes = require('./routes/category-routes');

app.use('/api/categories', categoryRoutes);

app.get('/*', (req, res) => {
   res.sendFile(path.join(__dirname + "/index.html"))
});

app.listen(PORT, () => {
    console.log(`App is up and running. Listening on port ${PORT}`);
});

