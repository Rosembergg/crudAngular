import { HeaderService } from "./../../components/template/header/header.service";
import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.css"],
})
export class HomeComponent implements OnInit {
  constructor(
    private headerService: HeaderService,
    private router:Router,
    ) {
    headerService.headerData = {
      title: "Brasileirão Lanches",
      icon: "fastfood",
      routerUrl: "/products",
    };
  }

  ngOnInit(): void {}

  navigateToProductCreate(): void {
    this.router.navigate(["/products/create"]);
  }
}
