import { Component } from '@angular/core';
import { ResponsiveService } from '../responsive.service';

@Component({
  selector: 'app-impress',
  templateUrl: './impress.component.html',
  styleUrls: ['./impress.component.scss']
})

export class ImpressComponent {

  hideMobile = true;
  constructor( public responsiveService: ResponsiveService) {
    
  }
  ngOnInit() {
    
    this.responsiveService.hideMobile.subscribe(value =>  {
      this.hideMobile = value;
    });
}
}
