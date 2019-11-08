import { NgModule } from "@angular/core";
import { PagesComponent } from '../pages/pages.component';
import { DashboardComponent } from '../pages/dashboard/dashboard.component';
import { ProgressComponent } from '../pages/progress/progress.component';
import { Grafics1Component } from '../pages/grafics1/grafics1.component';
import { SharedModule } from '../shared/shared.module';
import { PAGES_ROUTES } from './pages.routes';

@NgModule({
    declarations: [
        PagesComponent,
        DashboardComponent,
        ProgressComponent,
        Grafics1Component,
    ],
    exports : [
        DashboardComponent,
        ProgressComponent,
        Grafics1Component,
    ],   
    imports: [SharedModule, PAGES_ROUTES]
})

export class PagesModule {

}