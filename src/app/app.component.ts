import { CommonModule } from '@angular/common';
import { Component, Signal } from '@angular/core';
import * as CounterActions from './store/counter'
import { Store } from '@ngrx/store';
import { AppState } from './store';
import { selectCounter } from './store/counter/counter.selectors';
import { selectUser } from './store/user/user.selectors';
import { UserState } from './store/user';
import { RouterModule } from '@angular/router';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  standalone: true,
  imports: [CommonModule, RouterModule]
})
export class AppComponent {
  count: Signal<number>;
  user: Signal<UserState>;
 
  constructor(private store: Store<AppState>) {
    this.count = store.selectSignal(selectCounter)

    this.user = store.selectSignal(selectUser)
  }
 
  increment() {
    this.store.dispatch(CounterActions.increment());
  }
 
  decrement() {
    this.store.dispatch(CounterActions.decrement());
  }
 
  reset() {
    this.store.dispatch(CounterActions.reset());
  }
}
