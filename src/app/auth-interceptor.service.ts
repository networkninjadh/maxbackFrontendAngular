import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from "@angular/common/http";
import {Observable} from "rxjs";

export class AuthInterceptorService implements HttpInterceptor {

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    const bearerToken: string = localStorage.getItem('bearer_token');

    if (bearerToken) {
      const cloned = req.clone({
        headers: req.headers.set('Authorization', `Bearer ${bearerToken}`)
      });
      return next.handle(cloned)
    } else {
      return next.handle(req)
    }
  }
}
