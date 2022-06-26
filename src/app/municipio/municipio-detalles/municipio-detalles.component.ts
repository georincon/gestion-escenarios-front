import  swal  from 'sweetalert2';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Municipio } from '../municipio';
import { MunicipioService } from '../municipio.service';

@Component({
  selector: 'app-municipio-detalles',
  templateUrl: './municipio-detalles.component.html',
  styleUrls: ['./municipio-detalles.component.css']
})
export class MunicipioDetallesComponent implements OnInit {

  id:number;
  municipio:Municipio;
  constructor(private route:ActivatedRoute,private municipioServicio:MunicipioService) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.municipio = new Municipio();
    this.municipioServicio.obtenerMunicipioPorId(this.id).subscribe(dato => {
      this.municipio = dato;
      swal(`Detalles del municipio ${this.municipio.nombre}`);
    });
  }

}
