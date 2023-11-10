import { Component } from '@angular/core';
import { ResponsiveService } from '../responsive.service';
import AOS from 'aos';
import { count } from 'rxjs';

@Component({
  selector: 'app-my-work',
  templateUrl: './my-work.component.html',
  styleUrls: ['./my-work.component.scss']
})
export class MyWorkComponent {
  constructor(public responsiveService: ResponsiveService) {

  }

  ngOnInit() {
    AOS.init();
}

 

}
