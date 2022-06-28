import { Municipio } from "../municipio/municipio";

export class Torneo {

    id:number;
    nombre:string;
    categoria:string;
    fechaInicio:string;
    fechaFin:string;
    fk_municipio:Municipio;
    
}
