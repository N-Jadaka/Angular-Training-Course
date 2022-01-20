import { HttpClient, HttpEventType, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Post } from './post.model';
import { catchError, map, tap } from 'rxjs/operators'
import { Subject, throwError } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class PostsService {
  error = new Subject<string>();
  isFetching: boolean = true;
  loadedPosts: Post[] = [];

  constructor(private http: HttpClient) { }

  createAndStorePost(title: string, content: string){
    const postData: Post = {title: title, content: content}
    console.log(postData);
    this.http.post<{ name: string}>
    ('https://ng-course-recipe-book-af4be-default-rtdb.firebaseio.com/posts.json',
      postData,
      {
        observe: 'response' //default is body
      }
    )
    .subscribe(responseData => {
      console.log(responseData);
    }, error => {
      this.error.next(error.message);
    })

  }

  fetchPosts(){
    let searchParams = new HttpParams();
     searchParams = searchParams.append('print', 'pretty');
     searchParams = searchParams.append('custom', 'key');
    return this.http
    .get<{ [key: string]: Post}>
      ('https://ng-course-recipe-book-af4be-default-rtdb.firebaseio.com/posts.json',
        {
          headers: new HttpHeaders({ 'Custom-Header': 'Hello'}),
          // params: new HttpParams().set('print', 'pretty') //single param
          params: searchParams, //single param
          responseType: 'json'

        }
    )
    .pipe(
      map(responseData => {
       const postsArray: Post[] = [];
       for(const key in responseData){
         if(responseData.hasOwnProperty(key)){
          postsArray.push({...responseData[key], id:key });
         }
       }
       return postsArray;
    }))

  }

  deletePosts(){
   return this.http.delete('https://ng-course-recipe-book-af4be-default-rtdb.firebaseio.com/posts.json',
    {
      observe: 'events',
      responseType: 'json'
    }
   ).pipe(tap(event => {
     console.log(event);
     if(event.type === HttpEventType.Response){
        console.log(event.body);

     }

   }))
  }
}
