import * as sqlite from 'sqlite';
import sqlite3 from 'sqlite3';

const  db = await sqlite.open({
    filename:  './taxi_queue.db',
    driver:  sqlite3.Database
});

await db.migrate();


console.log("taxi.sql.js running...")

export async function joinQueue() {
    await db.run('update taxi_queue set passenger_queue_count = passenger_queue_count +1 ;');
    const queue = await db.get('select passenger_queue_count from taxi_queue');
    return queue;

}

export async function leaveQueue() {
    await db.run('update taxi_queue set passenger_queue_count = passenger_queue_count -1 ;');
    const queue = await db.get('select passenger_queue_count from taxi_queue');
    return queue;
}

export async function joinTaxiQueue() {
    await db.run('update taxi_queue set taxi_queue_count = taxi_queue_count +1 ;');
    const queue = await db.get('select taxi_queue_count from taxi_queue');
    return queue;

}

export async function queueLength() {
    const queue = await db.get('select passenger_queue_count from taxi_queue');
    return queue;
}

export async function taxiQueueLength() {
    const queue = await db.get('select taxi_queue_count from taxi_queue');
    return queue;
}

export async function taxiDepart() {
   await db.run('update taxi_queue set taxi_queue_count = taxi_queue_count - 1, passenger_queue_count = passenger_queue_count-12 where passenger_queue_count >11 AND taxi_queue_count > 0;');
   const queue = await db.get('select * from taxi_queue');
   return queue;
}