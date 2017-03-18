import { TestBed, inject } from '@angular/core/testing';

import { BarberSocialAccountsService } from './barber-social-accounts.service';

describe('BarberSocialAccountsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BarberSocialAccountsService]
    });
  });

  it('should ...', inject([BarberSocialAccountsService], (service: BarberSocialAccountsService) => {
    expect(service).toBeTruthy();
  }));
});
