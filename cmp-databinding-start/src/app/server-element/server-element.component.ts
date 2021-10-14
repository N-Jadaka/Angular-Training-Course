import { AfterContentInit, AfterViewChecked, AfterViewInit, Component, DoCheck, Input, OnChanges, OnDestroy, OnInit, SimpleChange, SimpleChanges, ViewEncapsulation, ViewChild, ElementRef, ContentChild } from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css'],
  encapsulation: ViewEncapsulation.Emulated //None, ShadowDom
})
  export class ServerElementComponent implements OnInit,
  OnChanges,
  DoCheck,
  AfterContentInit,
  AfterViewInit,
  AfterViewChecked,
  OnDestroy {
  @Input()  element: {type: string, name: string, content: string};
  //Can change the name of the element object by passing the input decorator a new name
  @Input() name: string;
  @ViewChild('heading', {static: true}) header: ElementRef;
  @ContentChild('contentParagraph') paragraph: ElementRef;

  constructor() {
    console.log('constructor called!');
  }

  ngOnChanges(changes:SimpleChanges ): void {
    console.log('ngOnChanges called');
    console.log(changes);

  }

  ngOnInit(): void {
    console.log('ngOnInit called');
    console.log(this.header.nativeElement.textContent);

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

  ngAfterViewInit(){
    console.log("ngafter view init");
  }

  ngAfterViewChecked(): void {
    console.log("ngafter view checked");
  }

  ngOnDestroy() {
    console.log('NgOnDestroy called!');
  }
}
