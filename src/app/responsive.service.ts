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
  public messageSentSuccess = new BehaviorSubject<boolean>(false);
  

  constructor(public responsive: BreakpointObserver) { 
    const customBreakpoint = '(min-width: 1050px)';

    this.responsive.observe(customBreakpoint)
      .subscribe((state: BreakpointState) => {
        if (state.matches) {
          this.hideMobile.next(false);
        } else {
          this.hideMobile.next(true);
        }
      });
  }
  projects = [

    {
      "img": "join.png",
      "title": "Join",
      "skills": "HTML | CSS | Javascript ",
      "link": "https://michael-woelfel.com/Mein%20Join/summary.html",
      "description": "Task manager inspired by the Kanban System. Create and organize tasks using drag and drop functions, assign users and categories",
      "github": "https://github.com/michaelwoelfel/Join-Kanban-Board",
    },
    {
      "img": "el-pollo-loco.png",
      "title": "Pollo Loco",
      "link": "https://michael-woelfel.com/El%20Pollo%20Loco/index.html",
      "skills": "HTML| CSS | Javascript",
      "description": "Jump, run and throw game based object-oriented approach. Help Pepe to find coins and tabasco to fight against the big endboss.",
      "github": "https://github.com/michaelwoelfel/el-pollo-loco",
    },

    

 
   

  ]

  sortBy(skill:string) {
      this.projects.sort((a, b)=> {
        if (a.skills.includes(skill) && !b.skills.includes(skill)) {
          return -1;
        }else if (!a.skills.includes(skill) && b.skills.includes(skill)) {
          return 1;
        }
        return 0;
      })
      let element = document.getElementById("my-work");
      element?.scrollIntoView();
  }

 

  public checkVisited() {
    this.isVisited.next(!this.isVisited.value);
    this.hideScroll.next(this.isVisited.value);
 }

 public checkHideContent() {
  this.hideContent = !this.hideContent;
}




}
