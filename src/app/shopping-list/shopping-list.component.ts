import { Ingredient } from './../shared/ingredient.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css'],
})
export class ShoppingListComponent implements OnInit {
  constructor() {}
  ingredients: Ingredient[] = [];

  onIngredientAdded = (ingredient: Ingredient) => {
    this.ingredients.push(ingredient);
  };

  ngOnInit(): void {}
}
