import { Component,Renderer2 } from '@angular/core';
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

  constructor(public responsiveService:ResponsiveService,private renderer: Renderer2) {
    
  }
  ngOnInit() {
    AOS.init();
    this.responsiveService.hideMobile.subscribe(value =>  {
      this.hideMobile = value;
      console.log(value);
    });

    this.responsiveService.hideScroll.subscribe(value =>  {
      this.responsiveService.hideScroll.value;
      if (this.responsiveService.hideScroll.value === true) {
        this.renderer.addClass(document.body, 'block-scroll');
      } else {
        this.renderer.removeClass(document.body, 'block-scroll');
      }
    });
}
}
