import  swal  from 'sweetalert2';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Cancha } from '../cancha';
import { CanchaService } from '../cancha.service';

@Component({
  selector: 'app-cancha-detalles',
  templateUrl: './cancha-detalles.component.html',
  styleUrls: ['./cancha-detalles.component.css']
})
export class CanchaDetallesComponent implements OnInit {

  id:number;
  cancha:Cancha;
  constructor(private route:ActivatedRoute,private canchaServicio:CanchaService) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.cancha = new Cancha();
    this.canchaServicio.obtenerCanchaPorId(this.id).subscribe(dato => {
      this.cancha = dato;
      swal(`Detalles del cancha ${this.cancha.nombre}`);
    });
  }

}
