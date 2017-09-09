import {Component, EventEmitter, Output} from '@angular/core';
import { Ingredient } from '../../shared/ingredient.model';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent {
  @Output() addedIngridient = new EventEmitter<Ingredient>();
  addIngridient(name: string, amount: number) {
    this.addedIngridient.emit(new Ingredient(name, amount));
  }
}
