import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Ingredients } from './ingredients';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class IngredientsService {

  constructor(private http: HttpClient) { }

  public getIngredients(): Observable<Ingredients[]> {
    return this.http.get<Ingredients[]>(`${environment.apiBaseUrl}/ingredients`);
  }

}
