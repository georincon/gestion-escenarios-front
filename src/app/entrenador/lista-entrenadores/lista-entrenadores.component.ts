import  swal  from 'sweetalert2';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Entrenador } from '../entrenador';
import { EntrenadorService } from '../entrenador.service';

@Component({
  selector: 'app-lista-entrenadores',
  templateUrl: './lista-entrenadores.component.html',
  styleUrls: ['./lista-entrenadores.component.css']
})
export class ListaEntrenadoresComponent implements OnInit {

  entrenadores:Entrenador[];

  constructor(private entrenadorServicio:EntrenadorService,private router:Router) { }

  ngOnInit(): void {
    this.obtenerEntrenadores();
  }

  actualizarEntrenador(id:number){
    this.router.navigate(['/actualizar-entrenador',id])
  }

  private obtenerEntrenadores() {
    this.entrenadorServicio.obtenerListaDeEntrenadores().subscribe(dato => {
      this.entrenadores = dato;
    });
  }

  eliminarEntrenador(id:number){
    swal({
      title: '¿Estas seguro?',
      text: "Confirma si deseas eliminar al entrenador",
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
        this.entrenadorServicio.eliminarEntrenador(id).subscribe(dato => {
          console.log(dato);
          this.obtenerEntrenadores();
          swal(
            'Entrenador eliminado',
            'El entrenador ha sido eliminado con exito',
            'success'
          )
        })
      }
    })
  }

  verDetallesDelEntrenador(id:number){
    this.router.navigate(['/entrenador-detalles',id])
  }

}


