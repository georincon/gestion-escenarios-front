import  swal  from 'sweetalert2';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Arbitro } from '../arbitro';
import { ArbitroService } from '..//arbitro.service';

@Component({
  selector: 'app-lista-arbitros',
  templateUrl: './lista-arbitros.component.html',
  styleUrls: ['./lista-arbitros.component.css']
})
export class ListaArbitrosComponent implements OnInit {

  arbitros:Arbitro[];

  constructor(private arbitroServicio:ArbitroService,private router:Router) { }

  ngOnInit(): void {
    this.obtenerArbitros();
  }

  actualizarArbitro(id:number){
    this.router.navigate(['/actualizar-arbitro',id])
  }

  private obtenerArbitros() {
    this.arbitroServicio.obtenerListaDeArbitros().subscribe(dato => {
      this.arbitros = dato;
    });
  }

  eliminarArbitro(id:number){
    swal({
      title: '¿Estas seguro?',
      text: "Confirma si deseas eliminar al arbitro",
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
        this.arbitroServicio.eliminarArbitro(id).subscribe(dato => {
          console.log(dato);
          this.obtenerArbitros();
          swal(
            'Arbitro eliminado',
            'El arbitro ha sido eliminado con exito',
            'success'
          )
        })
      }
    })
  }

  verDetallesDelArbitro(id:number){
    this.router.navigate(['/arbitro-detalles',id])
  }

}

