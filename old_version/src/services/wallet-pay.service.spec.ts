import { TestBed } from '@angular/core/testing';

import { WalletPayService } from './wallet-pay.service';

describe('WalletPayService', () => {
  let service: WalletPayService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WalletPayService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
