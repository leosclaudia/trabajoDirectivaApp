import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  titulo= 'Registro de Usuarios';
  mensaje=""
  registrado=false;
  nombre:string="";
  apellido:string="";
  entradas:Array<any>;

  constructor(){

    this.entradas=[

      {titulo:"Pyton Cada día mas presente"},
      {titulo:"Java presente desde hace 20 años"},
      {titulo:"JavaScript cada ves más funcional"},
      {titulo:"Kotin potencia par atus apps"},
      {titulo:"¡Dónde quedó pascal"},
    ]
    
  }
  registrarUsuario(){
    this.registrado=true

    this.mensaje="Usuario Registrado con éxito"
  }
}
