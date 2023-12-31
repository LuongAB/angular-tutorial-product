import { Injectable } from "@angular/core";
import { Product } from "./products";
import { HttpClient } from "@angular/common/http";
import { ProductPrice } from '../types';

@Injectable({
	providedIn: "root",
})
export class CartService {
	items: Product[] = [];

	constructor(private http: HttpClient) {}

	addToCart(product: Product) {
		this.items.push(product);
	}

	getItems() {
		return this.items;
	}

	clearCart() {
		this.items.length = 0;
		return this.items;
	}

	getShippingPrices() {
		return this.http.get<ProductPrice[]>("../assets/shipping.json");
	}
}
