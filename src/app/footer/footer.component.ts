import { Component } from '@angular/core';
import { ResponsiveService } from '../responsive.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {

    constructor(public responsiveService: ResponsiveService) {

    }

    openImpressum() {
      window.open('/impress', '_blank');
    
    }
}
