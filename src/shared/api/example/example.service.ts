import { apiInstance } from '../api';

const route = '/example'; // /api/example

export class ExampleService {
  public fetchExample() {
    apiInstance.get(route);
  }
}
