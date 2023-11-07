import { Component } from '@angular/core';
import AOS from 'aos';

@Component({
  selector: 'app-my-work',
  templateUrl: './my-work.component.html',
  styleUrls: ['./my-work.component.scss']
})
export class MyWorkComponent {
  ngOnInit() {
    AOS.init();
   
}

  projects = [

    {
      "img": "join.png",
      "title": "Join",
      "skills": "HTML | CSS | Javascript",
      "description": "Task manager inspired by the Kanban System. Create and organize tasks using drag and drop functions, assign users and categories",
      "github": "Angular",
    },
    {
      "img": "el-pollo-loco.png",
      "title": "Pollo Loco",
      "skills": "HTML| CSS | Javascript",
      "description": "Jump, run and throw game based object-oriented approach. Help Pepe to find coins and tabasco to fight against the big endboss.",
      "github": "Angular",
    },
   

  ]

}
