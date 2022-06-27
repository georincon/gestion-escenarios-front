import swal from 'sweetalert2';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Entrenador } from '../entrenador';
import { EntrenadorService } from '../entrenador.service';

@Component({
  selector: 'app-registrar-entrenador',
  templateUrl: './registrar-entrenador.component.html',
  styleUrls: ['./registrar-entrenador.component.css']
})
export class RegistrarEntrenadorComponent implements OnInit {

  entrenador : Entrenador = new Entrenador();
  constructor(private entrenadorServicio:EntrenadorService, private router:Router) {}

  ngOnInit(): void {
    console.log(this.entrenador);
  }

  guardarEntrenador(){
    this.entrenadorServicio.registrarEntrenador(this.entrenador).subscribe(dato => {
      console.log(dato);
      this.irAlaListaDeEntrenadores();
    },error => console.log(error))
  }

  irAlaListaDeEntrenadores(){
    this.router.navigate(['/entrenadores']);
    swal('Entrenador registrado',`El entrenador ${this.entrenador.nombre} ha sido registrado con exito`,`success`);
  }

  onSubmit(){
    this.guardarEntrenador();
  }
}
