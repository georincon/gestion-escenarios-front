import  swal  from 'sweetalert2';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ColegioArbitral } from '../colegio-arbitral';
import { ColegioArbitralService } from '../colegio-arbitral.service';

@Component({
  selector: 'app-actualizar-colegio-arbitral',
  templateUrl: './actualizar-colegio-arbitral.component.html',
  styleUrls: ['./actualizar-colegio-arbitral.component.css']
})
export class ActualizarColegioArbitralComponent implements OnInit {

  id:number;
  colegioArbitral:ColegioArbitral = new ColegioArbitral();
  constructor(private colegioArbitralServicio:ColegioArbitralService,private router:Router,private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.colegioArbitralServicio.obtenerColegioArbitralPorId(this.id).subscribe(dato =>{
      this.colegioArbitral = dato;
    },error => console.log(error));
  }

  irAlaListaDeColegiosArbitrales(){
    this.router.navigate(['/colegios-arbitrales']);
    swal('Colegio arbitral actualizado',`El colegio arbitral ${this.colegioArbitral.nombre} ha sido actualizado con exito`,`success`);
  }

  onSubmit(){
    this.colegioArbitralServicio.actualizarColegioArbitral(this.id,this.colegioArbitral).subscribe(dato => {
      this.irAlaListaDeColegiosArbitrales();
    },error => console.log(error));
  }

}





