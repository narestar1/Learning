const express = require('express')
const redis = require('redis')

const app = express();
const client = redis.createClient();


app.get('/', (req,res) => {
    client.get('visits',(err,visits) => {
        res.send('Page has been visited for ' + visits);
        client.set('visits', parseInt(visits) + 1)
    })
    
})

app.listen(8081, () => {
    console.log('listening on port 8080')
})
