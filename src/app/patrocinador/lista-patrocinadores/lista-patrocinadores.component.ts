import  swal  from 'sweetalert2';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Patrocinador } from '../patrocinador';
import { PatrocinadorService } from '../patrocinador.service';

@Component({
  selector: 'app-lista-patrocinadores',
  templateUrl: './lista-patrocinadores.component.html',
  styleUrls: ['./lista-patrocinadores.component.css']
})
export class ListaPatrocinadoresComponent implements OnInit {

  patrocinadores:Patrocinador[];

  constructor(private patrocinadorServicio:PatrocinadorService,private router:Router) { }

  ngOnInit(): void {
    this.obtenerPatrocinadores();
  }

  actualizarPatrocinador(id:number){
    this.router.navigate(['/actualizar-patrocinador',id])
  }

  private obtenerPatrocinadores() {
    this.patrocinadorServicio.obtenerListaDePatrocinadores().subscribe(dato => {
      this.patrocinadores = dato;
    });
  }

  eliminarPatrocinador(id:number){
    swal({
      title: '¿Estas seguro?',
      text: "Confirma si deseas eliminar al patrocinador",
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
        this.patrocinadorServicio.eliminarPatrocinador(id).subscribe(dato => {
          console.log(dato);
          this.obtenerPatrocinadores();
          swal(
            'Patrocinador eliminado',
            'El patrocinador ha sido eliminado con exito',
            'success'
          )
        })
      }
    })
  }

  verDetallesDelPatrocinador(id:number){
    this.router.navigate(['/patrocinador-detalles',id])
  }

}
