import { Router } from "express";

const app = Router();

app.get('/', (req, res) => {
    res.send('Hello world');
});

export default app;