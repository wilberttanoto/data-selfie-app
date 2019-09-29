const express = require('express');
const app = express();
app.listen(3000, () => console.log('listening at 3000'));
app.use(express.static('public')); 
app.use(express.json());

const allData = [];

// POST method route
app.post('/api', function (request, response) {
    const data = request.body;
    allData.push(data);
    response.json(allData);
    console.log(allData);
});