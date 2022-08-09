import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Params, Router } from "@angular/router";
import { CountriesApiService } from "src/app/countries-api.service";

@Component({
  selector: "app-country-detail",
  templateUrl: "./country-detail.component.html",
  styleUrls: ["./country-detail.component.css"],
})
export class CountryDetailComponent implements OnInit {
  country: any;
  code: string;

  constructor(
    private countriesApi: CountriesApiService,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.route.params.subscribe((params: Params) => {
      this.code = params["code"];
    });
  }

  ngOnInit() {
    this.countriesApi.getCountry(this.code).subscribe(
      (response: any) => {
        this.country = response[0];
      },
      (error) => {
        console.log(error);
      }
    );
  }
}
