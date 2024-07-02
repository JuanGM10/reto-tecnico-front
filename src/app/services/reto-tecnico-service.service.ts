import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class RetoTecnicoServiceService {
  urlBase = "http://localhost:5214/api/";
  constructor(private http: HttpClient) {

  }

  login(request: any ): Observable<any> {
    const url = `${this.urlBase}Login/Login`;
    const result = this.http.post<any>(url, request);
    return result;
  }
}
