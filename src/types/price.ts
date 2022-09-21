interface ProductPrice {
	id: string;
	productId: string;
	price: number;
}

interface Discount {
	id: string;
	name: string;
	type: string; // Percentage or Fixed Number
	price: number;
	startDate: Date;
	endDate?: Date;
}