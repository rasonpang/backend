import { Router } from "express";
import Test from "modules/Test";

const app = Router();

app.get('/', (req, res) => {
    Test.test();
    res.send('Hello world');
});

export default app;