import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AlumnoComponent } from './componentes/alumno/alumno.component';
import { HistorialComponent } from './componentes/historial/historial.component';
import { FormularioAlumnoComponent } from './componentes/formularios/formulario-alumno/formulario-alumno.component';
import { FormularioSeccionComponent } from './componentes/formularios/formulario-seccion/formulario-seccion.component';
import { ListaAlmunosComponent } from './componentes/listas/lista-almunos/lista-almunos.component';
import { ListaHistorialComponent } from './componentes/listas/lista-historial/lista-historial.component';

@NgModule({
  declarations: [
    AppComponent,
    AlumnoComponent,
    HistorialComponent,
    FormularioAlumnoComponent,
    FormularioSeccionComponent,
    ListaAlmunosComponent,
    ListaHistorialComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
