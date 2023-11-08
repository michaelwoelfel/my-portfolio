import { Injectable } from '@angular/core';
import { BreakpointObserver, BreakpointState } from '@angular/cdk/layout';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ResponsiveService {
  hideMobile = new BehaviorSubject<boolean>(true);
  public hideScroll= new BehaviorSubject<boolean>(false);
  public isVisited = new BehaviorSubject<boolean>(false);
  public hideContent = true;
  

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

  public checkVisited() {
    console.log(this.isVisited.value)
    this.isVisited.next(!this.isVisited.value);
    this.hideScroll.next(this.isVisited.value);
 }

 public checkHideContent() {
  this.hideContent = !this.hideContent;
}

}
