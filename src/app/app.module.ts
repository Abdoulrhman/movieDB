import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { MovieComponent } from './movie/movie.component';

import { MovieService } from './services/movie.service';

import { FilterPipe } from './pipes/filter.pipe';
const appRoutes: Routes = [
  { path: '', component: HomeComponent, data: {depth: 1} },
  { path: 'movie/:movieID', component: MovieComponent, data: {depth: 2} }
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MovieComponent,
    FilterPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [ MovieService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
