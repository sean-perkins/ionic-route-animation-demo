import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
    {
        path: '', loadChildren: './pages/tabs/tabs.module#TabsPageModule'
    },
    {
        path: 'location/:id',
        loadChildren: './pages/location-detail/location-detail.module#LocationDetailPageModule'
    },
    {
        path: 'location/:id/tour',
        loadChildren: './pages/location-detail-tour/location-detail-tour.module#LocationDetailTourPageModule'
    }
];
@NgModule({
    imports: [
        RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
    ],
    exports: [RouterModule]
})
export class AppRoutingModule { }
