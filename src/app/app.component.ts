import { Component } from '@angular/core';
// template path is relative to index.html!!!!!!
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  pageHeader:string = 'Employee Details';
}
