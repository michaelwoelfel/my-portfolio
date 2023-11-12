import { Component } from '@angular/core';
import { ResponsiveService } from '../responsive.service';

@Component({
  selector: 'app-skill-set',
  templateUrl: './skill-set.component.html',
  styleUrls: ['./skill-set.component.scss']
})



export class SkillSetComponent {
constructor(public responsiveService: ResponsiveService) {}
 
 skills = [

    { 
      
      "skill-pic": "Angular.png",
      "skill-name": "Angular",
    },
    // {
    //   "skill-pic": "Typescript.png",
    //   "skill-name": "Typescript",
    // },
    {
      
      "skill-pic": "Javascript.png",
      "skill-name": "JavaScript",
    },
    {
      
      "skill-pic": "HTML.png",
      "skill-name": "HMTL",
    },

    // {
    //   "skill-pic": "Material.png",
    //   "skill-name": "Material",
    // },
    { 
      
      "skill-pic": "Firebase.png",
      "skill-name": "Firebase",
    },
    
   
    {
      
      "skill-pic": "git.png",
      "skill-name": "Git",
    },
    {
      
      "skill-pic": "CSS.png",
      "skill-name": "CSS",
    },
   
  ]

  addShadow(i:number) {
      let clickedSkill = document.getElementById("skill" + i);
      clickedSkill?.classList.add("skill-selected");
      console.log(clickedSkill);
  }


}
