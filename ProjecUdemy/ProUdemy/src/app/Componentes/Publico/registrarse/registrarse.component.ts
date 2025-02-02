import { Component } from '@angular/core';

// Formularios Reactivos - dinámicos
import { ReactiveFormsModule } from '@angular/forms';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
// import { MenuComponent } from '../../../Servicios/menu/menu.component';
import { HttpClientModule } from '@angular/common/http';
import { HttpClient } from '@angular/common/http';


// funcionamiento de igif
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-registrarse',
  imports: [
    // Importación de la linea arriba
    ReactiveFormsModule,
    CommonModule,
    HttpClientModule,
    // MenuComponent

  ],
  templateUrl: './registrarse.component.html',
  styleUrl: './registrarse.component.css'
})


export class RegistrarseComponent {
  formularioRegistro: FormGroup; // Define la propiedad formularioRegistro

  constructor(private fb: FormBuilder, private http: HttpClient) {
    this.formularioRegistro = this.fb.group({
      nombre: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8)]],
    });
  }

  onSubmit(): void {
    if (this.formularioRegistro.valid) {
      const datosFormulario = this.formularioRegistro.value;
      this.http.post('http://localhost:8080/api/udemy/user/registro', datosFormulario).subscribe({
        next: (response) => {
          console.log("Usuario registado:", response);
          alert("Usuario registrado exitosamente");
        },

        error: (error) => {
          console.error("Error al registrar usuario:", error);
          alert("Error al registrar usuario");
        },
      });
     } else {
      alert("Por favor completa el formulario correctamente")
  }
}
}
