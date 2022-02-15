import { Component } from "@angular/core";

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
})
export class ProductsComponent {
  productName = 'A Book';
  isDisabled = false;

  constructor() {
    setTimeout(() => {
      // this.productName = 'A Tree';
      this.isDisabled = true;
    }, 3000);
  }
}
