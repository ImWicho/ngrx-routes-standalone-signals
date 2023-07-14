import { Route } from '@angular/router';

export const ROUTES: Route[] = [
  {
    path: '',
    redirectTo: 'welcome',
    pathMatch: 'full'
  },
	{
		path: 'login',
		loadChildren: () => import('./pages/login/login.routes'),
	},
  {
		path: 'welcome',
		loadChildren: () => import('./pages/welcome/welcome.routes'),
	},
  {
    path: '**',
    redirectTo: 'welcome',
    pathMatch: 'full'
  },
];