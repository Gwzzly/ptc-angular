import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HubComponent } from './hub/hub.component';
import { TestComponent } from './test/test.component';

const appRoutes: Routes = [
    {
        path: '',
        component: HubComponent
    }, {
        path: 'test',
        component: TestComponent
    }, {
        path: 'sub',
        canActivate: [],
        loadChildren: () => import('./sub-module/sub.module').then(m => m.SubModule)
    }
];

@NgModule({
    imports: [
        RouterModule.forRoot(appRoutes)
    ],
    exports: [
        RouterModule
    ]
})

export class AppRoutingModule { }
