import { Component, ElementRef, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredient.model';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {

  @ViewChild('nameInput', {static: false}) nameInputRef: ElementRef;
  @ViewChild('nameInput', {static: false}) amountInputRef: ElementRef;
  @Output() ingredientAdded = new EventEmitter<Ingredient>();


  constructor() { }

  ngOnInit(): void {
  }

  onAddItem(){
    const imgName = this.nameInputRef.nativeElement.value;
    const imgAmount = this.amountInputRef.nativeElement.value;
    const newIngredient = new Ingredient(imgName, imgAmount);
    this.ingredientAdded.emit(newIngredient);
  }

}
