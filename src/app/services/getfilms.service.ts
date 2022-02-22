import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable()
export class GetFilmsService {

  constructor(
    private http: HttpClient
  ) {}

  get(url: string) : Observable<object> {
    return this.http.get(url)
      }

}
