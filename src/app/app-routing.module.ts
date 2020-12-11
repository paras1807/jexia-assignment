import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BerriesCatalogComponent } from './components/berries-catalog/berries-catalog.component';
import { BerriesInfoComponent } from './components/berries-info/berries-info.component';
import { BerriesFirmnessComponent } from './components/berries-firmness/berries-firmness.component';

const routes: Routes = [
  { path: '', redirectTo: 'catalog', pathMatch: 'full'},
  { path: 'catalog', component: BerriesCatalogComponent },
  { path: 'catalog/info', component: BerriesInfoComponent },
  { path: 'berry-firmness/:name', component: BerriesFirmnessComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
