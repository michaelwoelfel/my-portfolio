import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactComponent } from './contact/contact.component';
import { LetsWorkComponent } from './lets-work/lets-work.component';
import { SkillSetComponent } from './skill-set/skill-set.component';
import { MyWorkComponent } from './my-work/my-work.component';
import { ImpressComponent } from './impress/impress.component';
import { PrivacyComponent } from './privacy/privacy.component';
import { AppComponent } from './app.component'; 
import { HeaderComponentComponent } from './header-component/header-component.component';
import { MainContainerComponent } from './main-container/main-container.component';
const routes: Routes = [
  { 
    path: '', 
    component: MainContainerComponent,
    children: [
    
    ]
  },
  { 
    path: 'impress', 
    component: ImpressComponent,
    children: [
      { path: '', component: ImpressComponent }
    ]
  },

  { 
    path: 'privacy', 
    component: PrivacyComponent,
    children: [
      { path: '', component: PrivacyComponent }
    ]
  },
  // Weitere Routen ...
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
