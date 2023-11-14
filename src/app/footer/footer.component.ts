import { Component } from '@angular/core';
import { ResponsiveService } from '../responsive.service';
import { Router } from '@angular/router';
import { ImpressComponent } from '../impress/impress.component';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {

    constructor( public router: Router,public responsiveService: ResponsiveService) {

    }

    generateUrlForImpressum() {
      return this.router.serializeUrl(
        this.router.createUrlTree(['impress'])
      );
    }
  
}
