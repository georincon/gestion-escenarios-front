import  swal  from 'sweetalert2';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Torneo } from '../torneo';
import { TorneoService } from '../torneo.service';

@Component({
  selector: 'app-actualizar-torneo',
  templateUrl: './actualizar-torneo.component.html',
  styleUrls: ['./actualizar-torneo.component.css']
})
export class ActualizarTorneoComponent implements OnInit {

  id:number;
  torneo:Torneo = new Torneo();
  constructor(private torneoServicio:TorneoService,private router:Router,private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.torneoServicio.obtenerTorneoPorId(this.id).subscribe(dato =>{
      this.torneo = dato;
    },error => console.log(error));
  }

  irAlaListaDeTorneos(){
    this.router.navigate(['/torneos']);
    swal('Torneo actualizado',`El torneo ${this.torneo.nombre} ha sido actualizado con exito`,`success`);
  }

  onSubmit(){
    this.torneoServicio.actualizarTorneo(this.id,this.torneo).subscribe(dato => {
      this.irAlaListaDeTorneos();
    },error => console.log(error));
  }

}




