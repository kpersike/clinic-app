import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-crud-customer',
  templateUrl: './crud-customer.component.html',
  styleUrl: './crud-customer.component.css'
})
export class CrudCustomerComponent {

  constructor(private http: HttpClient ){}

  Customers : any[] = [];
  Customer: any;

  cd_customer: string ='';

  searchCustomer(){
    this.http.get<any[]>("http://127.0.0.1:8000/api/visits/"+this.cd_customer).subscribe(data => {
      this.Customers = data;
    });
  }

}
