import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-crud-employee',
  templateUrl: './crud-employee.component.html',
  styleUrl: './crud-employee.component.css'
})
export class CrudEmployeeComponent {

  constructor(private http: HttpClient )
  {
    this.getAllCustomer();
  }

  Customers : any[] = [];

  id_customer = ''
  name_customer: string ='';
  cpf_customer: string ='';
  date_customer: Date= new Date('0000-00-00');
  email_customer: string ='';

  registerCustomer()
  {
  
    let bodyData = {
      "nm_customer" : this.name_customer,
      "nr_cpf_customer" : this.cpf_customer,
      "dt_customer" : this.date_customer,
      "ds_email_customer" : this.email_customer
    };
 
    this.http.post("http://127.0.0.1:8000/api/customers/",bodyData).subscribe((resultData: any)=>
    {
        console.log(resultData);
        alert("Customer Registered Successfully");
        this.getAllCustomer();
    });
  }

  getAllCustomer()
  {
    this.http.get("http://127.0.0.1:8000/api/customers/")
    .subscribe((resultData: any)=>
    {
        console.log(resultData);
        this.Customers = resultData;
    });
  }

}
