export interface FetchAdapter<T> {
  get(url: string): Promise<T>;
}
