import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { TableComponent } from './home/table/table.component';
import { RowComponent } from './home/table/row/row.component';
import { HomeComponent } from './home/home.component';
import { HttpClientModule } from '@angular/common/http';
import { AddBrainiacComponent } from './home/add-brainiac/add-brainiac.component';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    TableComponent,
    RowComponent,
    HomeComponent,
    AddBrainiacComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgbModule,
    ReactiveFormsModule
  ],
  entryComponents:[
    AddBrainiacComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
