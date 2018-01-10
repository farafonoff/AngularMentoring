import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { CoursesComponent } from './pages/courses/courses.component';
import { LoginComponent } from './pages/login/login.component';
import { CourseDetailsComponent } from './pages/courses/course-details/course-details.component';
import { CourseWidgetComponent } from './pages/courses/course-widget/course-widget.component';
import { HeaderComponent } from './common/header/header.component';
import { FooterComponent } from './common/footer/footer.component';
import { LogoComponent } from './common/logo/logo.component';
import { ToolboxComponent } from './pages/courses/toolbox/toolbox.component';
import { CoursesService } from './services/courses.service';
import { AuthService } from './services/auth.service';
import { FreshnessDirective } from './directives/freshness.directive';
import { FormatDurationPipe } from './pipes/format-duration.pipe';
import { OrderByPipe } from './pipes/order-by.pipe';
import { FilterByPipe } from './pipes/filter-by.pipe';
import { CourseAddComponent } from './pages/course-add/course-add.component';
import {MatButtonModule, MatInputModule} from '@angular/material';

@NgModule({
  declarations: [
    AppComponent,
    CoursesComponent,
    LoginComponent,
    CourseDetailsComponent,
    CourseWidgetComponent,
    HeaderComponent,
    FooterComponent,
    LogoComponent,
    ToolboxComponent,
    FreshnessDirective,
    FormatDurationPipe,
    OrderByPipe,
    FilterByPipe,
    CourseAddComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    MatButtonModule,
    MatInputModule,
    BrowserAnimationsModule
  ],
  providers: [ CoursesService, AuthService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
