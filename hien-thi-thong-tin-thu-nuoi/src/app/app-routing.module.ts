import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {DemoComponent} from './demo/demo.component';
import {DemoCompomentComponent} from './demo-compoment/demo-compoment.component';
import {CaculateComponent} from './caculate/caculate.component';
import {ColorComponent} from './color/color.component';
import {ProgressBarComponent} from './progress-bar/progress-bar.component';

const routes: Routes = [
  {path: 'user', component: DemoCompomentComponent},
  {path: 'calculate', component: CaculateComponent},
  {path: 'animal', component: DemoComponent},
  {path: 'color', component: ColorComponent},
  {path: 'progress', component: ProgressBarComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
