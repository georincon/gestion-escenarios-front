import  swal  from 'sweetalert2';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Arbitro } from '../arbitro';
import { ArbitroService } from '../arbitro.service';

@Component({
  selector: 'app-arbitro-detalles',
  templateUrl: './arbitro-detalles.component.html',
  styleUrls: ['./arbitro-detalles.component.css']
})
export class ArbitroDetallesComponent implements OnInit {

  id:number;
  arbitro:Arbitro;
  constructor(private route:ActivatedRoute,private arbitroServicio:ArbitroService) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.arbitro = new Arbitro();
    this.arbitroServicio.obtenerArbitroPorId(this.id).subscribe(dato => {
      this.arbitro = dato;
      swal(`Detalles del arbitro ${this.arbitro.nombre}`);
    });
  }

}
