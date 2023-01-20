export interface IResponseItem<T> {
  count: number;
  next: string;
  /* eslint-disable  @typescript-eslint/no-explicit-any */
  previous: any;
  results: Array<T>;
}
