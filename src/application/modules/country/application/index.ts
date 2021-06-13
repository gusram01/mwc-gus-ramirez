import axios from 'axios';
import { CountriesAxiosFetcher } from './CountriesAxiosFetcher';
import { GetCountriesUseCase } from '../domain/CountriesUseCase';
import { CountriesController } from './CountriesController';

const axiosInstance = axios.create();

const countriesService = new CountriesAxiosFetcher(axiosInstance);
const countriesAxiosUseCase = new GetCountriesUseCase(countriesService);
const countriesController = new CountriesController(countriesAxiosUseCase);

export { countriesController };
