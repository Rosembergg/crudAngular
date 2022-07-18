import { Product } from "./../product.model";
import { Router } from "@angular/router";
import { ProductService } from "./../product.service";
import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-product-create",
  templateUrl: "./product-create.component.html",
  styleUrls: ["./product-create.component.css"],
})
export class ProductCreateComponent implements OnInit {
  product: Product = {
    nome: "",
    cep: "",
    rua: "",
    bairro: "",
    complemento: "",
    telefone: "",
  };

  constructor(
    private productService: ProductService, 
    private router: Router,
    ) { }

  ngOnInit(): void { 
  
  }

  createProduct(): void {
    this.productService.create(this.product).subscribe(() => {
      this.productService.showMenssage("Produto criado com sucesso!!");
      this.router.navigate(["/products"]);
    });
  }

  cancel(): void {
    this.router.navigate(["/products"]);
  }

}
