import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class BlogPageService {
  JsonUrl = 'assets/JSONBlog/blogVideo.json';

  constructor(private http: HttpClient) {}

  getData(): Observable<any> {
    return this.http.get<any>(this.JsonUrl);
  }

  setIntoLocaStorage() {
    this.getData().subscribe((res: any) => {
      console.log(res);
      localStorage.setItem('blogData', JSON.stringify(res));
    });
  }
}
