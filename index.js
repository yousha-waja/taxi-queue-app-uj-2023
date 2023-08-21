import express from "express";
import cors from 'cors';

// use the SQL methods in the API routes below
import {queueLength, taxiQueueLength, joinQueue, leaveQueue, joinTaxiQueue, taxiDepart} from './taxi.sql.js';

const app = express();

app.use(express.static('public'))
app.use(cors());
// add middleware to make post routes work
app.use(express.json());

const PORT = process.env.PORT || 3011;

// passenger joins the queue
app.post('/api/passenger/join', async (req, res) => {
    let queue = await joinQueue();
    res.json({
        queue
    })
})

// passenger leaves the queue
app.post('/api/passenger/leave', async (req, res) => {
    let queue = await leaveQueue();
    res.json({
        queue
    })
});

//join taxi queue
app.post('/api/taxi/join', async (req, res) => {
    let queue = await joinTaxiQueue();
    res.json({
        queue
    })
});

// Note there needs to be at least 12 people in the queue for the taxi to depart
app.post('/api/taxi/depart', async (req, res) => {
    let queue = await taxiDepart();
    res.json({
        message : 'taxi departed from queue',
        queue
    })
});


// return the number of people in the queue
app.get('/api/passenger/queue', async (req, res) => {
    //  return test the API call
    let queue = await queueLength();
    res.json({
        queueCount : queue
    })
});

// return the number of taxis in the queue
app.get('/api/taxi/queue', async (req, res) => {
    let queue = await taxiQueueLength();
    res.json({
        queueCount : queue
    })
});

app.listen(PORT, () => console.log(`Taxi App started on port: ${PORT}`))