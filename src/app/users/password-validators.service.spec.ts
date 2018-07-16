import { TestBed, inject } from '@angular/core/testing';

import { PasswordValidatorsService } from './password-validators.service';

describe('PasswordValidatorsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PasswordValidatorsService]
    });
  });

  it('should be created', inject([PasswordValidatorsService], (service: PasswordValidatorsService) => {
    expect(service).toBeTruthy();
  }));
});
