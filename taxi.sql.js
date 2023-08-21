import * as sqlite from 'sqlite';
import sqlite3 from 'sqlite3';

const  db = await sqlite.open({
    filename:  './taxi_queue.db',
    driver:  sqlite3.Database
});

await db.migrate();

export async function joinQueue() {
    // console.log('join queue')

}

export async function leaveQueue() {
    
}

export async function joinTaxiQueue() {
   
}

export async function queueLength() {
       
}

export async function taxiQueueLength() {

}

export function taxiDepart() {

}