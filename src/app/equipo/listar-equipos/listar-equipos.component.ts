import  swal  from 'sweetalert2';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Equipo } from '../equipo';
import { EquipoService } from '../equipo.service';

@Component({
  selector: 'app-listar-equipos',
  templateUrl: './listar-equipos.component.html',
  styleUrls: ['./listar-equipos.component.css']
})
export class ListarEquiposComponent implements OnInit {

  equipos:Equipo[];

  constructor(private equipoServicio:EquipoService,private router:Router) { }

  ngOnInit(): void {
    this.obtenerEquipos();
  }

  actualizarEquipo(id:number){
    this.router.navigate(['/actualizar-equipo',id])
  }

  private obtenerEquipos() {
    this.equipoServicio.obtenerListaDeEquipos().subscribe(dato => {
      this.equipos = dato;
    });
  }

  eliminarEquipo(id:number){
    swal({
      title: '¿Estas seguro?',
      text: "Confirma si deseas eliminar el equipo",
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
        this.equipoServicio.eliminarEquipo(id).subscribe(dato => {
          console.log(dato);
          this.obtenerEquipos();
          swal(
            'Equipo eliminado',
            'El equipo ha sido eliminado con exito',
            'success'
          )
        })
      }
    })
  }

  verDetallesDelEquipo(id:number){
    this.router.navigate(['/equipo-detalles',id])
  }

}

