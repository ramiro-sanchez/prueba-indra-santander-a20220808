import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { CountriesComponent } from "./countries.component";
import { CountryDetailComponent } from "./country-detail/country-detail.component";
import { CountriesRoutingModule } from "./countries-routing.module";
import { CountryItemComponent } from "./country-item/country-item.component";

@NgModule({
  declarations: [
    CountriesComponent,
    CountryDetailComponent,
    CountryItemComponent,
  ],
  imports: [CommonModule, CountriesRoutingModule],
})
export class CountriesModule {}
