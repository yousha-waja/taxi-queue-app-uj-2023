import * as sqlite from 'sqlite';
import sqlite3 from 'sqlite3';

const  db = await sqlite.open({
    filename:  './taxi_queue.db',
    driver:  sqlite3.Database
});

await db.migrate();


export function joinQueue() {
    console.log('join queue')
}

export function leaveQueue() {

}

export function joinTaxiQueue() {

}

export function queueLength() {

}

export function taxiQueueLength() {

}

export function taxiDepart(){

}