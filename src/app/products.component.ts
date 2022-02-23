import { Component } from "@angular/core";
import { ProductsService } from "./products.service";

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
})
export class ProductsComponent {
  productName = 'A Book';
  isDisabled = true;
  products = ['A Book', 'A Tree']

  constructor(productsService: ProductsService) {
    setTimeout(() => {
      // this.productName = 'A Tree';
      this.isDisabled = false;
    }, 3000);
  }

  onAddProduct(form: any) {
    // this.products.push(this.productName)
    // console.log(form)
    if(form.valid) {
      this.products.push(form.value.productName)
    }
  }

  onRemoveProduct(productName: string){
    this.products = this.products.filter(p => p !== productName)
  }

}

