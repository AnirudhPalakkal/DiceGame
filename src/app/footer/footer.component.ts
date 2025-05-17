import {Component, Input} from '@angular/core';
import {DatePipe, formatDate} from '@angular/common';

@Component({
  selector: 'app-footer',
  imports: [
    DatePipe
  ],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent {
  today: Date = new Date();
  @Input() name: string = 'Sheridan College';
  protected readonly formatDate = formatDate;
}
