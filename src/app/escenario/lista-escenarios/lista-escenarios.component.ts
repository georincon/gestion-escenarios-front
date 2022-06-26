import  swal  from 'sweetalert2';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Escenario } from '../escenario';
import { EscenarioService } from '../escenario.service';

@Component({
  selector: 'app-lista-escenarios',
  templateUrl: './lista-escenarios.component.html',
  styleUrls: ['./lista-escenarios.component.css']
})
export class ListaEscenariosComponent implements OnInit {

  escenarios:Escenario[];

  constructor(private escenarioServicio:EscenarioService,private router:Router) { }

  ngOnInit(): void {
    this.obtenerEscenarios();
  }

  actualizarEscenario(id:number){
    this.router.navigate(['/actualizar-escenario',id])
  }

  private obtenerEscenarios() {
    this.escenarioServicio.obtenerListaDeEscenarios().subscribe(dato => {
      this.escenarios = dato;
    });
  }

  eliminarEscenario(id:number){
    swal({
      title: '¿Estas seguro?',
      text: "Confirma si deseas eliminar al escenario",
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
        this.escenarioServicio.eliminarEscenario(id).subscribe(dato => {
          console.log(dato);
          this.obtenerEscenarios();
          swal(
            'Escenario eliminado',
            'El escenario ha sido eliminado con exito',
            'success'
          )
        })
      }
    })
  }

  verDetallesDelEscenario(id:number){
    this.router.navigate(['/escenario-detalles',id])
  }

}

