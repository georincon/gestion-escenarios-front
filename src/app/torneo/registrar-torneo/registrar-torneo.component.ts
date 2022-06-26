import swal from 'sweetalert2';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Torneo } from '../torneo';
import { TorneoService } from '../torneo.service';

@Component({
  selector: 'app-registrar-torneo',
  templateUrl: './registrar-torneo.component.html',
  styleUrls: ['./registrar-torneo.component.css']
})
export class RegistrarTorneoComponent implements OnInit {

  torneo : Torneo = new Torneo();
  constructor(private torneoServicio:TorneoService, private router:Router) {}

  ngOnInit(): void {
    console.log(this.torneo);
  }

  guardarTorneo(){
    this.torneoServicio.registrarTorneo(this.torneo).subscribe(dato => {
      console.log(dato);
      this.irAlaListaDeTorneos();
    },error => console.log(error))
  }

  irAlaListaDeTorneos(){
    this.router.navigate(['/torneos']);
    swal('Torneo registrado',`El torneo ${this.torneo.nombre} ha sido registrado con exito`,`success`);
  }

  onSubmit(){
    this.guardarTorneo();
  }
}
