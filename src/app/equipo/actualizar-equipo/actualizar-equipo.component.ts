import  swal  from 'sweetalert2';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Equipo } from '../equipo';
import { EquipoService } from '../equipo.service';

@Component({
  selector: 'app-actualizar-equipo',
  templateUrl: './actualizar-equipo.component.html',
  styleUrls: ['./actualizar-equipo.component.css']
})
export class ActualizarEquipoComponent implements OnInit {


  id:number;
  equipo:Equipo = new Equipo();
  constructor(private equipoServicio:EquipoService,private router:Router,private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.equipoServicio.obtenerEquipoPorId(this.id).subscribe(dato =>{
      this.equipo = dato;
    },error => console.log(error));
  }

  irAlaListaDeEquipos(){
    this.router.navigate(['/equipos']);
    swal('Equipo actualizado',`El equipo ${this.equipo.nombre} ha sido actualizado con exito`,`success`);
  }

  onSubmit(){
    this.equipoServicio.actualizarEquipo(this.id,this.equipo).subscribe(dato => {
      this.irAlaListaDeEquipos();
    },error => console.log(error));
  }

}




