import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  router = 'recipes';
  choise(router) {
    this.router = router === 'recipes' ? 'recipes' : 'shopping';
  }
}
