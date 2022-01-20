import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpEvent, HttpHandler, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable()

export class AuthInterceptorService implements  HttpInterceptor {
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    console.log('Request is on its way');
    console.log(req.url);

    const modifiedRequest = req.clone({headers: req.headers.append('Auth', 'xyz')});
    //modifying a request
    return next.handle(modifiedRequest);
  }
}
