import  swal  from 'sweetalert2';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Escenario } from '../escenario';
import { EscenarioService } from '../escenario.service';

@Component({
  selector: 'app-actualizar-escenario',
  templateUrl: './actualizar-escenario.component.html',
  styleUrls: ['./actualizar-escenario.component.css']
})
export class ActualizarEscenarioComponent implements OnInit {

  id:number;
  escenario:Escenario = new Escenario();
  constructor(private escenarioServicio:EscenarioService,private router:Router,private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.escenarioServicio.obtenerEscenarioPorId(this.id).subscribe(dato =>{
      this.escenario = dato;
    },error => console.log(error));
  }

  irAlaListaDeEscenarios(){
    this.router.navigate(['/escenarios']);
    swal('Escenario actualizado',`El escenario ${this.escenario.nombre} ha sido actualizado con exito`,`success`);
  }

  onSubmit(){
    this.escenarioServicio.actualizarEscenario(this.id,this.escenario).subscribe(dato => {
      this.irAlaListaDeEscenarios();
    },error => console.log(error));
  }

}




