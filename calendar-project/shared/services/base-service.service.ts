import { HttpClient } from '@angular/common/http';
import { Injector } from '@angular/core';

const URL = '';

export class BaseServiceService {
  protected httpClient: HttpClient;
  protected apiUrl: string;

  constructor(injector: Injector, apiEndpoint: string) {
    // this.apiUrl = `${URL}/${apiEndpoint}`;
    this.apiUrl = '/user/login';
    this.httpClient = injector.get(HttpClient);
  }
}
