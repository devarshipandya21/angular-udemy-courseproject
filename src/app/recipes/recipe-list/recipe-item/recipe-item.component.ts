import { Recipe } from './../../recipe.model';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent implements OnInit {

  constructor() { }

  @Input() recipe: Recipe;

  @Output() recipeSelected = new EventEmitter();
  
  onSelected = () => {
    this.recipeSelected.emit();
  }

  ngOnInit(): void {
  }

}
