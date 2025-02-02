// En caso de que el Backend me responda un string específico, sería así:

// import { Component } from '@angular/core';
// import { HttpClientModule } from '@angular/common/http';
// import { HttpClient } from '@angular/common/http';
// import { Observable } from 'rxjs';

// @Component({
//   selector: 'app-solicitudes',
//   imports: [
//     HttpClientModule,
//   ],
//   templateUrl: './solicitudes.component.html',
//   styleUrl: './solicitudes.component.css'
// })

// export class SolicitudesComponent {
//   private apiUrl = 'http://localhost:8080/api/udemy/user/data';

//   constructor(private http: HttpClient){}

//   getNombre(): Observable<string>{
//     return this.http.get<string>(`${this.apiUrl}/nombre`);
//   }

//   getApellido(): Observable<string>{
//     return this.http.get<string>(`${this.apiUrl}/apellido`);
//   }
// }

// En caso de que el Backend me responda un objeto JSON, sería así:

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface NombreResponse {
  nombre: string;
}

export interface ApellidoResponse {
  apellido: string;
}

@Injectable({
  providedIn: 'root',  // Asegura que el servicio esté disponible globalmente
})

export class SolicitudesService {
  private apiUrl = 'http://localhost:8080/api/udemy/user/data';

  constructor(private http: HttpClient) {}

  getNombre(): Observable<NombreResponse> {
    return this.http.get<NombreResponse>(`${this.apiUrl}/nombre`);
  }

  getApellido(): Observable<ApellidoResponse> {
    return this.http.get<ApellidoResponse>(`${this.apiUrl}/apellido`);
  }
}
