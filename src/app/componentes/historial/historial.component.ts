import { Component, Input} from '@angular/core';
import { seccion } from '../modelos/seccion';

@Component({
  selector: 'app-historial',
  templateUrl: './historial.component.html',
  styleUrls: ['./historial.component.css']
})
export class HistorialComponent  {
@Input() public Historial!: seccion;

}
