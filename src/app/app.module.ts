import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BerriesCatalogComponent } from './components/berries-catalog/berries-catalog.component';
import { HttpClientModule } from '@angular/common/http';
import { FilterBerryPipe } from './pipes/filter.pipe';
import { OrderBerryByPipe } from './pipes/orderby.pipe';
import { BerriesInfoComponent } from './components/berries-info/berries-info.component';
import { BerriesDisplayComponent } from './components/berries-display/berries-display.component';
import { BerriesFirmnessComponent } from './components/berries-firmness/berries-firmness.component';

@NgModule({
  declarations: [
    AppComponent,
    BerriesCatalogComponent,
    FilterBerryPipe,
    OrderBerryByPipe,
    BerriesInfoComponent,
    BerriesDisplayComponent,
    BerriesFirmnessComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
