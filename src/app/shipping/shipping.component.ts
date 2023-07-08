import { Component, OnInit } from "@angular/core";
import { CartService } from "../cart.service";
import { Observable } from "rxjs";
import { ProductPrice } from "../../types";

@Component({
	selector: "app-shipping",
	templateUrl: "./shipping.component.html",
	styleUrls: ["./shipping.component.css"],
})
export class ShippingComponent implements OnInit {
	shippingCosts!: Observable<ProductPrice[]>;

	constructor(private cartService: CartService) {}

	ngOnInit(): void {
		this.shippingCosts = this.cartService.getShippingPrices();
	}
}
