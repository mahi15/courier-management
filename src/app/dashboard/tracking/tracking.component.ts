import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthService } from 'src/app/auth.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-tracking',
  templateUrl: './tracking.component.html',
  styleUrls: ['./tracking.component.scss']
})
export class TrackingComponent implements OnInit {
  track: FormGroup;
  customer: any = [];
  shipment: any = [];

  constructor(
    private fb: FormBuilder,
    private auth: AuthService
  ) { }

  ngOnInit() {
    this.track = this.fb.group({
      tracknumber:  ['', Validators.required]
    });
  }

  onSubmit() {
    this.auth.getshipment(this.track.get('tracknumber').value).subscribe(sdata => {
      this.customer = sdata.map(e => {
        const id = e.payload.doc.id;
        const datas = e.payload.doc.data();
        return {id, ...datas};
      });
      this.shipment = this.customer[0];
    });
  }
}
