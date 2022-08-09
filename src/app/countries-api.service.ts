import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { environment } from "src/environments/environment";

@Injectable({
  providedIn: "root",
})
export class CountriesApiService {
  constructor(private httpClient: HttpClient) {}

  public fetchCountries() {
    return this.httpClient.get(`${environment.countriesApiBaseUrl}/all`);
  }

  public getCountry(code: string) {
    return this.httpClient.get(
      `${environment.countriesApiBaseUrl}/alpha/${code}`
    );
  }
}
