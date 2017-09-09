import { Ingredient } from '../shared/ingredient.model';
import { EventEmitter } from '@angular/core';

export class ShoppingListService {
  ingredientsChanged = new EventEmitter<Ingredient[]>();

  private ingredients: Ingredient[] = [
    new Ingredient('Salt', 10),
    new Ingredient('Sugar', 18)
  ];

  getIngredients() {
    return this.ingredients.slice();
  }

  addIngredient(ingredient: Ingredient) {
    this.ingredients.push(ingredient);

    // add emitter to inform recipients for changes
    // (we use 'slice', so recipients can't know about changes)
    this.ingredientsChanged.emit(this.ingredients.slice());
  }

  addIngredients(ingridients: Ingredient[]) {
    // below approach costless
    // for(let ingredient of ingridients) {
    //   this.addIngredient(ingredient);
    // }

    // it's better to use ES6 spread feature!
    this.ingredients.push(...ingridients);
    this.ingredientsChanged.emit(this.ingredients.slice());
  }
}
