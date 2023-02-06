import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from './models/store.model';
import { selectUserName } from './auth/state-management/auth.reducer';
import { GeneralNavigationItems, UserNavigationItems } from './common/services/navigation.service';
import { logoutUser } from './auth/state-management/auth.actions';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent {
  navigationItems = GeneralNavigationItems;

  actionItems = UserNavigationItems;

  showFiller = false;

  userName$ = this.store.select(selectUserName);

  constructor(private store: Store<AppState>,
              private router: Router) {
  }

  logout(): void {
    localStorage.removeItem('jwt');
    this.router.navigateByUrl('').then();
    this.store.dispatch(logoutUser());
  }

}
