import  swal  from 'sweetalert2';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Escenario } from '../escenario';
import { EscenarioService } from '../escenario.service';

@Component({
  selector: 'app-escenario-detalles',
  templateUrl: './escenario-detalles.component.html',
  styleUrls: ['./escenario-detalles.component.css']
})
export class EscenarioDetallesComponent implements OnInit {

  id:number;
  escenario:Escenario;
  constructor(private route:ActivatedRoute,private escenarioServicio:EscenarioService) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.escenario = new Escenario();
    this.escenarioServicio.obtenerEscenarioPorId(this.id).subscribe(dato => {
      this.escenario = dato;
      swal(`Detalles del escenario ${this.escenario.nombre}`);
    });
  }

}
