import  swal  from 'sweetalert2';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Torneo } from '../torneo';
import { TorneoService } from '../torneo.service';

@Component({
  selector: 'app-torneo-detalles',
  templateUrl: './torneo-detalles.component.html',
  styleUrls: ['./torneo-detalles.component.css']
})
export class TorneoDetallesComponent implements OnInit {

  id:number;
  torneo:Torneo;
  constructor(private route:ActivatedRoute,private torneoServicio:TorneoService) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.torneo = new Torneo();
    this.torneoServicio.obtenerTorneoPorId(this.id).subscribe(dato => {
      this.torneo = dato;
      swal(`Detalles del torneo ${this.torneo.nombre}`);
    });
  }

}
