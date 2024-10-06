import { Injectable } from '@angular/core';
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest, HttpResponse } from '@angular/common/http';
import { Observable, tap } from 'rxjs';
import { MessageService } from 'primeng/api'; // Make sure to import PrimeNG MessageService

@Injectable()
export class ApiInterceptor implements HttpInterceptor {

  constructor(private messageService: MessageService) { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(req).pipe(
      tap((event: HttpEvent<any>) => {
        // Check if the response is of type HttpResponse
        if (event instanceof HttpResponse) {
          // Assuming the structure of your API response
          const body = event.body;

          if (body.success) {
            // Show the success message using PrimeNG toast
            this.messageService.add({
              severity: 'success',
              summary: 'Success',
              detail: body.message,
            });
          } else {
            // Handle the case when success is false
            this.messageService.add({
              severity: 'error',
              summary: 'Error',
              detail: body.message || 'An error occurred',
            });
          }

          // Modify the response to return only the data
          event = event.clone({ body: body.data });
        }
      })
    );
  }
}
