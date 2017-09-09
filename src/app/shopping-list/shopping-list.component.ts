import { Component, OnInit } from '@angular/core';

import { Ingredient } from '../shared/ingredient.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent {
  ingredients: Ingredient[] = [
    new Ingredient('Salt', 10),
    new Ingredient('Sugar', 18)
  ];
  onAdd(ingredient) {
    this.ingredients.push(ingredient);
  }
}
