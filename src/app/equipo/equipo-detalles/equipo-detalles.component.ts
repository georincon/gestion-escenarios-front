import  swal  from 'sweetalert2';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Equipo } from '../equipo';
import { EquipoService } from '../equipo.service';

@Component({
  selector: 'app-equipo-detalles',
  templateUrl: './equipo-detalles.component.html',
  styleUrls: ['./equipo-detalles.component.css']
})
export class EquipoDetallesComponent implements OnInit {


  id:number;
  equipo:Equipo;
  constructor(private route:ActivatedRoute,private equipoServicio:EquipoService) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.equipo = new Equipo();
    this.equipoServicio.obtenerEquipoPorId(this.id).subscribe(dato => {
      this.equipo = dato;
      swal(`Detalles del equipo ${this.equipo.nombre}`);
    });
  }

}
