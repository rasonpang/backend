import { Router } from "express";
import Test from "modules/Test";
const Surreal: any = require('surrealdb.js');

const app = Router();

const db = new Surreal('http://127.0.0.1:8080/rpc');

app.get('/', async (req, res) => {
    console.log('Connected successfully.');
    Test.test();
    res.send('Hello world');
});

export default app;