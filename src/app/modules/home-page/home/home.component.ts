import { Component, Input, OnInit } from '@angular/core';
import { DataServiceService } from '../services/data-service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  @Input() Casas: Array<any> = []

  cantidadCasas: number = 0

  constructor(private  Houses: DataServiceService) { 
    this.Houses.getCasas$().subscribe((Response: any) => {
      this.cantidadCasas = Response.length
      this.Casas = Response
      console.log(Response.length)
    })
  }

  ngOnInit(): void {
    
  }

  usarServicio(){
    
  }

}
