import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/auth.service';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.css']
})
export class HistoryComponent implements OnInit {
  shipmentList = [];
  constructor(
    private auth: AuthService
  ) { }
  history: any = [];
  ngOnInit() {
  this.auth.getAllShipment().subscribe(data => {
    this.shipmentList = data.map(e => {
      const id = e.payload.doc.id;
      const datas = e.payload.doc.data();
      return {id, ...datas};
    });
  });
  }


}
