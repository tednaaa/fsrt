import { apiInstance } from '../api';

const route = '/example'; // /api/example

export class ExampleService {
  fetchExample() {
    apiInstance.get(route);
  }
}
