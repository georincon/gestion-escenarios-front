import  swal  from 'sweetalert2';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Torneo } from '../torneo';
import { TorneoService } from '../torneo.service';

@Component({
  selector: 'app-lista-torneos',
  templateUrl: './lista-torneos.component.html',
  styleUrls: ['./lista-torneos.component.css']
})
export class ListaTorneosComponent implements OnInit {

  torneos:any[];

  constructor(private torneoServicio:TorneoService,private router:Router) { }

  ngOnInit(): void {
    this.obtenerTorneos();
  }

  actualizarTorneo(id:number){
    this.router.navigate(['/actualizar-torneo',id])
  }

  private obtenerTorneos() {
    this.torneoServicio.obtenerListaDeTorneos().subscribe(dato => {
      this.torneos = dato;
    });
  }

  eliminarTorneo(id:number){
    swal({
      title: '¿Estas seguro?',
      text: "Confirma si deseas eliminar al torneo",
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
        this.torneoServicio.eliminarTorneo(id).subscribe(dato => {
          console.log(dato);
          this.obtenerTorneos();
          swal(
            'Torneo eliminado',
            'El torneo ha sido eliminado con exito',
            'success'
          )
        })
      }
    })
  }

  verDetallesDelTorneo(id:number){
    this.router.navigate(['/torneo-detalles',id])
  }

}

