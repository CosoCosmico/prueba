import { Component, Input } from '@angular/core';
import { alumno } from '../../modelos/alunmno';

@Component({
  selector: 'app-lista-almunos',
  templateUrl: './lista-almunos.component.html',
  styleUrls: ['./lista-almunos.component.css']
})
export class ListaAlmunosComponent  {
@Input() public Alumnos!: Array<alumno>;

}
