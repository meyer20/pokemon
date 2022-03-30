export interface IResponseItem<T> {
  count: number;
  next: string;
  previous: any;
  results: Array<T>;
}
