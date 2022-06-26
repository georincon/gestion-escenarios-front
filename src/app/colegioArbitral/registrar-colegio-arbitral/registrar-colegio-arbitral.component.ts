import swal from 'sweetalert2';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ColegioArbitral } from '../colegio-arbitral';
import { ColegioArbitralService } from '../colegio-arbitral.service';

@Component({
  selector: 'app-registrar-colegio-arbitral',
  templateUrl: './registrar-colegio-arbitral.component.html',
  styleUrls: ['./registrar-colegio-arbitral.component.css']
})
export class RegistrarColegioArbitralComponent implements OnInit {

  colegioArbitral : ColegioArbitral = new ColegioArbitral();
  constructor(private colegioArbitralServicio:ColegioArbitralService, private router:Router) {}

  ngOnInit(): void {
    console.log(this.colegioArbitral);
  }

  guardarColegioArbitral(){
    this.colegioArbitralServicio.registrarColegioArbitral(this.colegioArbitral).subscribe(dato => {
      console.log(dato);
      this.irAlaListaDeColegiosArbitrales();
    },error => console.log(error))
  }

  irAlaListaDeColegiosArbitrales(){
    this.router.navigate(['/colegios-arbitrales']);
    swal('Colegio arbitral registrado',`El Colegio Arbitral ${this.colegioArbitral.nombre} ha sido registrado con exito`,`success`);
  }

  onSubmit(){
    this.guardarColegioArbitral();
  }
}
