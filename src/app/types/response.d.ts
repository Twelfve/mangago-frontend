export interface IResponse<T> {
  msg: string;
  data: T;
  error: any;
  isError: boolean;
}
