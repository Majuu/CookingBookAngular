import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  @Output() recipeWasSelected = new EventEmitter<Recipe>();
  recipes: Recipe[] = [
    new Recipe('A Test recipe', 'A test', 'https://hips.hearstapps.com/del.h-cdn.co/assets/17/34/2048x1365/' +
      'gallery-1503418862-chicken-thighs-delish.jpg?resize=768:*'),
    new Recipe('Another test recipe', 'A second test', 'https://res.cloudinary.com/hellofresh/image/upload/f_auto,fl_lossy,h_' +
      '436,q_auto/v1/hellofresh_s3/image/enchiladas-aux-legumes-1a1102aa.jpg')
  ];

  constructor() { }

  ngOnInit() {
  }
  onRecipeSelected(recipe: Recipe) {
    this.recipeWasSelected.emit(recipe);
  }
}
