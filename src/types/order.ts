export interface Order {
	id: string;
	cartId: string;
}

export interface Adjustment {
	id: string;
	orderId: string;
	discountId: string;
}

export interface Cart {
	id: string;
	userId: string;
}

export interface CartItem {
	id: string;
	cartId: string;
	productId: string; // For getting product.price from ProductPrice
	quantity: number;
}