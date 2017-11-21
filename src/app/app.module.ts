import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CoursesComponent } from './pages/courses/courses.component';
import { LoginComponent } from './pages/login/login.component';
import { CourseDetailsComponent } from './pages/courses/course-details/course-details.component';
import { CourseWidgetComponent } from './pages/courses/course-widget/course-widget.component';
import { HeaderComponent } from './common/header/header.component';
import { FooterComponent } from './common/footer/footer.component';
import { LogoComponent } from './common/logo/logo.component';

@NgModule({
  declarations: [
    AppComponent,
    CoursesComponent,
    LoginComponent,
    CourseDetailsComponent,
    CourseWidgetComponent,
    HeaderComponent,
    FooterComponent,
    LogoComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
