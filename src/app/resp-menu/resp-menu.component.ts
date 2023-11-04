import { Component } from '@angular/core';
import { ResponsiveService } from '../responsive.service';

@Component({
  selector: 'app-resp-menu',
  templateUrl: './resp-menu.component.html',
  styleUrls: ['./resp-menu.component.scss']
})
export class RespMenuComponent {
constructor(public responsiveService: ResponsiveService) {

}
}
