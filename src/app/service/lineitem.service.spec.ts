import { TestBed, inject } from '@angular/core/testing';

import { LineitemService } from './lineitem.service';

describe('LineitemService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [LineitemService]
    });
  });

  it('should be created', inject([LineitemService], (service: LineitemService) => {
    expect(service).toBeTruthy();
  }));
});
