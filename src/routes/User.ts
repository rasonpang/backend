import { Router } from "express";
import UserModel from 'modules/User/model';

const app = Router();

app.post('/create', async ({ body }, res) => {
	const result = await UserModel.create(body);
	const response = result
		? "User created successfully"
		: "User create failed";
    res.send(response);
});

app.get('/login', async ({ body }, res) => {
	const result = await UserModel.findById(body.username, body.password);
	res.send(!!result);
});

export default app;