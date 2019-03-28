import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { AuthService } from 'src/app/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  createOrder: FormGroup;
  value: string;
  viewValue: string;

  courier: any[] = [
    {value: 'dhl', viewValue: 'dhl'},
    {value: 'fedex', viewValue: 'fedex'},
    {value: 'India Post', viewValue: 'india post'},
    {value: 'India Post', viewValue: 'india post'},
    {value: 'UPSC', viewValue: 'UPSC'},
    {value: 'UPS', viewValue: 'UPS'},
    {value: 'Bpost', viewValue: 'Bpost'},
    {value: 'Professional Couriers', viewValue: 'Professional Couriers'}
  ];
  // public customerEmail: string;
  // public trackingNumber: number;
  // public title: string;
  // public customerName: string;
  // public orderId: number;
  // public productName: string;
  // public productPrice: number;
  constructor(private createOder: AuthService,
              private router: Router,
              private fb: FormBuilder ) { }

  ngOnInit() {
    this.createOrder = this.fb.group({
      courier: ['', Validators.required],
      tracking_number: ['', Validators.required],
      title: ['', Validators.required],
      Customer_Name: ['', Validators.required],
      Customer_email: ['', Validators.required],
      order_id: ['', Validators.required],
      product_name: ['', Validators.required],
      product_price: ['', Validators.required]
   });
  }
  onSubmit() {
    const orderdata = {
      courier: this.createOrder.get('courier').value,
      tracking_number: this.createOrder.get('tracking_number').value,
      title: this.createOrder.get('title').value,
      Customer_Name: this.createOrder.get('Customer_Name').value,
      Customer_email: this.createOrder.get('Customer_email').value,
      order_id: this.createOrder.get('order_id').value,
      product_name: this.createOrder.get('product_name').value,
      product_price: this.createOrder.get('product_price').value
    };
    this.createOder.createShipment(orderdata);
    alert('shipment has been created successfully');
    this.router.navigate(['dashboard/history']);
  }

}
