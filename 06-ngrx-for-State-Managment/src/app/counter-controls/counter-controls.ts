import { Component } from '@angular/core';
import { Store } from '@ngrx/store';

import { increment, decrement } from '../store/counter.actions';

@Component({
  selector: 'app-counter-controls',
  templateUrl: './counter-controls.html',
  styleUrls: ['./counter-controls.css'],
  standalone: true,
})
export class CounterControls {
  constructor(private store: Store) { }

  increment() {
    this.store.dispatch(increment({ value: 2 }));
  }

  decrement() {
    this.store.dispatch(decrement({ value: 2 }));
  }
}
