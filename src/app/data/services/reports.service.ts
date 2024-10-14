import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiResponse } from '../interface/api-response.interface';

@Injectable({
  providedIn: 'root',
})
export class ReportsService {
  http = inject(HttpClient);
  baseApiURl =
    'https://search-ospizzaday-53crzkzjrv22mjjfuz5txdqxrq.eu-central-1.es.amazonaws.com/tvheartbeat/_search';

  username = 'pizzaday';
  password = 'J@tAa2aUCN6Uehax';

  getTestAccount(): Observable<ApiResponse> {
    const headers = new HttpHeaders({
      Authorization: 'Basic ' + btoa(this.username + ':' + this.password),
      'Content-Type': 'application/json',
    });
    const body = {
      size: 300,
      query: {
        range: {
          date: {
            lte: 'now-30m',
          },
        },
      },
    };
    return this.http.post<ApiResponse>(this.baseApiURl, body, { headers });
  }
}
