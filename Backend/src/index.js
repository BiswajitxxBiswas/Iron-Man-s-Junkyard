const express = require('express');
const cors = require('cors');
const path = require('path');

const { ServerConfig } = require('./config');
const apiRoutes = require('./routes');

const app = express();

app.use(cors()); // Enable CORS
app.use(express.static(path.join(__dirname, '../../frontend')));


app.use(express.json()) ;
app.use(express.urlencoded({extended:true})) ;

app.get('/test', (req, res) => res.send('Server is running'));
app.use('/', apiRoutes);

app.listen(ServerConfig.PORT, () => {
    console.log(`Successfully started the server on PORT : ${ServerConfig.PORT}`);
});
