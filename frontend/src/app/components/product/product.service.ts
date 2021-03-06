import { map, catchError } from 'rxjs/operators';
import { Product } from './product.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar'
import { EMPTY, Observable } from 'rxjs';
import { mixinColor } from '@angular/material/core';


@Injectable({
  providedIn: 'root'
})
export class ProductService {

  baseUrl = "http://localhost:3001"

  constructor(private snackBar: MatSnackBar, private http: HttpClient) { }

  showMenssage(msg: string, isError: boolean = false): void {
    this.snackBar.open(msg, 'X', {
      duration: 3000,
      horizontalPosition: "right",
      verticalPosition: "top",
      panelClass: isError ? ['msg-erro'] : ['msg-sucess']

    })
  }

  create(product: Product): Observable<Product> {
    return this.http.post<Product>(`${this.baseUrl}/products/`, product).pipe(map(obj => obj))
    catchError(e => this.erroHandler(e))
  }

  erroHandler(e: any): Observable<any> {
    this.showMenssage('Erro, entre em contato com o FUNDADOR', true)
    return EMPTY
  }

  read(): Observable<Product[]> {
    return this.http.get<Product[]>(`${this.baseUrl}/products/`)
  }

  readById(id: string): Observable<Product> {
    const url = `${this.baseUrl}/products/${id}`
    return this.http.get<Product>(url)
  }

  getZipCode(zipCode: string) {
    const url = `${this.baseUrl}/utils/zipcode/${zipCode}`

    console.log(this.http.get(url))
    return this.http.get(url)
  }

  update(product: Product): Observable<Product> {
    const url = `${this.baseUrl}/products/${product.id}`
    return this.http.put<Product>(url, product)
  }

  delete(id: number): Observable<boolean> {
    const url = `${this.baseUrl}/products/${id}`
    return this.http.delete<boolean>(url)
  }
}     
