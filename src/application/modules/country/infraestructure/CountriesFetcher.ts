import { IResponseCountry } from '../domain/IResponseCountry';
import { FetchAdapter } from './FetchAdapter';

export abstract class CountriesFetcher
  implements FetchAdapter<IResponseCountry<any>>
{
  abstract get(url: string): Promise<IResponseCountry<any>>;
}
