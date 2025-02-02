import { Injectable } from '@angular/core';
// importación 
import { BehaviorSubject, Observable } from 'rxjs';

//Usaremos el Http porque se hara navegacion
import { HttpClient } from '@angular/common/http'; 

@Injectable({
  providedIn: 'root'
})

export class AuthServiceService {

  private usuarioSubject = new BehaviorSubject<any>(null);
  private apiUrl = "Ruta de autenticacion de Arcos"

  constructor(private http: HttpClient) 
  {
    const usuarioGuardado = localStorage.getItem('usuario');
    if (usuarioGuardado) 
      {
        this.usuarioSubject.next(JSON.parse(usuarioGuardado))
      }
  }

  setUsuario(usuario: any) 
  {
    this.usuarioSubject.next(usuario)
    localStorage.setItem('usuario', JSON.stringify(usuario))
  }

  logout()
  {
    this.usuarioSubject.next(null)
    localStorage.removeItem('usuario')
  }

  // Función específica para autenticacion con AD
  login(username: string, password: string): Observable<any>
  {
    return this.http.post(this.apiUrl, {username, password})
  }










  // Todo esto lo uso en caso de no usar Active Directory
  // constructor() 
  // { 

  //   const usuarioGuardado = localStorage.getItem('usuario');
  //   if(usuarioGuardado) 
  //   {
  //     this.usuarioSubject.next(JSON.parse(usuarioGuardado));
  //   }
  // }

  // setUsuario(usuario: any) 
  // {
  //   this.usuarioSubject.next(usuario);
  //   localStorage.setItem('usuario', JSON.stringify(usuario));
  // }

  // getUsuario()
  // {
  //   return this.usuarioSubject.asObservable();
  // }

  // logout()
  // {
  //   this.usuarioSubject.next(null);
  //   localStorage.removeItem('usuario');
  // }
}
