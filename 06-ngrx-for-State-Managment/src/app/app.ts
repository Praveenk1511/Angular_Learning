import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

import { init } from './store/counter.actions';

import { CounterOutput } from './counter-output/counter-output';
import { CounterControls } from './counter-controls/counter-controls';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  styleUrls: ['./app.css'],
  standalone: true,
  imports: [CounterOutput, CounterControls],
})
export class App implements OnInit {
  ngOnInit(): void {
    this.store.dispatch(init());
  }

  constructor(private store: Store) { }
}
