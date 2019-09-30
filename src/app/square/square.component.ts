import { Component, Input } from '@angular/core';
import { SquareValueType } from '../models/models';

@Component({
  selector: 'tt-square',
  templateUrl: './square.component.html',
  styleUrls: ['./square.component.scss']
})
export class SquareComponent {
  @Input() value: SquareValueType;

  getButtonStatus() {
    if (!this.value) {
      return 'info';
    }

    if (this.value === 'X') {
      return 'success';
    }

    return 'warning';
  }
}
