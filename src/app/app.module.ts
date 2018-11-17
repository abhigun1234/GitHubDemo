import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http'
import {HttpModule} from '@angular/http'
import { AppComponent } from './app.component';
import { GithubuserComponent } from './githubuser/githubuser.component';
import { GithubComponent } from './github/github.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations'
import {MatCardModule} from '@angular/material/card';
@NgModule({
  declarations: [
    AppComponent,
    GithubuserComponent,
    GithubComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatCardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
