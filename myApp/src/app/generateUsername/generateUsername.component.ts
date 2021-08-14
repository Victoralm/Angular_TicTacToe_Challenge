import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-generateUsername',
  templateUrl: './generateUsername.component.html',
  styleUrls: ['./generateUsername.component.scss']
})
export class GenerateUsernameComponent implements OnInit {

  output!: string;
  constructor() { }

  ngOnInit() {
  }

  private randomNumber(min: number, max: number) {
    return Math.floor(Math.random() * (max - min) + min);
  }

  generate(): void {
    let firstname: any = (<HTMLInputElement>document.getElementById('firstname')).value;
    let lastname: any = (<HTMLInputElement>document.getElementById('lastname')).value;
    let randNum: number = this.randomNumber(1, 9);
    this.output = (`${firstname}_${lastname}_${randNum}`);

  }

}
