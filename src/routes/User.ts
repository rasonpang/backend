import { Router } from "express";
import UserController from 'modules/User/controller';

const app = Router();

app.post('/create', async ({ body }, res) => {
	const response = await UserController.create(body);
    res.send(response);
});

// Security wise, make sure to convert to JWT or use BCrypt
app.get('/login', async ({ body }, res) => {
	const response = await UserController.login(body);
	res.send(response);
});

app.get('/refreshToken', async ({ body }, res) => {
	const response = await UserController.refreshToken(body);
	res.send(response);
})

app.patch('/update', async ({ body }, res) => {
	const response = await UserController.update(body);
	res.send(response);
})

// Admin uses
// Delete User

export default app;