import swal from 'sweetalert2';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Patrocinador } from '../patrocinador';
import { PatrocinadorService } from '../patrocinador.service';

@Component({
  selector: 'app-registrar-patrocinador',
  templateUrl: './registrar-patrocinador.component.html',
  styleUrls: ['./registrar-patrocinador.component.css']
})
export class RegistrarPatrocinadorComponent implements OnInit {

  patrocinador : Patrocinador = new Patrocinador();
  constructor(private patrocinadorServicio:PatrocinadorService, private router:Router) {}

  ngOnInit(): void {
    console.log(this.patrocinador);
  }

  guardarPatrocinador(){
    this.patrocinadorServicio.registrarPatrocinador(this.patrocinador).subscribe(dato => {
      console.log(dato);
      this.irAlaListaDePatrocinadores();
    },error => console.log(error))
  }

  irAlaListaDePatrocinadores(){
    this.router.navigate(['/patrocinadores']);
    swal('Patrocinador registrado',`El patrocinador ${this.patrocinador.nombre} ha sido registrado con exito`,`success`);
  }

  onSubmit(){
    this.guardarPatrocinador();
  }
}
