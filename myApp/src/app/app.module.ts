import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { MatButtonModule } from '@angular/material/button';
import {MatTabsModule} from '@angular/material/tabs';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SquareComponent } from './square/square.component';
import { BoardComponent } from './board/board.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CounterComponent } from './counter/counter.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PhoneBookComponent } from './phoneBook/phoneBook.component';
import { ReactiveFormComponent } from './reactiveForm/reactiveForm.component';
import { GenerateUsernameComponent } from './generateUsername/generateUsername.component';

@NgModule({
  declarations: [			
    AppComponent,
      SquareComponent,
      BoardComponent,
      CounterComponent,
      PhoneBookComponent,
      ReactiveFormComponent,
      GenerateUsernameComponent
   ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    FormsModule,
    ReactiveFormsModule,
    MatTabsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
