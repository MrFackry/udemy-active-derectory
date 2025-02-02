import { Component, OnInit } from '@angular/core';
// Componente importado OJOOOOOOOOO Json
import { SolicitudesService } from '../../../Servicios/solicitud/solicitudes.service';
import { HttpClientModule } from '@angular/common/http';
import { HttpClient } from '@angular/common/http';

import { AuthServiceService } from '../../../Servicios/solicitud/auth-service.service';

// Componente importado OJOOOOOOOOO String
// import { SolicitudesComponent, } from '../../../Servicios/solicitudes/solicitudes.component';

@Component({
  selector: 'app-datos-personales',
  standalone: true,
  imports: [  HttpClientModule   ],
  // Debido a que genera un error en la inyección del servicio se realiza 
  // esto para que se importe correctamente
  providers: [SolicitudesService], 
  templateUrl: './datos-personales.component.html',
  styleUrl: './datos-personales.component.css'
})

export class DatosPersonalesComponent implements OnInit {
  nombre: string = '';
  apellido: string = '';

  constructor(private authService: AuthServiceService) {}

  ngOnInit(): void {
    this.authService.getUsuario().subscribe({
      next: (usuario) => {
        if (usuario) {
          this.nombre = usuario.nombre;
          this.apellido = usuario.apellido;
        }
      }, error: (err) =>{
        console.error('Error en el nombre', err);
      }
    });

  }
}
