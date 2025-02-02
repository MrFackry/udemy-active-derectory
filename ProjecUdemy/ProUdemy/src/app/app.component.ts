import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

// Importando componentes
import { MenuComponent } from './Servicios/menu/menu.component';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet, MenuComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'ProUdemy';
}
