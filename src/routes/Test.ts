import { Router } from "express";
import Test from "modules/Test";
const Surreal: any = require('surrealdb.js');

const app = Router();

const db = new Surreal('http://127.0.0.1:8080/rpc');

app.get('/', async (req, res) => {
    await db.signin({
        user: 'root',
        pass: 'root'
    })
    await db.wait();
    console.log('Connected successfully.');
    Test.test();
    res.send('Hello world');
});

export default app;