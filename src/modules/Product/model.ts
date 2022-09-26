import { Prisma } from "@prisma/client";
import prisma from "query";

// Remember to implement transaction if needed.
// Reference example: https://www.prisma.io/docs/reference/api-reference/prisma-client-reference#findfirstorthrow

// Create
async function create(data: Prisma.UserCreateInput) {
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

async function findById(where: Prisma.UserWhereInput, select?: Prisma.UserSelect) {
	const user = await prisma.user.findFirst({ select, where });
	return user;
}

// Update
async function update(id: number, data: Prisma.UserUpdateInput) {
	try {
		const bannedKeys = ['id', 'username'];
		for (const key of Object.keys(data)) {
			if (!bannedKeys.includes(key)) continue;
			throw new Error(`"${key}" key cannot be updated`);
		}
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