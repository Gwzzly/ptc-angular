import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TotoComponent } from './toto/toto.component';

export const subRoutes: Routes = [
    {
        path: 'toto',
        component: TotoComponent
    }
];

@NgModule({
    imports: [
        RouterModule.forChild(subRoutes)
    ],
    exports: [
        RouterModule
    ]
})

export class SubRoutingModule {
}
