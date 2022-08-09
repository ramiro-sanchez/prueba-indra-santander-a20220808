import { Component, OnInit } from "@angular/core";
import { CountriesApiService } from "../countries-api.service";

@Component({
  selector: "app-countries",
  templateUrl: "./countries.component.html",
  styleUrls: ["./countries.component.css"],
})
export class CountriesComponent implements OnInit {
  countries: any[] = [];

  constructor(private countriesApi: CountriesApiService) {}

  ngOnInit() {
    this.countriesApi.fetchCountries().subscribe(
      (response: any) => {
        console.log(response);
        this.countries = response;
      },
      (error) => {
        console.log(error);
      }
    );
  }
}
