import { HttpClient } from '@angular/common/http';
import { HttpResponse } from '@angular/common/http';
import { Injectable, Injector } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.development';
import {map} from "rxjs/operators";
import {
  HttpEvent,
  HttpHeaders,
  HttpInterceptor,
  HttpErrorResponse,
  HttpHandler,
  HttpRequest
} from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class CRUDService {

  constructor(private httpClient: HttpClient) { }

  loadProducts(){
    const url = environment.API_EndPoint + 'view.php';
    return this.httpClient.get(url).pipe(map(data => data));
  }

  createProduct(data: any): Observable<Response>{
    
    const url = environment.API_EndPoint + 'create.php';
    return this.httpClient.post<Response>(url, data).pipe(map(data => data));
  }
}
