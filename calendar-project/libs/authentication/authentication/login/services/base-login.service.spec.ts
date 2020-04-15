import { TestBed } from '@angular/core/testing';

import { BaseLoginService } from './base-login.service';

describe('BaseLoginService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: BaseLoginService = TestBed.get(BaseLoginService);
    expect(service).toBeTruthy();
  });
});
