import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactComponent } from './contact/contact.component';
import { LetsWorkComponent } from './lets-work/lets-work.component';
import { SkillSetComponent } from './skill-set/skill-set.component';
import { MyWorkComponent } from './my-work/my-work.component';
import { ImpressComponent } from './impress/impress.component';
import { PrivacyComponent } from './privacy/privacy.component';
const routes: Routes = [
  { path: 'contact-component', component: ContactComponent },
  { path: 'lets-work-component', component: LetsWorkComponent },
  { path: 'skill-set-component', component: SkillSetComponent },
  { path: 'my-work-component', component: MyWorkComponent },
  { path: 'impress-component', component: ImpressComponent },
  { path: 'privacy-component', component: PrivacyComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
