import  swal  from 'sweetalert2';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Municipio } from '../municipio';
import { MunicipioService } from '../municipio.service';

@Component({
  selector: 'app-lista-municipios',
  templateUrl: './lista-municipios.component.html',
  styleUrls: ['./lista-municipios.component.css']
})
export class ListaMunicipiosComponent implements OnInit {

  
  municipios:Municipio[];

  constructor(private municipioServicio:MunicipioService,private router:Router) { }

  ngOnInit(): void {
    this.obtenerMunicipios();
  }

  actualizarMunicipio(id:number){
    this.router.navigate(['/actualizar-municipio',id])
  }

  private obtenerMunicipios() {
    this.municipioServicio.obtenerListaDeMunicipios().subscribe(dato => {
      this.municipios = dato;
    });
  }

  eliminarMunicipio(id:number){
    swal({
      title: '¿Estas seguro?',
      text: "Confirma si deseas eliminar al municipio",
      type: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si , elimínalo',
      cancelButtonText: 'No, cancelar',
      confirmButtonClass: 'btn btn-success',
      cancelButtonClass: 'btn btn-danger',
      buttonsStyling: true
    }).then((result) => {
      if(result.value){
        this.municipioServicio.eliminarMunicipio(id).subscribe(dato => {
          console.log(dato);
          this.obtenerMunicipios();
          swal(
            'Municipio eliminado',
            'El municipio ha sido eliminado con exito',
            'success'
          )
        })
      }
    })
  }

  verDetallesDelMunicipio(id:number){
    this.router.navigate(['/municipio-detalles',id])
  }

}