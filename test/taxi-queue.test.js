
import assert from 'assert';
import {joinQueue, queueLength, 
		leaveQueue, joinTaxiQueue, 
		taxiQueueLength, taxiDepart} from '../taxi.sql.js'

import * as sqlite from 'sqlite';
import sqlite3 from 'sqlite3';

const  db = await sqlite.open({
    filename:  './taxi_queue.db',
    driver:  sqlite3.Database
});

await db.migrate();

describe('The taxi queue app', function() {

	this.beforeEach(async () => {
		//
		await db.exec(`update taxi_queue set passenger_queue_count = 0, taxi_queue_count = 0`)
	})

	it ('should allow people to join the queue', async function() {

		await joinQueue();
		await joinQueue();
		await joinQueue();
		await joinQueue();
		await joinQueue();
		const queueCount = await queueLength();
		assert.equal(5, queueCount.passenger_queue_count);

	});

	it ('should allow people to leave the queue', async function() {

		await joinQueue();
		await joinQueue();
		await leaveQueue();
		await leaveQueue();
		await joinQueue();

		const queueCount = await queueLength();
		assert.equal(1, queueCount.passenger_queue_count);

	});

	it ('should not allow the people queue to be less than 0', async function() {

		await joinQueue();
		await joinQueue();
		await joinQueue();

		await leaveQueue();
		await leaveQueue();
		await leaveQueue();
		await leaveQueue();
		await leaveQueue();

		const queueCount = await taxiQueueLength();
		assert.equal(0, queueCount.taxi_queue_count);

	});

	it ('should allow taxis to join the queue', async function() {
		
		await joinTaxiQueue();
		await joinTaxiQueue();
		await joinTaxiQueue();

		const queueCount = await taxiQueueLength();
		assert.equal(3, queueCount.taxi_queue_count);

	});

	it ('should allow taxis to leave the queue if there is enough passengers queueing', async function() {

		await joinQueue(); // 1
		await joinQueue();
		await joinQueue();
		await joinQueue();
		await joinQueue();
		await joinQueue();
		await joinQueue();
		await joinQueue();
		await joinQueue();
		await joinQueue();
		await joinQueue();
		await joinQueue(); // 12
		await joinQueue(); 
		await joinQueue();
		await joinQueue(); 

		await joinTaxiQueue();
		await joinTaxiQueue();
		await joinTaxiQueue();

		const taxiQueueCountBefore = await taxiQueueLength();
    const queueCountBefore = await queueLength();

    // data before a taxi departs
    assert.equal(3, taxiQueueCountBefore.taxi_queue_count);
    assert.equal(15, queueCountBefore.passenger_queue_count);

    await taxiDepart();

    const taxiQueueCountAfter = await taxiQueueLength();
    const queueCountAfter = await queueLength();

    // data after a taxi departed
    assert.equal(2, taxiQueueCountAfter.taxi_queue_count);
    assert.equal(3, queueCountAfter.passenger_queue_count);

	});

	it ('should not allow a taxi to leave the queue if there is not enough passengers queueing', async function() {

		await joinQueue(); // 1
		await joinQueue();
		await joinQueue();
		await joinQueue();
		await joinQueue();
		await joinQueue();
		await joinQueue();
		await joinQueue();
		await joinQueue();
		await joinQueue();   
		await joinQueue(); // 11 

		await joinTaxiQueue();
		await joinTaxiQueue();
		await joinTaxiQueue();

		const taxiQueueCount = await taxiQueueLength();
		const queueCount = await queueLength();

// data before a taxi departs
assert.equal(3, taxiQueueCount.taxi_queue_count);
assert.equal(11, queueCount.passenger_queue_count);

await taxiDepart();

// data after a taxi departed
assert.equal(3, taxiQueueCount.taxi_queue_count);
assert.equal(11, queueCount.passenger_queue_count);
// assert.equal(2, taxiQueue.queueLength());

	});

	it ('should check that a taxi can not leave if the taxi queue is empty', async function() {

		await joinQueue(); // 1
		await joinQueue();
		await joinQueue();
		await joinQueue();
		await joinQueue();
		await joinQueue();
		await joinQueue();
		await joinQueue();
		await joinQueue();
		await joinQueue();
		await joinQueue();
		await joinQueue(); // 12
		await joinQueue(); 
		await joinQueue();
		await joinQueue(); 

		// data before a taxi departs
		const taxiQueueCountBefore = await taxiQueueLength();
    const queueCountBefore = await queueLength();

    assert.equal(0, taxiQueueCountBefore.taxi_queue_count);
    assert.equal(15, queueCountBefore.passenger_queue_count);

    // this function call should do nothing as there are no taxis in the taxi queue
    await taxiDepart();

    // data after a taxi departed
    const taxiQueueCountAfter = await taxiQueueLength();
    const queueCountAfter = await queueLength();

    assert.equal(0, taxiQueueCountAfter.taxi_queue_count);
    assert.equal(15, queueCountAfter.passenger_queue_count);

	});
});