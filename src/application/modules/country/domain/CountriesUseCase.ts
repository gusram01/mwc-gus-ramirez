import { IResponseCountry } from './IResponseCountry';
import { UseCase } from '../../../../domain/UseCase';
import { CountriesFetcher } from '../infraestructure/CountriesFetcher';

export class GetCountriesUseCase
  implements UseCase<string, IResponseCountry<any>>
{
  constructor(private countriesService: CountriesFetcher) {}

  execute(request: string): Promise<IResponseCountry<any>> {
    return this.countriesService.get(request);
  }
}
