import { Component, OnInit } from '@angular/core';
import { DataServiceService } from '../../home-page/services/data-service.service';
import { CaracterServiceService } from '../services/caracter-service.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-members',
  templateUrl: './members.component.html',
  styleUrls: ['./members.component.css']
})
export class MembersComponent implements OnInit {

  listaMembers: Array<any> = []
  infoMiembros: Array<any> = []
  urlImagen: string= ""
  mostrarImagen: Boolean = false
  
  constructor(private Houses: DataServiceService,private Miembro: CaracterServiceService) {
    this.mostrarImagen = false
    this.Miembro.getMiembros$().subscribe((Response:any) => {
      this.listaMembers = Response.swornMembers
      
      for(let url of this.listaMembers){ 
       this.Miembro.getMiembro$(url).subscribe(Response => {
        this.infoMiembros.push(Response)
       })
        
      }

    }) 
  }


  ngOnInit(): void {}

  cargarImagen():void{
    this.Miembro.getImagen$().subscribe(Response => {
      this.urlImagen = Response.message
      this.mostrarImagen = true
    })
  }
  
}
