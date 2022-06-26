import  swal  from 'sweetalert2';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Cancha } from '../cancha';
import { CanchaService } from '../cancha.service';

@Component({
  selector: 'app-lista-canchas',
  templateUrl: './lista-canchas.component.html',
  styleUrls: ['./lista-canchas.component.css']
})
export class ListaCanchasComponent implements OnInit {

  canchas:Cancha[];

  constructor(private canchaServicio:CanchaService,private router:Router) { }

  ngOnInit(): void {
    this.obtenerCanchas();
  }

  actualizarCancha(id:number){
    this.router.navigate(['/actualizar-cancha',id])
  }

  private obtenerCanchas() {
    this.canchaServicio.obtenerListaDeCanchas().subscribe(dato => {
      this.canchas = dato;
    });
  }

  eliminarTorneo(id:number){
    swal({
      title: '¿Estas seguro?',
      text: "Confirma si deseas eliminar la cancha",
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
        this.canchaServicio.eliminarCancha(id).subscribe(dato => {
          console.log(dato);
          this.obtenerCanchas();
          swal(
            'Cancha eliminado',
            'El cancha ha sido eliminado con exito',
            'success'
          )
        })
      }
    })
  }

  verDetallesDelCancha(id:number){
    this.router.navigate(['/cancha-detalles',id])
  }

}

