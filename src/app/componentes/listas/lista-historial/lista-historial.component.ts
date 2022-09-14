import { Component, Input } from '@angular/core';
import { seccion } from '../../modelos/seccion';

@Component({
  selector: 'app-lista-historial',
  templateUrl: './lista-historial.component.html',
  styleUrls: ['./lista-historial.component.css']
})
export class ListaHistorialComponent  {
@Input() public Historiales!: Array<seccion>;

}
