import  swal  from 'sweetalert2';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ColegioArbitral } from '../colegio-arbitral';
import { ColegioArbitralService } from '../colegio-arbitral.service';

@Component({
  selector: 'app-colegio-arbitral-detalles',
  templateUrl: './colegio-arbitral-detalles.component.html',
  styleUrls: ['./colegio-arbitral-detalles.component.css']
})
export class ColegioArbitralDetallesComponent implements OnInit {

  id:number;
  colegioArbitral:ColegioArbitral;
  constructor(private route:ActivatedRoute,private colegioArbitralServicio:ColegioArbitralService) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.colegioArbitral = new ColegioArbitral();
    this.colegioArbitralServicio.obtenerColegioArbitralPorId(this.id).subscribe(dato => {
      this.colegioArbitral = dato;
      swal(`Detalles del colegio arbitral ${this.colegioArbitral.nombre}`);
    });
  }

}

