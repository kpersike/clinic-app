import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

  title = 'frontend';
  showFooter = true;

  constructor(private router: Router, private route: ActivatedRoute)
  {
    this.router.events.subscribe(event => {
      if(this.router.url.includes('components/crud-employee'))
      {
        this.showFooter = false;
      }
      else
      {
        this.showFooter = true;
      }
    });
  }

}
