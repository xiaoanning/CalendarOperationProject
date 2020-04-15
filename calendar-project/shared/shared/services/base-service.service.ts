import { HttpClient } from '@angular/common/http';
import { Injector } from '@angular/core';

const URL = 'api';

export class BaseServiceService {
  protected httpClient: HttpClient;
  protected apiUrl: string;

  constructor(injector: Injector, apiEndpoint: string) {
    this.apiUrl = `${URL}/${apiEndpoint}`;
    this.httpClient = injector.get(HttpClient);
  }
}