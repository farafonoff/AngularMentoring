import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Route, Routes } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import { reducer } from './redux';
import { LoginEffects } from './redux/login-effects';

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
import { BreadcrumbComponent } from './common/breadcrumb/breadcrumb.component';
import { CoursesListComponent } from './pages/courses/courses-list/courses-list.component';
import { CoursesResolverService } from './services/courses-resolver.service';
import { AuthBackendService } from './services/auth-backend.service';

export const ROUTES: Routes = [
  {
    path: 'courses',
    component: CoursesComponent,
    canActivate: [AuthGuard],
    children: [
      {
        path: 'new',
        component: CourseAddComponent,
        data: { new: true }
      },
      {
        path: 'missing-course',
        component: NotFoundComponent
      },
      {
        path: ':id',
        component: CourseAddComponent,
        data: { new: false },
        resolve: { course: CoursesResolverService }
      },
      {
        path: '',
        component: CoursesListComponent
      }
    ]
  },
  { path: '',
    redirectTo: '/courses',
    pathMatch: 'full'
  },
  { path: 'login', component: LoginComponent },
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
    NotFoundComponent,
    BreadcrumbComponent,
    CoursesListComponent
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
    ),
    StoreModule.forRoot(reducer),
    StoreDevtoolsModule.instrument({
      maxAge: 5
    }),
    EffectsModule.forRoot([LoginEffects])
  ],
  entryComponents: [
    CourseDeletePopupComponent
  ],
  providers: [CoursesService,
    HttpAuthorized,
    AuthorsService, CoursesBackendService,
    AuthorsBackendService, AuthGuard,
    CoursesResolverService, AuthBackendService],
  bootstrap: [AppComponent]
})
export class AppModule { }
