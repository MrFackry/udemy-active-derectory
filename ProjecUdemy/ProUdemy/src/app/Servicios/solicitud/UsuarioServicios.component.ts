import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";

@Injectable({
    providedIn: 'root'
})

export class UsuarioServicios {

    // Aquí se almacena la información
    private objetoUsuario = new BehaviorSubject<any>(null);
    objetoUsuario$ = this.objetoUsuario.asObservable();

    guardaUsuario(usuario: any): void {
        // actualizar el estado del usuario
        this.objetoUsuario.next(usuario);
    }

    obtenerUsuario(): any {
        // Obtiene el usuario actual
        return this.objetoUsuario.value;
    }

    cerrarSesion(): void {
        this.objetoUsuario.next(null);
    }
}