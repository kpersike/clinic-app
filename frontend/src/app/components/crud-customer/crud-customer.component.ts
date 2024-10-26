import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-crud-customer',
  templateUrl: './crud-customer.component.html',
  styleUrl: './crud-customer.component.css'
})
export class CrudCustomerComponent {

  constructor(private http: HttpClient )
  {
    // this.getAllCustomer();
  }

  Customers : any[] = [];
  Customer: any;
 
  // name_customer: string ='';
  cpf_customer: string ='';
  // date_customer: Date= new Date('0000-00-00');
  // email_customer: string ='';
 
  // currentCustomerID = '';

  // getAllCustomer()
  // {
  //   this.http.get("http://127.0.0.1:8000/api/customers/")
  //   .subscribe((resultData: any)=>
  //   {
  //       console.log(resultData);
  //       this.Customers = resultData;
  //   });
  // }

  // setUpdate(data: any)
  // {
  //  this.name_customer = data.nm_customer;
  //  this.cpf_customer = data.nr_cpf_customer;
  //  this.date_customer = data.dt_customer;
  //  this.email_customer = data.ds_email_customer;
  //  this.currentCustomerID = data.cd_customer;
   
  // }
 
  // UpdateRecords()
  // {
  //   let bodyData = 
  //   {
  //     "nm_customer" : this.name_customer,
  //     "nr_cpf_customer" : this.cpf_customer,
  //     "dt_customer" : this.date_customer,
  //     "ds_email_customer" : this.email_customer
  //   };
    
  //   this.http.put("http://127.0.0.1:8000/api/customer/"+ this.currentCustomerID , bodyData).subscribe((resultData: any)=>
  //   {
  //       console.log(resultData);
  //       alert("Student Registered Updateddd")
  //       this.name_customer = '';
  //       this.cpf_customer = '';
  //       this.date_customer = new Date('0000-00-00');
  //       this.email_customer = '';
  //       this.getAllCustomer();
  //   });
  // }

  // setDelete(data: any)
  // {
  //   this.http.delete("http://127.0.0.1:8000/api/customer/"+data.cd_customer).subscribe((resultData: any)=>
  //   {
  //       console.log(resultData);
  //       alert("Customer Deletedddd")
  //       this.getAllCustomer();
  //   });
 
  // }

  searchCustomer(){
    this.http.get<any[]>("http://127.0.0.1:8000/api/visits/"+this.cpf_customer).subscribe(data => {
      this.Customers = data;
    });
  }

}
