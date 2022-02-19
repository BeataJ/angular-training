import { Component } from "@angular/core";

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
})
export class ProductsComponent {
  productName = 'A Book';
  isDisabled = true;
  products = ['A Book', 'A Tree']

  constructor() {
    setTimeout(() => {
      // this.productName = 'A Tree';
      this.isDisabled = false;
    }, 3000);
  }

  onAddProduct(form: any) {
    // this.products.push(this.productName)
    console.log(form)
  }

  onRemoveProduct(productName: string){
    this.products = this.products.filter(p => p !== productName)
  }

}

