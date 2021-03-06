import { Injectable } from '@angular/core';

import { Recipe } from './recipe.model';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class RecipeService {
  recipeChanged = new Subject<Recipe[]>();

  // pass 'private' to access array only in this service
  private recipes: Recipe[] = [
    new Recipe('A Test 1 Recipe',
      'This is simply a 1 test',
      'http://www.seriouseats.com/images/2015/09/20150914-pressure-cooker-recipes-roundup-09.jpg',
      [
        new Ingredient('Meat', 1),
        new Ingredient('Bread', 2)
      ]),
    new Recipe('A Test 2 Recipe',
      'This is simply a 2 test',
      'https://www.chowstatic.com/assets/2014/11/31178_slow_cooker_pork_ramen_3000.jpg',
      [
        new Ingredient('Buns', 1),
        new Ingredient('Meat', 4)
      ]),
    new Recipe('A Test 3 Recipe',
      'This is simply a 3 test',
      'http://www.seriouseats.com/recipes/assets_c/2016/03/20160324-aquafaba-pancake-oatmeal-vegan-21-thumb-1500xauto-430826.jpg',
      [
        new Ingredient('Milk', 3),
        new Ingredient('Jam', 2)
      ]),
    new Recipe('A Test 4 Recipe',
      'This is simply a 4 test',
      'http://images.media-allrecipes.com/images/74383.jpg',
      [
        new Ingredient('Tomato', 3),
        new Ingredient('Potato', 5)
      ])
  ];

  constructor(private shoppingListService: ShoppingListService) {}

  setRecipes(recipes: Recipe[]) {
    this.recipes = recipes;
    this.recipeChanged.next(this.recipes.slice());
  }

  getRecipes() {
    return this.recipes.slice();
  }

  getRecipe(id: number) {
    return this.recipes[id];
  }

  addIngredientsToShoppingList(ingredients: Ingredient[]) {
    this.shoppingListService.addIngredients(ingredients);
  }

  addRecipe(recipe: Recipe) {
    this.recipes.push(recipe);
    this.recipeChanged.next(this.recipes.slice());
  }

  updateRecipe(index: number, newRecipe: Recipe) {
    this.recipes[index] = newRecipe;
    this.recipeChanged.next(this.recipes.slice());
  }

  deleteRecipe(index: number) {
    this.recipes.splice(index, 1);
    this.recipeChanged.next(this.recipes.slice());
  }
}
