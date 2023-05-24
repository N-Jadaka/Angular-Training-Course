import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  @Output() recipeWasSelected = new EventEmitter<Recipe>();
  recipes: Recipe[] = [
    new Recipe('A Test Recipe', 'This is a test', 
    'https://static01.nyt.com/images/2019/02/17/dining/17norecipe-chickenonion/merlin_147762564_2ebe8078-2e29-495b-90ee-96a763596c0d-videoSixteenByNine3000.jpg'
    ),
    new Recipe('A Second Test Recipe', 'This is a test', 
    'https://static01.nyt.com/images/2019/02/17/dining/17norecipe-chickenonion/merlin_147762564_2ebe8078-2e29-495b-90ee-96a763596c0d-videoSixteenByNine3000.jpg'
    )
  ];

  constructor() { }

  ngOnInit(): void {
  }

  onRecipeSelected(recipe: Recipe){
    this.recipeWasSelected.emit(recipe);
  }

}
