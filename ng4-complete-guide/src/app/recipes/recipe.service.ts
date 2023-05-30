import { EventEmitter, Injectable } from '@angular/core';
import { Recipe } from './recipe.model';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {

  recipeSelected = new EventEmitter<Recipe>();


  private recipes: Recipe[] = [
    new Recipe('A Test Recipe', 
    'This is a test', 
    'https://static01.nyt.com/images/2019/02/17/dining/17norecipe-chickenonion/merlin_147762564_2ebe8078-2e29-495b-90ee-96a763596c0d-videoSixteenByNine3000.jpg',
    [
      new Ingredient('Ham', 5),
      new Ingredient('Salami', 7)
    ]
    ),
    new Recipe(
    'A Second Test Recipe', 
    'This is a test', 
    'https://static01.nyt.com/images/2019/02/17/dining/17norecipe-chickenonion/merlin_147762564_2ebe8078-2e29-495b-90ee-96a763596c0d-videoSixteenByNine3000.jpg',
    [
      new Ingredient('Turkey', 5),
      new Ingredient('Salmon', 2)
    ]
    )
  ];

  constructor(private slService: ShoppingListService) { }

  getRecipes(){
    return this.recipes.slice();
  }

  addIngredientsToShoppingList(ingredients: Ingredient[]){
    this.slService.addIngredients(ingredients);
  }
}
