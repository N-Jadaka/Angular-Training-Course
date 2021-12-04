import { HttpClient, HttpEventType, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Post } from './post.model';
import {catchError, map, tap } from 'rxjs/operators';
import { Subject, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PostsService {
  error = new Subject<string>();
  constructor(private http: HttpClient){

  }

  createAndStorePost(title: string, content: string){
    const postData: Post = {title: title, content: content};
    this.http.post(
      'https://ng-complete-guide-e0e34-default-rtdb.firebaseio.com/posts.json',
      postData,
      {
        observe: 'response'
      }
      ).subscribe(responseData => {
        console.log(responseData);
      },
        error => {
          this.error.next(error.message);
        }

      );
  }

  fetchPosts() {
    return this.http
    .get('https://ng-complete-guide-e0e34-default-rtdb.firebaseio.com/posts.json',
      {
        headers: new HttpHeaders({'Custom-Header': 'Hello'}),
        params: new HttpParams().set('print', 'pretty'),
        responseType: 'json'
      }
    )
    .pipe(map( responseData => {
      const postArray: Post[] = [];
      for(const key in responseData){
        if(responseData.hasOwnProperty(key)
        ){
          postArray.push({ ...responseData[key], id: key });
        }
      }
      return postArray;
    }),
      catchError(errorRes => {
        return throwError(errorRes);
      })
    )
  }

  deletePosts() {
    return this.http.delete('https://ng-complete-guide-e0e34-default-rtdb.firebaseio.com/posts.json',
      {
        observe: 'events',
        responseType: 'json'
      }
    ).pipe(tap(event => {
      console.log(event);
      if(event.type === HttpEventType.Response) {
        console.log(event.body);
      }
    }))
  }

}
