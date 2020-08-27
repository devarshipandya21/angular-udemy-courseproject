import { RecipeService } from './../recipe.service';
import { Recipe } from './../recipe.model';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {

  constructor(private recipeService: RecipeService) { }

  @Input() recipe: Recipe;

  ngOnInit(): void {
  }

  onAddToShoppingList = () => {
    this.recipeService.addIngredientsToShoppingList(this.recipe.ingredients);
  }

}
