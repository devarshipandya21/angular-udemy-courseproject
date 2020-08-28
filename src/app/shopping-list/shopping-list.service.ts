import { Ingredient } from './../shared/ingredient.model';
import { Injectable, EventEmitter } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ShoppingListService {
  constructor() {}
  private ingredients: Ingredient[] = [];

  ingredientsChanged = new Subject<Ingredient[]>();

  getIngredients = () => {
    return this.ingredients.slice();
  };

  addIngredient = (ingredient: Ingredient) => {
    this.ingredients.push(ingredient);
    this.ingredientsChanged.next(this.ingredients.slice());
  };

  addIngredients = (ingredients: Ingredient[]) => {
    this.ingredients.push(...ingredients);
    this.ingredientsChanged.next(this.ingredients.slice());
  };
}
