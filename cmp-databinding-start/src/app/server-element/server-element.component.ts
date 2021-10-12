import { AfterContentInit, Component, DoCheck, Input, OnChanges, OnInit, SimpleChange, SimpleChanges, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css'],
  encapsulation: ViewEncapsulation.Emulated //None, ShadowDom
})
  export class ServerElementComponent implements OnInit, OnChanges, DoCheck, AfterContentInit {
  @Input()  element: {type: string, name: string, content: string};
  //Can change the name of the element object by passing the input decorator a new name
  @Input() name: string;

  constructor() {
    console.log('constructor called!');
  }

  ngOnChanges(changes:SimpleChanges ): void {
    console.log('ngOnChanges called');
    console.log(changes);

  }

  ngOnInit(): void {
    console.log('ngOnInit called');

  }

  ngDoCheck(): void {
    //Called every time that the input properties of a component or a directive are checked. Use it to extend change detection by performing a custom check.
    //Add 'implements DoCheck' to the class.
    console.log("ngDoCheck called");

  }

  ngAfterContentInit(){
    console.log("ngafter content init");
  }

  ngAfterContentChecked(): void {
    console.log("ngafter content checked");
  }
}
