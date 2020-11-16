import { Component } from '@angular/core';
import { lorem } from 'faker';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  randomSentence = lorem.sentence();
  enteredText = '';

  onTextInput(value: string) {
    this.enteredText = value;
  }

  getClassName(randomChar: string, enteredChar: string) {
    if (!enteredChar) {
      return 'pending';
    }
    return randomChar === enteredChar ? 'success' : 'failure';
  }
}
