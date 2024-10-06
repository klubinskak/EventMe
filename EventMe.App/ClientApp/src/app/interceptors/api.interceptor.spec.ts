import { TestBed } from '@angular/core/testing';
import { HttpRequest, HttpHandler, HttpEvent, HttpResponse } from '@angular/common/http';
import { of } from 'rxjs';
import { ApiInterceptor } from './api.interceptor';
import { MessageService } from 'primeng/api';

describe('ApiInterceptor', () => {
  let interceptor: ApiInterceptor;
  let messageServiceSpy: jasmine.SpyObj<MessageService>;

  beforeEach(() => {
    // Create a mock for the MessageService
    const spy = jasmine.createSpyObj('MessageService', ['add']);

    TestBed.configureTestingModule({
      providers: [
        ApiInterceptor,
        { provide: MessageService, useValue: spy },
      ]
    });

    interceptor = TestBed.inject(ApiInterceptor);
    messageServiceSpy = TestBed.inject(MessageService) as jasmine.SpyObj<MessageService>;
  });

  it('should be created', () => {
    expect(interceptor).toBeTruthy();
  });

  it('should intercept and show a success message', () => {
    const httpRequest = new HttpRequest('GET', 'https://localhost:44303/api/event/getEvents');
    const httpHandler = {
      handle: () => of(new HttpResponse({
        status: 200,
        body: {
          success: true,
          message: 'Events retrieved successfully.',
          data: [
            { eventId: 1, eventName: 'Tech Conference', eventDate: '2024-10-06T21:02:59.707' }
          ]
        }
      }))
    } as HttpHandler;

    interceptor.intercept(httpRequest, httpHandler).subscribe((event: HttpEvent<any>) => {
      if (event instanceof HttpResponse) {
        expect(event.body).toEqual([
          { eventId: 1, eventName: 'Tech Conference', eventDate: '2024-10-06T21:02:59.707' }
        ]);
      }
    });

    // Expect a success message to be shown
    expect(messageServiceSpy.add).toHaveBeenCalledWith({
      severity: 'success',
      summary: 'Success',
      detail: 'Events retrieved successfully.',
    });
  });

  it('should intercept and show an error message when success is false', () => {
    const httpRequest = new HttpRequest('GET', 'https://localhost:44303/api/event/getEvents');
    const httpHandler = {
      handle: () => of(new HttpResponse({
        status: 200,
        body: {
          success: false,
          message: 'Failed to retrieve events',
          data: null
        }
      }))
    } as HttpHandler;

    interceptor.intercept(httpRequest, httpHandler).subscribe();

    // Expect an error message to be shown
    expect(messageServiceSpy.add).toHaveBeenCalledWith({
      severity: 'error',
      summary: 'Error',
      detail: 'Failed to retrieve events',
    });
  });
});
