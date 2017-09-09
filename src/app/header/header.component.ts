import {Component, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})

export class HeaderComponent {
  rout = 'recipes';
  // define output
  @Output() chooseRouter = new EventEmitter<string>();
  routing(el) {
    this.rout = el === 'recipes' ? 'recipes' : 'shopping';
    this.chooseRouter.emit(this.rout);
  }
}
