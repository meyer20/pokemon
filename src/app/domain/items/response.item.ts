export interface ResponseItem<T> {
  count: number;
  next: string;
  previous: any;
  results: Array<T>;
}
