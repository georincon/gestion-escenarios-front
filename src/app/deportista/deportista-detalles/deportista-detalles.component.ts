import  swal  from 'sweetalert2';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Deportista } from '../deportista';
import { DeportistaService } from '../deportista.service';

@Component({
  selector: 'app-deportista-detalles',
  templateUrl: './deportista-detalles.component.html',
  styleUrls: ['./deportista-detalles.component.css']
})
export class DeportistaDetallesComponent implements OnInit {


  id:number;
  deportista:Deportista;
  constructor(private route:ActivatedRoute,private deportistaServicio:DeportistaService) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.deportista = new Deportista();
    this.deportistaServicio.obtenerDeportistaPorId(this.id).subscribe(dato => {
      this.deportista = dato;
      swal(`Detalles del deportista ${this.deportista.nombre}`);
    });
  }

}
