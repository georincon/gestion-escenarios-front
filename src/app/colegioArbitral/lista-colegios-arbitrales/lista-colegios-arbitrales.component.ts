import  swal  from 'sweetalert2';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ColegioArbitral } from '../colegio-arbitral';
import { ColegioArbitralService } from '../colegio-arbitral.service';

@Component({
  selector: 'app-lista-colegios-arbitrales',
  templateUrl: './lista-colegios-arbitrales.component.html',
  styleUrls: ['./lista-colegios-arbitrales.component.css']
})
export class ListaColegiosArbitralesComponent implements OnInit {


  colegiosArbitrales:ColegioArbitral[];

  constructor(private colegioArbitralServicio:ColegioArbitralService,private router:Router) { }

  ngOnInit(): void {
    this.obtenerColegiosArbitrales();
  }

  actualizarColegioArbitral(id:number){
    this.router.navigate(['/actualizar-colegio-arbitral',id])
  }

  private obtenerColegiosArbitrales() {
    this.colegioArbitralServicio.obtenerListaDeColegiosArbitrales().subscribe(dato => {
      this.colegiosArbitrales = dato;
    });
  }

  eliminarColegioArbitral(id:number){
    swal({
      title: '¿Estas seguro?',
      text: "Confirma si deseas eliminar al colegio arbitral",
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
        this.colegioArbitralServicio.eliminarColegioArbitral(id).subscribe(dato => {
          console.log(dato);
          this.obtenerColegiosArbitrales();
          swal(
            'Colegio arbitral eliminado',
            'El colegio arbitral ha sido eliminado con exito',
            'success'
          )
        })
      }
    })
  }

  verDetallesDelColegioArbitral(id:number){
    this.router.navigate(['/colegio-arbitral-detalles',id])
  }

}