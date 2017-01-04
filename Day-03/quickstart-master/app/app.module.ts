import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent }  from './app.component';
import { GreeterComponent } from './greeter/greeter.component';
import { MessageComponent } from './greeter/message.component';
import { SalaryCalculatorComponent } from './salary-calculator/salary-calculator.component';

import { SalaryCalculator } from './salary-calculator/SalaryCalculator.model';

import { BugTrackerModule } from './bug-tracker/bug-tracker.module';
@NgModule({
  imports:      [ BrowserModule, FormsModule, BugTrackerModule ],
  declarations: [ AppComponent, GreeterComponent, MessageComponent, SalaryCalculatorComponent ],
  bootstrap:    [ AppComponent ],
  providers :   [ SalaryCalculator]
})
export class AppModule { }
