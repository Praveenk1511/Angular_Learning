import { Component } from '@angular/core';

import { Header } from './header/header';
import { UserInput } from './user-input/user-input';
import { InvestmentResults } from "./investment-results/investment-results";

@Component({
  imports: [Header, UserInput, InvestmentResults],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {}
