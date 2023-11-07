import { Component } from '@angular/core';
import { ResponsiveService } from './responsive.service';
import AOS from 'aos';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'my-portfolio';
  hideMobile = true; 
  constructor(public responsiveService:ResponsiveService) {
    
  }
  ngOnInit() {
    AOS.init();
    this.responsiveService.hideMobile.subscribe(value =>  {
      this.hideMobile = value;
      console.log(value);
    });
}
}
