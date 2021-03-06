const express = require('express');
const htmlRoutes = require('./routes/htmlRoutes');
const apiRoutes = require('./routes/apiRoutes');
const app = express();
const PORT = process.env.PORT || 3001;


app.use(express.urlencoded({extended: true}));

app.use(express.json());

app.use(express.static('public'));

//App.Use for toutes gets imported here
app.use('/api', apiRoutes)
app.use('/', htmlRoutes)

app.listen(PORT, () => {
    console.log(`API server now on port ${PORT}`)
})