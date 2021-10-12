import { element } from 'protractor';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css']
})
  export class ServerElementComponent implements OnInit {
  @Input()  element: {type: string, name: string, content: string};
  //Can change the name of the element object by passing the input decorator a new name
  constructor() { }

  ngOnInit(): void {
  }

}
