import { TestBed, inject } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { CastService } from './cast.service';

xdescribe('CastService', () => {
  let httpMock: HttpTestingController;
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CastService],
      imports: [HttpClientTestingModule],
    });
  });

  // it('should be created', inject([CastService], (service: CastService) => {
  //   expect(service).toBeTruthy();
  // }));

  it('should get cast list from API', inject([HttpTestingController, CastService],
    (httpMock: HttpTestingController, service: CastService) => {
      const req = httpMock.expectOne('https://api.themoviedb.org/3/movie/');
      expect(req.request.method).toEqual('GET');
    })
  )
});
