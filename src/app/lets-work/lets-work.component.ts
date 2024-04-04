import { Component } from '@angular/core';

@Component({
  selector: 'app-lets-work',
  templateUrl: './lets-work.component.html',
  styleUrls: ['./lets-work.component.scss']
})
export class LetsWorkComponent {

  flipState = {
    1: false,
    2: false,
    3: false,
    4: false,
    5: false,
    6: false
  };
  
  flipService(containerId: 1 | 2 | 3 | 4 | 5 | 6) {
    this.flipState[containerId] = !this.flipState[containerId];
  }
}
