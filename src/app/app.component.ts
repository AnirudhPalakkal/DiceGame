import { Component } from '@angular/core';
import {HeaderComponent} from './header/header.component';
import {FooterComponent} from './footer/footer.component';
import {NgOptimizedImage} from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [
    HeaderComponent,
    FooterComponent,
    NgOptimizedImage
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  diceValue: number = 6;
  private getRandomDiceValue() : number {
    return 1 + Math.floor(6 * Math.random());
  }

  onRoll() {
    this.diceValue = this.getRandomDiceValue();
  }

  imageSrc(value: number): string {
    return `images/dice/side_${value}.png`;
  }
}
