import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import baserUrl from './helper';
import { Observable } from 'rxjs';
import { Poliza } from '../pages/polizas/polizas/model/poliza.model';

@Injectable({
  providedIn: 'root'
})
export class PolizaService {

  constructor(private httpClient:HttpClient) { }

  getAll(): Observable<any>{
    return this.httpClient.get(`${baserUrl}/polizas/`)
  }

  get(idPoliza:any):Observable<any>{
    return this.httpClient.get(`${baserUrl}/polizas/${idPoliza}`)
  }

  create(data:any):Observable<any>{    
    return this.httpClient.post(`${baserUrl}/polizas`,data)
  }
}
