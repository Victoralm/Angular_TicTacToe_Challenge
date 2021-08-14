// @ts-ignore
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-area',
  template: `
    <div class="form-wrapper">
      <form [formGroup]="phoneContact" (ngSubmit)="onSubmit()">
        <div>
          <label for="firstName">First name </label>
          <input type="text" name="firstName" id="firstName" class="userFirstname" placeholder="Coder" formControlName="firstName">
        </div>
        <div>
          <label for="lastName">Last name </label>
          <input type="text" name="lastName" id="lastName" class="userLastname" placeholder="Byte" formControlName="lastName">
        </div>
        <div>
          <label for="phoneNumber">Phone number </label>
          <input type="tel" name="phoneNumber" id="phoneNumber" class="userPhone" placeholder="8885559999" formControlName="phoneNumber">
        </div>
        <div>
          <input type="submit" value="submit" class="submitButton">
        </div>
      </form>
    <div>
    <div class="informationTable">
      <table>
        <tr>
          <th>First name</th>
          <th>Last name</th>
          <th>Phone number</th>
        </tr>
        <tr>
          <td></td>
        </tr>
        <tr *ngFor="let row of sortedPhoneList">
          <td>{{row.firstName}}</td>
          <td>{{row.lastName}}</td>
          <td>{{row.phoneNumber}}</td>
        </tr>
      </table>
    </div>`,
  styles: []
})
export class CounterComponent implements OnInit {

  phoneContact: FormGroup = this.fb.group({
    firstName: '',
    lastName: '',
    phoneNumber: ''
  });

  baseArray: any[] = [];

  sortedPhoneList: phoneContact[] = [];

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
  }

  private populateBaseArray() {
  let contact: phoneContact = new phoneContact();
    contact.firstName = this.phoneContact.value.firstName;
    contact.lastName = this.phoneContact.value.lastName;
    contact.phoneNumber = this.phoneContact.value.phoneNumber;
    this.baseArray.push(contact);
  }

  private sortPhoneList() {
    this.sortedPhoneList = this.baseArray.sort((obj1, obj2) =>
      (obj1.lastName < obj2.lastName ? -1 : 1)
    );
  }

  onSubmit(): void {

    this.populateBaseArray();
    this.sortPhoneList();
  }


}

export class phoneContact {
  firstName!: string;
  lastName!: string;
  phoneNumber!: string;
}
