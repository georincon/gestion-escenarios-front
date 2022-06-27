import swal from 'sweetalert2';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Arbitro } from '../arbitro';
import { ArbitroService } from '../arbitro.service';

@Component({
  selector: 'app-registrar-arbitro',
  templateUrl: './registrar-arbitro.component.html',
  styleUrls: ['./registrar-arbitro.component.css']
})
export class RegistrarArbitroComponent implements OnInit {

  arbitro : Arbitro = new Arbitro();
  constructor(private arbitroServicio:ArbitroService, private router:Router) {}

  ngOnInit(): void {
    console.log(this.arbitro);
  }

  guardarArbitro(){
    this.arbitroServicio.registrarArbitro(this.arbitro).subscribe(dato => {
      console.log(dato);
      this.irAlaListaDeArbitros();
    },error => console.log(error))
  }

  irAlaListaDeArbitros(){
    this.router.navigate(['/arbitros']);
    swal('Arbitro registrado',`El arbitro ${this.arbitro.nombre} ha sido registrado con exito`,`success`);
  }

  onSubmit(){
    this.guardarArbitro();
  }
}
