import  swal  from 'sweetalert2';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Deportista } from '../deportista';
import { DeportistaService } from '../deportista.service';

@Component({
  selector: 'app-lista-deportistas',
  templateUrl: './lista-deportistas.component.html',
  styleUrls: ['./lista-deportistas.component.css']
})
export class ListaDeportistasComponent implements OnInit {

  deportistas:Deportista[];

  constructor(private deportistaServicio:DeportistaService,private router:Router) { }

  ngOnInit(): void {
    this.obtenerDeportistas();
  }

  actualizarDeportista(id:number){
    this.router.navigate(['/actualizar-deportista',id])
  }

  private obtenerDeportistas() {
    this.deportistaServicio.obtenerListaDeDeportistas().subscribe(dato => {
      this.deportistas = dato;
    });
  }

  eliminarDeportista(id:number){
    swal({
      title: '¿Estas seguro?',
      text: "Confirma si deseas eliminar al deportista",
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
        this.deportistaServicio.eliminarDeportista(id).subscribe(dato => {
          console.log(dato);
          this.obtenerDeportistas();
          swal(
            'Deportista eliminado',
            'El deportista ha sido eliminado con exito',
            'success'
          )
        })
      }
    })
  }

  verDetallesDelDeportista(id:number){
    this.router.navigate(['/deportista-detalles',id])
  }

}

