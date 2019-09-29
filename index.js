const express = require('express');
const Datastore = require('nedb');

const app = express();
app.listen(3000, () => console.log('listening at 3000'));
app.use(express.static('public')); 
app.use(express.json());

const database = new Datastore('database.db');
database.loadDatabase();

// POST method route
app.post('/api', function (request, response) {
    const data = request.body;
    const timestamp = Date.now();
    data.timestamp = timestamp;

    database.insert(data);
    response.json({
        status: 'success',
        timestamp: timestamp,
        lat: data.lat,
        long: data.lng,
    })
});