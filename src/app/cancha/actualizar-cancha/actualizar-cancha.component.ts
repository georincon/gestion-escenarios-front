import  swal  from 'sweetalert2';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Cancha } from '../cancha';
import { CanchaService } from '../cancha.service';

@Component({
  selector: 'app-actualizar-cancha',
  templateUrl: './actualizar-cancha.component.html',
  styleUrls: ['./actualizar-cancha.component.css']
})
export class ActualizarCanchaComponent implements OnInit {


  id:number;
  cancha:Cancha = new Cancha();
  constructor(private canchaServicio:CanchaService,private router:Router,private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.canchaServicio.obtenerCanchaPorId(this.id).subscribe(dato =>{
      this.cancha = dato;
    },error => console.log(error));
  }

  irAlaListaDeCanchas(){
    this.router.navigate(['/canchas']);
    swal('Cancha actualizado',`El cancha ${this.cancha.nombre} ha sido actualizado con exito`,`success`);
  }

  onSubmit(){
    this.canchaServicio.actualizarCancha(this.id,this.cancha).subscribe(dato => {
      this.irAlaListaDeCanchas();
    },error => console.log(error));
  }

}




