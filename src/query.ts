import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function query(func: any) {
	func(prisma)
	.then(async () => {
		await prisma.$disconnect();
	}).catch(async (e: any) => {
		console.error("Query Error: " + e);
		await prisma.$disconnect();
	})
}

export default query;