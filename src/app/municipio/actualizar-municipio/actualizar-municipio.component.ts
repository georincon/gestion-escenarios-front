import  swal  from 'sweetalert2';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MunicipioService } from '../municipio.service';
import { Municipio } from '../municipio';

@Component({
  selector: 'app-actualizar-municipio',
  templateUrl: './actualizar-municipio.component.html',
  styleUrls: ['./actualizar-municipio.component.css']
})
export class ActualizarMunicipioComponent implements OnInit {

  id:number;
  municipio:Municipio = new Municipio();
  constructor(private municipioServicio:MunicipioService,private router:Router,private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.municipioServicio.obtenerMunicipioPorId(this.id).subscribe(dato =>{
      this.municipio = dato;
    },error => console.log(error));
  }

  irAlaListaDeMunicipios(){
    this.router.navigate(['/municipios']);
    swal('Municipio actualizado',`El municipio ${this.municipio.nombre} ha sido actualizado con exito`,`success`);
  }

  onSubmit(){
    this.municipioServicio.actualizarMunicipio(this.id,this.municipio).subscribe(dato => {
      this.irAlaListaDeMunicipios();
    },error => console.log(error));
  }

}
