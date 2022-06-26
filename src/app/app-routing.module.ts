import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './inicio/inicio.component';
import { ListaPatrocinadoresComponent } from './patrocinador/lista-patrocinadores/lista-patrocinadores.component';
import { RegistrarPatrocinadorComponent } from './patrocinador/registrar-patrocinador/registrar-patrocinador.component';
import { ActualizarPatrocinadorComponent } from './patrocinador/actualizar-patrocinador/actualizar-patrocinador.component';
import { PatrocinadorDetallesComponent } from './patrocinador/patrocinador-detalles/patrocinador-detalles.component';
import { ListaMunicipiosComponent } from './municipio/lista-municipios/lista-municipios.component';
import { RegistrarMunicipioComponent } from './municipio/registrar-municipio/registrar-municipio.component';
import { ActualizarMunicipioComponent } from './municipio/actualizar-municipio/actualizar-municipio.component';
import { MunicipioDetallesComponent } from './municipio/municipio-detalles/municipio-detalles.component';
import { ListaColegiosArbitralesComponent } from './colegioArbitral/lista-colegios-arbitrales/lista-colegios-arbitrales.component';
import { RegistrarColegioArbitralComponent } from './colegioArbitral/registrar-colegio-arbitral/registrar-colegio-arbitral.component';
import { ActualizarColegioArbitralComponent } from './colegioArbitral/actualizar-colegio-arbitral/actualizar-colegio-arbitral.component';
import { ColegioArbitralDetallesComponent } from './colegioArbitral/colegio-arbitral-detalles/colegio-arbitral-detalles.component';
import { ListaTorneosComponent } from './torneo/lista-torneos/lista-torneos.component';
import { RegistrarTorneoComponent } from './torneo/registrar-torneo/registrar-torneo.component';
import { ActualizarTorneoComponent } from './torneo/actualizar-torneo/actualizar-torneo.component';
import { TorneoDetallesComponent } from './torneo/torneo-detalles/torneo-detalles.component';
import { ListaEscenariosComponent } from './escenario/lista-escenarios/lista-escenarios.component';
import { RegistrarEscenarioComponent } from './escenario/registrar-escenario/registrar-escenario.component';
import { ActualizarEscenarioComponent } from './escenario/actualizar-escenario/actualizar-escenario.component';
import { EscenarioDetallesComponent } from './escenario/escenario-detalles/escenario-detalles.component';
import { ListaCanchasComponent } from './cancha/lista-canchas/lista-canchas.component';
import { RegistrarCanchaComponent } from './cancha/registrar-cancha/registrar-cancha.component';
import { ActualizarCanchaComponent } from './cancha/actualizar-cancha/actualizar-cancha.component';
import { CanchaDetallesComponent } from './cancha/cancha-detalles/cancha-detalles.component';
import { ListarEquiposComponent } from './equipo/listar-equipos/listar-equipos.component';
import { RegistrarEquipoComponent } from './equipo/registrar-equipo/registrar-equipo.component';
import { ActualizarEquipoComponent } from './equipo/actualizar-equipo/actualizar-equipo.component';
import { EquipoDetallesComponent } from './equipo/equipo-detalles/equipo-detalles.component';
import { ListaDeportistasComponent } from './deportista/lista-deportistas/lista-deportistas.component';
import { RegistrarDeportistaComponent } from './deportista/registrar-deportista/registrar-deportista.component';
import { ActualizarDeportistaComponent } from './deportista/actualizar-deportista/actualizar-deportista.component';
import { DeportistaDetallesComponent } from './deportista/deportista-detalles/deportista-detalles.component';
import { ListaEntrenadoresComponent } from './entrenador/lista-entrenadores/lista-entrenadores.component';
import { RegistrarEntrenadorComponent } from './entrenador/registrar-entrenador/registrar-entrenador.component';
import { ActualizarEntrenadorComponent } from './entrenador/actualizar-entrenador/actualizar-entrenador.component';
import { EntrenadorDetallesComponent } from './entrenador/entrenador-detalles/entrenador-detalles.component';
import { ListaArbitrosComponent } from './arbitro/lista-arbitros/lista-arbitros.component';
import { RegistrarArbitroComponent } from './arbitro/registrar-arbitro/registrar-arbitro.component';
import { ActualizarArbitroComponent } from './arbitro/actualizar-arbitro/actualizar-arbitro.component';
import { ArbitroDetallesComponent } from './arbitro/arbitro-detalles/arbitro-detalles.component';


const routes: Routes = [
  {path : '', redirectTo:"inicio", pathMatch:"full"},
  {path : 'inicio', component: InicioComponent},
  {path : 'patrocinadores', component: ListaPatrocinadoresComponent},
  {path : 'registrar-patrocinador', component : RegistrarPatrocinadorComponent},
  {path : 'actualizar-patrocinador/:id', component : ActualizarPatrocinadorComponent},
  {path : 'patrocinador-detalles/:id', component : PatrocinadorDetallesComponent},
  {path : 'municipios', component: ListaMunicipiosComponent},
  {path : 'registrar-municipio', component : RegistrarMunicipioComponent},
  {path : 'actualizar-municipio/:id', component : ActualizarMunicipioComponent},
  {path : 'municipio-detalles/:id', component : MunicipioDetallesComponent},
  {path : 'colegios-arbitrales', component: ListaColegiosArbitralesComponent},
  {path : 'registrar-colegio-arbitral', component : RegistrarColegioArbitralComponent},
  {path : 'actualizar-colegio-arbitral/:id', component : ActualizarColegioArbitralComponent},
  {path : 'colegio-arbitral-detalles/:id', component : ColegioArbitralDetallesComponent},
  {path : 'torneos', component: ListaTorneosComponent},
  {path : 'registrar-torneo', component : RegistrarTorneoComponent},
  {path : 'actualizar-torneo/:id', component : ActualizarTorneoComponent},
  {path : 'torneo-detalles/:id', component : TorneoDetallesComponent},
  {path : 'escenarios', component: ListaEscenariosComponent},
  {path : 'registrar-escenario', component : RegistrarEscenarioComponent},
  {path : 'actualizar-escenario/:id', component : ActualizarEscenarioComponent},
  {path : 'escenario-detalles/:id', component : EscenarioDetallesComponent},
  {path : 'canchas', component: ListaCanchasComponent},
  {path : 'registrar-cancha', component : RegistrarCanchaComponent},
  {path : 'actualizar-cancha/:id', component : ActualizarCanchaComponent},
  {path : 'cancha-detalles/:id', component : CanchaDetallesComponent},
  {path : 'equipos', component: ListarEquiposComponent},
  {path : 'registrar-equipo', component : RegistrarEquipoComponent},
  {path : 'actualizar-equipo/:id', component : ActualizarEquipoComponent},
  {path : 'equipo-detalles/:id', component : EquipoDetallesComponent},
  {path : 'deportistas', component: ListaDeportistasComponent},
  {path : 'registrar-deportista', component : RegistrarDeportistaComponent},
  {path : 'actualizar-deportista/:id', component : ActualizarDeportistaComponent},
  {path : 'deportista-detalles/:id', component : DeportistaDetallesComponent},
  {path : 'entrenadores', component: ListaEntrenadoresComponent},
  {path : 'registrar-entrenador', component : RegistrarEntrenadorComponent},
  {path : 'actualizar-entrenador/:id', component : ActualizarEntrenadorComponent},
  {path : 'entrenador-detalles/:id', component : EntrenadorDetallesComponent},
  {path : 'arbitros', component: ListaArbitrosComponent},
  {path : 'registrar-arbitro', component : RegistrarArbitroComponent},
  {path : 'actualizar-arbitro/:id', component : ActualizarArbitroComponent},
  {path : 'arbitro-detalles/:id', component : ArbitroDetallesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
