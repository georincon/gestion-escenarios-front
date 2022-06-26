import swal from 'sweetalert2';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Cancha } from '../cancha';
import { CanchaService } from '../cancha.service';

@Component({
  selector: 'app-registrar-cancha',
  templateUrl: './registrar-cancha.component.html',
  styleUrls: ['./registrar-cancha.component.css']
})
export class RegistrarCanchaComponent implements OnInit {

  cancha : Cancha = new Cancha();
  constructor(private canchaServicio:CanchaService, private router:Router) {}

  ngOnInit(): void {
    console.log(this.cancha);
  }

  guardarCancha(){
    this.canchaServicio.registrarCancha(this.cancha).subscribe(dato => {
      console.log(dato);
      this.irAlaListaDeCanchas();
    },error => console.log(error))
  }

  irAlaListaDeCanchas(){
    this.router.navigate(['/canchas']);
    swal('Cancha registrada',`La Cancha ${this.cancha.nombre} ha sido registrado con exito`,`success`);
  }

  onSubmit(){
    this.guardarCancha();
  }
}
