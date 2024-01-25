import { Component, OnInit } from '@angular/core';
import { DataServiceService } from '../../home-page/services/data-service.service';

@Component({
  selector: 'app-houses',
  templateUrl: './houses.component.html',
  styleUrls: ['./houses.component.css']
})
export class HousesComponent implements OnInit {

  data: Array<any> = []

  constructor(private Houses: DataServiceService) {
  }

  ngOnInit(): void {
    this.Houses.getCasas$().subscribe((Response: any) => {
      this.data = Response
      console.log(this.data)
    })
  }



}
