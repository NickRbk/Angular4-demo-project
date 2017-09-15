import { Ingredient } from '../shared/ingredient.model';
import { EventEmitter } from '@angular/core';
import { Subject } from 'rxjs/Subject';

export class ShoppingListService {
  ingredientsChanged = new EventEmitter<Ingredient[]>();
  startedEditing = new Subject<number>();

  private ingredients: Ingredient[] = [
    new Ingredient('Salt', 10),
    new Ingredient('Sugar', 18)
  ];

  getIngredients() {
    return this.ingredients.slice();
  }

  getIngredient(index: number) {
    return this.ingredients[index];
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

  updateIngredient(index: number, newIngredient: Ingredient) {
    this.ingredients[index] = newIngredient;
    this.ingredientsChanged.next(this.ingredients.slice());
  }

  deleteIngredient(index: number) {
    this.ingredients.splice(index, 1);
    this.ingredientsChanged.next(this.ingredients.slice());
  }
}
