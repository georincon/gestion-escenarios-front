import swal from 'sweetalert2';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Escenario } from '../escenario';
import { EscenarioService } from '../escenario.service';

@Component({
  selector: 'app-registrar-escenario',
  templateUrl: './registrar-escenario.component.html',
  styleUrls: ['./registrar-escenario.component.css']
})
export class RegistrarEscenarioComponent implements OnInit {

  escenario :Escenario = new Escenario();
  constructor(private escenarioServicio:EscenarioService, private router:Router) {}

  ngOnInit(): void {
    console.log(this.escenario);
  }

  guardarEscenario(){
    this.escenarioServicio.registrarEscenario(this.escenario).subscribe(dato => {
      console.log(dato);
      this.irAlaListaDeEscenarios();
    },error => console.log(error))
  }

  irAlaListaDeEscenarios(){
    this.router.navigate(['/escenarios']);
    swal('Escenario registrado',`El escenario ${this.escenario.nombre} ha sido registrado con exito`,`success`);
  }

  onSubmit(){
    this.guardarEscenario();
  }
}
