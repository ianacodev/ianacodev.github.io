import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
// containers
import * as fromContainers from './containers';

const resumeRoutes: Routes = [
  {
    path: '',
    component: fromContainers.ResumeComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(resumeRoutes)],
  exports: [RouterModule],
})
export class ResumeRoutingModule {}
