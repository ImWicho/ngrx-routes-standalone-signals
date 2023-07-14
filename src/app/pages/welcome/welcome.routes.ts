import { Route } from '@angular/router'

export default [
	{
		path: '',
		loadComponent: () =>
			import('./welcome.component').then((c) => c.WelcomeComponent),
	},
] as Route[]
