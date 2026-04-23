import { NgModule } from '@angular/core';


import { App } from './app';
import { HeaderComponent } from './header/header.component';
import { UserComponent } from './user/user';
import { SharedModule } from './shared/shared.module';
import { TasksModule } from './tasks/tasks.module';
import { BrowserModule } from '@angular/platform-browser';


@NgModule({
  imports: [BrowserModule, SharedModule, TasksModule],
  declarations: [App, HeaderComponent, UserComponent],
  providers: [],
  bootstrap: [App],
})
export class AppModule {}
