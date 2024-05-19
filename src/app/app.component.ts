import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  length = 0;
  includeLetters = false;
  includeNumbers = false;
  includeSymbols = false;
  password = '';

  onChangeLength(target: EventTarget) {
    const parsedValue = parseInt((<HTMLInputElement>target).value);

    if (!isNaN(parsedValue)) {
      this.length = parsedValue;
    } else {
      this.length = 0;
    }
  }

  onChangeUseLetters() {
    this.includeLetters = !this.includeLetters;
  }

  onChangeUseNumbers() {
    this.includeNumbers = !this.includeNumbers;
  }

  onChangeUseSymbols() {
    this.includeSymbols = !this.includeSymbols;
  }

  onButtonClick() {
    const numbers = '1234567890';
    const letters = 'abcdefghijklmnopqrstuvwxyz';
    const symbols = '!@#$%^&*()';

    let vaildChars = '';

    if (this.includeLetters) {
      vaildChars += letters;
    }

    if (this.includeNumbers) {
      vaildChars += numbers;
    }

    if (this.includeSymbols) {
      vaildChars += symbols;
    }

    let generatedPassword = '';
    for (let i = 0; i < this.length; i++) {
      const index = Math.floor(Math.random() * vaildChars.length);
      generatedPassword += vaildChars[index];
    }

    this.password = generatedPassword;
  }
}
