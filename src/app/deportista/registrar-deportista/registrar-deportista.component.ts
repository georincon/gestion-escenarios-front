import swal from 'sweetalert2';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Deportista } from '../deportista';
import { DeportistaService } from '../deportista.service';

@Component({
  selector: 'app-registrar-deportista',
  templateUrl: './registrar-deportista.component.html',
  styleUrls: ['./registrar-deportista.component.css']
})
export class RegistrarDeportistaComponent implements OnInit {

  deportista : Deportista = new Deportista();
  constructor(private deportistaServicio:DeportistaService, private router:Router) {}

  ngOnInit(): void {
    console.log(this.deportista);
  }

  guardarDeportista(){
    this.deportistaServicio.registrarDeportista(this.deportista).subscribe(dato => {
      console.log(dato);
      this.irAlaListaDeDeportistas();
    },error => console.log(error))
  }

  irAlaListaDeDeportistas(){
    this.router.navigate(['/deportistas']);
    swal('Deportista registrado',`El deportista ${this.deportista.nombre} ha sido registrado con exito`,`success`);
  }

  onSubmit(){
    this.guardarDeportista();
  }
}
