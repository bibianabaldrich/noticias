import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class NoticiasService {

  constructor(private http:HttpClient) { }

  getTopHeadlines(){
    return this.http.get('https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=92366b7e219146b4bfc87b255faec1e7')
  }
}
