import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
    {
        path: '', loadChildren: () => import('./pages/tabs/tabs.module').then(m => m.TabsPageModule)
    },
    {
        path: 'location/:id',
        loadChildren: () => import('./pages/location-detail/location-detail.module').then(m => m.LocationDetailPageModule)
    },
    {
        path: 'location/:id/tour',
        loadChildren: () => import('./pages/location-detail-tour/location-detail-tour.module').then(m => m.LocationDetailTourPageModule)
    }
];
@NgModule({
    imports: [
        RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
    ],
    exports: [RouterModule]
})
export class AppRoutingModule { }
