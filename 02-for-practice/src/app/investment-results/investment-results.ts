import { CurrencyPipe } from '@angular/common';
import { Component, inject, computed, signal } from '@angular/core';
import { InvestmentService } from '../investment.service';

@Component({
  imports: [CurrencyPipe],
  selector: 'app-investment-results',
  styleUrl: './investment-results.css',
  templateUrl: './investment-results.html',
})
export class InvestmentResults {
  // @Input() results?: {
  //   year: number;
  //   interest: number;
  //   valueEndOfYear: number;
  //   annualInvestment: number;
  //   totalInterest: number;
  //   totalAmountInvested: number;
  // }[];
  private investmentService = inject(InvestmentService);

  results = computed(() => this.investmentService.resultData());
  // results = signal(this.investmentService.resultData());

  // results = input<{
  //   year: number;
  //   interest: number;
  //   valueEndOfYear: number;
  //   annualInvestment: number;
  //   totalInterest: number;
  //   totalAmountInvested: number;
  // }[]>()
}
