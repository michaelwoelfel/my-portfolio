import { Component } from '@angular/core';
import { ResponsiveService } from '../responsive.service';


@Component({
  selector: 'app-header-component',
  templateUrl: './header-component.component.html',
  styleUrls: ['./header-component.component.scss']
})
export class HeaderComponentComponent {
contructor(private responsiveService: ResponsiveService) {

}
}
