import  swal  from 'sweetalert2';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Patrocinador } from '../patrocinador';
import { PatrocinadorService } from '../patrocinador.service';

@Component({
  selector: 'app-patrocinador-detalles',
  templateUrl: './patrocinador-detalles.component.html',
  styleUrls: ['./patrocinador-detalles.component.css']
})
export class PatrocinadorDetallesComponent implements OnInit {

  id:number;
  patrocinador:Patrocinador;
  constructor(private route:ActivatedRoute,private patrocinadorServicio:PatrocinadorService) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.patrocinador = new Patrocinador();
    this.patrocinadorServicio.obtenerPatrocinadorPorId(this.id).subscribe(dato => {
      this.patrocinador = dato;
      swal(`Detalles del patrocinador ${this.patrocinador.nombre}`);
    });
  }

}
