import { Injectable } from '@angular/core';
import { BreakpointObserver, BreakpointState } from '@angular/cdk/layout';
import { BehaviorSubject } from 'rxjs';
import { PROJECTS } from './projects.constant';

@Injectable({
  providedIn: 'root'
})
export class ResponsiveService {
 public hideMobile = new BehaviorSubject<boolean>(true);
  public hideScroll = new BehaviorSubject<boolean>(false);
  public isVisited = new BehaviorSubject<boolean>(false);
  public hideContent = true;
  public messageSentSuccess = new BehaviorSubject<boolean>(false);
  language = 'german';
  public projects = PROJECTS;
 

  constructor(public responsive: BreakpointObserver, ) { 
    const customBreakpoint = '(min-width: 1184px)';
    this.responsive.observe(customBreakpoint)
      .subscribe((state: BreakpointState) => {
        if (state.matches) {
          this.hideMobile.next(false);
        } else {
          this.hideMobile.next(true);
        }
      });
  }
 

    /**
   * Sorts the project array by a given skill.
   * @param skill The skill to sort the projects by.
   */
  sortBy(skill:string,i:number) {
      const sortedProjects = this.projects.sort((a, b)=> {
        if (a.skills.includes(skill) && !b.skills.includes(skill)) {
          return -1;
        }else if (!a.skills.includes(skill) && b.skills.includes(skill)) {
          return 1;
        }
        return 0;
      })
      this.projects = sortedProjects;
      console.log(skill);
      let element = document.getElementById("my-work");
      element?.scrollIntoView();
      console.log(this.projects);
      this.addShadow(i);
  }

  addShadow(i:number) {
    for (let i = 0; i <=10; i++) {
      let skillElement = document.getElementById("skill" + i);
      skillElement?.classList.remove("skill-selected");
    }
    let clickedSkill = document.getElementById("skill" + i);
    clickedSkill?.classList.add("skill-selected");
    console.log(clickedSkill);
}


  /**
   * Toggles the visited state and accordingly the scrollbar visibility.
   */
  public checkVisited() {
    this.isVisited.next(!this.isVisited.value);
    this.hideScroll.next(this.isVisited.value);
 }

  /**
   * Toggles the content visibility.
   */
 public checkHideContent() {
  this.hideContent = false;
}

changeLanguage(language:string) {
  this.language = language
}
 
}
