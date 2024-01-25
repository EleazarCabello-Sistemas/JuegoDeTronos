import { Component, OnInit } from '@angular/core';
import { DataServiceService } from '../../home-page/services/data-service.service';
import { CaracterServiceService } from '../services/caracter-service.service';

@Component({
  selector: 'app-members',
  templateUrl: './members.component.html',
  styleUrls: ['./members.component.css']
})
export class MembersComponent implements OnInit {

  data: Array<any> = []
  listaCaracteres: Array<any> = []
  

  constructor(private Houses: DataServiceService,private Caracters: CaracterServiceService) {
   }


  ngOnInit(): void {
    this.Houses.getCasas$().subscribe((Response: any) => {
      this.data = Response.swornMembers
      console.log(this.data)
    })
  }

  obtenerMiembros(){
    for(let item in this.data){
      console.log(item)
    }

    this.Caracters.getCaracter$("a").subscribe
  }

}
