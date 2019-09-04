import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatTableModule, MatButtonModule, MatCheckboxModule, MatFormFieldModule, MatInputModule, MatRippleModule} from '@angular/material';
import {MatExpansionModule} from '@angular/material/expansion';


import { AppComponent } from './app.component';



import { AgmCoreModule } from '@agm/core';
import { HomeSidebarComponent } from './home/home-sidebar/home-sidebar.component';
import { HomeContentComponent } from './home/home-content/home-content.component';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './home/home-page/home-page.component';
import { PodPageComponent } from './podpage/pod-page/pod-page.component';
import { HeaderComponent } from './podpage/header/header.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', component: HomePageComponent },
  { path: 'pod/:id' , component: PodPageComponent }

]


@NgModule({
  declarations: [
    AppComponent,
    HomeSidebarComponent,
    HomeContentComponent,
    HomePageComponent,
    PodPageComponent,
    HeaderComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    BrowserAnimationsModule,
    MatTableModule,
    MatExpansionModule,
    AgmCoreModule,
    FormsModule,
    RouterModule.forRoot(
      routes
    )
  ],
  exports: [
    MatTableModule,
    MatExpansionModule,
    RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
