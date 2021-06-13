import { AxiosInstance } from 'axios';
import { IResponseCountry } from '../domain/IResponseCountry';
import { CountriesFetcher } from '../infraestructure/CountriesFetcher';
import { CountryEntity } from '../domain/CountryEntity';

export class CountriesAxiosFetcher extends CountriesFetcher {
  private countries: any[] = [];

  constructor(private axiosInstance: AxiosInstance) {
    super();
  }

  async get(url: string): Promise<IResponseCountry<any>> {
    if (this.countries.length === 0) {
      const countriesResponse = await this.axiosInstance.get(url);
      this.countries = this._mapperCountries(countriesResponse.data);
    }
    return {
      success: true,
      data: this.countries,
    };
  }

  private _mapperCountries(countriesResponse: any[]): CountryEntity[] {
    return countriesResponse.map((country) => ({
      id: country.alpha3Code + country.alpha2Code + country.callingCodes,
      name: country.name,
      alphaCode: {
        code2: country.alpha2Code,
        code3: country.alpha3Code,
      },
      callingCode: country.callingCodes,
    }));
  }
}
