import { Component } from '@angular/core';
import { ResponsiveService } from '../responsive.service';

@Component({
  selector: 'app-skill-set',
  templateUrl: './skill-set.component.html',
  styleUrls: ['./skill-set.component.scss']
})



export class SkillSetComponent {
  constructor(public responsiveService: ResponsiveService) { }

  skills = [

    {
      "skill-pic": "skill-icon1.svg",
      "skill-name": "Angular",
    },
    {
      "skill-pic": "skill-icon2.svg",
      "skill-name": "Typescript",
    },
    {
      "skill-pic": "skill-icon3.svg",
      "skill-name": "JavaScript",
    },
    {
      "skill-pic": "skill-icon4.svg",
      "skill-name": "HTML",
    },
    {
      "skill-pic": "skill-icon5.png",
      "skill-name": "Wordpress",
    },
    {
      "skill-pic": "skill-icon6.svg",
      "skill-name": "Firebase",
    },
    {
      "skill-pic": "skill-icon7.svg",
      "skill-name": "Git",
    },
    {
      "skill-pic": "skill-icon8.svg",
      "skill-name": "CSS",
    },
    {
      "skill-pic": "skill-icon9.svg",
      "skill-name": "APIs",
    },
    {
      "skill-pic": "skill-icon10.svg",
      "skill-name": "Material",
    },
   
   

  ]

  addShadow(i: number) {
    let clickedSkill = document.getElementById("skill" + i);
    clickedSkill?.classList.add("skill-selected");
    console.log(clickedSkill);
  }


}
