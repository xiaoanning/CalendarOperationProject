import { Injector } from '@angular/core';
import { BaseServiceService } from 'shared/services/base-service.service';

export class BaseTaskService extends BaseServiceService {
  constructor(injector: Injector) {
    super(injector, 'tasks/');
  }
}
