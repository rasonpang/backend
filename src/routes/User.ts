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

// Security wise, make sure to convert to JWT or use BCrypt
app.get('/login', async ({ body }, res) => {
	const result = await UserModel.findById(
		body,
		{
			id: true,
			displayName: true,
			address: true,
			phoneNumber: true
		}
	);
	res.send(result);
});

app.patch('/update', async ({ body }, res) => {
	const { id, ...updateData } = body;
	const result = await UserModel.update(id, updateData);
	res.send(result);
})

// Admin uses
// Delete User

export default app;