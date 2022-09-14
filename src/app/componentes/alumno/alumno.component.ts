import { Component, Input } from '@angular/core';
import { alumno } from '../modelos/alunmno';

@Component({
  selector: 'app-alumno',
  templateUrl: './alumno.component.html',
  styleUrls: ['./alumno.component.css']
})
export class AlumnoComponent  {
@Input() public Alumno!: alumno;

}
