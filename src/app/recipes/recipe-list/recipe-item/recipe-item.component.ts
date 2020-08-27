import { RecipeService } from './../../recipe.service';
import { Recipe } from './../../recipe.model';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css'],
})
export class RecipeItemComponent implements OnInit {
  constructor(private RecipeService: RecipeService) {}

  @Input() recipe: Recipe;

  onSelected = () => {
    this.RecipeService.recipeSelected.emit(this.recipe);
  };

  ngOnInit(): void {}
}
