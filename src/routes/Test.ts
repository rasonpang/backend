import { Router } from "express";
import Test from "modules/Test";
import query from "query";
const Surreal: any = require('surrealdb.js');

const app = Router();

const db = new Surreal('http://127.0.0.1:8080/rpc');

app.get('/', async (req, res) => {
    query(async (prisma: any) => {
        const user = await prisma.user.create({
            data: {
                username: "Mofu",
                password: "",
                googleId: "",
                address: ""
            }
        })
        console.log(user);
        console.log('Query executed')
    })
    res.send('Hello world');
});

export default app;