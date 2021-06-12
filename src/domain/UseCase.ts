export interface UseCase<T, S> {
  execute(request: T): Promise<S>;
}
