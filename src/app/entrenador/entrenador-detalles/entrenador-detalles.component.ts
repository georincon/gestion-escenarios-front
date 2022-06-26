import  swal  from 'sweetalert2';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Entrenador } from '../entrenador';
import { EntrenadorService } from '../entrenador.service';

@Component({
  selector: 'app-entrenador-detalles',
  templateUrl: './entrenador-detalles.component.html',
  styleUrls: ['./entrenador-detalles.component.css']
})
export class EntrenadorDetallesComponent implements OnInit {

  id:number;
  entrenador:Entrenador;
  constructor(private route:ActivatedRoute,private entrenadorServicio:EntrenadorService) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.entrenador = new Entrenador();
    this.entrenadorServicio.obtenerEntrenadorPorId(this.id).subscribe(dato => {
      this.entrenador = dato;
      swal(`Detalles del torneo ${this.entrenador.nombre}`);
    });
  }

}
