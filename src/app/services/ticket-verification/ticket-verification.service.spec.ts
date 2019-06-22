import { TestBed } from '@angular/core/testing';

import { TicketVerificationService } from './ticket-verification.service';

describe('TicketVerificationService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TicketVerificationService = TestBed.get(TicketVerificationService);
    expect(service).toBeTruthy();
  });
});
