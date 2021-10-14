import { Component, EventEmitter, Output } from "@angular/core";


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html'
})

export class HeaderComponent {
  @Output() featureSelected = new EventEmitter<string>();
  //created an event emitter object based on the event emitter class
  onSelect(feature: string) {
    this.featureSelected.emit(feature);
  }


}
