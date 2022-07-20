import { Product } from "./../product.model";
import { Router, ActivatedRoute } from "@angular/router";
import { ProductService } from "./../product.service";
import { Component, OnInit } from "@angular/core";

interface IResponseZipCode extends Product {
  cep: string
  endereco: string
  bairro: string
  cidade: string
  complemento: string
  uf: string
}

@Component({
  selector: "app-product-create",
  templateUrl: "./product-create.component.html",
  styleUrls: ["./product-create.component.css"],
})
export class ProductCreateComponent implements OnInit {
  product: Product = {
    nome: "",
    cep: "",
    endereco: "",
    bairro: "",
    complemento: "",
    cidade: "",
    telefone: "",
  };

  constructor(
    private productService: ProductService,
    private router: Router,
    private route: ActivatedRoute,
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
  getCep() {
    this.productService.getZipCode(this.product.cep).subscribe((response: any) => this.createForm(response))
  }

  createForm(response: IResponseZipCode) {
    this.product = <Product>response;
  }
}
