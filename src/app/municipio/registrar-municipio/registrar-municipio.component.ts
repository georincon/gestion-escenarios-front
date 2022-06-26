import swal from 'sweetalert2';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Municipio } from '../municipio';
import { MunicipioService } from '../municipio.service';

@Component({
  selector: 'app-registrar-municipio',
  templateUrl: './registrar-municipio.component.html',
  styleUrls: ['./registrar-municipio.component.css']
})
export class RegistrarMunicipioComponent implements OnInit {

  municipio : Municipio = new Municipio();
  constructor(private municipioServicio:MunicipioService, private router:Router) {}

  ngOnInit(): void {
    console.log(this.municipio);
  }

  guardarMunicipio(){
    this.municipioServicio.registrarMunicipio(this.municipio).subscribe(dato => {
      console.log(dato);
      this.irAlaListaDeMunicipios();
    },error => console.log(error))
  }

  irAlaListaDeMunicipios(){
    this.router.navigate(['/municipios']);
    swal('Municipio registrado',`El municipio ${this.municipio.nombre} ha sido registrado con exito`,`success`);
  }

  onSubmit(){
    this.guardarMunicipio();
  }

}
