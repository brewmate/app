import { TestBed, async, inject } from '@angular/core/testing';

import { UserRedirectGuard } from './user-redirect.guard';

describe('UserRedirectGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [UserRedirectGuard]
    });
  });

  it('should ...', inject([UserRedirectGuard], (guard: UserRedirectGuard) => {
    expect(guard).toBeTruthy();
  }));
});
