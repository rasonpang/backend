import SurrealDB from 'surrealdb.js';

const db = new SurrealDB('http://127.0.0.1:8080/rpc');

async function main() {
    try {
        await db.signin({
            user: 'root',
            pass: 'root'
        })
        await db.wait();
        console.log('Connected successfully.');
    } catch (e) {
        console.error("Error:", e);
    }
}

main();

export default db;