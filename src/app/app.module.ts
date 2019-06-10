import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { DatePipe } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddComponent } from './task-add/add.component';
import { ViewComponent } from './task-view/view.component';
import { UpdateComponent } from './task-update/update.component';
import { FilterPipe } from './pipe/filter.pipe';
import { ProjectComponent } from './project/project.component';
import { ProjectPipe } from './pipe/project.pipe';
import { UsersearchPipe } from './pipe/usersearch.pipe';
import { UserComponent } from './user/user.component';
import { ParentPipe } from './pipe/parent.pipe';

@NgModule({
  declarations: [
    AppComponent,
    AddComponent,
    ViewComponent,
    UpdateComponent,
    FilterPipe,
    ProjectComponent,
    ProjectPipe,
    UsersearchPipe,
    UserComponent,
    ParentPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    DatePipe
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
