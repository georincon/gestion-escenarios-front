import  swal  from 'sweetalert2';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Deportista } from '../deportista';
import { DeportistaService } from '../deportista.service';

@Component({
  selector: 'app-actualizar-deportista',
  templateUrl: './actualizar-deportista.component.html',
  styleUrls: ['./actualizar-deportista.component.css']
})
export class ActualizarDeportistaComponent implements OnInit {

  id:number;
  deportista:Deportista = new Deportista();
  constructor(private deportistaServicio:DeportistaService,private router:Router,private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.deportistaServicio.obtenerDeportistaPorId(this.id).subscribe(dato =>{
      this.deportista = dato;
    },error => console.log(error));
  }

  irAlaListaDeDeportistas(){
    this.router.navigate(['/deportistas']);
    swal('Deportista actualizado',`El deportista ${this.deportista.nombre} ha sido actualizado con exito`,`success`);
  }

  onSubmit(){
    this.deportistaServicio.actualizarDeportista(this.id,this.deportista).subscribe(dato => {
      this.irAlaListaDeDeportistas();
    },error => console.log(error));
  }

}
