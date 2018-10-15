import {Recipe} from './recipe.model';
import {EventEmitter, Injectable} from '@angular/core';
import {Ingredient} from '../shared/ingredient.model';
import {ShoppingListService} from '../shopping-list/shopping-list.service';

@Injectable()
export class RecipeService {
  recipeSelected = new EventEmitter<Recipe>();

  private recipes: Recipe[] = [
    new Recipe('Some meat with white rice',
      'Very tasty',
      'https://hips.hearstapps.com/del.h-cdn.co/assets/17/34/2048x1365/' +
      'gallery-1503418862-chicken-thighs-delish.jpg?resize=768:*',
      [
        new Ingredient('Meat', 1),
        new Ingredient('Rice', 2)
      ]),
    new Recipe('Pancakes',
      'To be eaten on fridays',
      'https://res.cloudinary.com/hellofresh/image/upload/f_auto,fl_lossy,h_' +
      '436,q_auto/v1/hellofresh_s3/image/enchiladas-aux-legumes-1a1102aa.jpg',
      [
        new Ingredient('Eggs', 3),
        new Ingredient('Flour', 5)
      ])
  ];

  constructor(private slService: ShoppingListService) {}


  getRecipes() {
    return this.recipes.slice();
  }

  getRecipe(index: number) {
    return this.recipes[index];
  }

  addIngredientsToShoppingList(ingredients: Ingredient[]) {
    this.slService.addIngredients(ingredients);
  }
}
