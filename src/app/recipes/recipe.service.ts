import { ShoppingListService } from './../shopping-list/shopping-list.service';
import { Ingredient } from './../shared/ingredient.model';
import { Recipe } from './recipe.model';
import { Injectable, Output, EventEmitter } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class RecipeService {
  constructor(private slService: ShoppingListService) {}

  @Output() recipeSelected = new EventEmitter();

  private recipes: Recipe[] = [
    new Recipe(
      'Burger',
      'This is a sample recipe-1 description.',
      'https://www.thespruceeats.com/thmb/KAgMssHoQUmx30uuYL_FTahXA0A=/2048x1360/filters:fill(auto,1)/vegan-mushroom-bean-burger-recipe-3378623-13_preview1-5b241897fa6bcc0036d2c9bf.jpeg',
      [
        new Ingredient('Aloo Patty', 1),
        new Ingredient('Bun', 1),
        new Ingredient('Onions', 2),
        new Ingredient('Tomato', 1),
        new Ingredient('Jalepeno', 4),
        new Ingredient('Cheese', 1),
      ]
    ),
    new Recipe(
      'French Fries',
      'This is a sample recipe-2 description.',
      'https://img.apmcdn.org/4b2716626c9ff3f6e5dfebe520eb592c33cf1e7b/uncropped/941f50-splendid-table-french-fries.jpg',
      [
        new Ingredient('Potato', 2),
        new Ingredient('Salt', 1),
        new Ingredient('Ketchup', 1),
        new Ingredient('Spices', 1),
      ]
    ),
  ];

  getRecipes = () => {
    return this.recipes.slice();
  };

  getRecipe = (index: number) => {
    return this.recipes[index];
  }

  addIngredientsToShoppingList = (ingredients: Ingredient[]) => {
    this.slService.addIngredients(ingredients);
  }
}
