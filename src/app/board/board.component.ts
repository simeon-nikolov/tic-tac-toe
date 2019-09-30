import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'tt-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss']
})
export class BoardComponent implements OnInit {
  sqares: any[];
  xIsNext: boolean;
  winner: string;

  constructor() { }

  ngOnInit() {
    this.newGame();
  }

  newGame() {
    this.sqares = Array(9).fill(null);
    this.xIsNext = true;
    this.winner = null;
  }

  get player() {
    return this.xIsNext ? 'X' : 'O';
  }

  makeMove(idx: number) {
    if (this.winner) {
      return;
    }

    if (!this.sqares[idx]) {
      this.sqares.splice(idx, 1, this.player);
      this.toggleNext();
    }

    this.winner = this.calculateWinner();
  }

  toggleNext() {
    this.xIsNext = !this.xIsNext;
  }

  calculateWinner() {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];

    for (const [a, b, c] of lines) {
      if (this.sqares[a] &&
        this.sqares[a] === this.sqares[b] &&
        this.sqares[a] === this.sqares[c]) {
          return this.sqares[a];
      }
    }

    return null;
  }
}
