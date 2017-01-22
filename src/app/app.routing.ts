import { Routes, RouterModule } from '@angular/router';

import { HomeRoutes } from './home/index';
import { SetGameRoutes } from './setgame/index';

const appRoutes: Routes = [
    ...HomeRoutes,
    ...SetGameRoutes
];

export const appRoutingProviders: any[] = [

];

export const routing = RouterModule.forRoot(appRoutes);
