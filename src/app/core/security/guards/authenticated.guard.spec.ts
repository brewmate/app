import { TestBed, async, inject } from '@angular/core/testing';

import { Router } from '@angular/router';

import { NgxsModule, Ngxs } from 'ngxs';

import { AuthenticatedGuard } from './authenticated.guard';
import { SecurityStore } from '../security.store';

describe('AuthenticatedGuard', () => {

  let ngxs: Ngxs;
  let guard: AuthenticatedGuard;

  const routerSpy = jasmine.createSpyObj('Router', ['navigateByUrl']);

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [NgxsModule.forRoot([SecurityStore])],
      providers: [
        SecurityStore,
        AuthenticatedGuard,
        { provide: Router, useValue: routerSpy }
      ],
    });
    ngxs = TestBed.get(Ngxs);
    guard = TestBed.get(AuthenticatedGuard);
  });

  it('be able to hit route when user is logged in', async () => {
    const result = guard.canActivate(null, null);
    expect(result).toBe(false);
  });
/*  it('should block if there is no user', () => {

    //ngxs.dispatch(new FeedAnimals());

    ngxs.select(state => state.zoo.feed).subscribe(feed => {
      expect(feed).toBe(true);
    });
  });

  it('should redirect if no user', inject([AuthenticatedGuard], (guard: AuthenticatedGuard) => {
    guard.canActivate()
    expect(guard).toBeTruthy();
  }));*/
});
