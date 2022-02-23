import { Component } from "@angular/core";
import { ProductsService } from "./products.service";

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
})
export class ProductsComponent {
  productName = 'A Book';
  isDisabled = true;
  products = ['']

  constructor(private productsService: ProductsService) {
    this.products = this.productsService.getProducts();
    setTimeout(() => {
      // this.productName = 'A Tree';
      this.isDisabled = false;

    }, 3000);
  }

  onAddProduct(form: any) {
    // this.products.push(this.productName)
    // console.log(form)
    if(form.valid) {
      // this.products.push(form.value.productName)
      this.productsService.addProduct(form.value.productName);
    }
  }

  onRemoveProduct(productName: string){
    this.products = this.products.filter(p => p !== productName)
  }

}

