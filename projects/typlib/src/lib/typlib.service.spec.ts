import { TestBed } from '@angular/core/testing';

import { TyplibService } from './typlib.service';

describe('TyplibService', () => {
  let service: TyplibService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TyplibService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
