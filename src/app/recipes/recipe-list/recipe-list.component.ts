import { Recipe } from './../recipe.model';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css'],
})
export class RecipeListComponent implements OnInit {
  constructor() {}

  recipes: Recipe[] = [
    new Recipe(
      'Sample Recipe Name-1',
      'This is a sample recipe-1 description.',
      'https://assets.rebelmouse.io/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpbWFnZSI6Imh0dHBzOi8vd3d3LmJyaXQuY28vbWVkaWEtbGlicmFyeS9leUpoYkdjaU9pSklVekkxTmlJc0luUjVjQ0k2SWtwWFZDSjkuZXlKcGJXRm5aU0k2SW1oMGRIQnpPaTh2WVhOelpYUnpMbkppYkM1dGN5OHlNVEl4TURreE15OXZjbWxuYVc0dWFuQm5JaXdpWlhod2FYSmxjMTloZENJNk1UWTBOVGsyTmpnNE5YMC5JUkRfbDEyRXFCTnRMTF9hVlN2V2JWSjZyeC1mYnRMYmtwcWo0MzRUSWtZL2ltYWdlLmpwZz93aWR0aD05ODAiLCJleHBpcmVzX2F0IjoxNjM0ODcyMDA3fQ.aEhZoxF46d2-wp0N4zj2Rh2LzvGtdysiPk53V3kE7Vg/img.jpg?width=2000&height=2000'
    ),
    new Recipe(
      'Sample Recipe Name-2',
      'This is a sample recipe-2 description.',
      'https://assets.rebelmouse.io/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpbWFnZSI6Imh0dHBzOi8vd3d3LmJyaXQuY28vbWVkaWEtbGlicmFyeS9leUpoYkdjaU9pSklVekkxTmlJc0luUjVjQ0k2SWtwWFZDSjkuZXlKcGJXRm5aU0k2SW1oMGRIQnpPaTh2WVhOelpYUnpMbkppYkM1dGN5OHlNVEl4TURreE15OXZjbWxuYVc0dWFuQm5JaXdpWlhod2FYSmxjMTloZENJNk1UWTBOVGsyTmpnNE5YMC5JUkRfbDEyRXFCTnRMTF9hVlN2V2JWSjZyeC1mYnRMYmtwcWo0MzRUSWtZL2ltYWdlLmpwZz93aWR0aD05ODAiLCJleHBpcmVzX2F0IjoxNjM0ODcyMDA3fQ.aEhZoxF46d2-wp0N4zj2Rh2LzvGtdysiPk53V3kE7Vg/img.jpg?width=2000&height=2000'
    ),
  ];

  @Output() recipeWasSelected = new EventEmitter();

  onRecipeSelected = (recipe: Recipe) => {
    this.recipeWasSelected.emit(recipe);
  };

  ngOnInit(): void {}
}
