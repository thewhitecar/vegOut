const express = require('express');
const bodyParser = require('body-parser')
const vegCtrl = require ('./controllers/controllers');

const app = express();
const port = 3008;

app.use(bodyParser.json())

app.post('/api/favorites', vegCtrl.create)
app.get('/api/favorites', vegCtrl.get )
app.delete('/api/favorites/:id', vegCtrl.delete)
app.put('/api/favorites/:id/:rating', vegCtrl.update)

app.listen(port, () => {
    console.log('listening on port: ', port)
})