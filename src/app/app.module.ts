import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Route, Routes } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

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
import { MatButtonModule, MatInputModule, MatDialogModule } from '@angular/material';
import { CourseDeletePopupComponent } from './pages/courses/course-delete-popup/course-delete-popup.component';
import { HttpAuthorized } from './services/http.authorized.service';
import { CoursesBackendService } from './services/courses-backend.service';
import { ControlDateComponent } from './pages/course-add/control-date/control-date.component';
import { ControlDurationComponent } from './pages/course-add/control-duration/control-duration.component';
import { ControlAuthorsComponent } from './pages/course-add/control-authors/control-authors.component';
import { MinValueDirective } from './directives/min-value.directive';
import { AuthorsService } from './services/authors.service';
import { AuthorsBackendService } from './services/authors-backend.service';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { AuthGuard } from './services/auth-guard';

export const ROUTES: Routes = [
  { path: '',
    redirectTo: '/courses',
    pathMatch: 'full'
  },
  { path: 'login', component: LoginComponent },
  { path: 'courses', component: CoursesComponent, pathMatch: 'full', canActivate: [AuthGuard] },
  { path: 'courses/new', component: CourseAddComponent, canActivate: [AuthGuard], pathMatch: 'full', data: { new: true } },
  { path: 'courses/:id', component: CourseAddComponent, canActivate: [AuthGuard], data: { new: false } },
  { path: '**', component: NotFoundComponent }
];

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
    CourseAddComponent,
    CourseDeletePopupComponent,
    ControlDateComponent,
    ControlDurationComponent,
    ControlAuthorsComponent,
    MinValueDirective,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    MatDialogModule,
    MatButtonModule,
    MatInputModule,
    HttpModule,
    ReactiveFormsModule,
    RouterModule.forRoot(
      ROUTES,
      { enableTracing: true } // <-- debugging purposes only
    )
  ],
  entryComponents: [
    CourseDeletePopupComponent
  ],
  providers: [ CoursesService, AuthService, HttpAuthorized, AuthorsService, CoursesBackendService, AuthorsBackendService, AuthGuard ],
  bootstrap: [AppComponent]
})
export class AppModule { }
