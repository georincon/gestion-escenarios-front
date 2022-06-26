import swal from 'sweetalert2';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Equipo } from '../equipo';
import { EquipoService } from '../equipo.service';

@Component({
  selector: 'app-registrar-equipo',
  templateUrl: './registrar-equipo.component.html',
  styleUrls: ['./registrar-equipo.component.css']
})
export class RegistrarEquipoComponent implements OnInit {


  equipo : Equipo = new Equipo();
  constructor(private equipoServicio:EquipoService, private router:Router) {}

  ngOnInit(): void {
    console.log(this.equipo);
  }

  guardarEquipo(){
    this.equipoServicio.registrarEquipo(this.equipo).subscribe(dato => {
      console.log(dato);
      this.irAlaListaDeEquipos();
    },error => console.log(error))
  }

  irAlaListaDeEquipos(){
    this.router.navigate(['/equipos']);
    swal('Equipo registrado',`El equipo ${this.equipo.nombre} ha sido registrado con exito`,`success`);
  }

  onSubmit(){
    this.guardarEquipo();
  }
}
