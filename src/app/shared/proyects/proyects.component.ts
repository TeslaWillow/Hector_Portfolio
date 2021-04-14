import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-proyects',
  templateUrl: './proyects.component.html',
  styleUrls: ['./proyects.component.css']
})
export class ProyectsComponent implements OnInit {

  @Input("firstColor")  firstColor:string = "rgba(255,111,0,1)";
  @Input("secondColor") secondColor:string = "rgba(29,195,189,0.75)";
  @Input("proyectName") proyectName:string = "Proyect";
  @Input("proyectDesc") proyectDesc:string = "Proyect desc";
  @Input("proyectImg")  proyectImg:string = "../../assets/img/vollume-control-RFb4vMzLsjQ-unsplash.jpg";

  constructor() {}

  ngOnInit(): void {
  }

}
