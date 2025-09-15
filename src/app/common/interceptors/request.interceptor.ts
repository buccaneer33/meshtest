import { HttpEvent, HttpHandlerFn, HttpRequest } from "@angular/common/http";
import { Observable } from "rxjs";

export function requestInterceptor(req: HttpRequest<unknown>, next: HttpHandlerFn): Observable<HttpEvent<unknown>> {
  switch (req.method) {
    case 'PUT':
      console.log('add new: :', req.body)
      break;
    case 'POST':
      console.log('edit: :', req.body)
      break;
    case 'DELETE':
      console.log('delete: :', req.body)
      break;
    default:
      break;
  }

  return next(req);
}
