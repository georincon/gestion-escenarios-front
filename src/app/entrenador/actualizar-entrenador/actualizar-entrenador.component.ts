import  swal  from 'sweetalert2';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Entrenador } from '../entrenador';
import { EntrenadorService } from '../entrenador.service';

@Component({
  selector: 'app-actualizar-entrenador',
  templateUrl: './actualizar-entrenador.component.html',
  styleUrls: ['./actualizar-entrenador.component.css']
})
export class ActualizarEntrenadorComponent implements OnInit {

  id:number;
  entrenador:Entrenador = new Entrenador();
  constructor(private entrenadorServicio:EntrenadorService,private router:Router,private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.entrenadorServicio.obtenerEntrenadorPorId(this.id).subscribe(dato =>{
      this.entrenador = dato;
    },error => console.log(error));
  }

  irAlaListaDeEntrenadores(){
    this.router.navigate(['/entrenadores']);
    swal('Entrenador actualizado',`El entrenador ${this.entrenador.nombre} ha sido actualizado con exito`,`success`);
  }

  onSubmit(){
    this.entrenadorServicio.actualizarEntrenador(this.id,this.entrenador).subscribe(dato => {
      this.irAlaListaDeEntrenadores();
    },error => console.log(error));
  }

}




