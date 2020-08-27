import { RecipeService } from './../recipe.service';
import { Recipe } from './../recipe.model';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css'],
})
export class RecipeListComponent implements OnInit {
  constructor(
    private RecipeService: RecipeService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  recipes: Recipe[];

  onNewRecipe = () => {
    this.router.navigate(['new'], { relativeTo: this.route });
  };

  ngOnInit(): void {
    this.recipes = this.RecipeService.getRecipes();
  }
}
