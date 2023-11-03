import { Injectable } from '@angular/core';
import { BreakpointObserver, BreakpointState } from '@angular/cdk/layout';

@Injectable({
  providedIn: 'root'
})
export class ResponsiveService {

  constructor(public responsive: BreakpointObserver) { }

  hideMobile = true;

  ngOnInit() {
    const customBreakpoint = '(max-width: 1050px)';

    this.responsive.observe(customBreakpoint)
      .subscribe((state: BreakpointState) => {
        if (state.matches) {
          console.log('Viewport is 1050px or smaller.');
          this.hideMobile = false;
        } else {
          // Logic when viewport is larger than 1050px, if needed.
          this.hideMobile = true;
        }
      });
  }
}
