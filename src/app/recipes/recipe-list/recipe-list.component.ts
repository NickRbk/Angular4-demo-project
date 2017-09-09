import {Component, EventEmitter, Output} from '@angular/core';

import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent {
  @Output() passDataFinal = new EventEmitter<Recipe>();
  recipes: Recipe[] = [
    new Recipe('A Test 1 Recipe', 'This is simply a 1 test', 'http://www.seriouseats.com/images/2015/09/20150914-pressure-cooker-recipes-roundup-09.jpg'),
    new Recipe('A Test 2 Recipe', 'This is simply a 2 test', 'https://www.chowstatic.com/assets/2014/11/31178_slow_cooker_pork_ramen_3000.jpg'),
    new Recipe('A Test 3 Recipe', 'This is simply a 3 test', 'http://www.seriouseats.com/recipes/assets_c/2016/03/20160324-aquafaba-pancake-oatmeal-vegan-21-thumb-1500xauto-430826.jpg'),
    new Recipe('A Test 4 Recipe', 'This is simply a 4 test', 'http://images.media-allrecipes.com/images/74383.jpg')
  ];
  passDataOut2Parent(recipe) {
    this.passDataFinal.emit(recipe);
  }
}
