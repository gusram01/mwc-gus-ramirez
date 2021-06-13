export interface IResponseCountry<T> {
  success: boolean;
  data?: Array<T>;
  error?: any;
}
