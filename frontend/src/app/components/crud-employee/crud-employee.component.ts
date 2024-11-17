import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { response } from 'express';
import { debounceTime, distinctUntilChanged, switchMap } from 'rxjs/operators'; 
import { Subject } from 'rxjs'; 

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

  private searchTerms = new Subject<string>();

  Customers : any[] = [];

  id_customer = ''
  src_name_customer: string = '';
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

  regVisit(data: any){
    let currentDate = new Date(); // providing standardized format

    let bodyData = {
      "dt_visit_customer": `${currentDate.getFullYear()}-${currentDate.getMonth()}-${currentDate.getDate()}`,
      "id_customer" : data.cd_customer
    };

    this.http.post("http://127.0.0.1:8000/api/visits/",bodyData).subscribe((resultData: any)=>
      {
          console.log(resultData);
          // this.getAllCustomer();
      });
  }
//   srcName() {
//     if(this.src_name_customer != ""){
//       this.http.get<any[]>("http://127.0.0.1:8000/api/search/"+this.src_name_customer).subscribe(data => {
//         this.Customers = data;
//       });
//     }else{
//       this.getAllCustomer();
//     }

// }

  onSearch(event: any): void { 
    this.searchTerms.next(event.target.value); 
  }

  ngOnInit(): void {
    this.searchTerms.pipe(
      debounceTime(300),

      distinctUntilChanged(),

      switchMap((term: string) => this.searchCustomers(term)),
    ).subscribe(data => { this.Customers = data; 

    });
  }

  searchCustomers(term: string) { 
    if (term.trim() === '') { 
      return this.http.get<any[]>("http://127.0.0.1:8000/api/customers/"); 
    } else { 
      return this.http.get<any[]>("http://127.0.0.1:8000/api/search/" + term); 
    } 
  }

}
