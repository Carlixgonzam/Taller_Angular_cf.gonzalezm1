import { Injectable } from '@angular/core';
import {
  HttpErrorResponse,
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest
} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { ToastrService } from 'ngx-toastr';

@Injectable()
export class HttpErrorInterceptorService implements HttpInterceptor {
  constructor(private toastrService: ToastrService) {}

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(req).pipe(
      catchError((err: HttpErrorResponse) => {
        let errorMessage = '';

        if (err.error instanceof ErrorEvent) {
          errorMessage = err.error.message ?? 'Client side error';
          this.toastrService.error(errorMessage, 'Client side error', { closeButton: true });
        } else {
          const title = 'Server side error';
          if (err.status === 0) {
            errorMessage = 'No hay conexión con el servidor';
          } else {
            const detail =
              (typeof err.error === 'string' && err.error) ||
              err.error?.error ||
              err.error?.message ||
              err.statusText ||
              'Error desconocido';
            errorMessage = `${err.status}: ${detail}`;
          }
          this.toastrService.error(errorMessage, title, { closeButton: true });
        }

        return throwError(() => new Error(errorMessage));
      })
    );
  }
}