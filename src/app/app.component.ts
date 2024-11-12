import { Component } from '@angular/core';
import { TablaPedidosComponent } from './components/tabla-pedido/tabla-pedido.component';
import { FormVentasComponent } from './components/form-ventas/form-ventas.component';
import { ResumenVentasComponent } from './components/resumen-ventas/resumen-ventas.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    TablaPedidosComponent,
    FormVentasComponent,
    ResumenVentasComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'pizzeria';
}
