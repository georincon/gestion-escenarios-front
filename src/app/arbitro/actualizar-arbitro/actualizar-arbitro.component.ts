import  swal  from 'sweetalert2';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Arbitro } from '../arbitro';
import { ArbitroService } from '../arbitro.service';

@Component({
  selector: 'app-actualizar-arbitro',
  templateUrl: './actualizar-arbitro.component.html',
  styleUrls: ['./actualizar-arbitro.component.css']
})
export class ActualizarArbitroComponent implements OnInit {

  id:number;
  arbitro:Arbitro = new Arbitro();
  constructor(private arbitroServicio:ArbitroService,private router:Router,private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.arbitroServicio.obtenerArbitroPorId(this.id).subscribe(dato =>{
      this.arbitro = dato;
    },error => console.log(error));
  }

  irAlaListaDeArbitros(){
    this.router.navigate(['/arbitros']);
    swal('Arbitro actualizado',`El arbitro ${this.arbitro.nombre} ha sido actualizado con exito`,`success`);
  }

  onSubmit(){
    this.arbitroServicio.actualizarArbitro(this.id,this.arbitro).subscribe(dato => {
      this.irAlaListaDeArbitros();
    },error => console.log(error));
  }

}




