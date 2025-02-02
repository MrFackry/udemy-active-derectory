import { Injectable } from '@angular/core';
// importación 
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class AuthServiceService {

  private usuarioSubject = new BehaviorSubject<any>(null);

  constructor() 
  { 

    const usuarioGuardado = localStorage.getItem('usuario');
    if(usuarioGuardado) 
    {
      this.usuarioSubject.next(JSON.parse(usuarioGuardado));
    }
  }

  setUsuario(usuario: any) 
  {
    this.usuarioSubject.next(usuario);
    localStorage.setItem('usuario', JSON.stringify(usuario));
  }

  getUsuario()
  {
    return this.usuarioSubject.asObservable();
  }

  logout()
  {
    this.usuarioSubject.next(null);
    localStorage.removeItem('usuario');
  }
}
