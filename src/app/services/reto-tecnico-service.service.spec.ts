import { TestBed } from '@angular/core/testing';

import { RetoTecnicoServiceService } from './reto-tecnico-service.service';

describe('RetoTecnicoServiceService', () => {
  let service: RetoTecnicoServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RetoTecnicoServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
