import  swal  from 'sweetalert2';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Patrocinador } from '../patrocinador';
import { PatrocinadorService } from '../patrocinador.service';

@Component({
  selector: 'app-actualizar-patrocinador',
  templateUrl: './actualizar-patrocinador.component.html',
  styleUrls: ['./actualizar-patrocinador.component.css']
})
export class ActualizarPatrocinadorComponent implements OnInit {

  id:number;
  patrocinador:Patrocinador = new Patrocinador();
  constructor(private patrocinadorServicio:PatrocinadorService,private router:Router,private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.patrocinadorServicio.obtenerPatrocinadorPorId(this.id).subscribe(dato =>{
      this.patrocinador = dato;
    },error => console.log(error));
  }

  irAlaListaDePatrocinadores(){
    this.router.navigate(['/patrocinadores']);
    swal('Patrocinador actualizado',`El patrocinador ${this.patrocinador.nombre} ha sido actualizado con exito`,`success`);
  }

  onSubmit(){
    this.patrocinadorServicio.actualizarPatrocinador(this.id,this.patrocinador).subscribe(dato => {
      this.irAlaListaDePatrocinadores();
    },error => console.log(error));
  }

}




