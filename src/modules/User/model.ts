import prisma from "query";
import { CreateUser, UpdateUser } from "types/user";

// Remember to implement transaction if needed.
// Reference example: https://www.prisma.io/docs/reference/api-reference/prisma-client-reference#findfirstorthrow

// Create
async function create(data: CreateUser) {
	// Cannot create user with duplicated username or phoneNumber
	const existing = await findExisting(data.username, data.phoneNumber);
	if (!existing) {
		await prisma.user.create({ data });
		return true;
	}
	return false;
}

// Read
async function findExisting(username: string, phoneNumber: string) {
	const user = await prisma.user.findFirst({
		where: { username: username, phoneNumber: phoneNumber },
	});
	return !!user;
}

async function findById(username: string, password: string) {
	const user = await prisma.user.findFirst({
		where: {
			username,
			password
		}
	});
	return user;
}

// Update
async function update(id: number, data: UpdateUser) {
	try {
		await prisma.user.update({
			where: { id },
			data
		});
		return true;
	} catch (err) {
		console.log('Error --->', err);
		return false;
	}
}

// Delete
async function remove(id: number) {
	try {
		await prisma.user.delete({
			where: { id }
		});
		return true;
	} catch (err) {
		console.log('Error --->', err);
		return false;
	}
}

export default {
	create,
	findById,
	update,
	remove
}