import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Page, BerryInfo, NameUrlPair, BerryFirmness } from '../dto/dto';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  baseUrl = environment.baseUrl;
  catalog = this.baseUrl + 'berry';
  firmnessUrl = this.baseUrl + 'berry-firmness/'

  constructor(private http: HttpClient) { }

  public getAllBerries(offset: number = 0, limit: number = 20): Observable<Page<NameUrlPair>> {
    return this.http.get<Page<NameUrlPair>>(`${this.catalog}?offset=${offset}&limit=${limit}`);
  }

  public getBerryInfo(url: string): Observable<BerryInfo> {
    return this.http.get<BerryInfo>(url);
  }

  getBerriesWithFirmness(firmness: string): Observable<BerryFirmness> {
    return this.http.get<BerryFirmness>(this.firmnessUrl + firmness);
  }
}
