import { TestBed } from '@angular/core/testing';

import { TokenInterceptorService } from './token-interceptor.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('TokenInterceptorService', () => {
  let service: TokenInterceptorService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
    });
    service = TestBed.inject(TokenInterceptorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
