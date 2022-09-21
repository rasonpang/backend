export interface Product {
	id: string; // Randomized hash
	name: string;
	description: string;
	releaseDate: Date;
	// genreId ------
};

export interface ProductStock {
	id: string; // For checkout/cart use
	productId: string;
	size: string; // S, M, L, XL...
	price: number;
	quantity: number;
}

export interface Genre {
	id: string; // Randomized hash
	name: string;
}