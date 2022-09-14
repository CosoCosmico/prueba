import { Component, EventEmitter, Output } from '@angular/core';
import { alumno } from '../../modelos/alunmno';

@Component({
  selector: 'app-formulario-alumno',
  templateUrl: './formulario-alumno.component.html',
  styleUrls: ['./formulario-alumno.component.css']
})
export class FormularioAlumnoComponent {
@Output() public alumnosFormulario = new EventEmitter<alumno>();

public nuevoAlumno: alumno = {
 rut:11111111-1,
 nombre:'',
 apellido:'',
 edad:17
}

 public alumnoRut (evento: Event): void{
 const variable = evento.target as HTMLInputElement;
 this.nuevoAlumno.rut = Number.parseInt(variable.value);
 }

 public alumnoNombre (evento: Event): void{
  const elemento = evento.target as HTMLInputElement;
  this.nuevoAlumno.nombre = elemento.value;
 }

 public alumnoApellido (evento: Event): void{
  const elemento = evento.target as HTMLInputElement;
  this.nuevoAlumno.apellido = elemento.value;
 }

 public alumnoEdad (evento: Event): void{
  const elemento = evento.target as HTMLInputElement;
  this.nuevoAlumno.edad = Number.parseInt(elemento.value);
  }


  public guardarAlumno():void{
    const copiaAlumno: alumno = {
      ...this.nuevoAlumno
    };
    this.alumnosFormulario.emit(copiaAlumno);
    this.nuevoAlumno.rut = 11111111-1;
    this.nuevoAlumno.nombre = '';
    this.nuevoAlumno.apellido = '';
    this.nuevoAlumno.edad = 17;
  }



}
