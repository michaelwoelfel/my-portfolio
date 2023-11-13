import { Component } from '@angular/core';
import { ResponsiveService } from '../responsive.service';

@Component({
  selector: 'app-privacy',
  templateUrl: './privacy.component.html',
  styleUrls: ['./privacy.component.scss']
})
export class PrivacyComponent {

  hideMobile = true;
    constructor( public responsiveService: ResponsiveService) {
      
    }

    ngOnInit() {
      
      this.responsiveService.hideMobile.subscribe(value =>  {
        this.hideMobile = value;
      });
}

}
