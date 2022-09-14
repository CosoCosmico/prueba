import { Component, EventEmitter, Output } from '@angular/core';
import { seccion } from '../../modelos/seccion';

@Component({
  selector: 'app-formulario-seccion',
  templateUrl: './formulario-seccion.component.html',
  styleUrls: ['./formulario-seccion.component.css']
})
export class FormularioSeccionComponent {
@Output() public seccionFormulario = new EventEmitter<seccion>();

 public nuevaSeccion: seccion = {
  id:0,
  seccion:''
 }

 public seccionId (evento: Event): void{
  const variable = evento.target as HTMLInputElement;
  this.nuevaSeccion.id = Number.parseInt(variable.value);
 }

 public seccionDocente (evento: Event): void{
  const elemento = evento.target as HTMLInputElement;
  this.nuevaSeccion.seccion = elemento.value;
 }

 public guardarSeccion():void{
  const copiaSeccion: seccion = {
    ...this.nuevaSeccion
  };
  this.seccionFormulario.emit(copiaSeccion);
  this.nuevaSeccion.id = 0;
  this.nuevaSeccion.seccion = '';
}

}
