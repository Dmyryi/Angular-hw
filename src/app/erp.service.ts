import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Orderstable } from './orderstable';

@Injectable({
  providedIn: 'root',
})
export class ErpService {
  urlonwas: string = 'http://23.88.81.210:8088/bond/hs/onsiteapi/infoontv';
  username = 'admin';
  password = '314159';

  tempBody = { title: 'POST Request from ready TV' };

  constructor(private http: HttpClient) {}

  localData(storeid: string) {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: 'Basic ' + btoa(this.username + ':' + this.password),
    });

    const tempBody = { title: 'POST Request from ready TV' };

    return this.http.post<Orderstable>(this.urlonwas, tempBody, { headers });
  }
}
// так я наче все правильно зробив?) просто в постмані тепер показує 200, а переходжу на сайт і всеодно усе біле
