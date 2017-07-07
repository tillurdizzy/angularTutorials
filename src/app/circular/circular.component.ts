import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-circular',
  templateUrl: './circular.component.html',
  styleUrls: ['./circular.component.scss']
})
export class CircularComponent implements OnInit {

  public happyText:string = 'Manager is on vacation';
  public myTodos = [
    'Wash coffee mug',
    'Take a shower',
    'Say Hi to the new hire'

  ];


  constructor() { }

  ngOnInit() {
    this.happyText = 'Manger is sick.';
  }

  makeHappier(){
    this.happyText = 'Manger got fired.';
  }

}
