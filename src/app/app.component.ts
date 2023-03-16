import { Component, OnInit } from '@angular/core';

interface Tarjeta{
  numero?:number;
  titulo:string;
  subtitulo:string;  
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  title = 'Mi primer App Angular';
  public ArregloTarjetas: Tarjeta[]=[];

  ngOnInit(): void {
    this.ArregloTarjetas = [
      {numero: 1, titulo:"Video 1", subtitulo:"Subtitulo 1"},
      {numero: 2, titulo:"Video 2", subtitulo:"Subtitulo 2"},
      {numero: 3, titulo:"Video 3", subtitulo:"Subtitulo 3"},
    ]
    }
  }
