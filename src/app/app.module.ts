import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

// Paths relative to src 
import { AppComponent } from './app.component';
import { EmployeeComponent } from './employee/employee.component';
import { CircularComponent } from './circular/circular.component';

@NgModule({
  declarations: [
    AppComponent,
    EmployeeComponent,
    CircularComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
