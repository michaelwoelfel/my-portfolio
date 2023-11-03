import { Injectable } from '@angular/core';
import { BreakpointObserver, BreakpointState } from '@angular/cdk/layout';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ResponsiveService {
  hideMobile = new BehaviorSubject<boolean>(true);
  constructor(public responsive: BreakpointObserver) { 
    const customBreakpoint = '(min-width: 1050px)';

    this.responsive.observe(customBreakpoint)
      .subscribe((state: BreakpointState) => {
        if (state.matches) {
          this.hideMobile.next(false);
          console.log(this.hideMobile);
        } else {
          this.hideMobile.next(true);
        }
      });
  }

}
