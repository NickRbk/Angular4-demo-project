import { EventEmitter, Injectable } from '@angular/core';

import { Recipe } from './recipe.model';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';

@Injectable()
export class RecipeService {
  recipeSelected = new EventEmitter<Recipe>();

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
      ]),
  ];

  constructor(private shoppingListService: ShoppingListService) {}

  getRecipes() {
    return this.recipes.slice();
  }

  addIngredientsToShoppingList(ingredients: Ingredient[]) {
    this.shoppingListService.addIngredients(ingredients);
  }
}
