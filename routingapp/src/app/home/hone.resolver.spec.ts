import { TestBed } from '@angular/core/testing';

import { HoneResolver } from './hone.resolver';

describe('HoneResolver', () => {
  let resolver: HoneResolver;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    resolver = TestBed.inject(HoneResolver);
  });

  it('should be created', () => {
    expect(resolver).toBeTruthy();
  });
});
