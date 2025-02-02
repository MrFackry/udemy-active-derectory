import { Routes } from '@angular/router';
import { RegistrarseComponent } from './Componentes/Publico/registrarse/registrarse.component';
import { IniciarSesionComponent } from './Componentes/Publico/iniciar-sesion/iniciar-sesion.component';
import { InicioComponent } from './Componentes/Publico/inicio/inicio.component';
import { DatosPersonalesComponent } from './Componentes/Privado/datos-personales/datos-personales.component';

export const routes: Routes = [
    {path: 'Registrarse', component: RegistrarseComponent},
    {path: 'Iniciar-sesion', component: IniciarSesionComponent},
    {path: 'InicioPrivado', component: DatosPersonalesComponent},
    {path: '', component: InicioComponent},
    {path: '**', component: InicioComponent}
];
