import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule, Routes } from "@angular/router";
import { CountriesComponent } from "./countries.component";
import { CountryDetailComponent } from "./country-detail/country-detail.component";

const routes: Routes = [
  {
    path: "",
    component: CountriesComponent,
  },
  {
    path: ":code",
    component: CountryDetailComponent,
  },
];

@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CountriesRoutingModule {}
