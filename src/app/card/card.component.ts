import { Component } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {
  public image:string="https://alumnos.intecap.edu.gt/images/esp/esp_020.jpg";
  public Titulo:string="Curso de Angular con Interpolación";

  constructor(){

  }

  ngOnInit(): void {

  }

}
