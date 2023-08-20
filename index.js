import express from "express";

import {joinQueue} from './taxi.sql.js';

const app = express();

app.use(express.static('public'))

// add middleware to make post routes work

const PORT = process.env.PORT || 4015;

// passenger joins the queue
app.post('/api/passenger/join', (req, res) => {
    res.json({
        message : 'join queue'
    })
})

// passenger leaves the queue
app.post('/api/passenger/leave', (req, res) => {
    res.json({
        message : 'leave queue'
    })
});

app.post('/api/taxi/join', (req, res) => {
    res.json({
        message : 'leave queue'
    })
});

app.post('/api/taxi/depart', (req, res) => {
    res.json({
        message : 'taxi depart from queue'
    })
});


// return the number of people in the queue
app.get('/api/passenger/queue', (req, res) => {
    res.json({
        queue_count : 'peopl in queue'
    })
});

// return the number of people in the queue
app.get('/api/taxi/queue', (req, res) => {
    res.json({
        queue_count : 'taxis in queue'
    })
});

app.listen(PORT, () => console.log(`Taxi App started on port: ${PORT}`))