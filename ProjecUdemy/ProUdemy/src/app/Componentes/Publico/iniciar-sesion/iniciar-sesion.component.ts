import { Component } from '@angular/core';

// importando componentes
// import { Router } from '@angular/router';
import { MenuComponent } from '../../../Servicios/menu/menu.component';
import {MatIconModule} from '@angular/material/icon';
import { HttpClientModule } from '@angular/common/http';
import { HttpClient } from '@angular/common/http';
// Los mínimos para que un formulario funcione
import { FormGroup, FormBuilder, Validators, } from '@angular/forms';
// El único que se exporta abajo
import {  ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { AuthServiceService } from '../../../Servicios/solicitud/auth-service.service';

@Component({
  selector: 'app-iniciar-sesion',
  imports: [
    ReactiveFormsModule,
    MatIconModule,
    CommonModule,
    HttpClientModule
  ],
  templateUrl: './iniciar-sesion.component.html',
  styleUrl: './iniciar-sesion.component.css'
})
export class IniciarSesionComponent {
 formularioInicioSesion: FormGroup;

  constructor(
    private fb: FormBuilder,
    private http: HttpClient,
    private router: Router,
    private authService: AuthServiceService,
  ) {
    this.formularioInicioSesion = this.fb.group({
      email:['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]],
    })
  }


  onSubmit(): void 
  {
    if (this.formularioInicioSesion.valid) 
    {
      const credenciales =
      {
        username: this.formularioInicioSesion.get('email')?.value,
        password: this.formularioInicioSesion.get('password')?.value
      };

      this.authService.login(credenciales.username, credenciales.password).subscribe({
        next: (response:any) => {
          this.authService.setUsuario(response);
          this.router.navigate(['/InicioPrivado']);
        },
        error: (error) => {
          console.error('Error en el incio de la sesión', error)
          alert ('Correo o contraseña incorrecto')
        },
      });
    } else {
      alert('Por favor completa el formulario correctamente');
    }
  }
}



  // Se modifica este métdo para persistir el usuario
  // onSubmit(): void{
  //   if(this.formularioInicioSesion){
  //     const credenciales = this.formularioInicioSesion.value;

  //     this.http.post('http://localhost:8080/api/udemy/user/iniciar-sesion', credenciales).subscribe({
  //       next:(response: any) => {
  //         console.log(credenciales);
  //         // localStorage.setItem('token',response.token)
  //         this.router.navigate(['/InicioPrivado'])
  //       },
  //       error: (error) => {
  //         console.error('Error en el inicio de sesion', error);
  //         alert('Correo o contraseña incorrectos')
  //       },
  //     })
  //   } else {
  //     alert('Por favor completa el formulario correctamente')
  //   }
  // }


// Uso este método cuando no usaré active directory
//   onSubmit(): void
//   {
//     if (this.formularioInicioSesion.valid)
//     {
//       const credenciales = this.formularioInicioSesion.value;
//       this.http.post('http://localhost:8080/api/udemy/user/iniciar-sesion', credenciales).subscribe(
//       {
//         next: (response: any) =>
//           {
//             this.authService.setUsuario(response);
//             this.router.navigate(['/InicioPrivado']);
//           },
//           error: (error) => 
//           {
//             console.error('Error en el inicio de sesion', error);
//             alert('Correo o contraseña incorrectos');
//           },
//       });
//     } else 
//     {
//       alert('Por favor completa el formulario correctamente');
//     }
//   }