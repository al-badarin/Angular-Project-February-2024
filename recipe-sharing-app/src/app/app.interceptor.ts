import { Injectable, Provider } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HTTP_INTERCEPTORS,
} from '@angular/common/http';
import { Observable, catchError, throwError } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Router } from '@angular/router';

const { apiUrl } = environment;

@Injectable()
export class AppInterceptor implements HttpInterceptor {
  constructor(private router: Router) {}

  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    if (request.url.startsWith('/api')) {
      request = request.clone({
        url: request.url.replace('/api', apiUrl),
        withCredentials: true, // Cookie -> JWT
      });
    }

    return next.handle(request).pipe(
      catchError((error) => {
        console.error('HTTP Error:', error);

        if (error.status === 401) {
          this.router.navigate(['/error-404']);
        } else {
          return throwError(error);
        }

        return [error];
      })
    );
  }
}

export const appInterceptorProvider: Provider = {
  multi: true,
  useClass: AppInterceptor,
  provide: HTTP_INTERCEPTORS,
};
