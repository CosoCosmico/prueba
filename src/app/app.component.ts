import { Component } from '@angular/core';
import { alumno } from './componentes/modelos/alunmno';
import { seccion } from './componentes/modelos/seccion';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
 public nuevoAlumno: Array<alumno> = [{
  rut:11111111-1,
  nombre:'',
  apellido:'',
  edad:17
 }];

 public guardarElemento(alumnos: alumno): void{
  const id = this.nuevoAlumno.length + 1;
  alumnos.rut = id;
  this.nuevoAlumno.push(alumnos);
 }

 public nuevaSeccion: Array<seccion> = [{
 id:0,
 seccion:''
 }];

 public guardarElementoSeccion(secciones: seccion): void{
 const id = this.nuevaSeccion.length + 1;
 secciones.id = id;
 this.nuevaSeccion.push(secciones);
 }
}
