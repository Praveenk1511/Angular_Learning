import { Component, signal, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { InvestmentService } from '../investment.service';


@Component({
  imports: [FormsModule],
  selector: 'app-user-input',
  styleUrl: './user-input.css',
  templateUrl: './user-input.html',
})
export class UserInput {
  // @Output() calculate = new EventEmitter<InvestmentInput>();
  // calculate = output<InvestmentInput>();
  
  // enteredInitialInvestment = '0';
  // enteredAnnualInvestment = '0';
  // enteredExpectedReturn = '5';
  // enteredDuration = '10';

  enteredInitialInvestment = signal('0');
  enteredAnnualInvestment = signal('0');
  enteredExpectedReturn = signal('5');
  enteredDuration = signal('10');

  investmentService = inject(InvestmentService);
  
  
  onSubmit() {
    this.investmentService.calculateInvestmentResults({
      initialInvestment: +this.enteredInitialInvestment(),
      duration: +this.enteredDuration(),
      expectedReturn: +this.enteredExpectedReturn(),
      annualInvestment: +this.enteredAnnualInvestment(),
    });
    // this.enteredInitialInvestment.set('0');
    // this.enteredAnnualInvestment.set('0');
    // this.enteredExpectedReturn.set('5');
    // this.enteredDuration.set('10');
  }
}
