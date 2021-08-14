import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-phoneBook',
  templateUrl: './phoneBook.component.html',
  styleUrls: ['./phoneBook.component.scss']
})
export class PhoneBookComponent implements OnInit {

  phoneContForm: FormGroup = this.fb.group({
    firstName: '',
    lastName: '',
    phoneNumber: ''
  });

  baseArray: any[] = [];

  sortedPhoneList: PhoneContact[] = [];

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
  }

  private populateBaseArray() {
    let contact: PhoneContact = new PhoneContact();
    contact.firstName = this.phoneContForm.value.firstName;
    contact.lastName = this.phoneContForm.value.lastName;
    contact.phoneNumber = this.phoneContForm.value.phoneNumber;
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

export class PhoneContact {
  firstName!: string;
  lastName!: string;
  phoneNumber!: string;
}
