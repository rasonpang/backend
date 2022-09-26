import { Router } from "express";
import ProductController from 'modules/Product/controller';

const app = Router();

app.get('/', async (req, res) => {
    // const user = await getUsers();
    // res.send(user);
    res.send('Hello world')
});


export default app;