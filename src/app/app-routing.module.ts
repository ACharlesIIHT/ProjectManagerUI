import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddComponent } from './task-add/add.component';
import { ViewComponent } from './task-view/view.component';
import { UpdateComponent } from './task-update/update.component';
import { ProjectComponent } from './project/project.component';
import { UserComponent } from './user/user.component';

const routes: Routes = [
  {
    path: '',
    component: AddComponent
  },
  {
    path: 'add',
    component: AddComponent
  },
  {
    path: 'view',
    component: ViewComponent
  },
  {
    path: 'update/:id',
    component: UpdateComponent
  },
  {
    path: 'project',
    component: ProjectComponent
  },
  {
    path: 'user',
    component: UserComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
