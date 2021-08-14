import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss']
})
export class BoardComponent implements OnInit {

  squares!: any[];
  xIsNext!: boolean;
  winner!: string;
  gameEnd!: boolean;

  constructor() { }

  ngOnInit() {
    this.newGame();
  }

  get player() {
    return this.xIsNext ? 'X' : 'O';
  }

  /**
   * Reset the current game
   */
  newGame() {
    this.squares = Array(9).fill(null);
    this.winner = '';
    this.xIsNext = true;
    this.gameEnd = false;
  }

  /**
   * Allows a player to make a move while there is an available element on
   * this.squares and this.winner value still be an empty string
   * @param idx The current "squares" element index to be checked
   */
  makeMove(idx: number): void {
    if (!this.squares[idx] && this.winner === '') {
      this.squares.splice(idx, 1, this.player);
      this.xIsNext = !this.xIsNext;
    }

    this.winner = this.calculateWinner();
  }

  /**
   * Checks if a player has won the game
   * @returns The value with which is supposed to set this.winner
   */
  calculateWinner(): string {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6]
    ];

    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (
        this.squares[a] &&
        this.squares[a] === this.squares[b] &&
        this.squares[a] === this.squares[c]
      ) {
        return this.squares[a];
      }
    }
    return '';
  }

  /**
   * Checks a no-win situation (no winner has emerge)
   * @returns True if there is no more available squares
   */
  noWin(): boolean {
    for (let i = 0; i < this.squares.length; i++) {
      const element = this.squares[i];
      if (element === null) {
        return false;
      }
    }
    return true;
  }

  /**
   * Checks if the New Game Button should appear
   * @returns True if a winner has emerged or there aren't any more squares to
   * play
   */
  showNewGameBtn(): boolean {
    if (this.winner || this.noWin()) {
      this.gameEnd = true;
    }
    return this.gameEnd;
  }

}
