import prisma from "query";

export async function getUsers(options?: any) {
    const user = await prisma.user.findFirst(options);
	return user;
}