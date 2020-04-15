import { Injector } from '@angular/core';
import { BaseServiceService } from 'shared/shared/services/base-service.service';

export class BaseLoginService extends BaseServiceService {
  constructor(injector: Injector) {
    super(injector, 'user/');
  }
}
