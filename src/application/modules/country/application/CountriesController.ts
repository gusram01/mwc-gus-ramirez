import { GetCountriesUseCase } from '../domain/CountriesUseCase';
import { Response, Request } from 'express';
export class CountriesController {
  private _urlRestCountries = 'https://restcountries.eu/rest/v2/all';

  constructor(private useCase: GetCountriesUseCase) {}

  async execute(req: Request, res: Response) {
    const response = await this.useCase.execute(this._urlRestCountries);

    return res.status(200).json(response);
  }
}
