import { Component } from '@angular/core';
import { ResponsiveService } from '../responsive.service';
import AOS from 'aos';



@Component({
  selector: 'app-header-component',
  templateUrl: './header-component.component.html',
  styleUrls: ['./header-component.component.scss']
  
})
export class HeaderComponentComponent {
hideMobile:boolean = true;

constructor(public responsiveService: ResponsiveService ) {
  
}
 

  ngOnInit() {
    AOS.init();
    this.responsiveService.hideMobile.subscribe(value =>  {
      this.hideMobile = value;
      console.log(value);
    });
}

}
